import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{task.text}</p>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    );
};

export default TaskItem;
