import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const BasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
  return (
    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
      {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem> */}
      {menuItems.map((item) => (
        <MenuItem onClick={handleClose}>{item.label}</MenuItem>
      ))}
    </Menu>
  );
};

export default BasicMenu;
