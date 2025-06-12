// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import SuperAdminSidebar from "./SuperAdminSideBar";
// import SuperAdminCustomerTable from "./SuperAdminCustomerTable/SuperAdminCustomerTable";
// import Customers from "./SuperAdminCustomerTable/Customers";
// import RestaurantTable from "./Restaurants/RestaurantTable";
// import SuperAdminRestaurant from "./Restaurants/SuperAdminRestaurant";
// import RestaurantRequest from "./RestaurantRequest/RestaurantRequest";
// import Navbar from "../customers/components/Navbar/Navbar";

// // import AdminDashboard from "./Dashboard/AdminDashboard";
// // import AdminSidebar from "./AdminSidebar";
// // import RestaurantDashboard from "./Dashboard/RestaurantDashboard";
// // import RestaurantsOrder from "./Orders/RestaurantsOrder";
// // import RestaurantsMenu from "./MenuItem/RestaurantsMenu";
// // import AddMenuForm from "./AddMenu/AddMenuForm";
// // import CreateRestaurantForm from "./AddRestaurants/CreateRestaurantForm";

// const SuperAdmin = () => {
//   return (
    
//     <div className="lg:flex justify-between">
      
//       <div className="">
      
//         <SuperAdminSidebar />
//       </div>

//       <div className="w-[80vw]">
//         {/* <Routes>
//           <Route path="/customers" element={<Customers/>}></Route>
//           <Route path="/restaurants" element={<SuperAdminRestaurant/>}></Route>
//           <Route path="/restaurant-request" element={<RestaurantRequest/>}></Route>
//         </Routes> */}
//          <Routes>
//           <Route path="/customers" element={<SuperAdminCustomerTable />} />
//           <Route path="/restaurants" element={<RestaurantTable />} />
//           <Route path="/restaurant-request" element={<RestaurantRequest />} />
//           </Routes>
//       </div>
//     </div>
//   );
// };

// export default SuperAdmin;


import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminSidebar from "./SuperAdminSideBar";
import SuperAdminCustomerTable from "./SuperAdminCustomerTable/SuperAdminCustomerTable";
import Customers from "./SuperAdminCustomerTable/Customers";
import RestaurantTable from "./Restaurants/RestaurantTable";
import SuperAdminRestaurant from "./Restaurants/SuperAdminRestaurant";
import RestaurantRequest from "./RestaurantRequest/RestaurantRequest";
import Navbar from "../customers/components/Navbar/Navbar"; // Navbar import// <-- Make sure the path is correct

const SuperAdmin = () => {
  return (
    <div className="lg:flex flex-col">
      {/* AdminNavbar at the top */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main content with sidebar and routes */}
      <div className="lg:flex justify-between">
        <div>
          <SuperAdminSidebar />
        </div>

        <div className="w-[80vw]">
          <Routes>
            <Route path="/customers" element={<Customers />} />
            <Route path="/restaurants" element={<SuperAdminRestaurant />} />
            <Route path="/restaurant-request" element={<RestaurantRequest />} />
          </Routes>

          <Routes>
            <Route path="/customers" element={<SuperAdminCustomerTable />} />
            <Route path="/restaurants" element={<RestaurantTable />} />
            <Route path="/restaurant-request" element={<RestaurantRequest />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
