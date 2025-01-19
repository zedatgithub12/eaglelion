"use client";
import React from "react";
import { MenuProps } from "@/data/menus";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface BorderProps {
  width: number | string;
  transition: string;
}

interface menuProp {
  menu: MenuProps;
  bottomBorder: boolean;
  borderStyle: BorderProps;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const MenuItem = ({
  menu,
  bottomBorder,
  borderStyle,
  handleMouseEnter,
  handleMouseLeave,
}: menuProp) => {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          py: 2.2,
          px: 1.2,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={menu.path}>
          <Typography variant="subtitle1" sx={{ fontWeight: "550", color:"#222" }}>
            {menu?.name}
          </Typography>
        </Link>

        {menu.collapsable && (
          <>
            {bottomBorder ? (
              <IconChevronUp
                size="0.8rem"
                stroke={4}
                style={{ transition: "all 0.6s ease-in-out" }}
              />
            ) : (
              <IconChevronDown
                size="0.8rem"
                stroke={4}
                style={{ transition: "all 0.6s ease-in-out" }}
              />
            )}
          </>
        )}
      </Box>

      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          // left: 0,
          height: 2,
          backgroundColor: "#222",
          width: bottomBorder ? borderStyle.width : 0,
          transition: borderStyle.transition,
        }}
      />
    </Box>
  );
};

export default MenuItem;
