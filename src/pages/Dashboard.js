import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';
import TaskItem from '../components/TaskItem';


const Dashboard = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), text: task }));
            setTask('');
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Enter task"
                style={{ display: 'block', margin: '0 auto' }}
            />
            <button onClick={handleAddTask} style={{ display: 'block', margin: '0 auto' }}>Add Task</button>


            {tasks.map(task => (
                <TaskItem key={task.id} task={task} style={{ textAlign: 'center' }} />

            ))}
        </div>
    );
};

export default Dashboard;
