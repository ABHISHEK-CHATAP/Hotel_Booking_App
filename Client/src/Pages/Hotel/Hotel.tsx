import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import "./Hotel.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Photos} from "../../vite-env.ts" 
import MailList from "../../Components/MailList/MailList.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { Photo } from "@mui/icons-material";

const Hotel = () => {
console.log("photos",Photos)

const [open, setOpen]=useState(false);
const [slideNumber, setSlideNumber] = useState(0);

   const handleMove = (direction: string)=>{
      let newSlideNumber;

      if(direction=="Left"){
        newSlideNumber = slideNumber == 0 ? 5 :slideNumber-1
      }else{
        newSlideNumber = slideNumber == 5 ? 0 : slideNumber+1
      }
      setSlideNumber(newSlideNumber);
   }

  return (
    <>
    
    <Navbar/>
    <Header type="list"/>

    <div className="hotelContainer">
{
  open && (
    <div className="slider">
      <CloseIcon className="close" onClick={()=>setOpen(!open)} fontSize="large"/>
      <KeyboardDoubleArrowLeftIcon onClick={()=>handleMove("Left")} fontSize="large" className="arrow"/>
      <div className="sliderWrapper">
        <img src={Photos[slideNumber].src} className="sliderImg"/>
      </div>
      <KeyboardDoubleArrowRightIcon onClick={()=>handleMove("Right")} className="arrow" fontSize="large"/>
    </div>
  )
}

      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
        <LocationOnIcon/>
        <span>sabar street 125 New York</span>
        </div>
        <span className="hotelDistance">
          Excellent Location - 500m from center
        </span>
        <span className="hotelPriceHighLow">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
       {/* ---------------------------------------------- */}
        <div className="hotelImages">
          {
            Photos.map((photo,idx)=>{
              return(
                <>
                <div className="hotelImageWrapper" key={idx}>
                  <img src={photo.src} className="hotelImg"  onClick={()=>{setSlideNumber(idx),setOpen(!open)}}/>
                </div>
                </>
              )
            })
          }
        </div>
       {/* ---------------------------------------------- */}
       <div className="hotelDetails">

        <div className="hotelDetailTexts">
          <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
          <p className="hotelDesc">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo, quisquam odit expedita iste ipsa, 
         error sunt laborum itaque voluptatem quasi numquam corrupti repudiandae reiciendis molestiae voluptate maxime nobis minima
          similique quidem, impedit excepturi nulla culpa. Libero officia sint reprehenderit consequatur sed ipsum, inventore corporis cum possimus
           laboriosam similique animi ipsa ab, repudiandae obcaecati sapiente repellendus reiciendis temporibus quia dicta magnam distinctio porro. 
           Incidunt rem alias non eaque. Atque, repellat! Quisquam id repellendus ad perspiciatis officiis expedita .
          </p>
        </div>

        <div className="hotelDetailPrice">
          <h1 className="">Perfect for a 9-night Stay!</h1>
          <span>
            Located in the heart of Krakow , this property has an excellent location score of 9.8!
          </span>
          <h2>
            <b>$945</b> (9 nights)
          </h2>
          <button>Reserve or Book Now!</button>
        </div>

       </div>
       {/* ---------------------------------------------- */}

       

      </div>
    </div>
      <br/>
       <MailList/>
       <br/>
       <Footer/>
    
    </>
  )
}

export default Hotel
