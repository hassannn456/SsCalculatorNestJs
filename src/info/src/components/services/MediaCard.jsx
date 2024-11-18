import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import InsightData from "../insights/insightData";

export default function MediaCard({ image, closeDrawers }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "#f0f3f6",
        pb: "15px",
      }}
    >
      <Typography
        mt={"3rem"}
        p="1rem"
        gutterBottom
        variant="h5"
        component="div"
      >
        Artificial Intelligence
      </Typography>
      <CardMedia style={{ height: 200 }} image={image} alt="green iguana" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Artificial intelligence (AI) has rapidly transformed various
          industries, from healthcare to finance, and is becoming increasingly
          ubiquitous in our daily lives. However, one critical issue that often
          arises with AI is fairness.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ color: "orange" }}
          onClick={() => {
            navigate(`/insight-details/${InsightData[0].id}`);
            closeDrawers(false);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
