import { useEffect, useState } from "react";
import productApi from "../../api/api/servicesApi";
import { MainDiv, Image, Model, Price, Monthly, ButtonDiv, Div, BigDiv, SearchInput, Select } from "./styled";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa";
// import { FaBalanceScaleLeft } from "react-icons/fa";

export const MyProduct = () => {
    const [product, setProduct] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPriceRange, setSelectedPriceRange] = useState("all");
    const [barev, setBarev] = useState(false)
    const nav = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await productApi.getProduct();
        setProduct(response.data);
        setFiltered(response.data);
    };

    const addToBasket = async (id) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in");
            return;
        }
        await productApi.addToBasket(token, id);
        setBarev(e => !e)

        setTimeout(() => {
            setBarev(false);
        }, 3000);
    };

    const formatPrice = (price) => {
        let monthly = Math.round((price / 12) * 1.1);
        return monthly.toString().replace(/\B(?=(\d{2})+(?!\d))/g, " ");
    };

    const handleChangeFilter = (e) => {
        setSearchTerm(e.target.value);
        applyFilters(e.target.value, selectedPriceRange);
    };

    const handlePriceFilter = (e) => {
        setSelectedPriceRange(e.target.value);
        applyFilters(searchTerm, e.target.value);
    };

    const applyFilters = (searchValue, priceRange) => {
        let filteredProducts = product.filter((el) =>
            el.brand.toLowerCase().includes(searchValue.toLowerCase())
        ); 

        if (priceRange === "below200k") {
            filteredProducts = filteredProducts.filter((el) => el.price < 200000);
        } else if (priceRange === "200k-500k") {
            filteredProducts = filteredProducts.filter(
                (el) => el.price >= 200000 && el.price <= 500000
            );
        } else if (priceRange === "above500k") {
            filteredProducts = filteredProducts.filter((el) => el.price > 500000);
        }

        setFiltered(filteredProducts);
    };

    return (
        <>
            <BigDiv>
                <SearchInput type="text" placeholder="Search..." value={searchTerm} onChange={handleChangeFilter} />
                <br />
                <Select onChange={handlePriceFilter} value={selectedPriceRange}>
                    <option value="all"> All Prices </option>
                    <option value="below200k"> Below 200,000 AMD </option>
                    <option value="200k-500k"> 200,000 - 500,000 AMD </option>
                    <option value="above500k"> Above 500,000 AMD </option>
                </Select>

            </BigDiv>
            <div style={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                background: barev ? "green" : "red",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                zIndex: 1000
            }}>
                {barev ? "Product successfully added to basket!" : "The product is already in the basket"}
            </div>
            <MainDiv>
                {filtered.length > 0 ? (
                    filtered.map((e) => (
                        <Div key={e._id}>
                            <Image src={`http://localhost:3001/uploads/${e.imageUrl}`} alt={e.name} onClick={() => nav(`/phone/${e._id}`)} />
                            <br />
                            <Model>{e.brand} {e.name}</Model>
                            <Price>֏ {e.price}</Price>
                            <Monthly> Monthly <span>֏ {formatPrice(e.price)} </span> </Monthly>
                            <ButtonDiv onClick={() => addToBasket(e._id)}> Add to basket <span style={{ fontSize: "16px" }}> <TiShoppingCart /> </span> </ButtonDiv>
                            <br />
                            <ButtonDiv onClick={() => nav(`/phone/${e._id}`)}> View the phone </ButtonDiv>
                            <ButtonDiv> <span> Credit price </span> </ButtonDiv>
                        </Div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </MainDiv>
        </>
    );
};
