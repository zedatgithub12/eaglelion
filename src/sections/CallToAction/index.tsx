import { Box, Button, Grid, Link, Typography } from "@mui/material";

const CallToAction = () => {
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
    >
      <Grid item xs={12} sx={{ py: 10, textAlign: "center" }}>
        <Grid container justifyContent="center">
          <Grid item xs={8} sm={8} lg={6.8}>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  sm: "2rem",
                  md: "2.2rem",
                  lg: "3.14rem",
                  xl: "3.26rem",
                },
                color: "#fff",
                px: { xs: 2, sm: 0, md: 4 },
                lineHeight: { xs: "2.4rem", sm: "2.7rem", lg: "3.9rem" },
              }}
            >
              Join the 4M+ businesses running with Square.
              <span style={{ color: "#888" }}>*</span>
            </Typography>

            <Box component="div" sx={{ my: 5 }}>
              <Button
                variant="outlined"
                sx={{
                  px: 2,
                  py: 1.38,
                  borderRadius: 1.5,
                  fontSize: "0.96rem",
                  fontWeight: "600",
                  textTransform: "inherit",
                  borderColor: "#1379f3",
                }}
              >
                Get started
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: 2.6,
                  px: 2,
                  py: 1.38,
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

            <Typography sx={{ mt: 8, color: "#ccc", fontSize: "0.86rem" }}>
              *Source:{" "}
              <Link
                component="a"
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "#888",
                  ":hover": { color: "#1379f3" },
                }}
              >
                {" "}
                Q1 2023 Earnings Report Shareholder Letter
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
