import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [category, setCategory] = useState('')
    const [reminder, setReminder] = useState(false)
    const [edit, setEdit] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder, edit, category })

        setText('')
        setDay('')
        setReminder(false)
        setEdit(false)
        setCategory('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                />
            </div>
            <div className='form-control'>
                <label for='category'>Category</label>
                <select name='category' id='category' onChange={(event) => setCategory(event.target.options[event.target.selectedIndex].text)}>
                    <option value=''>---Select Category---</option>
                    <option value='0'>Things You Have To Do</option>
                    <option value='1'>Things You Want To Do</option>
                    <option value='2'>Things Other People Want You To Do</option>
                </select>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(event) => setReminder(event.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
