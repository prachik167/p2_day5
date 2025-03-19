import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map(task => (
                <div key={task.id}>
                    <p>{task.text}</p>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
