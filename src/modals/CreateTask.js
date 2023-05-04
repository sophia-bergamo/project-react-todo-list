import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../components/App.css'


const CreateTask = ({modal, toggle, save}) => {
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
    
    const handleSave = () => {
      let taskObj = {}
      taskObj["Name"] = taskName
      taskObj["description"] = description
      save(taskObj)
      localStorage.setItem("Name", "description")
    }

    return(
      <Modal isOpen={modal} toggle={toggle} className="modal-all">
        <ModalHeader toggle={toggle} className="modal-header">NEW TASK</ModalHeader>
        <ModalBody className="modal-body">
          <form className="formulario-modal">
            <div className="form-group">
              <label>Task name</label>
              <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
            </div>
            <br></br>
            <div className="form-group">
              <label>Description</label>
              <textarea rows="3" className="form-control" value={description} onChange={handleChange} name="description">  </textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter id="foot"> 
          <Button id="btn-foot" height="90px" width="60px" onClick={handleSave}>
            Create
          </Button>
          <Button id="btn-foot" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
}

export default CreateTask