import React, { useState } from 'react';

const Test = () => {
    const [isEdit, setIsEdit] = useState(false);

    const [userInfo, setUserInfo] = useState({
        name: "Al Noman",
        email: "toalnoman@gmail.com",
        phone: "01731686489",
        country: "Bangladesh"
    });

    

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        // Optionally, handle saving the updated info here.
        console.log('Updated userInfo:', userInfo);
    };

    return (
        <div className='p-10'>
            {!isEdit ? (
                <div className='border p-4 bg-slate-300 m-4 w-1/4 rounded-2xl'>
                    <h1>Name: {userInfo.name}</h1>
                    <h1>Email: {userInfo.email}</h1>
                    <h1>Phone: {userInfo.phone}</h1>
                    <h1>Country: {userInfo.country}</h1>
                    <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="country"
                        value={userInfo.country}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Test;
