import styled from "styled-components";

export let MainDiv = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    padding: 50px 100px 100px 100px;
    background: linear-gradient(120deg, #f3f3f3, #e7e7e7);
    box-sizing: border-box;
    font-family: Candara;
`
export let Div = styled.div`
    width: 25%;
    height: auto;
    padding: 40px;
    background-color: #ffffff;
    border: 1px solid #dcdcdc;
`
export let InputDiv = styled.div`
    width: 30%;
    height: auto;
    padding: 20px;
`
export let H1 = styled.h1`
    margin: 0;
    color: #363636;
    display: block;
    font-family: Candara;
    font-weight: 800;
`

export let Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 0;
    background-color: aliceblue;
    margin-bottom: 10px;
`

export let AddBtn = styled.button`
    width: 25%;
    background-color: #303030;
    padding: 10px;
    border: 1px solid #303030;
    border-radius: 0;
    color: white;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
`

export let Image = styled.img`
    width: 170px;
    display: block;
    margin: auto;
`

export let Model = styled.p`
    font-size: 18px;
    letter-spacing: 1px;
    /* font-family: Goudy Old Style; */
    color: black;
    text-align: left;
    display: inline;
    margin-bottom: 10px;
`

export let Price = styled.p`
    font-size: 19px;
    text-align: left;
    margin-top: 10px;
    font-weight: 700;
`

export let Monthly = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    margin-top: 10px;
    span{
        font-weight: 700;
        font-size: 17px;
    }
`

export let ButtonDiv = styled.button`
    padding: 5px 9px;
    width: 45%;
    background-color: white;
    border-radius: 0;
    border: 1px solid black;
    color: black;
    font-size: 12px;
    margin-right: 10px;
    margin-top: 10px;
    transition: 0.3s all;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px, rgba(0, 0, 0, 0.24) 0px 3px 5px;  
        background-color: #f3f3f3;
    }
    span{
        color: #bc9000;
    }
`

export const IconSpan = styled.span`
    color: red;
`

export const BigDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 100px 0 100px;    
    background: linear-gradient(120deg, #f3f3f3, #e7e7e7);
`

export const SearchInput = styled.input`
    width: 30%;
    padding: 5px;
    border: 1px solid #a0a0a0;
    border-radius: 0;
    background-color: white;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0 -20px 36px -30px inset;
`

export const Select = styled.select`
    width: 30%;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid #a0a0a0;
    border-radius: 0;
    background-color: white;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0 -20px 36px -30px inset;
    color: grey;
`;