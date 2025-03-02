import React, { useState } from "react";
import { Input, MainDiv, Form, H1, Button, InputDiv, InputSpan, IsSignUp } from "./style";
import { useNavigate } from "react-router-dom";
import productApi from "../../api/api/servicesApi";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

export const SignIn = () => {
    const [value, setValue] = useState({});
    const [show, setShow] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [resStatus, setResStatus] = useState(false);
    const [forgotPass, setForgotPass] = useState("")
    const [forgotPassCode, setForgotPassCode] = useState("")

    const nav = useNavigate();

    const isSignInOnClick = () => {
        nav('/signUp');
    };
    // const forgetPass = () => {
    //     nav('/forgetPass');
    // };

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

    const verifyUser = async () => {
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
        setIsRegister(true)
    }
    const addUser = async () => {
        setIsRegister(true)
    }

    const emailSend = async () => {
        try{
            console.log(forgotPass);
            
            const res = await productApi.forgotPassword({email: forgotPass})
            console.log(res.data);
            console.log(res.status);
            
            if(res.status == 200){
                setResStatus(true)
            }
        } catch(e){
            console.error(e)
        }
    }

    const verifyCode = async () => {
        try {
            const res = await productApi.forgotPasswordCheck({code: forgotPassCode, email: forgotPass})
            console.log(res.data);
            console.log(res.status);
            
            if(res.status == 200) {
                nav('/forgetPass', { state: { email: forgotPass, code: forgotPassCode } });
            }
        } catch (error) {
            console.error(error)
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
                    <IsSignUp onClick={addUser}> Forget password </IsSignUp>

                    {isRegister && (
                        <>
                            <Input name="code" placeholder="Enter your email" onChange={(e) => setForgotPass(e.target.value)} />
                            <Button onClick={emailSend}> Send code </Button>
                        </>
                    )}
                    {resStatus && (
                        <>
                            <Input name="code" placeholder="Enter your verify code" onChange={(e) => setForgotPassCode(e.target.value)} />
                            <Button onClick={verifyCode}> Verify </Button>
                        </>
                    )}
                    <br />
                    <Button type="button" onClick={loginUser}> Sign In </Button>
                    <br />
                </Form>
            </MainDiv>


        </>
    )
};



// import React, { useState } from "react";
// import { Input, MainDiv, Form, H1, Button, InputDiv, InputSpan, IsSignUp } from "./style";
// import { useNavigate } from "react-router-dom";
// import productApi from "../../api/api/servicesApi";
// import { IoMdEyeOff, IoMdEye } from "react-icons/io";

// export const SignIn = () => {
//     const [value, setValue] = useState({});
//     const [show, setShow] = useState(false);
//     const [isRegister, setIsRegister] = useState(false);
//     const [isForgetPass, setIsForgetPass] = useState(false);
//     const nav = useNavigate();

//     const isSignInOnClick = () => {
//         nav('/signUp');
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValue(prev => ({ ...prev, [name]: value }));
//     };

//     const passShow = () => {
//         setShow(prev => !prev);
//     };

//     const loginUser = async () => {
//         try {
//             const res = await productApi.signIn(value);
//             console.log(res);

//             if (res.status >= 200 && res.status < 300) {
//                 localStorage.setItem("token", res.data.token);
//                 nav("/profile");
//             }
//         } catch (error) {
//             console.error("Login request failed:", error);
//         }
//     };

//     const verifyUser = async () => {
//         try {
//             const res = await productApi.verify({ code: value.code, email: value.email });
//             console.log(res);

//             if (res.status >= 200 && res.status < 300) {
//                 nav('/signIn');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//         setIsRegister(true);
//     };

//     const addUser = async () => {
//         console.log("Registering user...");
//         const res = await productApi.signUp(value);
//         console.log(res);
//         setIsRegister(true);
//     };

//     const forgetPass = () => {
//         setIsForgetPass(true); 
//     };

//     const verifyForgetPass = () => {
//         nav("/forgetPass"); 
//     };

//     return (
//         <MainDiv>
//             <Form>
//                 <H1> Sign In </H1>
//                 <br />
//                 <Input placeholder="Email" type="email" name="email" onChange={handleChange} value={value.email || ""} />
//                 <InputDiv style={{ width: "100%" }}>
//                     <Input placeholder="Password" type={show ? "text" : "password"} name="password" onChange={handleChange} value={value.password || ""} />
//                     <InputSpan onClick={passShow}> {show ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />} </InputSpan>
//                 </InputDiv>

//                 <IsSignUp onClick={isSignInOnClick}> Sign Up </IsSignUp>
//                 <IsSignUp onClick={forgetPass}> Forget password </IsSignUp>

//                 {isForgetPass && (
//                     <>
//                         <Input name="code" placeholder="Enter your email" onChange={handleChange} />
//                         <Button onClick={verifyForgetPass}> Send Code </Button>
//                     </>
//                 )}
//                 <br />
//                 <Button type="button" onClick={loginUser}> Sign In </Button>
//                 <br />
//             </Form>
//         </MainDiv>
//     );
// };

// import React, { useState } from "react";
// import { Input, MainDiv, Form, H1, Button, InputDiv, InputSpan, IsSignUp } from "./style";
// import { useNavigate } from "react-router-dom";
// import productApi from "../../api/api/servicesApi";
// import { IoMdEyeOff, IoMdEye } from "react-icons/io";

// export const SignIn = () => {
//     const [value, setValue] = useState({});
//     const [show, setShow] = useState(false);
//     const [isForgetPass, setIsForgetPass] = useState(false);
//     const [isCodeSent, setIsCodeSent] = useState(false);
//     const nav = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValue(prev => ({ ...prev, [name]: value }));
//     };

//     const passShow = () => {
//         setShow(prev => !prev);
//     };

//     const loginUser = async () => {
//         try {
//             const res = await productApi.signIn(value);
//             console.log(res);

//             if (res.status >= 200 && res.status < 300) {
//                 localStorage.setItem("token", res.data.token);
//                 nav("/profile");
//             }
//         } catch (error) {
//             console.error("Login request failed:", error);
//         }
//     };

//     // Send the verification code to email
//     const sendForgetPassCode = async () => {
//         if (!value.email) {
//             alert("Please enter your email first!");
//             return;
//         }
    
//         console.log("Sending request with email:", value.email);
    
//         try {
//             const res = await productApi.sendForgetPassCode({ email: value.email });
    
//             console.log("API Response:", res);  // Log the response
    
//             if (res.status >= 200 && res.status < 300) {
//                 setIsCodeSent(true);
//                 alert("A verification code has been sent to your email.");
//             } else {
//                 console.error("Unexpected response:", res);
//                 alert("Something went wrong. Please try again.");
//             }
//         } catch (error) {
//             console.error("Failed to send forget password code:", error);
    
//             if (error.response) {
//                 console.log("Response Data:", error.response.data);
//                 console.log("Status Code:", error.response.status);
//             }
    
//             alert("Error sending code. Check console for details.");
//         }
//     };
    

//     // Verify the entered code
//     const verifyForgetPass = async () => {
//         if (!value.code) {
//             alert("Please enter the verification code!");
//             return;
//         }

//         console.log("Verifying code:", value.code);

//         try {
//             const res = await productApi.verifyForgetPassCode({ email: value.email, code: value.code });

//             if (res.status >= 200 && res.status < 300) {
//                 alert("Verification successful! Redirecting...");
//                 // nav("/forgetPass"); // Navigate only after verification
//             } else {
//                 alert("Invalid code. Please try again.");
//             }
//         } catch (error) {
//             console.error("Verification failed:", error);
//             alert("Verification failed. Check console for details.");
//         }
//     };

//     return (
//         <MainDiv>
//             <Form>
//                 <H1> Sign In </H1>
//                 <br />
//                 <Input placeholder="Email" type="email" name="email" onChange={handleChange} value={value.email || ""} />
//                 <InputDiv style={{ width: "100%" }}>
//                     <Input placeholder="Password" type={show ? "text" : "password"} name="password" onChange={handleChange} value={value.password || ""} />
//                     <InputSpan onClick={passShow}> {show ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />} </InputSpan>
//                 </InputDiv>

//                 <IsSignUp onClick={() => setIsForgetPass(true)}> Forget password </IsSignUp>

//                 {isForgetPass && !isCodeSent && (
//                     <>
//                         <Input name="email" placeholder="Enter your email" onChange={handleChange} value={value.email || ""} />
//                         <Button onClick={sendForgetPassCode}> Send Code </Button>
//                     </>
//                 )}

//                 {isCodeSent && (
//                     <>
//                         <Input name="code" placeholder="Enter verification code" onChange={handleChange} />
//                         <Button onClick={verifyForgetPass}> Verify </Button>
//                     </>
//                 )}

//                 <br />
//                 <Button type="button" onClick={loginUser}> Sign In </Button>
//                 <br />
//             </Form>
//         </MainDiv>
//     );
// };
