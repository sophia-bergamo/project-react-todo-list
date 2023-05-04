import React, {useEffect, useState} from 'react'
import './App.css'
import CreateTask from '../modals/CreateTask'
import Card from './Card'

 const Todo = () => {
    const [modal, setModal] = useState(false);

    const [TaskList, setTaskList] = useState([])

    useEffect(() => {

      let add = localStorage.getItem("taskList")
      if(add){
        let obj = JSON.parse(add)
        setTaskList(obj)
      }
      }, [])

    const deleteTask = (index) => {
        let tempList = TaskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = TaskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = TaskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
        window.location.reload()
    }

    return (
    <>
    <body>
        <div className='header text-center'>
            <h3 id='h3'>TO DO LIST</h3>
            <br></br>
            <button className='btn-newtask' onClick={() => setModal(true)}>new task</button>
        </div>

        <div className='task-container'>
             {TaskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>)}
        </div>

        <CreateTask  toggle = {toggle}  modal = {modal} save = {saveTask}/>
    </body>
    </>
    )
}

export default Todo
