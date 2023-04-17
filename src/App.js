import React, {useState, useEffect} from "react";
import './App.css';
import { Container } from 'reactstrap';
import { TiPlus } from 'react-icons/ti';
import Todo from './Todo';
import {db} from './firebase';
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';


function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // Create todo
    const createTodo = async (e) => {
        e.preventDefault(e)
        if(input === '') {
            alert('Please enter a todo')
            return
        }
        await addDoc(collection(db, 'todos'), {
            text: input,
            completed: false
        })
        setInput('');
    }

    //Read todo from Firebase
    useEffect(() => {
        const q =query(collection(db, 'todos'));
        const unscubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({...doc.data(), id: doc.id})
            });
            setTodos(todosArray);
        })
        return () => unscubscribe();
    }, [])

    //Update todo in firebase
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed
        })
    }

    //Delete todo
    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    }

    return (
        <>
            <div className='page-background pt-5'>
                <Container className='bg-light rounded-3 p-3 shadow'>
                    <h3 className='font-bold text-center'>ToDo App</h3>
                    <form onSubmit={createTodo} className='d-flex justify-content-between'>
                        <div className="input-group input-group-lg">
                            <input
                                value={input}
                                onChange={(e)=> setInput(e.target.value)}
                                className='border form-control'
                                type="text"
                                placeholder='Add Todo'
                            />
                            <button className='btn btn-outline-secondary btn-success'><TiPlus size={30} color='white' /></button>
                        </div>
                    </form>
                    <ul className='p-0'>
                        {todos.map((todo, index) => (
                            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                        ))}
                    </ul>
                    <p className='text-center p-2'>{`You have ${todos.length} todos`}</p>
                </Container>
            </div>
        </>
    );
}

export default App;
