import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY; 
export const Random = () => {

    const [gif, setGif] = useState("");

    const [loading, setLoading] = useState(false)
    
    async function fetchData(){
        setLoading(true)
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`; 
        const {data} = await axios.get(url);
        //destructuring krke o/p mai se sirf data ko nikaal liya
        // console.log(data);
        const imageSource=data.data.images.downsized_large.url;
        // console.log(imageSource)
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData();
    },[])

    function clickHandler(){
         fetchData();
    }

  return (
    <div className='w-1/2 bg-orange-500 rounded-lg border border- flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-semibold text-slate-700 mt-[15px]'>A Random Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }
        <button onClick={clickHandler} className='w-10/12 bg-amber-500 rounded-lg py-2 border border-black mb-[20px]'>Generate</button>
        
    </div>
  )
}
