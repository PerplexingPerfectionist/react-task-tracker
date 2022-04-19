import { FaTimes } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

const Task = ({ task, onDelete, onEdit, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            {task.edit ? 
                (<div className='col'>
                <p>
                    <input type="text" value={task.text} onChange={(value) => onEdit(task.id, 'text', value)} />
                </p>
                <p>
                    <input type="text" value={task.day} onChange={(value) => onEdit(task.id, 'day', value)} />
                </p>
                <p>
                    <select name='category' id='category' onChange={(value) => onEdit(task.id, 'category', value)}>
                        <option value=''>--Select Category---</option>
                        <option value='0'>Things You Have To Do</option>
                        <option value='1'>Things You Want To Do</option>
                        <option value='2'>Things Other People Want You To Do</option>
                    </select>
                </p>
                </div>)
            :
                (<div className='col'>
                    <h3>
                        {task.text}
                    </h3>
                    <p>
                        {task.day}
                    </p>
                    <p>
                        {task.category}
                    </p>
                </div>)
            }
            <div className='row'>
                <FaEdit style={{cursor: 'pointer', fontSize: '1.17em', marginRight: '.5em'}} onClick={() => onEdit(task.id, 'edit')} />
                <FaTimes style={{color: 'red', cursor: 'pointer', fontSize: '1.17em'}} onClick={() => onDelete(task.id)} />
            </div>
        </div>
    )
}

export default Task
