import { useState } from "react"
import { adminLogin } from "../../api"
import { useNavigate } from "react-router-dom"

export const LogInAdmin = () => {
    const [value, setValue] = useState({})
    const nav = useNavigate()
    const handleChange = (e) => {
        const {name, value} = e.target
        setValue(pr => {
            return {...pr, [name]: value}
        })
    }
    const login = async() => {
        try{
            const res = await adminLogin(value)
            if(res.status === 200) {
                localStorage.setItem('adminToken', res.data.token)
                nav('/')
            }
        } catch(error){
            console.error(error);
        }
    }
    return(
        <>
            <input type="text" placeholder="email" name="login" onChange={handleChange}/>
            <input type="text" placeholder="password" name="password"  onChange={handleChange}/>
            <button onClick={login}> log in </button>
        </>
    )
}