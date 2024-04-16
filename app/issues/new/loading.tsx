import { Box, Skeleton } from "@radix-ui/themes";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingIssuePage;
