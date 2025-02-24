// // import { useEffect, useState } from "react"
// // import productApi from "../../api/api/servicesApi"
// import { MainDiv, Image, Model, Price, Monthly, ButtonDiv, Div, H1 } from "./styled"
// // import { FaRegHeart } from "react-icons/fa";
// // import { FaBalanceScaleLeft } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";


// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import productApi from "../../api/api/servicesApi";
// // import { MainDiv, Image, Model, Price, Monthly, ButtonDiv, Div } from "./styled";
// import { TiShoppingCart } from "react-icons/ti";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import productApi from "../../api/api/servicesApi";

// export const EachPhone = () => {
//     const { id } = useParams();
//     const [phone, setPhone] = useState(null);

//     useEffect(() => {
//         const fetchPhone = async (id) => {
//             try {
//                 const response = await productApi.getOneProduct(id);
//                 setPhone(response.data);
//             } catch (error) {
//                 console.error("Error fetching phone details:", error);
//             }
//         };
//         fetchPhone();
//     }, [id]);

//     if (!phone) return <p style={{ marginTop: "200px" }}>Loading...</p>;
//     console.log("Phone data:", phone);


//     const addToBasket = async (id) => {
//         const token = localStorage.getItem("token")
//         if (!token) {
//             alert("You must be logged in")
//             return
//         }
//         console.log(token, id);
//         const response = await productApi.addToBasket(token, id)
//         console.log(response.data);
//     }

//     const formatPrice = (price) => {
//         let monthly = Math.round((price / 12) * 1.1);
//         return monthly.toString().replace(/\B(?=(\d{2})+(?!\d))/g, " ");
//     };

//     return (
//         <MainDiv>
//             <Div key={phone._id}>
//                 <Image src={`http://localhost:3001/uploads/${phone.imageUrl}`} alt={phone.name} />
//                 <Model> {phone.brand} {phone.name} </Model>
//                 <Price> ֏ {phone.price} </Price>
//                 <Monthly> Monthly <span> ֏ {formatPrice(phone.price)} </span> </Monthly>
//                 <ButtonDiv> View the phone </ButtonDiv>
//                 <ButtonDiv onClick={() => addToBasket(phone._id)}> Add to basket <TiShoppingCart /> </ButtonDiv>
//                 <ButtonDiv> <span> Credit price </span> </ButtonDiv>
//             </Div>
//         </MainDiv>
//     );
// };



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/api/servicesApi";
import { MainDiv, Image, Model, Price, Monthly, ButtonDiv, Div } from "./styled";
import { TiShoppingCart } from "react-icons/ti";

export const EachPhone = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState(null);

    useEffect(() => {
        if (!id) {
            console.error("Error: ID is undefined");
            return;
        }
        const fetchPhone = async () => {
            try {
                const response = await productApi.getOneProduct(id);
                setPhone(response.data);
            } catch (error) {
                console.error("Error fetching phone details:", error);
            }
        };
        fetchPhone();
    }, [id]);

    if (!phone) return <p style={{ marginTop: "200px" }}>Loading...</p>;

    const addToBasket = async (phoneId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in");
            return;
        }
        console.log(token, phoneId);
        const response = await productApi.addToBasket(token, phoneId);
        console.log(response.data);
    };

    const formatPrice = (price) => {
        let monthly = Math.round((price / 12) * 1.1);
        return monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <MainDiv>
            <Div key={phone._id}>
                <Image src={`http://localhost:3001/uploads/${phone.imageUrl}`} alt={phone.name} />
                <Model> {phone.brand} {phone.name} </Model>
                <Price> ֏ {phone.price} </Price>
                <Monthly> Monthly <span> ֏ {formatPrice(phone.price)} </span> </Monthly>
                <ButtonDiv> View the phone </ButtonDiv>
                <ButtonDiv onClick={() => addToBasket(phone._id)}> Add to basket <TiShoppingCart /> </ButtonDiv>
                <ButtonDiv> <span> Credit price </span> </ButtonDiv>
            </Div>
        </MainDiv>
    );
};
