import React from 'react'
import Todo from './Todo'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'


function TodoList({todos, removeTodo, updateTodo, editTodo}) {
    if(todos.length > 0) return (
        <Paper>
        <List>
            {todos.map((todo, i) => (
                <>
                    {/* {...todo} like completed={todo.completed} title={todo.title}  id={todo.id}  */}
                    <Todo {...todo}  key={todo.id}removeTodo={removeTodo} updateTodo={updateTodo} editTodo={editTodo} />
                    {i < todos.length-1 && <Divider/>}
                </>))}
        </List>
        </Paper>
    )
    return null
}

export default TodoList