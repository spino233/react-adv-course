import React from "react";
import { useState } from "react";

const FetchData = () => {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then((r) => r.json())
            .then((j) => setUser(j))
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return Object.keys(user).length > 0 ? (
        <div style={{padding: "40px"}}>
            <h1>Customer Data</h1>
            <h2>{user.results[0].name.first}</h2>
            <img 
                src={user.results[0].picture.large} 
                alt="Current customer picture"
            />        
        </div>
    ) : (
        <h1>Data pending...</h1>
    )
}

export default FetchData;