import React, {useState} from "react";
import '../components/App.css';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ADD8E6"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FAD99A"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#9DDA96"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#F9C2C3"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#DCB1FB"
        }
    ]

    const toggle = () => {
        setModal(!modal)
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}>            </div>
            <div class = "task-holder">
                <div class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</div>
                <p className = "mt-3">{taskObj.description}</p>
                
                <div class="icone">
                    <i class = "far fa-edit" style={{"color" : colors[index%5].primaryColor}} onClick={() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor}} onClick={handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card