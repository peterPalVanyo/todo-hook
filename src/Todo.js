import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

function Todo({title, completed, removeTodo, updateTodo, id}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => updateTodo(id)} />
            <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }} >{title}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit'>
                    <EditIcon/>
                </IconButton>
                <IconButton  aria-label='Delete' onClick={() => removeTodo(id)} >
                    <DeleteIcon/> 
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem> 
    )
}

export default Todo