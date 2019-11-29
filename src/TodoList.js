import React from 'react'
import Todo from './Todo'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'


function TodoList({todos, removeTodo, updateTodo, editTodo}) {
    return (
        <Paper>
        <List>
            {todos.map((todo, i) => (
                <>
                    <Todo completed={todo.completed} title={todo.title} key={todo.id} id={todo.id} removeTodo={removeTodo} updateTodo={updateTodo} editTodo={editTodo} />
                    {i < todos.length-1 && <Divider/>}
                </>))}
        </List>
        </Paper>
    )
}

export default TodoList