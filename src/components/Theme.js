import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    primaryTextColor: "#000",
    secondaryTextColor: "7d7c83",
    primaryColor: "#fff",
    ctaColor: "#2454ff",
    ctaHover: "#1f48db",
    footerColor: "#ebf8ff",
    footerTextColor: "#718096",
  },
});

export default theme;
