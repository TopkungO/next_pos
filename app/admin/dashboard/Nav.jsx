"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

import { alpha } from "@mui/material/styles";

import ListItemButton from "@mui/material/ListItemButton";

import { usePathname } from "next/navigation";

import { NAV } from "./config-layout";
import navConfig from "./config-navigation";

function Nav() {

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src="" alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">Top</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Admin
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} scr={item.icon}/>
      ))}
    </Stack>
  );


  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          width: NAV.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: NAV.width,
            boxSizing: "border-box",
            
          },
          zIndex:-1
        },
      }}
    >
      {renderAccount}
      {renderMenu}
    </Drawer>
  );
}

// ------------------------------------------------------------
function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "primary.main",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

export default Nav;
