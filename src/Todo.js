import React from 'react'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

function Todo({title, completed, removeTodo, updateTodo, editTodo, id}) {
    const [isEditing, toggle] = useToggleState()
    return (
        <ListItem>
            {isEditing? <EditTodoForm editTodo={editTodo} id={id} title={title} toggle={toggle}/> :
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => updateTodo(id)} />
            <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }} >{title}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit' onClick={toggle}>
                    <EditIcon/>
                </IconButton>
                <IconButton  aria-label='Delete' onClick={() => removeTodo(id)} >
                    <DeleteIcon/> 
                </IconButton>
            </ListItemSecondaryAction>
            </>}
        </ListItem> 
    )
}

export default Todo