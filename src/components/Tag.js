import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY; 
export const Tag = () => {

    const [gif, setGif] = useState("");

    const [loading, setLoading] = useState(false);

    const [tag, setTag] = useState('')
    
    async function fetchData(){
        setLoading(true)
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; 
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

    function changeHandler(e){
        setTag(e.target.value);
    }

  return (
    <div className='w-1/2 bg-rose-700 rounded-lg border border- flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-semibold text-amber-300 mt-[15px]'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }

        <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center border border-black' onChange={changeHandler} value={tag} placeholder='Type Something...' /> 

        <button onClick={clickHandler} className='w-10/12 bg-sky-500 rounded-lg py-2 border border-white mb-[20px]'>Generate</button>
        
    </div>
  )
}
