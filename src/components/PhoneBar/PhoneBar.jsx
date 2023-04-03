import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone').then(data => {
            const loadedData = data.data.data
            console.log(loadedData);
            const phonesData = loadedData.map(phone => {
                const part = phone.slug.split('-');
                const price = parseInt(part[1]);
                console.log(price);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price,

                }
                return phoneInfo
            })
            setPhones(phonesData)

        })
    }, [])
    return (
        <div>
            <BarChart width={1000} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
        </div>
    );
};

export default PhoneBar;