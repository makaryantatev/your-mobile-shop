import axios from "axios";
import React from "react";
import { useState } from "react"
import { Input, MainDiv, Form, H1, Button, InputDiv, InputSpan } from "../signIn/style";
import productApi from "../../api/api/servicesApi";
import { useNavigate } from "react-router-dom";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";


export const SignUp = () => {
    const [value, setValue] = useState({})
    const [isRegister, setIsRegister] = useState(false)
    const [show, setShow] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(pr => {
            return { ...pr, [name]: value }
        })
    }
    const nav = useNavigate()
    const addUser = async () => {
        // try {
        //     const req = await fetch('http://localhost:3001/api/auth/register', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(value)
        //     })
        //     const res = await req.json()
        //     console.log(res);
        //     if (req.ok) {
        //         setIsRegister(true)
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

        const res = await productApi.signUp(value)
        console.log(res);
        setIsRegister(true)
    }
    const verifyUser = async () => {
        // try {
        //     const req = await fetch('http://localhost:3001/api/auth/verify', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({ code: value.code, email: value.email })
        //     })
        //     const res = await req.json()
        //     console.log(res);
        // } catch (error) {
        //     console.log(error);
        // }
        try {
            const res = await productApi.verify({ code: value.code, email: value.email })
            console.log(res);
            // res.status(200).json('ok')
            if (res.status >= 200 && res.status < 300) {
                nav('/signIn')
            }

        } catch (error) {
            console.error(error);
        }
        // setIsRegister(true)
    }

    const passShow = () => {
        setShow(e => !e)
    }
    return (
        <>
            <MainDiv>
                <Form>
                    <H1> Sign up now! </H1>
                    <br />
                    <Input placeholder="Name" type="text" disabled={isRegister} name="name" onChange={handleChange} />
                    <Input placeholder="Last Name" type="text" disabled={isRegister} name="surName" onChange={handleChange} />
                    <Input placeholder="Email" type="email" disabled={isRegister} name="email" onChange={handleChange} />
                    <InputDiv>
                        <Input type={show ? "text" : "password"} placeholder="Password" disabled={isRegister} name="password" onChange={handleChange} />
                        <InputSpan onClick={passShow}>
                            {show ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                        </InputSpan>
                    </InputDiv>
                    <br />
                    <Button disabled={isRegister} onClick={addUser}> Sign Up! </Button>
                    {isRegister && <>
                        <Input name="code" onChange={handleChange} />
                        <Button onClick={verifyUser}> Verify </Button>
                    </>}
                </Form>
            </MainDiv>
        </>
    )
}       