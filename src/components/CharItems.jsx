import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const CharItems = ({url}) => {
  const [imgChar, setImgeChar] = useState([]);

  useEffect(() =>{
    axios 
    .get(url)
    .then((res) => setImgeChar(res.data))
  }, [])

  return (
    
      <li className='detail-character'>
        {imgChar.name}
        <img src={imgChar.image} alt="" />
        <h1>  box status: {imgChar.status}</h1>
        <p className="title-info">raze</p>
        <p className="title-data">{imgChar?.species}</p>
        <p className="title-info">origin</p>
        <p className="title-data">{imgChar.origin?.name}</p>
        <p className="title-info">episodes where appear</p>
        <p className="title-data">{imgChar.episode?.length}</p>
      </li>

      
   
  );
};

export default CharItems;