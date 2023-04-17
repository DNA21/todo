import React, {useState} from "react";
import './App.css';
import { Container } from 'reactstrap';
import { TiPlus } from 'react-icons/ti';
import Todo from './Todo';

const style = {

}

function App() {
    const [todos, setTodos] = useState(['Learn React', 'Grind Leetcode']);

    return (
        <>
            <div className='page-background'>
                <Container className='bg-light'>
                    <h3>ToDo App</h3>
                    <form className={style.form}>
                        <input className={style.input} type="text" placeholder='Add Todo' />
                        <button className={style.button}><TiPlus /></button>
                    </form>
                    <ul>
                        {todos.map((todo, index) => (
                            <Todo key={index} todo={todo} />
                        ))}
                    </ul>
                    <p>You have 2 todos</p>
                </Container>
            </div>
        </>
    );
}

export default App;
