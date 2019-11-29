import {useState} from 'react'
import uuid from 'uuid/v4'

function useTodoState(initialTodos) {
    const [todos, setTodos] = useState(initialTodos)
    return {
        todos,
        addTodo: newTodo => {
            setTodos([...todos, {id:uuid(), title:newTodo, completed: false}])
        },
        removeTodo: todoId => {
            const filteredTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(filteredTodos)
        },
        updateTodo: todoId => {
            const filteredTodos = todos.map(todo => 
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            )
            setTodos(filteredTodos)
        },
        editTodo: (todoId, newTitle) => {
            const filteredTodos = todos.map(todo => 
                todo.id === todoId ? {...todo, title: newTitle} : todo
            )
            setTodos(filteredTodos)   
        }
    }

}

export default useTodoState