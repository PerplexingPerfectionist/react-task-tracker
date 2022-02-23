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
                </div>)
            :
                (<div className='col'>
                    <h3>
                        {task.text}
                    </h3>
                    <p>
                        {task.day}
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
