import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DarkDiv, IconDiv, MenuCloser, MyNavbar, NavbarDiv, OpenMenu } from "./styled";
import { IoIosMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { FaRegUser, FaRegHeart, FaShoppingCart, FaBalanceScaleLeft } from "react-icons/fa";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const nav = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const navigateTo = (path) => {
        setMenuOpen(false);
        nav(path);
    };

    const profile = () => {
        const token = localStorage.getItem("token")

        if (token) {
            nav("/profile")
        } else{
            nav("/signIn")
        }
    }

    return (
        <>
            {menuOpen && <DarkDiv onClick={toggleMenu} />}
            <MyNavbar>
                <NavbarDiv>
                    <div>
                        <a href="/">
                            <img style={{ width: "100px" }} src="src/project/img/08Oct Anis Free Upload .png" alt="Logo" />
                        </a>
                    </div>
                    <div>
                        <IconDiv>
                            <span onClick={profile}> <FaRegUser /> </span>
                            <span> <FaRegHeart /> </span>
                            <span onClick={() => navigateTo('/basket')}> <FaShoppingCart /> </span>
                            <span> <FaBalanceScaleLeft /> </span>
                            <span onClick={toggleMenu} style={{ fontSize: "25px", cursor: "pointer" }}> <IoIosMenu style={{ opacity: menuOpen ? "0" : "1", marginBottom: "7px" }} /> </span>
                        </IconDiv>
                    </div>
                </NavbarDiv>
            </MyNavbar>

            <OpenMenu $menuOpen={menuOpen}>
                <MenuCloser>
                    <span onClick={toggleMenu} style={{ fontSize: "20px", cursor: "pointer" }}> <CgClose /> </span>
                </MenuCloser>
                <ul>
                    <li><a href=""> Phones </a></li>
                    <li><a href=""> Pills </a></li>
                    <li><a href=""> Notebooks </a></li>
                    <li><a href=""> Watches </a></li>
                    <li><a href=""> Accessories </a></li>
                    <li><a href=""> Computers </a></li>
                </ul>
            </OpenMenu>
        </>
    );
};
