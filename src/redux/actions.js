export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const login = (userData) => (dispatch) => {
    try {
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({ type: LOGIN_SUCCESS, payload: userData });
    } catch (error) {
        console.error("Failed to save user data:", error);
        // Optionally dispatch an error action here
    }

};

export const logout = () => {
    localStorage.removeItem("user");
    return { type: LOGOUT };
};
