import "./Header.css";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BoyIcon from "@mui/icons-material/Boy";
import { useState } from "react";
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { Option } from "../../vite-env.ts";

import { useNavigate } from "react-router-dom";

const Header = ({type} :any) => {
  const nav = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] =useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions]= useState({
  adults : 1,
  children : 0,
  room : 1
});

const handleOption =(name: any, operation: any)=>{
setOptions((prev )=>{
  return {
  ...prev,
    [name]:operation === "i" ? options[name] + 1 : options[name] - 1,
  }
})
}

const handleSearch = () =>{
  nav("/hotels", {state: {destination,date,options}});
}

  return (
    <>
      <header>
        <div className={type === "list" ?  "headerContainer listMode" : "headerContainer"}>
          <div className="headerList">
            <div className="headerListItem active">
              <LocalHotelIcon />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FlightIcon />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <CarRentalIcon />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <AttractionsIcon />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <LocalTaxiIcon />
              <span>Airport taxi's</span>
            </div>
          </div>

      {type !== "list" &&
        <>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDesc">
            Get rewarded for your travel - unlock instant savings of 10% or more
            with a free Booking Account
          </p>
          <button className="headerButton">sign in / Register</button>
          {/* search strip  */}
          <div className="headerSearch">
            <div className="headerSearchItems">
              <LocalHotelIcon className="headerIcon" />
              <input
                type="text"
                placeholder="where are u going?"
                className="headerSearchInput"
                onChange={(e)=>setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItems">
              <CalendarMonthIcon className="headerIcon" />
              <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={(item: { selection: { startDate: Date; endDate: null; key: string; }; }) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date} 
                className="date"
                minDate={new Date()} 
              />}
            </div>
            <div className="headerSearchItems">
              <BoyIcon className="headerIcon" />
              <span className="headerSearchText" onClick={()=> setOpenOptions(!openOptions)}>
               {`${options.adults} adult : ${options.children} children : ${options.room} room`}
              </span>

              {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  {" "}
                  <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("adults", "d")} disabled={options.adults <= 1}>-</button>  {" "}
                      <span className="optionCounterNumber">{options.adults}</span>  {" "}
                  <button className="optionCounterButton" onClick={()=>handleOption("adults", "i")}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Children</span>
                  {" "}
                  <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "d")} disabled={options.children <= 1}>-</button>  {" "}
                      <span className="optionCounterNumber">{options.children}</span>  {" "}
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Rooms</span>
                  {" "}
                  <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("room", "d")} disabled={options.room <= 1}>-</button>  {" "}
                      <span className="optionCounterNumber">{options.room}</span>  {" "}
                  <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                </div>
                </div>
                
              </div>
              )}
            </div>
            <button className="headerButton" onClick={()=>handleSearch()}>Search</button>
          </div>
          {/* search strip  */}
         
          </>  }
        </div>
      </header>
    </>
  );
};

export default Header;
