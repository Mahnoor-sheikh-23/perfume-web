// import React, { useState } from "react";

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     // Increment Function
//     const increment = () => setCount(count + 1);

//     // Decrement Function (Prevents going below 0)
//     const decrement = () => {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//     };

//     return (
//         <div className="flex  items-center justify-center p-2  border border-black h-[31px] w-[190px] bg-whit">
//             {/* Counter Display */}
//             <div className=" flex space-x-4 pr-5 mb-3 ">
//                 <button
//                     onClick={decrement}
//                     className=" text-black text-[40px] rounded-mdtransition"
//                     disabled={count === 0} // Optional: Disable button at 0
//                 >
//                     -
//                 </button>
//             </div>
//             <div className="text-2xl  border-r border-l pl-9 pr-9 border-black text-gray-800 ">{count}</div>

//             {/* Buttons */}
//             <div className="flex space-x-4 pl-5 mb-2">
//                 {/* Decrement Button */}

//                 {/* Increment Button */}
//                 <button
//                     onClick={increment}
//                     className=" text-black text-[40px] rounded-md transition"
//                 >
//                     +
//                 </button>
//             </div>
//         </div>  
//     );
// };

// export default Counter;


import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // Increment Function
    const increment = () => setCount(count + 1);

    // Decrement Function (Prevents going below 0)
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center justify-center p-2 border border-black h-[31px] w-[190px] bg-white sm:h-[40px] sm:w-[250px] lg:h-[50px] lg:w-[300px]">
            {/* Counter Display */}
            <div className="flex space-x-4 pr-5 mb-3">
                <button
                    onClick={decrement}
                    className="text-black text-[30px] sm:text-[35px] lg:text-[40px] rounded-md transition"
                    disabled={count === 0} // Optional: Disable button at 0
                >
                    -
                </button>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl border-r border-l pl-5 pr-5 sm:pl-7 sm:pr-7 lg:pl-9 lg:pr-9 border-black text-gray-800">
                {count}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 pl-5 mb-2">
                {/* Increment Button */}
                <button
                    onClick={increment}
                    className="text-black text-[30px] sm:text-[35px] lg:text-[40px] rounded-md transition"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;

