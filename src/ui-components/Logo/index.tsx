import type { BoxProps } from "@mui/material/Box";
import { forwardRef } from "react";
import Box from "@mui/material/Box";
import logo from "../../../public/assets/logo/square_landscape_logo.png";
import Link from "next/link";

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ width, height, isSingle = true }, ref) => {
    const baseSize = {
      width: width ?? 90,
      height: height ?? 22,
      ...(!isSingle && {
        width: width ?? 80,
        height: height ?? 36,
      }),
    };

    return (
      <Link href="/">
        <Box
          ref={ref}
          component="img"
          alt="Square logo"
          src={logo.src}
          width="100%"
          height="100%"
          sx={{ ...baseSize, margin: 1.4 }}
        />
      </Link>
    );
  }
);
