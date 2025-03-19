import { ADD_TASK, DELETE_TASK, LOGIN_SUCCESS, LOGOUT } from './actions';

const initialState = {
    tasks: [],
    user: JSON.parse(localStorage.getItem("user")) || null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload };
        case LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default rootReducer;
