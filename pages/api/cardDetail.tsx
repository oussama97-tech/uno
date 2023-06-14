import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CardDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [cardDetails, setCardDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the card details using the ID
        // Update the `cardDetails` state with the fetched data
        // Set the `loading` state to false when the data is fetched

        // Example API request using `fetch`:
        fetch(`/api/cards/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setCardDetails(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    // Render the card details
    return (
        <div>
        <p>{ cardDetails } < /p>

    </div>
  );
};

export default CardDetails;
