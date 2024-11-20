import React, { useState } from 'react';

const AddSessionForm = ({ closeForm }) => {
  const [sessionName, setSessionName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Session "${sessionName}" added successfully!`);
    closeForm();
  };

  return (
    <div className="modal">
      <div className="form-container">
        <h2>Add New Session</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Session Name:
            <input
              type="text"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit" className="button-primary">
            Add Session
          </button>
          <button type="button" className="button-secondary" onClick={closeForm}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSessionForm;
