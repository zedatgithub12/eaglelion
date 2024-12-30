"use client";
import React, { useEffect, useState } from "react";
import { MenuItems } from "@/data/menus";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface BorderProps {
  width: number | string;
  transition: string;
}

interface menuProp {
  menu: MenuItems;
}

const SubMenuItem = ({ menu }: menuProp) => {
  const [isHovered, setIsHovered] = useState(false);
  const [borderStyle, setBorderStyle] = useState<BorderProps>({
    width: 0,
    transition: "width 0.3s ease-in-out",
  });

  useEffect(() => {
    setBorderStyle((prev) => ({
      ...prev,
      width: isHovered ? "100%" : 0,
    }));
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        py: 1.2,
        cursor: "pointer",
      }}
    >
      <Link href={menu.path}>
        <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
          {menu?.title}
        </Typography>
      </Link>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          backgroundColor: "#222",
          width: borderStyle.width,
          transition: borderStyle.transition,
        }}
      />
    </Box>
  );
};

export default SubMenuItem;
