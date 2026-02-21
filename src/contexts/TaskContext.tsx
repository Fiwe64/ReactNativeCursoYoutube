import React, { createContext, ReactNode, useContext, useState } from "react";


interface Task{
    id:string;
    title: string;
    description: string;
    flag: "urgente" | "opcional";
    timeLimit: string;    
}


interface TaskContextProps{
    isModalOpen: boolean;
    openModal: ()=> void;
    closeModal: ()=> void;
    createTask: (data: Omit<Task,'id'>)=>void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export function TaskProvider({children}:{children: ReactNode}){
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [tasks,setTasks] = useState<Task[]>([]);
    
    function openModal(){
        setIsModalOpen(true);
        console.log("Abrir Modal de Tarefas");
    }
    function closeModal(){
        setIsModalOpen(false);
    }
    function createTask(data:Omit<Task,'id'>){
        const newTask ={
            id: Date.now().toString(),
            ...data,
        };

        setTasks((oldTask)=>[...oldTask,newTask]);
        closeModal();
    }
    

    return(
        <TaskContext.Provider value={{isModalOpen,openModal, closeModal,createTask}}>
            {children}
        </TaskContext.Provider>
    )
}

//Hook Customizado para usar o contexto facil em qualquer lugar
export function useTaskContext(){
    const context =  useContext(TaskContext);

    if(!context){
        throw new Error("useTaskContext deve ser usado dentro de um TaskProvider");
    }
    return context;
}


export default Task;
