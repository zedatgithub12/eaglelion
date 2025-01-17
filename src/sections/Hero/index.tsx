import React, { useState } from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import ReadyForYours from "./ready-for-yours";
import { useScrollContext } from "@/contexts/ScrollContexts";

const HeroSection = () => {
  const { heroScrolledDown, passedReadyText, nextSection, readyActions } =
    useScrollContext();
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
              position: nextSection ? "static" : "fixed",
              zIndex: -10,
              overflow: "hidden",
              color: "#fff",
              display: nextSection ? "none" : "flex",
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
                  fontSize: { xs: "36px", sm: "51px", md: "56px" },
                  fontWeight: "500",
                  mt: 2.4,
                  px: 2,
                  color: "#fff",
                  zIndex: 1,
                  overflow: "visible",
                  transition: "all 0.2s ease-out",
                }}
              >
                Powering 4 million businesses globally. <br />
                <span
                  style={{ color: passedReadyText ? "transparent" : "#fff" }}
                >
                  {" "}
                  Ready for yours.
                </span>
              </Typography>
              <Box component="div" sx={{ mb: 6, mt: 7.42, ml: -0.2 }}>
                <Button
                  variant="text"
                  sx={{
                    px: 5.8,
                    py: 1.44,

                    borderRadius: 1.5,
                    borderColor: "transparent",
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
                    boxShadow: 0,
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
                display: heroScrolledDown ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.4s ease",
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

      <ReadyForYours bottomReached={readyActions} />
    </Grid>
  );
};

export default HeroSection;
