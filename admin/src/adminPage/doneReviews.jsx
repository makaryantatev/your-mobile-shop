import { useState, useEffect } from "react";
import { getDoneReviews } from "../api";

export const DoneReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await getDoneReviews();
                setReviews(res.data);
            } catch (error) {
                setError(error.response?.data?.error || "Error fetching reviews");
            }
        };

        fetchReviews();
    }, []);

    return (
        <div style={{ padding: "30px" }}>
            <h1>Admin: Done Reviews</h1>
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review._id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                        <h3>{review.name} ({review.number}/5)</h3>
                        <p>{review.description}</p>
                    </div>
                ))
            ) : (
                <p>No done reviews found.</p>
            )}
        </div>
    );
};
