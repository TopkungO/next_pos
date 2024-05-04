import React from "react";
import Nav from "./Nav";
import CharView from "@/app/sections/overview/view/app-view";
import { Box } from "@mui/material";

import { NAV, HEADER } from "./config-layout";
import AppBarPage from "@/app/components/AppBarPage";

const SPACING = 8;

export default function page() {
  return (
    <>

      <AppBarPage />
      <Box sx={{ display: "flex" }}>
        <Nav />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <CharView />
        </Box>
      </Box>
    </>
  );
}
