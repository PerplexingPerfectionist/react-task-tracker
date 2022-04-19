import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [filterTasks, setFilterTasks] = useState('All')
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
        edit: false,
        category: 'Things You Want To Do'
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: "Feb 6th at 1:30pm",
        reminder: true,
        edit: false,
        category: 'Things Other People Want You To Do'
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
        edit: false,
        category: 'Things You Have To Do'
    }
])

//Add Tasks
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}

  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Edit Tasks
const editTask = (id, attr, event) => {
  let editedTask = tasks.map((task) =>
    {
      if(task.id === id && attr === 'edit') {
        return {...task, edit: !task.edit};
      } else if(task.id === id && attr === 'text') {
        return {...task, text: event.target.value};
      } else if(task.id === id && attr === 'day') {
        return {...task, day: event.target.value};
      } else if(task.id === id && attr === 'category') {
        return {...task, category: event.target.options[event.target.selectedIndex].text};
      }
      return task;
    }
  )

  setTasks([...editedTask])
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

//Filter category
const FILTERS = {
  All: () => true,
  0: (task) => task.category === 'Things You Have To Do',
  1: (task) => task.category === 'Things You Want To Do',
  2: (task) => task.category === 'Things Other People Want You To Do'
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <div className='form-control'>
        <label>Filter</label>
        <select name='category' id='category' onChange={(event) => setFilterTasks(event.target.value)}>
          <option value='All'>View All</option>
          <option value='0'>Things You Have To Do</option>
          <option value='1'>Things You Want To Do</option>
          <option value='2'>Things Other People Want You To Do</option>
        </select>
      </div>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} filterTasks={filterTasks} FILTERS={FILTERS} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
