import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Weddings from "./routes/Weddings";
import Events from "./routes/Events";
import Vendors from "./routes/Vendors";
import TheCastle from "./routes/TheCastle";
import ContactUs from "./routes/ContactUs";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weddings" element={<Weddings/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/vendors" element={<Vendors/>}/>
        <Route path="/thecastle" element={<TheCastle/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>

      </Routes>

      


      
      
    </div>
  );
}

