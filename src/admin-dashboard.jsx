import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, LabelList } from 'recharts';
import mapImg from './assets/world.png';
import Header from './Header.jsx';
import { 
  getRegisteredUsers, 
  getTotalUsersCount, 
  registerUser, 
  deleteUser, 
  getUserStatistics,
  simulateUserRegistration 
} from './utils/userRegistration.js';

// Section1 (KPI Cards Example)
function Section1() {
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState({});
  const [showRecent, setShowRecent] = useState(false);

  // Load users and stats on component mount and when data changes
  useEffect(() => {
    const loadData = () => {
      const currentUsers = getRegisteredUsers();
      const stats = getUserStatistics();
      setUsers(currentUsers);
      setUserStats(stats);
    };

    loadData();

    // Listen for storage changes to update in real-time
    const handleStorageChange = () => {
      loadData();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events
    window.addEventListener('userRegistrationUpdated', loadData);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userRegistrationUpdated', loadData);
    };
  }, []);

  // Function to add a test user
  const addTestUser = () => {
    const result = simulateUserRegistration();
    if (result.success) {
      // Force re-render
      const currentUsers = getRegisteredUsers();
      const stats = getUserStatistics();
      setUsers(currentUsers);
      setUserStats(stats);
      
      // Close and reopen modal to refresh data
      setShowRecent(false);
      setTimeout(() => setShowRecent(true), 100);
    } else {
      alert(result.message || 'Failed to add user');
    }
  };

  // Function to delete a user
  const handleDeleteUser = (userId) => {
    const result = deleteUser(userId);
    if (result.success) {
      // Force re-render
      const currentUsers = getRegisteredUsers();
      const stats = getUserStatistics();
      setUsers(currentUsers);
      setUserStats(stats);
    } else {
      alert(result.message || 'Failed to delete user');
    }
  };

  // Get real-time data
  const totalUsers = userStats.total || 0;

  const kpis = [
    { label: 'Total Users', value: totalUsers.toString(), color: '#ffe5d0' },
    { label: 'Active Users', value: (userStats.active || 0).toString(), color: '#d0f4ff' },
    { label: 'This Month', value: (userStats.thisMonth || 0).toString(), color: '#fff9d0' },
    { label: 'Growth Rate', value: totalUsers > 0 ? '+12.5%' : '0%', color: '#f0e0ff' },
  ];
  const cardStyle = (color, clickable) => ({
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    padding: '22px 18px',
    minWidth: 170,
    minHeight: 110,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden',
    cursor: clickable ? 'pointer' : 'default',
    border: clickable ? '2px solid #2ec4b6' : 'none',
    transition: 'box-shadow 0.2s, background 0.3s',
  });
  function RegisteredUsersModal({ open, onClose }) {
    if (!open) return null;
    
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,40,60,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }} onClick={onClose}>
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.13)', padding: '40px 32px', minWidth: 340, maxWidth: 520, width: '90%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
          <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 22, color: '#8ca1a6', cursor: 'pointer' }}>&times;</button>
          <div style={{ fontWeight: 700, color: '#111', fontSize: 22, marginBottom: 18, textAlign: 'center' }}>Registered Users ({users.length})</div>
          <div style={{ marginBottom: 16, textAlign: 'center' }}>
            <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>
              Real user registrations from the welcome page
            </p>
          </div>
          {users.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#8ca1a6', fontSize: 16, padding: '20px' }}>
              No users registered yet. Users will appear here when they sign up on the welcome page.
            </div>
          ) : (
            <div style={{ maxHeight: '400px', overflowY: 'auto', width: '100%' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f6f8fa', borderRadius: 10, overflow: 'hidden', fontSize: 14, color: '#111' }}>
                <thead>
                  <tr style={{ background: '#e0f7f4', color: '#111', fontWeight: 700 }}>
                    <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Email</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Phone</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Source</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Registration Date & Time</th>
                    <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr key={user.id} style={{ background: i % 2 === 0 ? '#fff' : '#f6f8fa', color: '#111' }}>
                      <td style={{ padding: 12 }}>{user.name}</td>
                      <td style={{ padding: 12 }}>{user.email}</td>
                      <td style={{ padding: 12 }}>{user.phone || 'N/A'}</td>
                      <td style={{ padding: 12 }}>
                        <span style={{
                          background: '#f0f0f0',
                          color: '#666',
                          padding: '2px 6px',
                          borderRadius: '3px',
                          fontSize: '11px'
                        }}>
                          {user.source || 'Website'}
                        </span>
                      </td>
                      <td style={{ padding: 12 }}>{user.registrationDate}</td>
                      <td style={{ padding: 12, textAlign: 'center' }}>
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
                              handleDeleteUser(user.id);
                            }
                          }}
                          style={{
                            background: '#ff4757',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            fontWeight: '600'
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .kpi-card:hover {
        background: linear-gradient(90deg, #20c997 0%, #2ec4b6 100%) !important;
        box-shadow: 0 4px 24px rgba(46,196,182,0.18);
      }
      .kpi-card:hover span {
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  return (
    <>
      <h1 style={{ color: '#000', fontSize: 48, fontWeight: 800, margin: '32px 0 24px 0', textAlign: 'center', letterSpacing: '-1px' }}>
         Health & Wellness Dashboard
      </h1>
      <section style={{ background: 'transparent', borderRadius: 12, marginBottom: 32, padding: 0 }}>
        <div
          className="kpi-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            width: '100%',
            margin: 0,
          }}
        >
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="kpi-card"
              style={cardStyle(kpi.color, kpi.label === 'Total Users')}
              onClick={kpi.label === 'Total Users' ? () => setShowRecent(true) : undefined}
            >
              <span style={{ fontSize: 20, color: '#2e5d50', fontWeight: 700 }}>{kpi.label}</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#1a3c34', marginBottom: 2 }}>{kpi.value}</span>
            </div>
          ))}
        </div>
      </section>
      <RegisteredUsersModal open={showRecent} onClose={() => setShowRecent(false)} />
    </>
  );
}

// Section2 (Appointments Chart)
function Section2() {
  const filters = ['Today', 'This Week', 'This Month', 'Year Overview'];
  const chartData = {
    'Today': [
      { hour: '8am', value: 2 },
      { hour: '10am', value: 5 },
      { hour: '12pm', value: 8 },
      { hour: '2pm', value: 10 },
      { hour: '4pm', value: 7 },
      { hour: '6pm', value: 7 },
    ],
    'This Week': [
      { day: 'Mon', value: 12 },
      { day: 'Tue', value: 9 },
      { day: 'Wed', value: 15 },
      { day: 'Thu', value: 8 },
      { day: 'Fri', value: 13 },
      { day: 'Sat', value: 10 },
      { day: 'Sun', value: 11 },
    ],
    'This Month': [
      { date: '1', value: 5 },
      { date: '5', value: 8 },
      { date: '10', value: 12 },
      { date: '15', value: 10 },
      { date: '20', value: 15 },
      { date: '25', value: 9 },
      { date: '30', value: 13 },
    ],
    'Year Overview': [
      { month: 'Jan', value: 20 },
      { month: 'Feb', value: 20 },
      { month: 'Mar', value: 45 },
      { month: 'Apr', value: 30 },
      { month: 'May', value: 65 },
      { month: 'Jun', value: 30 },
      { month: 'Jul', value: 75 },
      { month: 'Aug', value: 50 },
      { month: 'Sep', value: 70 },
      { month: 'Oct', value: 40 },
      { month: 'Nov', value: 30 },
      { month: 'Dec', value: 50 },
    ],
  };
  const counts = {
    'Today': 39,
    'This Week': 87,
    'This Month': 320,
    'Year Overview': 1200,
  };
  const xKey = {
    'Today': 'hour',
    'This Week': 'day',
    'This Month': 'date',
    'Year Overview': 'month',
  };
  const [selected, setSelected] = useState('Year Overview');
  const data = chartData[selected];
  const count = counts[selected];
  const xDataKey = xKey[selected];
  const maxValue = Math.max(...data.map(d => d.value));
  const yMax = maxValue <= 10 ? Math.ceil(maxValue / 5) * 5 : Math.ceil(maxValue / 10) * 10;
  return (
    <section style={{ background: 'transparent', borderRadius: 12, marginBottom: 32, padding: 0 }}>
      <style>{`
        @media (max-width: 900px) {
          .section2-chart-outer { padding: 0 2px !important; }
        }
        @media (max-width: 600px) {
          .section2-chart-outer { overflow-x: auto !important; padding: 0 !important; }
          .section2-chart-inner { min-width: 420px !important; width: 420px !important; }
          .section2-filters { flex-wrap: wrap !important; gap: 6px !important; }
        }
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18 }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1a3c34', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span role="img" aria-label="calendar">🗓</span> Total Appointments {selected === 'Today' ? 'Today' : selected === 'This Week' ? 'This Week' : selected === 'This Month' ? 'This Month' : 'This Year'}: <span style={{ color: '#2ec4b6', fontSize: 26, fontWeight: 800 }}>{count}</span>
          </div>
          <div className="section2-filters" style={{ display: 'flex', gap: 8 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelected(f)}
                style={{
                  background: selected === f ? '#2ec4b6' : '#f6f8fa',
                  color: selected === f ? '#fff' : '#1a3c34',
                  border: selected === f ? '2px solid #1a3c34' : 'none',
                  borderRadius: 20,
                  padding: '6px 18px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: 17,
                  transition: 'background 0.2s',
                  boxShadow: selected === f ? '0 2px 8px rgba(46,196,182,0.10)' : 'none',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="section2-chart-outer" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '24px 20px', minHeight: 220, overflowX: 'auto' }}>
          <div style={{ fontWeight: 700, color: '#1a3c34', fontSize: 18, marginBottom: 8 }}>{selected === 'Year Overview' ? 'Year Overview' : selected}</div>
          <div className="section2-chart-inner" style={{ width: '100%', height: 180, minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2ec4b6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2ec4b6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey={xDataKey} tick={{ fontSize: 13, fill: '#1a3c34' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 13, fill: '#b0b0b0' }} axisLine={false} tickLine={false} domain={[0, yMax]} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <Tooltip
                  content={({ active, payload }) =>
                    active && payload && payload.length ? (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        background: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        borderRadius: 12,
                        border: 'none',
                        padding: '10px 18px',
                        fontWeight: 700
                      }}>
                        {payload.map((entry, i) => (
                          <span key={i} style={{ color: entry.color || '#1a3c34', fontWeight: 700, fontSize: 18 }}>{entry.value}</span>
                        ))}
                      </div>
                    ) : null
                  }
                />
                <Area type="monotone" dataKey="value" stroke="#2ec4b6" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section3 (Patient Overview & Revenue)
function Section3() {
  const patientDataSets = {
    'Last 8 Days': [
      { date: '4 Jul', Child: 60, Adult: 80, Elderly: 40 },
      { date: '5 Jul', Child: 90, Adult: 120, Elderly: 70 },
      { date: '6 Jul', Child: 80, Adult: 100, Elderly: 60 },
      { date: '7 Jul', Child: 105, Adult: 132, Elderly: 38 },
      { date: '8 Jul', Child: 70, Adult: 90, Elderly: 50 },
      { date: '9 Jul', Child: 60, Adult: 80, Elderly: 40 },
      { date: '10 Jul', Child: 120, Adult: 140, Elderly: 60 },
      { date: '11 Jul', Child: 100, Adult: 130, Elderly: 80 },
    ],
    'This Month': [
      { date: 'Week 1', Child: 200, Adult: 300, Elderly: 120 },
      { date: 'Week 2', Child: 250, Adult: 320, Elderly: 140 },
      { date: 'Week 3', Child: 220, Adult: 310, Elderly: 130 },
      { date: 'Week 4', Child: 270, Adult: 350, Elderly: 150 },
    ],
    'This Year': [
      { date: 'Jan', Child: 600, Adult: 800, Elderly: 400 },
      { date: 'Feb', Child: 700, Adult: 900, Elderly: 450 },
      { date: 'Mar', Child: 800, Adult: 950, Elderly: 500 },
      { date: 'Apr', Child: 900, Adult: 1000, Elderly: 550 },
      { date: 'May', Child: 950, Adult: 1100, Elderly: 600 },
      { date: 'Jun', Child: 1000, Adult: 1200, Elderly: 650 },
      { date: 'Jul', Child: 1100, Adult: 1300, Elderly: 700 },
      { date: 'Aug', Child: 1200, Adult: 1400, Elderly: 750 },
      { date: 'Sep', Child: 1300, Adult: 1500, Elderly: 800 },
      { date: 'Oct', Child: 1400, Adult: 1600, Elderly: 850 },
      { date: 'Nov', Child: 1500, Adult: 1700, Elderly: 900 },
      { date: 'Dec', Child: 1600, Adult: 1800, Elderly: 950 },
    ],
  };
  const revenueDataSets = {
    Week: [
      { day: 'Sun', Income: 800, Expense: 600 },
      { day: 'Mon', Income: 900, Expense: 650 },
      { day: 'Tue', Income: 1200, Expense: 700 },
      { day: 'Wed', Income: 1495, Expense: 750 },
      { day: 'Thu', Income: 1100, Expense: 800 },
      { day: 'Fri', Income: 1300, Expense: 900 },
      { day: 'Sat', Income: 1200, Expense: 950 },
    ],
    Month: [
      { day: 'W1', Income: 4000, Expense: 3000 },
      { day: 'W2', Income: 4200, Expense: 3200 },
      { day: 'W3', Income: 4500, Expense: 3400 },
      { day: 'W4', Income: 4700, Expense: 3600 },
    ],
    Year: [
      { day: 'Jan', Income: 12000, Expense: 9000 },
      { day: 'Feb', Income: 13000, Expense: 9500 },
      { day: 'Mar', Income: 14000, Expense: 10000 },
      { day: 'Apr', Income: 15000, Expense: 11000 },
      { day: 'May', Income: 16000, Expense: 12000 },
      { day: 'Jun', Income: 17000, Expense: 13000 },
      { day: 'Jul', Income: 18000, Expense: 14000 },
      { day: 'Aug', Income: 19000, Expense: 15000 },
      { day: 'Sep', Income: 20000, Expense: 16000 },
      { day: 'Oct', Income: 21000, Expense: 17000 },
      { day: 'Nov', Income: 22000, Expense: 18000 },
      { day: 'Dec', Income: 23000, Expense: 19000 },
    ],
  };
  const [patientFilter, setPatientFilter] = useState('Last 8 Days');
  const [revenueTab, setRevenueTab] = useState('Week');
  const patientData = patientDataSets[patientFilter];
  const revenueData = revenueDataSets[revenueTab];
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum, entry) => sum + entry.value, 0);
      return (
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 16, fontWeight: 700, color: '#1a3c34', fontSize: 18 }}>
          <span style={{ fontWeight: 700, fontSize: 22 }}>{total}</span>
        </div>
      );
    }
    return null;
  };
  const [hoveredBar, setHoveredBar] = useState(null);
  
  const renderHoverLabel = (barKey) => (props) => {
    const { x, y, value, payload } = props;
    
    // Add null checks to prevent the error
    if (!payload || !payload.date) return null;
    
    const isHovered = hoveredBar === `${barKey}-${payload.date}`;
    
    if (!isHovered) return null;
    
    let color = '#1a3c34';
    if (barKey === 'Adult') color = '#2ec4b6';
    if (barKey === 'Elderly') color = '#b2f7ef';
    return (
      <text
        x={x + 14}
        y={y - 8}
        textAnchor="middle"
        fontWeight={800}
        fontSize={22}
        fill={color}
      >
        {value}
      </text>
    );
  };
  return (
    <section style={{ background: 'transparent', borderRadius: 12, marginBottom: 32, padding: 0 }}>
      <div className="section-container" style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Patient Overview Card */}
        <div style={{ flex: 1, minWidth: 340, maxWidth: 540, background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '32px 28px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
            <div>
              <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 24, margin: 0 }}>Patient Overview</h2>
              <div style={{ color: '#8ca1a6', fontSize: 14, fontWeight: 500 }}>by Age Stages</div>
            </div>
            <select value={patientFilter} onChange={e => setPatientFilter(e.target.value)} style={{ background: '#1a3c34', color: '#fff', border: 'none', borderRadius: 10, padding: '8px 20px', fontWeight: 600, fontSize: 15, outline: 'none', cursor: 'pointer', minWidth: 120 }}>
              <option>Last 8 Days</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={patientData} barSize={28}>
              <XAxis dataKey="date" tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <Tooltip content={CustomTooltip} />
              <Bar 
                dataKey="Child" 
                fill="#1a3c34" 
                radius={[8,8,0,0]}
                onMouseEnter={(data, index) => setHoveredBar(`Child-${data.date}`)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <LabelList dataKey="Child" content={renderHoverLabel('Child')} />
              </Bar>
              <Bar 
                dataKey="Adult" 
                fill="#2ec4b6" 
                radius={[8,8,0,0]}
                onMouseEnter={(data, index) => setHoveredBar(`Adult-${data.date}`)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <LabelList dataKey="Adult" content={renderHoverLabel('Adult')} />
              </Bar>
              <Bar 
                dataKey="Elderly" 
                fill="#b2f7ef" 
                radius={[8,8,0,0]}
                onMouseEnter={(data, index) => setHoveredBar(`Elderly-${data.date}`)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <LabelList dataKey="Elderly" content={renderHoverLabel('Elderly')} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Revenue Card */}
        <div style={{ flex: 1, minWidth: 340, maxWidth: 480, background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '32px 28px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
            <div>
              <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 24, margin: 0 }}>Revenue</h2>
            </div>
            <div className="button-group" style={{ display: 'flex', gap: 10 }}>
              {['Week', 'Month', 'Year'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setRevenueTab(tab)}
                  style={{
                    background: revenueTab === tab ? '#1a3c34' : '#f6f8fa',
                    color: revenueTab === tab ? '#fff' : '#1a3c34',
                    border: 'none',
                    borderRadius: 10,
                    padding: '8px 20px',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                    minWidth: 70,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <Tooltip
                content={({ active, payload, label }) =>
                  active && payload && payload.length ? (
                    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 16, fontWeight: 700, color: '#1a3c34', fontSize: 18 }}>
                      <div style={{ color: '#1a3c34' }}>Income: <span style={{ fontWeight: 700, fontSize: 22 }}>{payload[0].value}</span></div>
                      <div style={{ color: '#2ec4b6' }}>Expense: <span style={{ fontWeight: 700, fontSize: 22 }}>{payload[1].value}</span></div>
                    </div>
                  ) : null
                }
              />
              <Line type="monotone" dataKey="Income" stroke="#1a3c34" strokeWidth={3} dot={{ fill: '#1a3c34', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="Expense" stroke="#2ec4b6" strokeWidth={3} dot={{ fill: '#2ec4b6', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

// Section5 (Trainers, Recent Activity, Social Source)
function Section5() {
  const messages = [
    { name: 'Dr. Meera Rao', avatar: 'M', message: 'Your blood test results are ready.', time: 'Just Now', color: '#2ec4b6' },
    { name: 'Coach Arjun', avatar: 'A', message: 'Great job on your workout today!', time: '5 min ago', color: '#1a3c34' },
    { name: 'Nutritionist Priya', avatar: 'P', message: 'Remember to log your meals.', time: '30 min ago', color: '#ffb4a2' },
    { name: 'Dr. Suresh', avatar: 'S', message: 'Your appointment is confirmed.', time: '1 hr ago', color: '#b2f7ef' },
    { name: 'Wellness Bot', avatar: '🤖', message: 'Time for your daily meditation.', time: '2 hr ago', color: '#8ca1a6' },
  ];
  const activity = [
    { date: 'JUN 12', text: 'Completed Yoga Session', time: '09:00 AM' },
    { date: 'JUN 11', text: 'Logged Water Intake', time: '10:30 AM' },
    { date: 'JUN 10', text: 'Reached Step Goal', time: '12:00 PM' },
    { date: 'JUN 09', text: 'Completed Cardio Workout', time: '06:30 PM' },
    { date: 'JUN 08', text: 'Logged Sleep Hours', time: '07:00 AM' },
  ];
  const socialStats = [
    {
      name: 'Facebook',
      value: 125,
      label: 'Community Shares',
      color: '#3b5998',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#3b5998"/>
          <path d="M21 16.5H17.5V25H14.5V16.5H13V14H14.5V12.75C14.5 11.2312 15.4812 10 17.25 10H21V12.5H18.5C18.2239 12.5 18 12.7239 18 13V14H21L20.5 16.5Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      value: 112,
      label: 'Wellness Tweets',
      color: '#1da1f2',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#1da1f2"/>
          <path d="M25 12.036c-.657.292-1.363.49-2.104.578a3.68 3.68 0 0 0 1.617-2.03 7.36 7.36 0 0 1-2.332.892A3.676 3.676 0 0 0 16 14.5c0 .288.032.568.094.836-3.055-.153-5.765-1.617-7.582-3.84a3.67 3.67 0 0 0-.497 1.85c0 1.277.65 2.404 1.64 3.065a3.66 3.66 0 0 1-1.664-.46v.047c0 1.785 1.27 3.274 2.956 3.613-.309.084-.634.13-.97.13-.237 0-.465-.023-.688-.065.466 1.453 1.818 2.51 3.422 2.537A7.37 7.37 0 0 1 7 23.07a10.37 10.37 0 0 0 5.617 1.646c6.74 0 10.436-5.587 10.436-10.436 0-.159-.004-.317-.011-.474A7.47 7.47 0 0 0 25 12.036z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      value: 104,
      label: 'Health Posts',
      color: '#e1306c',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#e1306c"/>
          <path d="M16 12.5A3.5 3.5 0 1 0 16 19.5a3.5 3.5 0 0 0 0-7zm7.5-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM16 10c2.206 0 2.472.008 3.338.048.865.04 1.453.176 1.797.295.36.124.617.273.89.546.273.273.422.53.546.89.119.344.255.932.295 1.797.04.866.048 1.132.048 3.338s-.008 2.472-.048 3.338c-.04.865-.176 1.453-.295 1.797a2.36 2.36 0 0 1-.546.89 2.36 2.36 0 0 1-.89.546c-.344.119-.932.255-1.797.295-.866.04-1.132.048-3.338.048s-2.472-.008-3.338-.048c-.865-.04-1.453-.176-1.797-.295a2.36 2.36 0 0 1-.89-.546 2.36 2.36 0 0 1-.546-.89c-.119-.344-.255-.932-.295-1.797C10.008 18.472 10 18.206 10 16s.008-2.472.048-3.338c.04-.865.176-1.453.295-1.797a2.36 2.36 0 0 1 .546-.89 2.36 2.36 0 0 1 .89-.546c.344-.119.932-.255 1.797-.295C13.528 10.008 13.794 10 16 10zm0-2c-2.233 0-2.507.008-3.384.049-.877.041-1.477.177-2.002.377a4.36 4.36 0 0 0-1.591 1.04 4.36 4.36 0 0 0-1.04 1.591c-.2.525-.336 1.125-.377 2.002C10.008 13.493 10 13.767 10 16c0 2.233.008 2.507.049 3.384.041.877.177 1.477.377 2.002.24.63.563 1.17 1.04 1.591.421.477.961.8 1.591 1.04.525.2 1.125.336 2.002.377.877.041 1.151.049 3.384.049s2.507-.008 3.384-.049c.877-.041 1.477-.177 2.002-.377a4.36 4.36 0 0 0 1.591-1.04 4.36 4.36 0 0 0 1.04-1.591c.2-.525.336-1.125.377-2.002.041-.877.049-1.151.049-3.384s-.008-2.507-.049-3.384c-.041-.877-.177-1.477-.377-2.002a4.36 4.36 0 0 0-1.04-1.591 4.36 4.36 0 0 0-1.591-1.04c-.525-.2-1.125-.336-2.002-.377C18.507 8.008 18.233 8 16 8z" fill="white"/>
        </svg>
      ),
    },
  ];
  const trainers = [
    { name: 'Amit Sharma', avatar: 'A', specialty: 'Yoga Instructor', status: 'Available', color: '#20c997' },
    { name: 'Priya Singh', avatar: 'P', specialty: 'Nutritionist', status: 'Busy', color: '#2563eb' },
    { name: 'Rahul Verma', avatar: 'R', specialty: 'Personal Trainer', status: 'Available', color: '#ffb4a2' },
    { name: 'Sneha Patel', avatar: 'S', specialty: 'Wellness Coach', status: 'On Leave', color: '#b2f7ef' },
    { name: 'Arjun Mehta', avatar: 'A', specialty: 'Cardio Specialist', status: 'Available', color: '#8ca1a6' },
  ];
  return (
    <section style={{ background: 'transparent', borderRadius: 12, marginBottom: 32, padding: 0 }}>
      <style>{`
        @media (max-width: 900px) {
          .section5-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
        @media (max-width: 600px) {
          .section5-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            overflow-x: unset !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .section5-col {
            min-width: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box;
            margin-bottom: 0 !important;
          }
        }
      `}</style>
      <div className="section5-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1fr', gap: 24, overflowX: 'auto' }}>
        {/* Trainers Section */}
        <div className="section5-col" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '24px 20px', minWidth: 260, marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: '#1a3c34', fontSize: 22, marginBottom: 18, letterSpacing: 1 }}>TRAINERS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {trainers.map((trainer, i) => {
              let badgeColor = '#20c997';
              if (trainer.status === 'Busy') badgeColor = '#ffb84d';
              if (trainer.status === 'On Leave') badgeColor = '#8ca1a6';
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', background: '#f6f8fa', borderRadius: 16, boxShadow: '0 1px 4px #2ec4b610', padding: '10px 16px', gap: 16, position: 'relative', minHeight: 48, height: 72, width: 320, boxSizing: 'border-box', overflow: 'hidden'
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%', background: trainer.color, color: '#fff', fontWeight: 800, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #2ec4b622', flexShrink: 0
                  }}>{trainer.avatar}</div>
                  {/* Trainer Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontWeight: 800, color: '#1a3c34', fontSize: 17, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{trainer.name}</span>
                      <span style={{ background: badgeColor, color: '#fff', borderRadius: 8, fontSize: 11, fontWeight: 700, padding: '2px 8px', marginLeft: 8, whiteSpace: 'nowrap' }}>{trainer.status}</span>
                    </div>
                    <div style={{ color: '#7b8a8b', fontSize: 15, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 180 }}>{trainer.specialty}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Recent Activity */}
        <div className="section5-col" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '24px 20px', minWidth: 100, marginBottom: 32 ,}}>
          <div style={{ fontWeight: 700, color: '#1a3c34', fontSize: 22, marginBottom: 18, letterSpacing: 1 }}>RECENT ACTIVITY</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {activity.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ marginTop: 2, width: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2ec4b6', marginBottom: 4 }}></div>
                  {i < activity.length - 1 && <div style={{ width: 2, height: 32, background: '#e0f7f4' }}></div>}
                </div>
                <div
                  style={{
                    background: '#20c997',
                    color: '#fff',
                    borderRadius: 14,
                    padding: '10px 14px',
                    fontWeight: 700,
                    fontSize: 15,
                    minWidth: 200,
                    maxWidth: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 1px 4px rgba(32,201,151,0.10)',
                    cursor: 'pointer',
                    transition: 'background 0.25s',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #20c997 0%, #2ec4b6 100%)'}
                  onMouseOut={e => e.currentTarget.style.background = '#20c997'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>{a.date}</span>
                    <span style={{ fontSize: 13, color: '#b2f7ef', fontWeight: 700 }}>{a.time}</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{a.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Social Source */}
        <div className="section5-col" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '32px 24px', minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',marginBottom:32, }}>
          <div style={{ fontWeight: 700, color: '#1a3c34', fontSize: 24, marginBottom: 24, letterSpacing: 1, textAlign: 'center' }}>SOCIAL SOURCE</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Main Facebook Icon and Info */}
            <div style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {socialStats[0].icon}
              <div style={{ fontWeight: 700, fontSize: 22, color: '#222', margin: '18px 0 8px 0', textAlign: 'center', lineHeight: 1.2 }}>Facebook - 125 community shares</div>
              <div style={{ color: '#8ca1a6', fontSize: 16, textAlign: 'center', marginBottom: 12, maxWidth: 320 }}>
                Our community is growing! Join us on Facebook for wellness tips, support, and shared success stories.
              </div>
              <a href="#" style={{ color: '#3d7bfd', fontWeight: 600, fontSize: 16, textDecoration: 'none', textAlign: 'center', display: 'block' }}>Learn more &rarr;</a>
            </div>
            {/* Row of Social Icons */}
            <div style={{ display: 'flex', gap: 32, marginTop: 18, width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
              {socialStats.map((s, i) => (
                <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                  {s.icon}
                  <div style={{ color: '#8ca1a6', fontSize: 15, marginTop: 10, textAlign: 'center', lineHeight: 1.2 }}>{s.value}<br />{s.label}</div>
                  <div style={{ fontWeight: 700, color: '#111', fontSize: 17, marginTop: 6, textAlign: 'center', width: '100%', whiteSpace: 'normal', overflow: 'hidden' }}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section6 (Map and Bar Chart)
function Section6() {
  const periods = ['Last month', 'Last 3 months', 'Last year'];
  const periodData = {
    'Last month': [
      { country: 'Germany', clients: 12000 },
      { country: 'SA', clients: 13000 },
      { country: 'Brazil', clients: 27000 },
      { country: 'UK', clients: 10000 },
      { country: 'USA', clients: 38000 },
      { country: 'Australia', clients: 7000 },
      { country: 'India', clients: 41000 },
    ],
    'Last 3 months': [
      { country: 'Germany', clients: 18000 },
      { country: 'SA', clients: 21000 },
      { country: 'Brazil', clients: 35000 },
      { country: 'UK', clients: 17000 },
      { country: 'USA', clients: 52000 },
      { country: 'Australia', clients: 12000 },
      { country: 'India', clients: 60000 },
    ],
    'Last year': [
      { country: 'Germany', clients: 42000 },
      { country: 'SA', clients: 39000 },
      { country: 'Brazil', clients: 67000 },
      { country: 'UK', clients: 32000 },
      { country: 'USA', clients: 98000 },
      { country: 'Australia', clients: 25000 },
      { country: 'India', clients: 120000 },
    ],
  };
  const [period, setPeriod] = useState(periods[0]);
  const barData = periodData[period].map(b => ({ country: b.country, clients: b.clients, label: `${Math.round(b.clients / 1000)}K` }));
  const BAR_COLOR = '#1b7873';
  return (
    <section style={{ marginBottom: 32 }}>
      <style>{`
        @media (max-width: 900px) {
          .section6-flex {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .section6-map, .section6-chart {
            min-width: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            height: 200px !important;
          }
        }
        @media (max-width: 600px) {
          .section6-flex {
            flex-direction: column !important;
            gap: 18px !important;
          }
          .section6-map, .section6-chart {
            min-width: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            height: 140px !important;
          }
        }
      `}</style>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        padding: '24px 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <div>
            <h2 style={{
              fontWeight: 700,
              color: '#1a3c34',
              fontSize: 18,
              margin: 0
            }}>Most clients</h2>
            <p style={{
              color: '#7b8a8b',
              fontSize: 14,
              marginTop: 2
            }}>Our client number based on their primary location</p>
          </div>
          <select
            value={period}
            onChange={e => setPeriod(e.target.value)}
            style={{
              padding: '6px 12px',
              borderRadius: 8,
              border: '1px solid #e0e0e0',
              fontWeight: 600,
              fontSize: 14,
              background: '#f6f8fa',
              color: '#1a3c34'
            }}
          >
            {periods.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="section6-flex" style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 100,
          alignItems: 'stretch'
        }}>
          {/* Map always visible */}
          <div className="section6-map" style={{
            flex: 1,
            minWidth: 0,
            maxWidth: 'none',
            height: 260,
            borderRadius: 12,
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: 0,
          }}>
            <img
              src={mapImg}
              alt="World Map"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 12
              }}
            />
          </div>
          {/* Bar chart always visible, horizontally scrollable on mobile */}
          <div className="section6-chart" style={{
            flex: 1,
            minWidth: 420,
            maxWidth: 600,
            height: 260,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            paddingTop: 4,
            overflowX: 'auto',
            width: '100%'
          }}>
            <div style={{ minWidth: 520, minHeight: 220, height: 220 }}>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData} margin={{ top: 10, left: 20, right: 20, bottom: 10 }} barCategoryGap="60%" style={{ background: 'transparent' }}>
                  <XAxis dataKey="country" tick={{ fontSize: 14, fill: '#1a3c34' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 14, fill: '#1a3c34' }} axisLine={false} tickLine={false} />
                  <Tooltip
                    content={({ active, payload }) =>
                      active && payload && payload.length ? (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 4,
                          background: '#fff',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                          borderRadius: 12,
                          border: 'none',
                          padding: '10px 18px',
                          fontWeight: 700
                        }}>
                          {payload.map((entry, i) => (
                            <span key={i} style={{ color: entry.color || '#1a3c34', fontWeight: 700, fontSize: 18 }}>{entry.value}</span>
                          ))}
                        </div>
                      ) : null
                    }
                  />
                  <Bar dataKey="clients" barSize={28} radius={[6, 6, 0, 0]} fill={BAR_COLOR} activeBar={null} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Dashboard Page
export default function FullDashboard() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', fontFamily: 'Inter, Arial, sans-serif', overflowX: 'hidden', background: '#f0f2f5' }}>
      <Header />
      <div className="dashboard-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 16px' }}>
        <style>{`
          @media (max-width: 768px) {
            .dashboard-container {
              padding: 0 12px !important;
            }
            .kpi-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
              gap: 16px !important;
            }
            .section-container {
              flex-direction: column !important;
              gap: 20px !important;
            }
            .chart-container {
              min-height: 200px !important;
            }
            .button-group {
              flex-wrap: wrap !important;
              gap: 8px !important;
            }
            .button-group button {
              font-size: 14px !important;
              padding: 6px 16px !important;
            }
            .section5-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .section5-col {
              min-width: 0 !important;
              width: 100% !important;
            }
            .section6-flex {
              flex-direction: column !important;
              gap: 20px !important;
            }
            .section6-map, .section6-chart {
              min-width: 0 !important;
              width: 100% !important;
              height: 200px !important;
            }
          }
          @media (max-width: 480px) {
            .dashboard-container {
              padding: 0 8px !important;
            }
            .kpi-grid {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }
            .chart-container {
              min-height: 180px !important;
            }
            .button-group button {
              font-size: 12px !important;
              padding: 4px 12px !important;
            }
          }
        `}</style>
        <div className="dashboard-section"><Section1 /></div>
        <div className="dashboard-section"><Section2 /></div>
        <div className="dashboard-section"><Section3 /></div>
        <div className="dashboard-section"><Section5 /></div>
        <div className="dashboard-section"><Section6 /></div>
      </div>
    </div>
  );
}