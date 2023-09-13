export const navStyles = {
  as: "nav",
  bg: "gray.500",
  maxW: "100vw",
  px: "50px",
  h: "70px",
  "justify-content": "space-between",
  "align-items": "center",
  "font-family": "'Roboto', sans-serif",
};

export const linksStyles = {
  as: "ul",
  "list-style": "none",
  w: "100%",
  h: "100%",
  "justify-content": "space-around",
  "align-items": "center",
  "font-size": "18px",
  "font-weight": "300",
  color: "white",
};

export const hoverStyles = {
  as: "li",
  cursor: "pointer",
  ":hover": {
    color: "gray.300",
    transition: "all 0.3s ease-in-out",
  },
};
