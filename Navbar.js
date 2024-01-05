import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          PAK book bank
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// // import "../styles/navbar.css";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import "@fortawesome/free-solid-svg-icons";
// import navbar from "./navbar.css";
// function Navbar(size) {
//   return (
//     <nav>
//       <div className="nav_box">
//         <span className="my_shop">Dollar shop</span>
//         <div className="cart">
//           <span>
//             <i className="fas fa-cart-plus" />
//           </span>
//           <span>{size.length}</span>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
