
import TaskCard from "./TaskCard";

const Column = ({title, tasks, addTask,editTask, deleteTask, openModal}) =>{
    return (
           <div className="column">
            <h1><i className="fas fa-list"></i>
            {title}</h1>
            {tasks && tasks.map(task =>(
           <TaskCard key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} openModal={openModal} />
            ))}
            <button className="add-task-btn"  onClick={() =>addTask(title)}> <i className="fas fa-plus"></i>Add Task</button>
        </div>
    )
}


export default Column;