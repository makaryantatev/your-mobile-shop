import styled from "styled-components";

export const MainDiv = styled.div`
    width: 95%;
    height: auto;
    background: linear-gradient(120deg, #f4f4f4, #e2e2e2);
    margin: auto;
    margin-top: 150px;
    margin-bottom: 70px;
    padding: 30px;
    color: black;
`


export let InfoDiv = styled.div`
    width: 95%;
    height: auto;
    background: linear-gradient(120deg, #f4f4f4, #e2e2e2);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    align-items: center; 
    justify-content: space-between;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
    
    div {
        padding: 20px;
        width: 20%;
        text-align: center;
        cursor: pointer;
        transition: 0.3s all;
        min-width: 150px; 
        font-size: 16px;
        font-weight: 900;
        font-family: Candara;

        p{
            margin: 0;
        }


        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
            background-color: transparent;
        }
    }

    @media (max-width: 1024px) {
        div {
            width: 30%; 
        }
    }

    @media (max-width: 768px) {
        div {
            width: 45%; 
        }
    }

    @media (max-width: 480px) {
        div {
            width: 90%; 
        }
    }
`;


export const LogOut = styled.button`
    width: 10%;
    padding: 5px 10px;
    color: black;
    font-family: Candara;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
    background-color: #f5f5f5;
    border-radius: 0px;
    transition: 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`

export const LogOutConfirm = styled.div`
    position: fixed;
    width: 25%;
    left: 38%;
    top: 35%;
    padding: 60px 30px 30px 30px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #2e2e2e;
    background: linear-gradient(100deg, #efefef, #cdcdcd);
    height: 250px;
    margin: auto;
    border-radius: 20px;
    font-family: Candara;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
    z-index: 3;
`
export const ConfirmBtn = styled.button`
    width: 30%;
    padding: 5px 10px;
    color: black;
    font-family: Candara;
    border: 0;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
    border-radius: 5px;
    margin-top: 20px;
    transition: 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`

export const DarkDiv = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #00000097;
`

export const ContactsDiv = styled.div`
    width: 30%;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.188) 0px 0px 20px;
    padding: 30px 20px;
    background-color: #f5f5f5;
`
export const H1 = styled.h1`
    font-size: 35px;
    font-family: Candara;
    font-weight: 700;
    margin-bottom: 15px;
`
export const Contacts = styled.p`
    font-size: 18px;
    font-family: Candara;
    margin-bottom: 5px;
`


export const Update = styled.button`
    width: 30%;
    padding: 5px 10px;
    margin-top: 10px;
    color: black;
    font-family: Candara;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
    background-color: #f5f5f5;    
    border-radius: 0px;
    transition: 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`
