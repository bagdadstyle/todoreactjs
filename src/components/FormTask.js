import React, { useState} from 'react';
import '../Styles.css/FormTask.css';
import { v4 as uuidv4} from 'uuid';

function FormTask(props){

    const [input, setInput]  = useState('')

    const handleChange = (e) =>{
        setInput(e.target.value)
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        }
        props.onSubmit(newTask);
    }

    return(
        <form className='form-task' onSubmit={handleSubmit}>
            <input 
            className='task-input'
            type='text'
            placeholder='Enter task'
            name='text'
            onChange={handleChange}
            />
            <button className='task-button'>
                Add new tasks
            </button>
        </form>
    )
};

export default FormTask;