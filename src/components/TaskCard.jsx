import '../App.css'

const TaskCard =({task, editTask, deleteTask,openModal}) =>{
 const getPriorityClass =(priority) =>{
    switch(priority) {
        case "High":
            return "priority-high";
        case "Medium":
            return "priority-medium";
        case "Low":
            return "priority-low";
            default:
                return "priority-default";
    }
 }
//    const handleEdit =() =>{
//     const newTitle = prompt("Enter new title", task.title);
//     if (newTitle) {
//         editTask(task.id, {title: newTitle});
//     }
//    };

   const handleDelete = () =>{
   if(window.confirm("Are you sure you want to delete this task?")){
    deleteTask(task.id);
   }
   };

 return (
    <div className="task-wrapper">
      <div className="task-card" onClick={() => openModal(task)}>
        <div className="task-content">
          <h3 className="task-title">{task.title}</h3>
          <div className={`priority-badge ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </div>
          <div className="task-assignee">{task.assignee}</div>
        </div>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
 )

};

export default TaskCard;
