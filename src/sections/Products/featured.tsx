import React from "react";
import { Grid } from "@mui/material";
import { FeaturedProducts } from "@/data/productsData";
import ThreeDModel from "@/components/ThreeDModel";

const FeaturedProduct = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
        <ThreeDModel assetUrl={FeaturedProducts[0]?.centerAsset} />
      </Grid>

      <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
        <ThreeDModel assetUrl={FeaturedProducts[1]?.centerAsset} />
      </Grid>

      <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
        <ThreeDModel assetUrl={FeaturedProducts[2]?.centerAsset} />
      </Grid>
    </Grid>
  );
};

export default FeaturedProduct;
