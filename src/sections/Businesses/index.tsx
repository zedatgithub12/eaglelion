import React from "react";
import Image from "next/image";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import xlLogos from "../../../public/assets/images/logos_xl.avif";
import mdLogos from "../../../public/assets/images/logos_md.avif";
import smLogos from "../../../public/assets/images/logos_sm.avif";

const Businesses = () => {
  const theme = useTheme();

  const smallDevice = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const mdDevice = useMediaQuery(theme.breakpoints.only("md"));
  const bigDevice = useMediaQuery(theme.breakpoints.between("md", "xl"));

  const viewPortLogo = () => {
    if (smallDevice) {
      return smLogos;
    } else if (mdDevice) {
      return mdLogos;
    } else if (bigDevice) {
      return xlLogos;
    } else {
      return xlLogos;
    }
  };

  return (
    <Grid
      container
      sx={{
        minHeight: "76dvh",
        width: "100dhw",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={11.6}
        sx={{ py: { xs: 4, md: 6, lg: 9, xl: 10 }, textAlign: "center" }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "1.7rem",
              sm: "1.7rem",
              md: "1.7rem",
              lg: "2.64rem",
              xl: "2.56rem",
            },
            color: "#000",
            px: { xs: 2, sm: 0, md: 6 },
            lineHeight: "2.4rem",
          }}
        >
          Supporting local businesses. Around the globe.
        </Typography>

        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              pt: { xs: 3, sm: 4, md: 3.4, lg: 9.4 },
              pb: { xs: 3, sm: 4, md: 2, lg: 8.58 },
              px: { xs: 1.45, sm: 16.6, md: 14.5, lg: 14.5 },
            }}
          >
            <Image
              src={viewPortLogo()}
              alt="business logos"
              style={{
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Businesses;
