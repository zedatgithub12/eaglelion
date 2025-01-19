"use client";
import { Box, Grid } from "@mui/material";
import CartIcon from "../../../../public/assets/icons/cart_icon.svg";
import { IconMenu2 } from "@tabler/icons-react";

const MobileHeader = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        my: 2.2,
      }}
    >
      <div style={{ marginRight: 6 }}>
        <Box
          component="img"
          alt="CART_ICON"
          src={CartIcon.src}
          width={40}
          height={26}
        />
      </div>

      <div>
        <IconMenu2 size="1.8rem" stroke="1.6" color="black" />
      </div>
    </Grid>
  );
};

export default MobileHeader;
