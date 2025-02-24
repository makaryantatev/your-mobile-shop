import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import productApi from "../../api/api/servicesApi"
import { InfoDiv, LogOut, MainDiv, LogOutConfirm, DarkDiv, ConfirmBtn, H1, Contacts, ContactsDiv, Update } from "./styled"


export const Profile = () => {
    const [value, setValue] = useState({})
    const [isTrue, setIsTrue] = useState(false)
    const nav = useNavigate()
    useEffect(() => {
        const getData = async () => {
            const token = localStorage.getItem("token")
            
            if (!token) {
                nav("/sign-in")
            }
            try {
                const response = await productApi.profile(token)
                console.log(response.data);
                setValue(response.data)
            } catch (error) {
                console.log(error);
                localStorage.removeItem("token");
                nav('/signIn')
            }
        }
        getData()
    }, [])

    const logOutConfirm = () => {
        setIsTrue(true)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        nav('/signIn')
    }

    useEffect(() => {
        if (isTrue) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isTrue]);

    const darkDiv = () => {
        setIsTrue(false)
    }

    return (
        <>
            <MainDiv>
                <InfoDiv>
                    <div> <p> My Account </p> </div>
                    <div> <p> My Orders </p> </div>
                    <div> <p> My favorite products </p> </div>
                    <div> <p> The address book </p> </div>
                    <div> <p> Account Information </p> </div>
                </InfoDiv>
                <br />
                {localStorage.getItem('token') && <LogOut onClick={logOutConfirm}> Log Out </LogOut>}
                <br />
                <br />
                {isTrue && <LogOutConfirm> Are you sure <br /> you want to log out <br /> <ConfirmBtn onClick={logOut}> Yes </ConfirmBtn></LogOutConfirm>}
                {isTrue && <DarkDiv onClick={darkDiv}></DarkDiv>}
                <div>
                    <ContactsDiv>
                        <H1> Personal data </H1>
                        <Contacts> {value.name} {value.surName} </Contacts>
                        <Contacts>{value.email}</Contacts>
                        <Update> Update </Update>
                    </ContactsDiv>
                </div>
            </MainDiv>
        </>
    )
}

