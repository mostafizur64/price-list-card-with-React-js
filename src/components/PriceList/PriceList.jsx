import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrice] = useState([]);

    useEffect(()=>{
        fetch('prices.json').then((response) =>response.json()).then(data=>setPrice(data))
    },[])

    return (
        <div className='mx-12'>
            <h3 className='text-5xl bg-purple-400 text-purple-950 text-center p-4 font-bond mt-4 '>this is for mens Compfortable price!</h3>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.map((price) =>
               <PriceCart
                key = {price.id}
                price={price}
               ></PriceCart>


                )
            }
            </div>
        </div>
    );
};

export default PriceList;