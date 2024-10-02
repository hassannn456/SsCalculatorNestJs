import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ image, closeDrawers }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "#f0f3f6",
        height: { lg: "70vh", md: "50vh" },
      }}
    >
      <Typography
        mt={"3rem"}
        p={"1rem"}
        gutterBottom
        variant="h5"
        component="div"
      >
        Technologies
      </Typography>
      <CardMedia style={{ height: 200 }} image={image} alt="green iguana" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Robot technology involves designing and operating automated machines
          for various tasks. Advancements in AI are enhancing robots'
          capabilities and applications.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ color: "orange" }}
          onClick={() => {
            navigate("/insight-details/1");
            closeDrawers(false);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
