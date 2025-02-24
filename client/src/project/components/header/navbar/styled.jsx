import styled from "styled-components";

export const MyNavbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    z-index: 10;

    a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
        margin: 0 1rem;
        transition: color 0.3s;
    }

    a:hover {
        color: #ff9800;
    }
`;

export const NavbarDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

export const OpenMenu = styled.div`
    width: 25%; 
    height: 100%;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); 
    z-index: 11;
    position: fixed;
    top: 0;
    right: ${({ $menuOpen }) => ($menuOpen ? "0" : "-30%")};  
    opacity: ${({ $menuOpen }) => ($menuOpen ? 1 : 0.7)};
    transition: right 0.9s ease-in-out, opacity 0.5s ease-in-out;
    padding: 30px;
    box-sizing: border-box;
    background: linear-gradient(45deg, rgba(55, 55, 55, 0.5), rgba(219, 219, 219, 0.5));

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 30px 0;
    }

    a {
        font-size: 19px;
        font-weight: 700;
        font-family: Candara;
        color: #e0e0e0;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: #ff9800;
            text-shadow: 0px 0px 5px rgba(255, 152, 0, 0.7);
        }
    }

    @media (max-width: 768px) {
        width: 100%; 
        padding: 20px;
    }
`;


export const DarkDiv = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    transition: 0.4s;
    z-index: 2;
`;

export const MenuCloser = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 22px;
    color: white;
    cursor: pointer;
`;

export const IconDiv = styled.div`
    display: flex;
    gap: 15px;

    span {
        font-size: 20px;
        color: #1e1e1e;
        transition: 0.2s all;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            color: #ff9800;
        }
    }
`;
