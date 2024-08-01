import React from "react";
import { Link, Navigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Logo, Input } from './index'
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"


const Login = () => {
    return (
        <></>
    );
}

export default Login;