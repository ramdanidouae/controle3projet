import React,{useState} from "react";

export default function AddTask(){
    const [newTasks, setnewTask] = useState('');
    const [tasks, setTaks] = useState([]);

    function handleTasks(){
        if (!tasks.includes(newTasks.trim())){
        setTaks([...tasks , newTasks])
        setnewTask(''); //pour que l'input revient une chaine vide
    }else{
        alert('tast already exists');
        setnewTask('');
    }
}
function handleDelete(index){
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTaks(filteredTasks);
  };
function handleEdit(index){
    const taskToEdit = tasks[index];
    setnewTask(taskToEdit)
}
    return(
        <div>
            <input type="text" placeholder="Enter Task..." value={newTasks} 
            onChange={(e) => {setnewTask(e.target.value)}}></input>
            <button onClick={() => {handleTasks()}} disabled={!newTasks.trim()}>
                Add Task </button> //disabled=!newTasks true
                <ul>
                {tasks.map((element, index) => {
                    return(
                    <div className="listelement" key={index}>
                    <li>{element}</li>
                    <button onClick={() => handleEdit(index)}>modifier</button>
                    <button onClick={() => handleDelete(index)}>supprimer</button>
                    </div>
                    )
                })}
                </ul>
            
        </div>
    )
}