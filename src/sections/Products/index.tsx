"use client";

import React, { useRef, useState } from "react";
import { ProductData } from "@/data/productsData";
import { Box, Grid, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThreeDModel from "@/components/ThreeDModel";

const Products = () => {
  const threeDAsset = useRef<any>(null);
  const [inViewProductIndex, setInViewProductId] = useState(0);

  const handleScrollingContent = (e: any) => {
    const element = e.currentTarget;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 400;

    if (threeDAsset.current) {
      threeDAsset.current.rotation.y = (scrollPercentage * Math.PI) / 60;
    }

    const newIndex = Math.floor(scrollPercentage / 104);
    if (newIndex !== inViewProductIndex) {
      setInViewProductId(newIndex);
    }
  };

  return (
    <Grid
      container
      sx={{
        height: "98.12dvh",
        width: "100dhw",
        justifyContent: "center",
        py: 3,
        bgcolor: "#f7f7f7",
      }}
    >
      <Grid
        item
        xs={11.2}
        sx={{
          overflowY: "scroll",
          height: "100%",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        onScroll={(e) => handleScrollingContent(e)}
      >
        {ProductData.map((product, index: number) => (
          <Grid
            key={index}
            container
            sx={{ position: "sticky", top: 0, display: "flex", height: "100%" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 2 }}
                animate={{
                  opacity: inViewProductIndex === index ? 1 : 0,
                  y: inViewProductIndex === index ? 0 : 2,
                }}
                transition={{ duration: 0.5 }}
                sx={{ pr: 1, pt: 3, pl: 4 }}
              >
                <Typography variant="h3">{product?.primary_title}</Typography>

                <Typography variant="h3" color="#777" mb={4}>
                  {product?.secondary_title}
                </Typography>

                <Box
                  component="div"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="a"
                    href={product?.learn_more}
                    sx={{
                      fontSize: "17px",
                      fontWeight: "bold",
                      color: "#006aff",
                    }}
                  >
                    Learn More
                  </Typography>

                  <IconArrowRight
                    size="1.8rem"
                    style={{
                      backgroundColor: "#006aff",
                      color: "white",
                      borderRadius: "50%",
                      padding: 6,
                      marginLeft: 10,
                    }}
                  />
                </Box>
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 1 }}
                animate={{
                  opacity: inViewProductIndex === index ? 1 : 0,
                  y: inViewProductIndex === index ? 0 : 1,
                }}
                transition={{ duration: 0.5 }}
                sx={{
                  px: 4,
                  pb: 6,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                }}
              >
                <div>
                  <Image
                    src={product?.image_one}
                    alt={product?.primary_title}
                    width={260}
                    height={240}
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {product?.image_one_service},
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight="regular"
                      marginLeft={0.6}
                    >
                      {product?.image_one_location}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: inViewProductIndex === index ? 1 : 0,
                  y: inViewProductIndex === index ? 0 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <ThreeDModel
                  ref={inViewProductIndex === index ? threeDAsset : null}
                  assetUrl={product?.centerAsset}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              sx={{ height: "100%", width: "100%" }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 2 }}
                animate={{
                  opacity: inViewProductIndex === index ? 1 : 0,
                  y: inViewProductIndex === index ? 0 : 2,
                }}
                transition={{ duration: 0.5 }}
                sx={{
                  pr: 12,
                  pt: 3,
                  pl: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Image
                    src={product?.image_two}
                    alt={product?.primary_title}
                    width={300}
                    height={220}
                    style={{
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {product?.image_two_service},
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight="regular"
                      marginLeft={0.6}
                    >
                      {product?.image_two_location}
                    </Typography>
                  </div>
                </div>

                {product?.message && (
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    {product?.message}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Products;
