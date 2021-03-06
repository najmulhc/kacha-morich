import React from 'react';
import chili from '../../images/chili.jpg';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SIngleReview/SingleReview';
const Home = () => {
    const [reviews, setReviews] = useReviews() 
    const selected = reviews.filter(review=> reviews.indexOf(review) < 3);
    console.log(selected);
    return (
      <main>
        <div className="grid items-center mx-16 grid-cols-2">
         <div className="">
             <h1 className='text-6xl font-bold text-green-500  px-6 '>Exeperience the <span className='text-red-500'>Hottest</span> Chili in the town </h1>
            <Link to='/reviews'><button className='mt-10 font-semibold text-white px-8 py-6 rounded-md bg-green-600 text-4xl'>See reviews</button></Link>
        </div>  
        <div>
            <img src= {chili} alt="" />
        </div>
      
       </div>
        <h1 className='text-5xl my-10  text-green-800 font-bold '>Customer Reviews</h1>
        {
            selected.map(review => <SingleReview review={review} key={review._id}/>)
        }
         <Link to='/reviews'><button className='mt-10 font-semibold mb-10 text-white px-8 py-6 rounded-md bg-green-600 text-4xl'>See more reviews</button></Link>
      </main>
    );
};

export default Home;