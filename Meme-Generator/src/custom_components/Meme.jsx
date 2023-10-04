
import { useState } from "react"
import NewMeme from "/images/Get-new-meme.png"
import memesData from "./memesData";
const Form = ()=>{

  
    const meme = {
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg" 
    }

    const [state, setstate] = useState({meme});

    const [allMemeImages, setAllImages] = useState(memesData); 
      
    const getMemeImage = ()=>{
       const memesArray = allMemeImages.data.memes;
       const randomNumber = Math.floor(Math.random() * memesArray.length + 1);
       const url = memesArray[randomNumber].url
       setstate(prevMeme => {
        return {
            ...prevMeme,
            randomImage: url
        }
       })
    }
    return( 
        <div className="meme-container">
           <div className="input">
             <input type="text" placeholder="text one"/>
            <input type="text" placeholder="text two" />
           </div>
           <button onClick={getMemeImage} type="button">Get a new meme image <img src={NewMeme} alt="" /></button>
          <img src={state.randomImage} alt="random meme image" className="meme-image"/>
        </div>
    )
}

export default Form;