import React from 'react'

const Card = ({ data }) => {
    const { avatar_url, login, name, public_repos, public_gists, created_at } = data;
    console.log(data);
   
    return (
        <>
        {
            <div className="box">
            <div className="cart">
                <figure className='text-center'>
                <img src={avatar_url} alt="avatar image" height={100} className='rounded-circle my-3' />
                </figure>
                 <strong> Username :</strong>{login} <br />
                 <strong> Name : </strong>{name ? name : "No Name"} <br />
                 <strong> No. of public repos :  </strong> {public_repos} <br />
                 <strong> No. of public gists :</strong> {public_gists} <br />
                 <strong> Profile created at :</strong>{(created_at)?.toString().slice(0, 10)} <br />
            </div>
            </div>

        }
                </>
    )
}

export default Card
