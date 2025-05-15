import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffes = useLoaderData();
    console.log(coffes);
    
    return (
        <div>
            
        </div>
    );
};

export default Home;