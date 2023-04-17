import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { Input, Row, Col, Label, FormGroup } from 'reactstrap';

const Todo = ({todo}) => {
    return (
        <li className='d-flex justify-content-between text-capitalize list-background rounded-3 px-4 py-2 my-3'>
            <Row>
                <Col className='my-auto'>
                    <Input className='form-check py-auto pointer' type='checkbox' />
                </Col>
                <Col xs='auto'>
                    <p className='mb-0 fs-3'>{todo}</p>
                </Col>
            </Row>
            <button><BiTrash size={25} /></button>
        </li>
    )
}

export default Todo;
