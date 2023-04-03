import React from 'react';
import Features from '../Features/Features';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-500 mt-4 rounded  p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold '>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
          <h2 className='text-2xl my-6 font-bold text-center'>{price.name}</h2>
          <h1 className=' underline text-white text-lg'>Features</h1>
          
            {
                price.features.map((feature,inx) =>
                <Features
                key= {inx}
                feature={feature}
                ></Features>
                )
                
            }
            <button className='w-full mt-auto bg-green-500 hover:bg-green-700  py-2 rounded font-bold text-white'>Buy Now</button>
        </div>
    );
};

export default PriceCart;