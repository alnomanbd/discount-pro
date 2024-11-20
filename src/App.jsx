import React, { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("coupon.data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);
  return (
    <div>
      <h1 className='font-bold underline'>{data.length}</h1>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App