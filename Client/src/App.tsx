import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HotelList from "./Pages/List/HotelList/HotelList";
import Hotel from "./Pages/Hotel/Hotel";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
