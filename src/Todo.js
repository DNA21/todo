import React from 'react';
import { BiTrash } from 'react-icons/bi';

const Todo = ({todo}) => {
    return (
        <li>
            <div>
                <input type='checkbox' />
                <p className=''>{todo}</p>
            </div>
            <button><BiTrash /></button>
        </li>
    )
}

export default Todo;
