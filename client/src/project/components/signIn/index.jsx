import React, { useState } from "react";
import { Input, MainDiv, Form, H1, Button, InputDiv, InputSpan, IsSignUp } from "./style";
import { useNavigate } from "react-router-dom";
import productApi from "../../api/api/servicesApi";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

export const SignIn = () => {
    const [value, setValue] = useState({});
    const [show, setShow] = useState(false);
    const nav = useNavigate();

    const isSignInOnClick = () => {
        nav('/signUp');
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(pr => {
            return { ...pr, [name]: value }
        })
    }

    const passShow = () => {
        setShow((e) => !e);
    };

    const loginUser = async () => {
        // try {
        //     const req = await fetch('http://localhost:3001/api/auth/login', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(value)
        //     })
        //     const res = await req.json()
        //     console.log(res);
        //     if (req.ok) {
        //
        //         nav('./profile')
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

        try {
            const res = await productApi.signIn(value);
            console.log(res);

            if (res.status >= 200 && res.status < 300) {
                localStorage.setItem("token", res.data.token);
                nav("/profile");
            }
        } catch (error) {
            console.error("Login request failed:", error);
        }

    }
    return (
        <>
            <MainDiv>

                <Form>
                    <H1> Sign In </H1>
                    <br />
                    <Input placeholder="Email" type="email" name="email" onChange={handleChange} value={value.email || ""} />
                    <InputDiv style={{ width: "100%" }}>
                        <Input placeholder="Password" type={show ? "text" : "password"} name="password" onChange={handleChange} value={value.password || ""} />
                        <InputSpan onClick={passShow}> {show ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />} </InputSpan>
                    </InputDiv>
                    <IsSignUp onClick={isSignInOnClick}> Sign Up </IsSignUp>
                    <br />
                    <Button type="button" onClick={loginUser}> Sign In </Button>
                    <br />
                </Form>
            </MainDiv>


        </>
    )
};
