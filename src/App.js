import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import GlobalStyles from "./GlobalStyles";

const App = () => {
    const user = useSelector(state => state.user);

    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Routes> {/* ✅ Keep Routes inside App.js, but NO <Router> */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/profile" 
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </>
    );
};

export default App;
