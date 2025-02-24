import { useEffect, useState, useRef } from "react";
import productApi from "../../api/api/servicesApi";
import { MainDiv, Image, Model, Price, Monthly, ButtonDiv, Div, H1, BigDiv } from "../phones/styled";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { RemoveButton } from "./style";


export const Basket = () => {
    const [phones, setPhones] = useState(null);
    const [active, setActive] = useState(false)
    const nav = useNavigate();

    const fetchPhone = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await productApi.getProductBasket(token);
            setPhones(response.data);
        } catch (error) {
            console.error("Error fetching phone details:", error);
        }
    };

    useEffect(() => {
        fetchPhone();
    }, [active]);

    if (!phones) return <p style={{ marginTop: "200px" }}>Loading...</p>;
    console.log(phones);

    const formatPrice = (price) => {
        let monthly = Math.round((price / 12) * 1.1);
        return monthly.toString().replace(/\B(?=(\d{2})+(?!\d))/g, " ");
    };

    const deletePhoneFromBasket = async ( id) => {
        try {
           const token = localStorage.getItem("token");
            if (!token) {
               alert("You must be logged in");
            return;
            }
            await productApi.deleteFromBasket(token, id); 
            setPhones((e) => e.filter(phone => phone._id !== id));
        }   catch (error) {
            console.error("Error deleting phone:", error);
        }
     };

    const removeFromBasket = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in");
            return;
        }
        await productApi.removeFromBasket(token);
        setPhones([])
    };


    return (
        <>
            <div style={{ paddingTop: "74px" }}>
                <BigDiv>
                    <H1> Basket </H1>
                    {phones.length > 0 && (
                        <RemoveButton onClick={removeFromBasket}> Remove All </RemoveButton>
                    )}
                </BigDiv>
                <MainDiv>
                    {phones.length > 0 ? (
                        phones.map((e) => (
                            <Div key={e._id}>
                                {/* <div> <FaRegHeart />
                                       <FaBalanceScaleLeft /> </div> */}
                                <Image src={`http://localhost:3001/uploads/${e.imageUrl}`} alt={e.name} onClick={() => nav(`/phone/${e._id}`)} />
                                <br />
                                <Model> {e.brand} {e.name} </Model>
                                <Price> ֏ {e.price} </Price>
                                <Monthly> Monthly <span> ֏ {formatPrice(e.price)} </span> </Monthly>
                                <ButtonDiv onClick={() => deletePhoneFromBasket(e._id)}> <span> Delete from basket </span> </ButtonDiv>
                                <br />
                                <ButtonDiv onClick={() => nav(`/phone/${e._id}`)}> View the phone </ButtonDiv>
                                {/* <ButtonDiv> Add to basket <span style={{ fontSize: "16px" }}> <TiShoppingCart /> </span> </ButtonDiv> */}
                                <ButtonDiv> <span> Credit price </span> </ButtonDiv>
                            </Div>
                        ))
                    ) : (
                        <p >No products found </p>
                    )}
                </MainDiv>
            </div>
        </>
    );
};



