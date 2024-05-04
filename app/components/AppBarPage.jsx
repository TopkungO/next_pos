"use client"
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import AvatarMenuAdmin from "./admin/AvatarMenu";
import AvatarMenuUser from "./user/AvatarMenu";

export default function AppBarPage(){
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [router, status]);
  return (
    <Box sx={{ flexGrow: 1 ,zIndex:10}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {(status === "authenticated") && (session.user) && (session.user.role !== "USER")? (
            <AvatarMenuUser/>
          ) : (
            <AvatarMenuAdmin />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
