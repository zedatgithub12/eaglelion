import React from "react";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { FooterBottomLinks, FooterData } from "@/data/footer";
import { SocialLink } from "@/data/social_links";
import { IconGlobe, IconWorld } from "@tabler/icons-react";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "81dvh",
        width: "100dhw",
        bgcolor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
      justifyContent="center"
    >
      <Grid
        item
        xs={10}
        sx={{ py: 4.2, textAlign: "center" }}
        justifyContent="center"
      >
        <Grid container spacing={4}>
          {FooterData.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box component="div">
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.3,
                    fontWeight: "550",
                    fontSize: "0.96rem",
                    textAlign: { sm: "left" },
                    color: "#737373",
                  }}
                >
                  {section.title}
                </Typography>
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      display: "block",
                      mb: 1.17,
                      fontSize: "0.9rem",
                      fontWeight: "550",
                      color: "#ffffff",
                      "&:hover": { color: "white" },
                      textAlign: { sm: "left" },
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>

              {section.appended &&
                section.appended.map((appended, linkIndex) => (
                  <Box component="div" sx={{ mt: 4 }} key={linkIndex}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1.3,
                        fontWeight: "550",
                        fontSize: "0.96rem",
                        textAlign: { sm: "left" },
                        color: "#737373",
                      }}
                    >
                      {appended.title}
                    </Typography>
                    {appended.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        sx={{
                          display: "block",
                          mb: 1.17,
                          fontSize: "0.9rem",
                          fontWeight: "550",
                          color: "#ffffff",
                          "&:hover": { color: "white" },
                          textAlign: { sm: "left" },
                          textDecoration: "none",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Box>
                ))}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        item
        xs={10}
        sx={{ pt: 6.2, pb: 2.6, px: 4, textAlign: "center" }}
        justifyContent="center"
      >
        <Grid container spacing={4}>
          <Divider
            sx={{ width: "100%", height: "1px", backgroundColor: "#333" }}
          />
          <Box
            component="div"
            sx={{
              my: 2.26,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pl: 0.2,
              }}
            >
              <IconWorld size={29} stroke="1.7" color="white" />
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: "0.86rem",
                  fontWeight: "500",
                  ml: 0.6,
                }}
              >
                United States (English)
              </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex" }}>
              {SocialLink.map((media, index) => (
                <Link key={index} href={media.link} sx={{ mx: 0.4 }}>
                  {media.icon}
                </Link>
              ))}
            </Box>
          </Box>

          <Divider
            sx={{ width: "100%", height: "1.2px", backgroundColor: "#333" }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        xs={10}
        sx={{ pr: 4, pb: 6, textAlign: "center" }}
        justifyContent="center"
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              color: "#737373",
              textAlign: { xs: "center", sm: "left" },
              pb: { xs: 2.4, md: 0 },
            }}
          >
            © 2025 Block, Inc.
          </Typography>

          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
            }}
          >
            {FooterBottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{
                  color: "white",
                  fontSize: "0.875rem",
                  fontWeight: "540",
                  mb: 1.2,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
