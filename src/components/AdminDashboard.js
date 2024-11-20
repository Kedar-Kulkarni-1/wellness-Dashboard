import React, { useState } from 'react';
import AddSessionForm from './AddSessionForm';

const AdminDashboard = () => {
  const [showAddSessionForm, setShowAddSessionForm] = useState(false);

  const handleAddSessionClick = () => {
    setShowAddSessionForm(true);
  };

  const closeForm = () => {
    setShowAddSessionForm(false);
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Wellness Program Admin Dashboard</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sessions</li>
            <li>Members</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>

      <main className="content">
        {/* Statistics Section */}
        <section className="stats">
          <h2>Statistics</h2>
          <div className="stat-card">
            <h3>Total Sessions</h3>
            <p>25</p>
          </div>
          <div className="stat-card">
            <h3>Total Members</h3>
            <p>150</p>
          </div>
        </section>

        {/* Session Management Section */}
        <section className="session-management">
          <h2>Manage Sessions</h2>
          <button onClick={handleAddSessionClick} className="button-primary">
            Add New Session
          </button>
          <button>Edit Existing Sessions</button>
          <button>Delete Sessions</button>
        </section>

        {showAddSessionForm && <AddSessionForm closeForm={closeForm} />}
      </main>
    </div>
  );
};

export default AdminDashboard;
