import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BodyChild = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return <div>No reviews to display</div>;
    }
    

    return (
        <div className="flex flex-col w-full h-full py-2 px-6 mt-6 gap-4 items-center  rounded-xl">
  {reviews.map((review) => (
    <div
      key={review.id}
      className="flex w-full py-4 gap-4 items-start border border-gray-300 shadow-sm rounded-lg bg-white"
    >
        <div className='w-full h-28 gap-7 flex'>
            <div className='w-60 h-24 gap-4 flex'>
      {/* Reviewer Image */}
      <img 
        src={review.image}
        alt={`${review.name}'s profile`}
        className="w-16 h-16 ml-5 rounded-full"
      />

      {/* Review Details */}
      <div className="flex flex-col w-40 h-24 gap-1.5">
        {/*  Id and Name  */}
        <div className="flex-cols w-40 h-11 gap-1 justify-between items-center">
        <p className=" w-40 h-5 leading-7 text-xl font-medium text-blue-600">{review.Id}</p>
        <p className=" w-40 h-5 leading-7 text-xl font-medium text-[#11142D]">{review.name}</p>
        </div>
            {/* joining date and time */}
        <div className=" w-40 h-11 gap-1flex-cols justify-between items-center">
          <p className=" w-40 h-5 text-sm font-semibold text-[#808191]">{review.date}</p>
          <p className="w-40 h-5 font-semibold text-sm text-[#808191]">{review.time}</p>
        </div>
        </div>
      </div>
       {/* Right Side */}
       <div className='w-full h-28 gap-3 ml-3 flex '>
            <div className='w-full h-28 gap-4 flex-col '>
                <p className='w-full h-16 font-semibold font-manrope leading-5 text-sm whitespace-pre-line text-[#808191]'>
                    {review.text}
                </p>
                <div className='w-full h-7 gap-2 flex mt-3 '>
                    
                    {review.tags.map(tag => (
                        <button key={tag} 
                        className='h-7 rounded-xl justify-center items-center border-[2px] 
                        border-solid border-blue-700 gap-5'>
                            <p 
                            className='w-fit h-7  px-2 font-semibold 
                            font-manrope leading-6 text-sm
                             text-blue-700'>{tag}
                             </p> 
                             </button>
                    ))}
                </div>
            </div>
            <div className='w-36 h-20  flex-col '>
                <div className='w-40 h-7 gap-2 flex'>
                   <p className='w-6  h-6 font-semibold font-manrope leading-6 text-xl'>3.0</p> 
                   <div className='w-28 h-6 gap-2 flex'>
                    {[...Array(3)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} className="w-6 h-6 text-yellow-500 justify-center items-center" />
                    ))}
                  

                   </div>

                </div>
                <div className='w-40 h-9 gap-2 flex mt-4'>
                        <button 
                        className='h-7 rounded-xl justify-center 
                        items-center border-[2px] 
                        border-solid border-red-700  gap-5'>
                            <p 
                            className='w-fit h-7  px-2 font-semibold 
                            font-manrope leading-5 text-sm
                             text-red-700'>{review.tags2[0]}
                             </p> 
                             </button>
                             <button 
                        className='h-7 rounded-xl justify-center
                         items-center border-[2px] 
                        border-solid bg-green-700 border-green-700 gap-5'>
                            <p 
                            className='w-fit h-7  px-2 font-semibold 
                            font-manrope leading-5 text-sm
                             text-white'>{review.tags2[1]}
                             </p> 
                             </button>
                </div>
                <div>

                </div>

            </div>
       </div>
    </div>
    </div>
  ))}
</div>

    );
};

export default BodyChild;
