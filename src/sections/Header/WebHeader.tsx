"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "@/ui-components/Logo";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import HeaderActionButtons from "./Components/HeaderActionButtons";
import { MenuProps, menus } from "@/data/menus";
import MenuItem from "./Components/MenuItem";
import MobileHeader from "./Components/MobileHeader";

interface BorderProps {
  activeIndex: number | undefined | null;
  width: number | string;
  transition: string;
}

export const WebHeader = () => {
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("lg"));

  const [isHovered, setIsHovered] = useState(false);
  const [borderStyle, setBorderStyle] = useState<BorderProps>({
    activeIndex: null,
    width: 0,
    transition: "width 0.3s ease-in-out",
  });

  useEffect(() => {
    setBorderStyle((prev) => ({
      ...prev,
      width: isHovered ? "100%" : 0,
    }));
  }, [isHovered]);

  const handleMouseEnter = (index: number | undefined | null) => {
    setIsHovered(true);
    setBorderStyle((prev) => ({
      ...prev,
      activeIndex: index,
    }));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={11.6} sm={11.4} md={11.2} lg={11.36} xl={10} pt={0.6}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          spacing={4}
        >
          <Grid item xs={7}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={2.2}>
                <Logo />
              </Grid>

              <Grid
                item
                xs={7}
                sx={{
                  display: smallDevice ? "none" : "flex",
                  alignItems: "center",
               
                }}
              >
                {menus.map((menu: MenuProps, index: number) => (
                  <MenuItem
                    key={index}
                    menu={menu}
                    bottomBorder={index === borderStyle.activeIndex}
                    borderStyle={borderStyle}
                    handleMouseEnter={() => handleMouseEnter(index)}
                    handleMouseLeave={handleMouseLeave}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={3.2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"flex-end"
            }}
          >
            {smallDevice ? <MobileHeader /> : <HeaderActionButtons />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
