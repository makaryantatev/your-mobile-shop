import styled from "styled-components";


export let FisrtDiv = styled.div`
    width: 100%;
    height: auto;
    background-color: #e5e5e5;
    display: flex;
    justify-content: end;
    font-size: 13px;
    div{
        width: 65%;
    }
    ul{
        
        display: flex;
        justify-content: space-between;
    }
    li{
        list-style-type: none;
    }
    a{
        color: grey;
        text-decoration: none;
        transition: 0.3s all;
        margin: 0 10px;
        font-family: "Lato", sans-serif;
        &:hover{
            color: #FB016F;
        }
    }
`

export let SecDiv = styled.div`
    width: 100%;
    padding: 10px;
    background-color: #F5F5F5;
    height: auto;
    display: flex;
    img{
        width: 100px;
        z-index: 3;
        position: absolute;
    }
`

export let Input = styled.input`
    width: 40%;
    border-radius: 30px;
    border: 1px solid #d2d2d2;
    padding: 5px 10px;
`

export let IconDiv = styled.div`
    display: flex;
    justify-content: center;
    span{
        color: grey;
        transition: 0.3s all;
        cursor: pointer;
        font-size: 25px;
        margin: 10px;
        &:hover{
            color: #FB016F;
        }
    }
`