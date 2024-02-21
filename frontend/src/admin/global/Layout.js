//layout is using high order component
//it is a component with anither component
//and provide with function and we did anther function

import { Box } from "@mui/material";
import React from "react";
import HeaderTop from "./HeaderTop";
import SidebarAdm from "./Sidebar";

const Layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <SidebarAdm />
          <Box sx={{ width: "100%", bgcolor: "#fafafa" }}>
            <HeaderTop />
            <Box sx={{ p: 3 }}>
              {/* hoc return here */}
              <Component {...props} />
            </Box>
          </Box>
        </div>
      </>
    );
  };

export default Layout;
