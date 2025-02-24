import styled from "styled-components";

export let MainDiv = styled.div`
    position: relative  ;
    width: 100%;
    height: auto;
    background: linear-gradient(120deg, #f4f4f4, #e2e2e2);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    align-items: center; 
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px !important;
    
    div {
        padding: 30px;
        width: 15%;
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
