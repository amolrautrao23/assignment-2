import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import "../App.css"
import NotFound from './NotFound';

const Home = () => {
    const [data, setData] = useState({})
    const [user, setUser] = useState("")
    

    const getData = async () => {
        try {
            const res = await axios.get(`https://api.github.com/users/${user}`);
            setData(res.data);  
            // console.log(res.data);
        } catch (error) {
            // console.log("data not found !!!");
            setData(null)

        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        getData()
    }

    return (
        <>
            <div className='wrapper'>
                <form action="" onSubmit={handleSubmit}>
                    <h3 className='my-3'>User Information</h3>
                    <input type="search" placeholder='Enter username' onChange={e => setUser(e.target.value)} value={user} required /><br />
                    <button type='submit'>Search</button>
                </form>
       
              
                        {data ?<Card data={data} /> : <NotFound />}
                
                
            </div>
        </>
    )
}

export default Home
