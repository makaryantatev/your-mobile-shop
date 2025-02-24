import React, { useRef } from "react";
import { BoldP, Footer, Icons, InputIcon, Input, ShabatP, Cp, InputWrapper, Section, Container } from "./styled";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

export let MyFooter = () => {
    return (
        <>
            <Footer>
                <div style={{ textAlign: "center" }}> <BoldP> Our address </BoldP> </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48799.62306160108!2d44.27121078836668!3d40.14280849989354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a94d18ed5f5ed%3A0xfbe8dc7387ca2136!2z0JLQsNCz0LDRgNGI0LDQv9Cw0YI!5e0!3m2!1sru!2sam!4v1733844989483!5m2!1sru!2sam"
                    width="100%"
                    height="450"
                    style={{ border: '0', marginBottom: "20px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
                <Container>
                    <Section>
                        <BoldP> Contacts </BoldP>
                        <br />
                        <Icons> <FaPhoneAlt /> <ShabatP>(+374) 91 12 34 56</ShabatP> </Icons>
                        <br />
                        <Icons> <FaWhatsapp /> <ShabatP>(+374) 91 12 34 56</ShabatP> </Icons>
                    </Section>

                    <Section>
                        <BoldP> Follow our pages </BoldP>
                        <br />
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                            <Icons> <FaFacebook /> </Icons>
                            <Icons> <FaInstagram /> </Icons>
                            <Icons> <FaTiktok /> </Icons>
                            <Icons> <FaYoutube /> </Icons>
                            <Icons> <FaTelegramPlane /> </Icons>
                        </div>
                    </Section>

                    <Section>
                        <BoldP> Working hours </BoldP>
                        <br />  
                        <ShabatP> Saturday։ 10:00-20:00</ShabatP>
                        <br />
                        <ShabatP> Sunday։ 11:00-19:00 </ShabatP>
                    </Section>

                    <Section>
                        <BoldP> Subscribe to the news </BoldP>
                        <br />
                        <InputWrapper>
                            <Input type="text" placeholder="Subscribe" />
                            <InputIcon>
                                <MdOutlineArrowRightAlt />
                            </InputIcon>
                        </InputWrapper>
                    </Section>
                </Container>
                <hr />
                <Cp> {new Date().getFullYear()} © Your Mobile Shop </Cp>
                <Cp> All rights reserved </Cp>
            </Footer>
        </>
    )
} 