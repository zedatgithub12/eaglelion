"use client";
import { Box, Grid, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import CartIcon from "../../../../public/assets/icons/cart_icon.svg";
import Menu from "./MenuItem";
import { actionMenus } from "@/data/menus";

interface BorderProps {
  activeIndex: number | undefined | null;
  width: number | string;
  transition: string;
}

const HeaderActionButtons = () => {
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
    setBorderStyle((prev) => ({
      ...prev,
      activeIndex: null,
    }));
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      {actionMenus.map((menu, index) => (
        <Grid
          item
          xs={3.2}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          sx={{ position: "relative" }}
        >
          <Menu
            key={index}
            menu={menu}
            bottomBorder={index === borderStyle.activeIndex}
            borderStyle={borderStyle}
            handleMouseEnter={() => handleMouseEnter(index)}
            handleMouseLeave={handleMouseLeave}
          />
        </Grid>
      ))}

      <Grid item xs={2}>
        <IconButton>
          <Box
            component="img"
            alt="CART_ICON"
            src={CartIcon.src}
            width={40}
            height={26}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default HeaderActionButtons;
