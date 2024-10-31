import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const CardBox = ({ url, description, title }) => {
  return (
    <Box
      sx={{
        padding: "2rem",
        width: "100%",
        height: "20rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Box sx={{ width: "40%", mb: 2 }}>
        <img
          src={url}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
      <Typography sx={{ fontWeight: 600, mb: 1.5 }} color="black">
        {title}
      </Typography>
      <Typography variant="body2" align="center" sx={{ color: "#666" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default function CustomCard({ url, description, title }) {
  return (
    <Box sx={{ borderRadius: "12px", overflow: "hidden", minWidth: 300 }}>
      <Card>
        <CardBox url={url} description={description} title={title} />
      </Card>
    </Box>
  );
}
