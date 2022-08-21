import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./style.css"

import Home from "./Component/Home"
import Order from "./Component/Client/Order";
import ServiceList from "./Component/Client/ServiceList";
import Review from "./Component/Client/Review";
import AddService from "./Component/Admin/AddService";
import OrderList from "./Component/Admin/OrderList";
import AdminServiceList from "./Component/Admin/AdminServiceList";
import Login from "./Component/Login";

import { UserContext } from "./UserContext"

function App() {
  const serverURL = "https://sab-server.herokuapp.com"
  const user = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null
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


  return (
    <>
      <UserContext.Provider value={{ user, serverURL }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/order" element={<Order />} />

            <Route path="/serviceList" element={<ServiceList />} />

            <Route path="/review" element={<Review />} />

            <Route path="/admin/addService" element={selectToEdit.serviceName ? <AddService selectedService={selectToEdit} btnText="Edit Service" /> : <AddService btnText="Submit" />} />

            <Route path="/admin/adminserviceList" element={<AdminServiceList onSendEditData={onGetEditData} />} />

            <Route path="/admin/orderList" element={<OrderList />} />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
