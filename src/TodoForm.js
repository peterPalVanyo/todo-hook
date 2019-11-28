import React from 'react'
import useInputState from './hooks/useInputState'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

function TodoForm() {
    const [value, handleChange, reset] = useInputState('')
    return (
        <Paper>
            {value}
            <TextField value={value} onChange={handleChange} />
        </Paper>

    )
}
export default TodoForm