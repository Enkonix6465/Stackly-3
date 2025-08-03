import React, { useState, useEffect } from "react";
import background from './assets/background.jpg'; 
import { useNavigate } from "react-router-dom";
import { registerUser } from './utils/userRegistration.js';

// Hardcoded admin credentials
const ADMIN = {
  email: "admin@enkonix.in",
  password: "admin123",
  firstName: "Admin",
  lastName: "User"
};

export default function Welcome() {
  // Set a default user for testing if not already set
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      localStorage.setItem("currentUser", JSON.stringify({ firstName: "John", lastName: "Doe" }));
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Store signup details in localStorage and register user for admin dashboard
  function handleSignup(e) {
    e.preventDefault();
    
    // Store in existing users array for login functionality
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ firstName, lastName, email, password, loginDate: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(users));
    
    // Register user for admin dashboard
    const registrationResult = registerUser({
      name: `${firstName} ${lastName}`,
      email: email,
      phone: phone || '', // Include phone number if provided
      source: 'Welcome Page Registration',
      additionalInfo: {
        firstName: firstName,
        lastName: lastName,
        hasPassword: true
      }
    });
    
    if (registrationResult.success) {
      // Dispatch event to notify admin dashboard
      window.dispatchEvent(new CustomEvent('userRegistrationUpdated'));
      setShowSignup(false);
      setShowThanks(true);
    } else {
      // Handle registration error
      alert(registrationResult.message || 'Registration failed. Please try again.');
    }
  }

  // Handle login
  function handleLogin(e) {
    e.preventDefault();
    // Check admin
    if (email === ADMIN.email && password === ADMIN.password) {
      localStorage.setItem("currentUser", JSON.stringify(ADMIN));
      navigate("/admin-dashboard");
      return;
    }
    // Check users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home1");
      return;
    }
    setLoginError("Invalid credentials");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={`w-full max-w-md mx-auto rounded-xl p-10 shadow-2xl relative ${theme === "dark" ? "bg-black" : "bg-white/10 backdrop-blur"}`}>
        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`absolute top-4 right-4 w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center
            ${theme === "dark" 
              ? "border-cyan-400 bg-gray-800 text-cyan-400 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50" 
              : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"}`}
        >
          {theme === "light" ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
        {showSignup ? (
          <>
            <h2 className={`text-3xl font-bold mb-2 text-center ${theme === "dark" ? "text-white" : "text-white"}`}>Sign Up</h2>
            <p className={`mb-8 text-center ${theme === "dark" ? "text-gray-300" : "text-gray-200"}`}>Create your account.</p>
            <form className="space-y-5" onSubmit={handleSignup}>
              {/* First Name */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"}`}>First Name</label>
                <input
                  type="text"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-white border-white/30"}`}
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"}`}>Last Name</label>
                <input
                  type="text"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-white border-white/30"}`}
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"}`}>E-mail</label>
                <input
                  type="email"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-white border-white/30"}`}
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"}`}>Phone Number</label>
                <input
                  type="tel"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-white border-white/30"}`}
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              {/* Password */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"}`}>Password</label>
                <input
                  type="password"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-white border-white/30"}`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* Signup button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-lg transition ${theme === "dark" ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-black text-white hover:bg-gray-900"}`}
              >
                Sign up
              </button>
            </form>
            <p className={`text-center text-sm mt-8 ${theme === "dark" ? "text-gray-300" : "text-white/80"}`}>
              Already have an account?{" "}
              <a href="#" className="text-green-400 font-medium hover:underline" onClick={e => { e.preventDefault(); setShowSignup(false); }}>
                Log in
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className={`text-3xl font-bold mb-2 text-center ${theme === "dark" ? "text-white" : "text-white"}`}>Welcome back</h2>
            <p className={`mb-8 text-center ${theme === "dark" ? "text-gray-300" : "text-gray-200"}`}>Please enter your details.</p>
            <form className="space-y-5" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"}`}>E-mail</label>
                <input
                  type="email"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-white border-white/30"}`}
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"}`}>Password</label>
                <input
                  type="password"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-white border-white/30"}`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* Login button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-lg transition ${theme === "dark" ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-black text-white hover:bg-gray-900"}`}
              >
                Log in
              </button>
            </form>
            {loginError && <p className="text-red-400 text-center mt-2">{loginError}</p>}
            <p className={`text-center text-sm mt-8 ${theme === "dark" ? "text-gray-300" : "text-white/80"}`}>
              Don't have an account?{" "}
              <a href="#" className="text-green-400 font-medium hover:underline" onClick={e => { e.preventDefault(); setShowSignup(true); }}>
                Register here
              </a>
            </p>
          </>
        )}
        {showThanks && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Thanks for registering!</h3>
              <button
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                onClick={() => setShowThanks(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

