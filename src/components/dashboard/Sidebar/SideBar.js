import "./style.css";

import {  XCircle } from "react-feather";
import { Link } from "react-router-dom";
import Flex from "../../styled/Flex/Flex";
const SideBar = ({ children, sideBarActive, setSideBarActive }) => {
  return (
    <div
      className={`sidebar ${
        sideBarActive ? "side-bar-active" : "sidebar-deactive"
      }`}
    >
      <Flex align="center" justify="space-between">
        <Link to="/portal/dashboard">
          FARMGHAR
        </Link>
        <XCircle
          color="#fff"
          cursor="pointer"
          className="sidebar-close-icon"
          onClick={() => setSideBarActive(false)}
          style={{marginRight:'10px'}}
        />
      </Flex>
      {/* <img src="/portal/logo.png" alt="logo" /> */}
      <div className="sidebar-links">{children}</div>
    </div>
  );
};

export default SideBar;
