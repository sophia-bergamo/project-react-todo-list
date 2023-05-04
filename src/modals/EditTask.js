import React, {useEffect, useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../components/App.css'

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const[taskName, setTaskName] = useState('');
    const[description, setdescription] = useState('');

    const handleChange = (e) => {
      const {name, value} = e.target
      
      if (name == "taskName"){
        setTaskName(value)
      }else{
        setdescription(value)
      }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setdescription(taskObj.description)
        }, 
    [] )
    
    const handleUpddate = (e) => {
        e.preventDefault()
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['description'] = description
        updateTask(tempObj)
    }

    return(
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>EDIT TASK</ModalHeader>
        <ModalBody className="modal-body">
          <form>
            <div className="form-group">
              <label>Task name</label>
              <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
            </div>
            <br></br>
            <div className="form-group">
              <label>Description</label>
              <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description">  </textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter id="foot">
          <Button id="btn-foot" onClick={handleUpddate}>
            Update
          </Button>
          <Button id="btn-foot" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
}

export default EditTask