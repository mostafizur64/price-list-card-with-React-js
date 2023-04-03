import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        {
            id: 1,
            name: "John Smith",
            physics: 80,
            math: 90,
            programming: 85
        },
        {
            id: 2,
            name: "Sarah Lee",
            physics: 75,
            math: 85,
            programming: 90
        },
        {
            id: 3,
            name: "Mike Chen",
            physics: 85,
            math: 80,
            programming: 80
        },
        {
            id: 4,
            name: "Lisa Nguyen",
            physics: 90,
            math: 95,
            programming: 75
        },
        {
            id: 5,
            name: "David Kim",
            physics: 70,
            math: 80,
            programming: 90
        },
        {
            id: 6,
            name: "Emma Davis",
            physics: 85,
            math: 75,
            programming: 85
        },
        {
            id: 7,
            name: "Alex Wilson",
            physics: 80,
            math: 85,
            programming: 80
        },
        {
            id: 8,
            name: "Grace Lee",
            physics: 95,
            math: 90,
            programming: 85
        },
        {
            id: 9,
            name: "Adam Smith",
            physics: 70,
            math: 80,
            programming: 70
        },
        {
            id: 10,
            name: "Olivia Taylor",
            physics: 85,
            math: 95,
            programming: 90
        },
        {
            id: 11,
            name: "Eric Kim",
            physics: 80,
            math: 85,
            programming: 80
        },
        {
            id: 12,
            name: "Sophia Brown",
            physics: 90,
            math: 90,
            programming: 85
        }
    ];

    return (
        <div className='mt-4'>
            <LineChart
                width={1000}
                height={300}
                data={students}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="physics" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="math" stroke="#82ca9d" />
                <Line type="monotone" dataKey="programming" stroke="#82ca9d" />
                <Line type="monotone" dataKey="programming" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Dashboard;