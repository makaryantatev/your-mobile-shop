import styled from "styled-components";

export const RemoveButton = styled.button`
    width: 10%;
    padding: 7px 16px;
    margin-top: 10px;
    font-size: 16px;
    color: #333;
    font-family: Candara;
    background-color: #f9f9f9;
    border: 1px solid #ffc400;
    border-radius: 0px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      border-color: #ffc400;
      box-shadow: 0 0 10px #ffc400;
    }

    &:active {
      background-color: #f1f1f1;
      transform: scale(0.98);
    }

`;