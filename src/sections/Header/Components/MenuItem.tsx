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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        py: 2.2,
        m: 0,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href={menu.path}>
          <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
            {menu?.name}
          </Typography>
        </Link>

        {menu.collapsable && (
          <>
            {bottomBorder ? (
              <IconChevronUp
                size="0.8rem"
                stroke={4}
                style={{ transition: "all 1s ease-in-out" }}
              />
            ) : (
              <IconChevronDown size="0.8rem" stroke={4} style={{ transition: "all 1s ease-in-out" }}/>
            )}
          </>
        )}
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
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
