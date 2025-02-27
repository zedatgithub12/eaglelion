import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";

const ReadyForYours = ({ bottomReached }: { bottomReached: boolean }) => {
  return (
    <Grid container justifyContent="center" sx={{ p: 0.1 }}>
      <Grid
        item
        xs={11.6}
        sm={11.4}
        md={11.2}
        lg={11.36}
        xl={10}
        sx={{
          position: "relative",
          height: "66dvh",
          zIndex: 3,
          overflow: "hidden",
        }}
      >
        <Container
          sx={{
            position: "relative",
            top: 0,
            zIndex: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="div"
            sx={{
              position: !bottomReached ? "fixed" : "unset",
              top: !bottomReached ? 50 : 0,
              zIndex: 5,
              overflow: "hidden",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "80%",
              textAlign: "center",
              py: 2,
            }}
          >
            <Box component="div">
              <Typography
                variant="h2"
                sx={{
                  fontSize: "56px",
                  fontWeight: "500",
                  mt: 2,
                  color: "#000",
                  transition: "all 0.2s ease-in",
                }}
              >
                Ready for yours.
              </Typography>
              <Box component="div" sx={{ mb: 6, mt: 7.5, ml: -0.3 }}>
                <Button
                  variant="text"
                  sx={{
                    px: 5.8,
                    py: 1.44,
                    border: 1,
                    borderRadius: 1.5,
                    borderColor: "#1379f3",
                    fontSize: "0.96rem",
                    fontWeight: "600",
                    textTransform: "inherit",
                    backgroundColor: "#fff",
                    ":hover": { backgroundColor: "#fff" },
                  }}
                >
                  Get started
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    marginLeft: 3.6,
                    px: 4.6,
                    py: 1.54,
                    borderRadius: 1.5,
                    fontSize: "0.96rem",
                    fontWeight: "600",
                    textTransform: "inherit",
                    bgcolor: "#1379f3",
                    boxShadow: 0,
                  }}
                >
                  Contact sales
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ReadyForYours;
