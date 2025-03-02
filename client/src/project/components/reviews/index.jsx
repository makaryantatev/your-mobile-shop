import { useState, useEffect } from "react";
import productApi from "../../api/api/servicesApi";
import { H1, Input, MainDiv } from "../signIn/style"

export const Reviews = () => {
    const [formData, setFormData] = useState({})
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const addReview = async () => {
    //     const token = localStorage.getItem('token');
    //     console.log(token);
    //     console.log(1); 

    //     try {
    //         const res = await productApi.addReview(token, { desc: formData.desc });
    //         console.log(res.data); 
    //     } catch (error) {
    //         console.error("Error adding review");
    //     }
    // };

    const addReview = async () => {
        const token = localStorage.getItem("token");
    
        if (!formData.desc || !formData.starCount) {
            console.error("All fields are required");
            return;
        }
    
        try {
            const res = await productApi.addReview(token, {
                desc: formData.desc,
                starCount: Number(formData.starCount) // Ensure it's a number
            });
    
            console.log("Review added successfully:", res.data);
        } catch (error) {
            console.error("Error adding review:", error.response?.data || error);
        }
    };


    // useEffect(() => {
    //     const fetchReviews = async () => {
    //         const token = localStorage.getItem("token");
    //         if (!token) {
    //             setError("Unauthorized: Please log in as admin.");
    //             return;
    //         }

    //         try {
    //             const res = await productApi.getReviews(token);
    //             setReviews(res.data);
    //         } catch (error) {
    //             setError(error.response?.data?.error || "Error fetching reviews");
    //         }
    //     };

    //     fetchReviews();
    // }, []);


    useEffect(() => {
        const fetchReviews = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Unauthorized: Please log in as admin.");
                return;
            }
    
            try {
                const res = await productApi.getReviews(token);
                console.log("Fetched Reviews:", res.data); 
                setReviews(res.data);
            } catch (error) {
                setError(error.response?.data?.error || "Error fetching reviews");
            }
        };
    
        fetchReviews();
    }, []);
    return (
        <>
            <div style={{ height: "auto", padding: "30px" }}>
                <H1> Reviews </H1>
                <input type="text" placeholder="Reviews..." name="desc" onChange={handleChange} />
                <input type="number" placeholder="Rate 0 to 5" name="starCount" onChange={handleChange} />

                <br />
                <button onClick={addReview}> send </button>
            </div>
        </>
    )
}
