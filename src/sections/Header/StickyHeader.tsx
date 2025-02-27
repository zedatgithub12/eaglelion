import React from "react";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Logo } from "@/ui-components/Logo";
import { useScrollContext } from "@/contexts/ScrollContexts";
import { motion, AnimatePresence } from "framer-motion";

const StickyHeader = () => {
  const { showStickyHeader } = useScrollContext();
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AnimatePresence>
      {showStickyHeader && (
        <Grid
          container
          component={motion.div}
          sx={{
            position: "fixed",
            top: 0,
            zIndex: 11,
            backgroundColor: "#fff",
          }}
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          exit={{ y: -40 }}
          transition={{ duration: 0.2 }}
        >
          <Grid item xs={12}>
            {smallDevice ? (
              <Grid container sx={{ px: 1.8, py: 1.2 }} spacing={1}>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 1.2,
                      border: 1,
                      borderRadius: 1,
                      borderColor: "#006aff",
                      fontSize: "0.97rem",
                      fontWeight: "600",
                      textTransform: "inherit",
                      ":hover": { backgroundColor: "#fff" },
                    }}
                  >
                    Get started
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      px: 1.2,
                      py: 1.3,
                      borderRadius: 1,
                      fontSize: "0.97rem",
                      fontWeight: "600",
                      textTransform: "inherit",
                      bgcolor: "#006aff",
                      boxShadow: 0,
                    }}
                  >
                    Contact sales
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <Grid
                  item
                  xs={0}
                  sm={0}
                  md={0}
                  lg={6}
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    alignItems: "center",
                    justifyContent: "flex-start",
                    pl: 0.5,
                  }}
                >
                  <Logo />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box component="div" sx={{ px: 2.8, py: 1.2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        px: 1,
                        py: 1.2,
                        border: 1,
                        borderRadius: 1,
                        borderColor: "#006aff",
                        fontSize: "0.97rem",
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
                        marginLeft: 1.3,
                        px: 1.2,
                        py: 1.3,
                        borderRadius: 1,
                        fontSize: "0.97rem",
                        fontWeight: "600",
                        textTransform: "inherit",
                        bgcolor: "#006aff",
                        boxShadow: 0,
                      }}
                    >
                      Contact sales
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
