import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import { Nav, Navbar, Container, Row, Col, Button, Image } from 'react-bootstrap'
// import { GiRobberHand } from 'react-icons/gi';
// import { FiPhoneCall } from 'react-icons/fi';
// import { TbCurrentLocation } from 'react-icons/tb';
// import { GoogleLogin, GoogleLogout } from "react-google-login"
// import { gapi } from "gapi-script"

import "./style.css"

import Home from "./Component/Home"
import Order from "./Component/Client/Order";
import ServiceList from "./Component/Client/ServiceList";
import Review from "./Component/Client/Review";
import AddService from "./Component/Admin/AddService";
import OrderList from "./Component/Admin/OrderList";
import AdminServiceList from "./Component/Admin/AdminServiceList";

import { UserContext } from "./UserContext"

function App() {
  const serverURL = "https://sab-server.herokuapp.com"
  const [user,setUser] = useState(null)
  const [selectToEdit, setSelectToEdit] = useState({
    id: "",
    serviceName: "",
    serviceDesc: ""
  })

  const onGetEditData = (selectedService) => {
    if (selectedService) {
      setSelectToEdit({
        id: selectedService[0]._id,
        serviceName: selectedService[0].serviceName,
        serviceDesc: selectedService[0].serviceDesc,
      })
    }
  }

  const onGetUser = (data)=>{
    setUser(data)
    // console.log(user)
  }
  

  return (
    <>
      {/* {error && <h1>{error}</h1>} */}
      <UserContext.Provider value={{ user, serverURL }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home getUser={onGetUser}/>} />

            <Route path="/order" element={<Order />} />

            <Route path="/serviceList" element={<ServiceList />} />

            <Route path="/review" element={<Review />} />

            <Route path="/admin/addService" element={selectToEdit.serviceName ? <AddService selectedService={selectToEdit} btnText="Edit Service" /> : <AddService btnText="Submit" />} />

            <Route path="/admin/adminserviceList" element={<AdminServiceList onSendEditData={onGetEditData} />} />

            <Route path="/admin/orderList" element={<OrderList />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
