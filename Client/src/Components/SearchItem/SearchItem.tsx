import "./SearchItem.css"

const SearchItem = () => {


  return (
   <>
   
     <div className="searchItem">
        <img  src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=" className="siImg"/>
       
        <div className="siDesc">
           <h1 className="siTitle">Tower Street Apartments</h1>
           <span className="siDistance">500m from center</span>
           <span className="siTaxiOp">Free airport taxi</span>
           <span className="siSubtitle">
            Studio Apartment with Air Conditioning
           </span>
           <span className="siFeactures">
            Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed
           </span>
           <span className="siCancelOp">Free cancellation</span>
           <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
           </span>
        </div>

        <div className="siDetail">
             <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
             </div>

             <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">see availability</button>
             </div>
        </div>
     </div>   
   
   
   </>
  )
}

export default SearchItem
