import React from 'react';
import BodyChild from "./BodyChild.jsx";
import james from "../../assets/body/james.jpg";
import jakir from "../../assets/body/jakir.jpg";
import delwar from "../../assets/body/delwar.jpg";
import jbud from "../../assets/body/jbud.jpg";
import diborah from "../../assets/body/diborah.jpg";

const BodyMain = () => {
    const numbers = [1, 2, 3, 4, 5];
    const reviews = [
        {
            id: 1,
            Id:"#C10234",
            name: "Alice",
            image: james,
            text: "Friendly service\n Josh, Lunar and everyone at Just Property in Hastings deserved a big ThankYou\nfrom us for moving us from Jakarta to Medan during the lockdown.",
           
            tags: ["EXCELENT", "GREAT", "BEST SERVICE"],
            date: " join on 2024-11-08", 
            time: "3:30 PM",
            tags2: ["Reject", "Approve"],
        },
        {
            id: 2,
            Id:"#C10235",
            name: "Bob",
            image: jakir,
            text: "Friendly service\n Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You\nfrom us for moving us from Jakarta to Medan during the lockdown.",
            
            tags: ["BAD SERVICE", "UNEXPECTED"],
            date: " join on 2024-11-07",
            time: " 10:15 AM",
            tags2: ["Reject", "Approve"],
        },
        {
            id: 3,
            Id:"#C10236",
            name: "Charlie",
            image: delwar,
            text: "Friendly service\n Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You\nfrom us for moving us from Jakarta to Medan during the lockdown.",
           
            tags: ["EXCELENT", "GREAT", "BEST SERVICE"],
            date: " join on 2024-11-06",
            time: "2:45 PM",
            tags2: ["Reject", "Approve"],
        },
        {
            id: 4,
            Id:"#C10237",
            name: "David",
            image: jbud,
            text: "Friendly service\n Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You\nfrom us for moving us from Jakarta to Medan during the lockdown.",
           
            tags: ["BAD SERVICE", "UNEXPECTED"],
            date: " join on 2024-11-05", 
            time: "1:20 PM",
            tags2: ["Reject", "Approve"],
        },
        {
            id: 5,
            Id:"#C10239",
            name: "Eve",
            image: diborah,
            text: "Friendly service\n Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You\nfrom us for moving us from Jakarta to Medan during the lockdown.",
            tags:["EXCELENT", "GREAT", "BEST SERVICE"],
            date: " join on 2024-11-04",
            time: " 11:00 AM",
            tags2: ["Reject", "Approve"],
        },
    ];

    return (
        <>
       <div className='w-full h-full gap-5 top-20 left-70 '>
        <div className=' w-80 text-2xl font-bold font-manrope mt-5 ml-3 '>
           Review List 
        </div>
        <div className='w-full h-full mt-5 gap-5'>
        <div className="bg-white w-80 h-10 top-5 left-6 gap-4  font-manrope font-bold cursor-pointer flex rounded-xl justify-center items-center">
  <h1 className="relative group text-gray-500 hover:text-blue-600">
    All Reviews
    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-top-left"></span>
  </h1>
  <h1 className="relative group text-gray-500 hover:text-blue-600">
    Published
    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </h1>
  <h1 className="relative group text-gray-500 hover:text-blue-600">
    Deleted
    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </h1>
</div>
       <div >
       <BodyChild reviews={reviews} />
       </div>
       <div className='w-full h-10 flex 
       justify-between items-center  mb-3'>
        <div className='w-[448px] h-5 top-5 ml-5'>
            <h1 
            className='w-[393px] h-5 text-base font-medium
                       leading-6 text-left font-manrope'>
                Showing 1 to 5 Reviews
            </h1>

        </div>
        <div
  className="w-[295px] h-10 py-1.5 px-6 mr-6 rounded-lg bg-white flex justify-between items-center cursor-pointer"
>
  <h1
    className="w-10 h-10 flex items-center justify-center 
    text-base font-medium leading-6 text-left font-manrope hover:bg-blue-500 hover:text-white rounded-xl"
  >
    {"<"}
  </h1>
  {numbers.map((number) => (
    <h1
      key={number}
      className="w-10 h-10 flex items-center justify-center 
      text-base font-medium leading-6 text-left font-manrope hover:bg-blue-500 hover:text-white rounded-xl"
    >
      {number}
    </h1>
  ))}
  <h1
    className="w-10 h-10 flex items-center justify-center 
    text-base font-medium leading-6 text-left font-manrope hover:bg-blue-500 hover:text-white rounded-xl"
  >
    {">"}
  </h1>
</div>



       </div>
       
       </div>
       </div>
        </>
        
    );
};

export default BodyMain;