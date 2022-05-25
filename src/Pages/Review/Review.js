import React from 'react';

const Review = ({review}) => {
    console.log(review);
    const {email,numericReview,productName,reviewed,userName,userPhoto} = review;
    return (
        <div>
            
            <div class="card max-w-lg bg-base-100 shadow-xl my-10">
  <figure><img className='rounded-full' src={userPhoto} alt="Reviwer" /></figure>
  <div class="card-body">
    <h2 class="text-lg font-bold">
      Reviewed Product : {productName}
      <div class="badge badge-primary p-4 ml-4"> Rating: {numericReview}</div>
    </h2>
    <p>Reviewer Comment : {reviewed}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline p-5">Reviewer Email : {email}</div> 
      <div class="badge badge-outline p-3">Reviewer Name : {userName}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;