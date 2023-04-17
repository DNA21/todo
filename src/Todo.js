import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { Input, Row, Col, Label, FormGroup } from 'reactstrap';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={`d-flex justify-content-between text-capitalize rounded-3 px-4 py-2 my-3 ${todo.completed ? 'list-background-completed' : 'list-background'}`}>
            <Row>
                <Col className='my-auto'>
                    <Input onChange={() => toggleComplete(todo)} className='form-check py-auto pointer' type='checkbox' checked={todo.completed ? 'checked' : ''} />
                </Col>
                <Col xs='auto'>
                    <p className='mb-0 fs-3' onClick={() => toggleComplete(todo)}>
                        {todo.completed
                        ? (<s>{todo.text}</s>)
                        : (<>{todo.text}</>)}
                    </p>
                </Col>
            </Row>
            <button onClick={() => deleteTodo(todo.id)}><BiTrash size={25} /></button>
        </li>
    )
}

export default Todo;
