import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useGetUserQuery } from "../../redux/slices/apiSlice";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 800px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box
      display={isNonMobile && isSidebarOpen === true ? "flex" : "block"}
      width="100%"
      height="100%"
    >
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth={"250px"}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={"1"} overflow={"hidden"}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
