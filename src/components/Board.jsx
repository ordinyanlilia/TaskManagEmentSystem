import { useState } from "react";
import { initialTasks } from "../data/initialTasks";
import Column from "./Column";
import TaskModal from "./TaskModal";

const Board = () =>{
    const[tasks, setTasks] =useState(initialTasks);
    const [currentTask, setCurrentTask] =useState(null);
    const [isModalOpen, setIsModalOpen] =useState(false);

    const getTasksByStatus =(status) =>{
        return tasks.filter((task) =>task.status===status);
    };
    
    const editTask =(id, updatedFields) =>{
      setTasks(prevTasks => prevTasks.map(task => task.id===id? {...task, ...updatedFields} : task))
      closeModal(); };

    const openModal =(task) =>{
        setCurrentTask(task);
        setIsModalOpen(true);
    };

    const closeModal =() =>{
        setIsModalOpen(false);
        setCurrentTask(null);
    };

    const deleteTask =(id) =>{
        setTasks(prevTasks => prevTasks.filter (task => task.id!==id));
    };

    const addTask =(status) =>{
        const newTask ={
            id: tasks.length + 1,
            title: "New Task",
            description: "New Task Description",
            status: status,
            priority: "Medium",
            assignee: "Unassigned", 
        };
        setTasks([...tasks, newTask]);
    };


   return(

    <div className="board">
     <Column 
        title ="TODO" 
        tasks={getTasksByStatus("TODO")}
        addTask={addTask} 
        editTask={editTask}
        deleteTask={deleteTask}
        openModal={openModal}/>
     <Column 
        title ="DOING" 
        tasks={getTasksByStatus("DOING")} 
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
        openModal={openModal} />
     <Column 
        title ="DONE" 
        tasks={getTasksByStatus("DONE")} 
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
        openModal={openModal} />
        {isModalOpen && (
            <TaskModal 
            currentTask={currentTask}
            editTask={editTask}
            closeModal={closeModal}/>
        )}
     {/* <Column title ="BLOCKED" tasks={getTasksByStatus("BLOCKED")} addTask={addTask} /> */}
    </div>
   )
     
}

export default Board;