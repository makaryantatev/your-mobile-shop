import React, { useState } from "react";

export const Mail = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        surName: "",
        email: "",
        password: "",
        code: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = async () => {
        try {
            const req = await fetch("http://localhost:3001/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (req.ok) {
                setIsRegister(e => !e)
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };


    const verifyBtn = async () => {
        try {
            const req = await fetch("http://localhost:3001/api/auth/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({code: formData.code, email: formData.email}),
            });
            if (req.ok) {
                setIsRegister(e => !e)
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };


    return (
        <>
            <input disabled={isRegister} type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input disabled={isRegister} type="text" name="surName" placeholder="Surname" onChange={handleChange} />
            <input disabled={isRegister} type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input disabled={isRegister} type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button disabled={isRegister} onClick={handleClick}>Send</button>
            {isRegister && <>
                <input type="text" name="code" placeholder="Verify code" onChange={handleChange} />
                <button onClick={verifyBtn}>Send</button>
            </>}
        </>
    );
};
