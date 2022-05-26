import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-center text-2xl text-primary'>Hi , I am Parvez Rahman</h1>
            <h1 className='text-center text-2xl text-primary'>Email Address : <span className='text-primary'>iamparvezrahman@gmail.com</span></h1>
            <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>SSC</th>
        <th>HSC</th>
        <th>Bsc</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>Institute Name</th>
        <td>Elenga High School</td>
        <td>Ghatail Cantonment Public School & College</td>
        <td>Tejgaon College</td>
      </tr>
     
      <tr>
        <th>Passed Year</th>
        <td>2013</td>
        <td>2015</td>
        <td>Running</td>
      </tr>

      <tr>
        <th>GPA</th>
        <td>4.63</td>
        <td>4.67</td>
        <td>Appeared Soon</td>
      </tr>
    </tbody>
  </table>

  <ul>
      <h1 className='text-xl font-bold'>list of technologies I have as a web developer</h1>
      <li>1. React</li>
      <li>2. Javascript</li>
      <li>3. Bootstap</li>
      <li>4. Tailwind</li>
      <li>5. Style Component</li>
      <li>6. Git</li>
      <li>7. HTML</li>
      <li>8. Vanilla CSS</li>
  </ul>
</div>
<h1 className='text-center text-xl font-bold text-primary'>Three of projects</h1>
        
        <a className='text-center block' href='https://perfumes-granary.web.app/'>https://perfumes-granary.web.app/</a>
        
        <a className='text-center block' href='https://vision-of-wedding-photographer.web.app/'>https://vision-of-wedding-photographer.web.app/</a>
        
        <a className='text-center block' href='https://crazy-movie-reviews-parvez.netlify.app/dashboard'>https://crazy-movie-reviews-parvez.netlify.app/</a>
        </div>
    );
};

export default MyPortfolio;