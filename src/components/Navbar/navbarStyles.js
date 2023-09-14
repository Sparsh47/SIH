export const navStyles = {
  as: "nav",
  bg: "white",
  maxW: "100vw",
  px: "50px",
  h: "70px",
  "justify-content": "space-between",
  "align-items": "center",
  "border-bottom": "1px solid #eee",
  "font-family": "'Inter', sans-serif",
};

export const linksStyles = {
  as: "ul",
  "list-style": "none",
  w: "100%",
  h: "100%",
  "justify-content": "space-around",
  "align-items": "center",
  "font-size": "18px",
  "font-weight": "400",
  color: "#000",
};

export const hoverStyles = {
  as: "li",
  cursor: "pointer",
  ":hover": {
    color: "#7d7c83",
    transition: "all 0.3s ease-in-out",
  },
};
