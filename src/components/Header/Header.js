import React from "react";
import CommonButton from "../common/CommonButton/CommonButton";
import NotificationBell from "../common/NotificationBell/NotificationBell";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";

const Header = ({ title }) => {
  const headerStyles = {
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#009be5",
      padding: "20px",
    },
    topRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      marginBottom: "20px",
      ".MuiButtonBase-root": {
        // marginLeft: "0px",
        marginRight: "5px",
      },
    },
    middleRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      marginLeft: "320px",
    },
    link: {
      fontWeight: 500,
      color: "rgba(255, 255, 255, 0.7)",
      marginLeft: "200px",

      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    bell: {
      paddingLeft: "200px",
      marginLeft: "200px",
    },
    webButton: {
      marginRight: "5px",
    },
  };
  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>Go to docs</Typography>
        <NotificationBell iconColor="white" sx={headerStyles.bell} />
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQG0KNWRy4nO9w/profile-displayphoto-shrink_800_800/0/1660051470486?e=1668643200&v=beta&t=To2CsKZYGI_ay-XuIvJGtmwyMw_m9_OrnmgEq2i235Q"></Avatar>
      </Box>

      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" color="white">
          {title}
        </Typography>
        <Box>
          <CommonButton sx={headerStyles.webButton} variant="outlined">
            Web setup
          </CommonButton>
          <Tooltip title="help">
            <IconButton color="white" sx={headerStyles.helpIcon}>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
