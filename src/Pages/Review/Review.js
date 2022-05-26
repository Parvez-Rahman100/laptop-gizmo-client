import React from 'react';

const Review = ({review}) => {
    const {email,numericReview,productName,reviewed,reviwerPhoto,userName,userPhoto} = review;
    return (
        <div>
            
            <div class="card max-w-lg bg-base-100 shadow-xl my-10">
  <figure><img className='rounded-full h-full' style={{width:'60px'}} src={reviwerPhoto || userPhoto} alt="Reviwer" /></figure>
  <div class="card-body">
    <h2 class="text-lg font-bold">
      Reviewed Product : {productName}
      <div class="badge badge-primary p-4 ml-4"> Rating: {numericReview}</div>
    </h2>
    <p>Reviewer Comment : {reviewed}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline p-5">{email}</div> 
      <div class="badge badge-outline p-3">Reviewer Name : {userName}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;