import { useState, useEffect } from "react";

const TaskModal = ({ currentTask, editTask, closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    assignee: "",
    status: "",
  });

  useEffect(() => {
    if (currentTask) {
      setFormData({
        title: currentTask.title,
        description: currentTask.description,
        priority: currentTask.priority,
        assignee: currentTask.assignee,
        status: currentTask.status,
      });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    editTask(currentTask.id, formData);
  };

  if (!currentTask) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Task</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </select>
        <input
          type="text"
          name="assignee"
          value={formData.assignee}
          onChange={handleChange}
          placeholder="Assignee"
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
