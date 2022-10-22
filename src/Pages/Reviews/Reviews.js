import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://laptopgizmo.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className=' my-14 text-center text-secondary font-bold text-4xl'>Reviews</h1>
            {
                reviews?.length ? (
                    <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>

                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                ) : (
                    <Loading />
                )
            }
        </div>
    );
};

export default Reviews;