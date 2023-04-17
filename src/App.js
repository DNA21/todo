import React, {useState} from "react";
import './App.css';
import { Container } from 'reactstrap';
import { TiPlus } from 'react-icons/ti';
import Todo from './Todo';


function App() {
    const [todos, setTodos] = useState(['Learn React', 'Grind Leetcode']);

    return (
        <>
            <div className='page-background pt-5'>
                <Container className='bg-light rounded-3 p-3 shadow'>
                    <h3 className='font-bold text-center'>ToDo App</h3>
                    <form className='d-flex justify-content-between'>
                        <div className="input-group input-group-lg">
                            <input className='border form-control' type="text" placeholder='Add Todo' />
                            <button className='btn btn-outline-secondary'><TiPlus size={30}/></button>
                        </div>
                    </form>
                    <ul className='p-0'>
                        {todos.map((todo, index) => (
                            <Todo key={index} todo={todo} />
                        ))}
                    </ul>
                    <p className='text-center p-2'>You have 2 todos</p>
                </Container>
            </div>
        </>
    );
}

export default App;
