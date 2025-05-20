import React, { useState } from 'react'
import Card from '../components/card/Card'
// import { todos } from '../utils/todoJsonData';

const NewPage = () => {
    const [todoList, setTodoList] = useState([]);
    return (
        <div>
            <button onClick={() => { import('../utils/todoJsonData').then(module => setTodoList(module.todos)) }}>Load data</button>
            {
                todoList.map((todo) => <Card key={todo.id} todo={todo} />)
            }
        </div>
    )
}

export default NewPage