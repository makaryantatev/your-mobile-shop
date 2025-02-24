import React, { useState } from "react";

export const SignIn = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        try {
            const req = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const res = await req.json()
            console.log(res);

            if (req.ok) {
                localStorage.setItem('token', res.token)
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };



    return (
        <>
            <input style={{marginTop: '200px'}} type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button onClick={loginUser}>Send</button>
        </>
    );
};
