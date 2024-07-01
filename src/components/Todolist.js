import React, { useState } from "react";
import { Button, Modal, Form, ListGroup } from "react-bootstrap";

const Todolist = () =>{
    
    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const [selectCheck, setSelectedCheck] = useState(null);
    
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () =>  setShowModal(true);
    const handleChange = (e) => setInputValue(e.target.value);

    const handleSubmit = () =>{
        if (!inputValue.trim()) {
            alert('Please enter a todo item.');
            return;
          }
          const newItem={ text: inputValue, completed: false }
          setTodoItems([...todoItems, newItem ]);
          setSelectedCheck(newItem.id);
          setInputValue('');
          handleCloseModal();
    }

    const handleCheckboxChange = (id) => {
        const updatedItems = todoItems.map(item => {
            if (item.id === id) {
              return { ...item, completed: true };
            } else {
              return { ...item, completed: false };
            }
          });
          setTodoItems(updatedItems);
          setSelectedCheck(id);
      };

    //   const handleSelectedCheck = (id) => {
    //     setSelectedCheck(id === selectCheck ? null : id)
    //     };
        
   return(
    <div>
        <h3 className="bg-primary text-center p-2 text-white">TODO List </h3>
        <div className="d-flex justify-content-center">
        <Button onClick={handleShowModal}>Add List</Button>
        </div>  

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title> Add List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formInput">
                <Form.Label>Enter Item</Form.Label>
                <Form.Control type='text' Placeholder='Todo List' value={inputValue} onChange={handleChange}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
             <Button variant="secondary" onClick={handleCloseModal}>close</Button>
             <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>     
        
        { todoItems.length > 0 && (
            <div className="mt-4 containerBox">
                <h4 className="text-center">TO-DO List</h4>
                <ListGroup>
                    {todoItems.map(item => (
                        <ListGroup.Item key={item.id}>
                           <Form.Check 
                               type="checkbox" 
                               id={`checkbox-${item.id}`}
                               label={item.text}
                               checked={selectCheck === item.id && item.completed}
                               onChange={() => handleCheckboxChange(item.id)}
                               
                               />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        )}
    </div>    
   )
}

export default Todolist;