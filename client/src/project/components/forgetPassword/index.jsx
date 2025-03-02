import React, { useState } from "react";
import { Input, MainDiv, Form, H1, Button, InputDiv, InputSpan, IsSignUp } from "../signIn/style";
import { useLocation, useNavigate } from "react-router-dom";
import productApi from "../../api/api/servicesApi";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

export const ForgetPass = () => {
    const [value, setValue] = useState({});
    const [show, setShow] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const nav = useNavigate();
    const loc = useLocation()
    console.log(loc.state);

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(pr => {
            return { ...pr, [name]: value }
        })
    }

    const passShow = () => {
        setShow((e) => !e);
    };
    const isPassShow = () => {
        setIsShow((e) => !e);
    };

    const newPass = async () => {
        try {
            if (!loc.state.email) return;
            console.log(value);

            if (value.password != value.passComfirm) return;
            const res = await productApi.forgotPasswordNew({ email: loc.state.email, password: value.password, code: loc.state.code })
            if (res.status == 200) {
                nav('/profile')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <MainDiv>

                <Form>
                    <H1> Change Password </H1>
                    <br />
                    <InputDiv style={{ width: "100%" }}>
                        <Input placeholder="New password" type={show ? "text" : "password"} name="password" onChange={handleChange} value={value.password || ""} />
                        <InputSpan onClick={passShow}> {show ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />} </InputSpan>
                    </InputDiv>
                    <InputDiv style={{ width: "100%" }}>
                        <Input placeholder="Comfirm the password" type={show ? "text" : "password"} name="passComfirm" onChange={handleChange} value={value.passComfirm || ""} />
                        <InputSpan onClick={isPassShow}> {isShow ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />} </InputSpan>
                    </InputDiv>
                    {/* <IsSignUp onClick={isSignInOnClick}> Sign Up </IsSignUp> */}
                    <br />
                    <Button type="button" onClick={newPass}> Change </Button>
                    <br />
                </Form>
            </MainDiv>
        </>
    )
}

