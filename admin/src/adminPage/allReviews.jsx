import { useState, useEffect } from "react";
import { getAllReviews, updateReviewStatus } from "../api";

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            const adminToken = localStorage.getItem("adminToken");
            if (!adminToken) {
                setError("Unauthorized: Please log in as admin.");
                return;
            }

            try {
                const res = await getAllReviews(adminToken);
                setReviews(res.data);
            } catch (error) {
                setError(error.response?.data?.error || "Error fetching reviews");
            }
        };

        fetchReviews();
    }, []);

    const markAsDone = async (id) => {
        const adminToken = localStorage.getItem("adminToken");
        if (!adminToken) return;

        try {
            await updateReviewStatus(adminToken, id, "done");
            setReviews(reviews.map(review => 
                review._id === id ? { ...review, status: "done" } : review
            ));
        } catch (error) {
            console.error("Error updating review status:", error.response?.data || error);
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Admin: All Reviews</h1>
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review._id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                        <h3>{review.name} ({review.number}/5)</h3>
                        <p>{review.description}</p>
                        <p>Status: <strong>{review.status}</strong></p>
                        {review.status !== "done" && (
                            <button onClick={() => markAsDone(review._id)}>Mark as Done</button>
                        )}
                    </div>
                ))
            ) : (
                <p>No reviews found.</p>
            )}
        </div>
    );
};
