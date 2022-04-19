import Task from './Task'

const Tasks = ({ tasks, onDelete, onEdit, filterTasks, FILTERS, onToggle }) => {
    return (
        <>
            {tasks.filter(FILTERS[filterTasks]).map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
            ))}
        </>
    )
}

Tasks.propTypes = {

}

export default Tasks
