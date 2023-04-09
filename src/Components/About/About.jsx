import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {

    /**  
     * Following xvshirt thing is for testing purposes
     * */
    const xvshirt = useLoaderData()
    // End xvshirt testing

    return (
        <div>
            <h2>About page</h2>
            <p>Showing the following data for Just testing, from Main.jsx</p>
            <br />
            <p>All t- shirts: {xvshirt.length}</p>
        </div>
    );
};

export default About;