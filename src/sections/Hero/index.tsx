import React, { useState } from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import ReadyForYours from "./ready-for-yours";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
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
          height: "86dvh",
          zIndex: 4,
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 4,
            bgcolor: "#214",
          }}
        >
          <source
            src="/assets/video/hero-background-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </Box>

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              position: "fixed",
              zIndex: -10,
              overflow: "hidden",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "80%",
              textAlign: "center",
            }}
          >
            <Box component="div">
              <Typography
                variant="h2"
                sx={{
                  fontSize: "56px",
                  fontWeight: "500",
                  mt: 2.4,
                  px: 2,
                  color: "#fff",
                  zIndex: 1,
                  overflow: "visible",
                }}
              >
                Powering 4 million businesses globally. Ready for yours.
              </Typography>
              <Box component="div" sx={{ mb: 6, mt: 7.42, ml: -0.2 }}>
                <Button
                  variant="text"
                  sx={{
                    px: 5.8,
                    py: 1.44,
                    borderRadius: 1.5,
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
                    marginLeft: 3.7,
                    px: 4.6,
                    py: 1.54,
                    borderRadius: 1.5,
                    fontSize: "0.96rem",
                    fontWeight: "600",
                    textTransform: "inherit",
                    bgcolor: "#1379f3",
                  }}
                >
                  Contact sales
                </Button>
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                bottom: 91,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title="Play Video"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: isHovered ? "#1379f3" : "#fff",

                  transition: "all 0.2s ease-in-out",
                }}
              >
                <IconPlayerPlayFilled
                  id="play-video-icon"
                  size="0.8rem"
                  style={{
                    color: isHovered ? "#fff" : "#000",
                    transition: "all 0.2s ease-in-out",
                  }}
                />
              </Box>
              <Typography variant="body1" ml={1.3} sx={{ fontWeight: "400" }}>
                Play video
              </Typography>
            </Box>
          </Box>
        </Container>
      </Grid>

      <ReadyForYours />
    </Grid>
  );
};

export default HeroSection;
