// User Registration Utility Functions
// This file handles real user registration data for the admin dashboard

// Function to register a new user
export const registerUser = (userData) => {
  try {
    const users = getRegisteredUsers();
    
    // Create new user object
    const newUser = {
      id: Date.now().toString(),
      name: userData.name || 'Anonymous User',
      email: userData.email || '',
      phone: userData.phone || '',
      registrationDate: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }),
      status: 'Active',
      source: userData.source || 'Website Registration',
      additionalInfo: userData.additionalInfo || {}
    };
    
    // Check if user already exists (by email)
    if (userData.email) {
      const existingUser = users.find(user => user.email === userData.email);
      if (existingUser) {
        return { success: false, message: 'User with this email already exists' };
      }
    }
    
    // Add user to the beginning of the array
    users.unshift(newUser);
    
    // Store in localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    return { success: true, user: newUser };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'Failed to register user' };
  }
};

// Function to get all registered users
export const getRegisteredUsers = () => {
  try {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting registered users:', error);
    return [];
  }
};

// Function to get total users count
export const getTotalUsersCount = () => {
  const users = getRegisteredUsers();
  return users.length;
};

// Function to delete a user
export const deleteUser = (userId) => {
  try {
    const users = getRegisteredUsers();
    const updatedUsers = users.filter(user => user.id !== userId);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    return { success: true };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, message: 'Failed to delete user' };
  }
};

// Function to update user status
export const updateUserStatus = (userId, status) => {
  try {
    const users = getRegisteredUsers();
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, status } : user
    );
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    return { success: true };
  } catch (error) {
    console.error('Error updating user status:', error);
    return { success: false, message: 'Failed to update user status' };
  }
};

// Function to get user statistics
export const getUserStatistics = () => {
  const users = getRegisteredUsers();
  
  const stats = {
    total: users.length,
    active: users.filter(user => user.status === 'Active').length,
    thisMonth: users.filter(user => {
      const userDate = new Date(user.registrationDate);
      const now = new Date();
      return userDate.getMonth() === now.getMonth() && 
             userDate.getFullYear() === now.getFullYear();
    }).length
  };
  
  return stats;
};

// Function to simulate user registration (for testing)
export const simulateUserRegistration = () => {
  const testUsers = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1-555-0101',
      plan: 'Premium',
      source: 'Contact Form'
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1-555-0102',
      plan: 'Basic',
      source: 'Services Page'
    },
    {
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+1-555-0103',
      plan: 'Premium',
      source: 'Blog Signup'
    },
    {
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+1-555-0104',
      plan: 'Basic',
      source: 'Homepage'
    },
    {
      name: 'Alex Brown',
      email: 'alex.brown@example.com',
      phone: '+1-555-0105',
      plan: 'Premium',
      source: 'Social Media'
    }
  ];
  
  const randomUser = testUsers[Math.floor(Math.random() * testUsers.length)];
  return registerUser(randomUser);
}; 