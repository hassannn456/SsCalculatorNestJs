import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const CardBox = ({ url, description, title }) => {
  return (
    <Box
      sx={{
        padding: "3rem",
        width: "100%",
        height: "18rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <img
          src={url}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </Box>
      <Typography sx={{ mb: 1.5 }} color="black">
        {title}
      </Typography>
      <Typography variant="body2" align="center">
        {description}
      </Typography>
    </Box>
  );
};

export default function CustomCard({ url, description, title }) {
  return (
    <Box
      sx={{ minWidth: 300, border: "1px solid #378C92", borderRadius: "6px" }}
    >
      <Card>
        <CardBox url={url} description={description} title={title} />
      </Card>
    </Box>
  );
}
