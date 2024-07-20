import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  PointOfSale,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettings,
  TrendingUpOutlined,
  PieChartOutline,
  AdminPanelSettingsOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/profile.png";
import FlexBetween from "../base/FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutline />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Peformance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
  user,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component={"nav"}>
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.background.default,
            },
          },
        }}
      >
        <Box width={"100%"}>
          <Box m={"1.5rem 2rem 1rem 3rem"}>
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                <Typography variant="h4" fontWeight={"bold"}>
                  ECOMVISION
                </Typography>
              </Box>
              {!isNonMobile && (
                <IconButton
                  aria-label="toggle sidebar"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>
          <List>
            {navItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "1.5rem 0 1rem 1rem" }}>
                    {text}
                  </Typography>
                );
              }

              const lcText = text.toLocaleLowerCase();

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      backgroundColor:
                        active === lcText
                          ? theme.palette.secondary[300]
                          : "transparent",
                      color:
                        active === lcText
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[100],
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",

                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                        "& svg": {
                          fontSize: "1rem", // Adjust icon size here
                        },
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ fontSize: "0.75rem" }}
                    >
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        {/* <Box position={"absolute"} bottom={"2rem"}>
          <Divider />
          <FlexBetween
            textTransform={"none"}
            gap={"1rem"}
            m={"1.5rem 1rem 0 2rem"}
          >
            <Box
              component={"img"}
              alt="profile"
              src={ProfileImage}
              width={"40px"}
              height={"40px"}
              borderRadius={"50%"}
              sx={{
                objectFit: "cover",
              }}
            />
            <Box textAlign={"left"}>
              <Typography
                fontFamily={"0.9rem"}
                color={theme.palette.secondary[100]}
                fontWeight={"bold"}
              >
                {user.name}
              </Typography>
              <Typography
                fontFamily={"0.8rem"}
                color={theme.palette.secondary[200]}
              >
                {user.occupation}
              </Typography>
            </Box>
            <SettingsOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
            />
          </FlexBetween>
        </Box> */}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
