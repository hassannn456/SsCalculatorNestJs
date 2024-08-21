import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import HeroImageSection from "../../../components/general/heroImageSection";
import webDevelopment from "../../../../public/assets/pngs/webdevelopment.avif";
import BlogImage1 from "../../../../public/assets/pngs/insights/blog01.jpeg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const styles = {
  "@keyframes fadeInUp": {
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes slideInLeft": {
    from: {
      opacity: 0,
      transform: "translateX(-100px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes scaleIn": {
    from: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  fadeInUp: {
    opacity: 0,
    animation: `fadeInUp 0.5s forwards`,
  },
  slideInLeft: {
    opacity: 0,
    animation: `slideInLeft 0.5s forwards`,
  },
  scaleIn: {
    opacity: 0,
    animation: `scaleIn 0.5s forwards`,
  },
};

const fadeInUpStyle = (delay) => ({
  ...styles.fadeInUp,
  animationDelay: `${delay}s`,
});

const slideInLeftStyle = (delay) => ({
  ...styles.slideInLeft,
  animationDelay: `${delay}s`,
});

const scaleInStyle = (delay) => ({
  ...styles.scaleIn,
  animationDelay: `${delay}s`,
});

const InsightDetails = () => {
  const handlePrevious = () => {
    console.log("Navigate to the previous article");
  };

  const handleNext = () => {
    console.log("Navigate to the next article");
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "#666666",
        "@keyframes fadeInUp": styles["@keyframes fadeInUp"],
        "@keyframes slideInLeft": styles["@keyframes slideInLeft"],
        "@keyframes scaleIn": styles["@keyframes scaleIn"],
      }}
    >
      <HeroImageSection
        imageSrc={webDevelopment}
        title={"The Intersection of Robots and AI: Shaping the Future"}
      />
      <Container sx={{ padding: { xs: "1rem", md: "3rem" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <Box>
              <img
                src={BlogImage1}
                style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              />
            </Box>
            <Box sx={{ mt: "1rem", marginBottom: "1rem" }}>
              <Typography variant="caption" color="textSecondary">
                Published on: August 2, 2024
              </Typography>
              <Divider sx={{ marginY: "1rem" }} />
            </Box>
            <div style={fadeInUpStyle(0.5)}>
              <Typography
                variant="h5"
                gutterBottom
                fontWeight={600}
                color={"#378c92"}
              >
                The Evolution of Robotics and AI
              </Typography>
              <Typography paragraph>
                Robotics has come a long way from the early days of simple
                mechanical devices. Modern robots are equipped with
                sophisticated sensors, actuators, and control systems that
                enable them to perform complex tasks with precision. When
                combined with AI, robots gain the ability to learn from their
                environment, adapt to new situations, and make autonomous
                decisions.
              </Typography>
              <Typography paragraph>
                AI, on the other hand, has evolved from basic algorithms to
                advanced machine learning models and neural networks. These
                technologies enable AI systems to process vast amounts of data,
                recognize patterns, and make predictions or decisions based on
                that data.
              </Typography>
            </div>

            <div style={slideInLeftStyle(1)}>
              <Typography
                variant="h6"
                gutterBottom
                fontWeight={500}
                color={"black"}
              >
                How AI Enhances Robotics
              </Typography>
              <Typography paragraph>
                <strong>Autonomy:</strong> AI algorithms enable robots to
                perform tasks without human intervention. Autonomous robots can
                navigate, manipulate objects, and make decisions in dynamic
                environments, such as warehouses or homes. For instance,
                self-driving cars use AI to interpret sensor data and navigate
                safely on the roads.
              </Typography>
              <Typography paragraph>
                <strong>Learning and Adaptation:</strong> AI allows robots to
                learn from their experiences and improve their performance over
                time. Machine learning techniques enable robots to adapt to new
                tasks or environments by analyzing data and adjusting their
                behavior accordingly. This is particularly useful in scenarios
                where robots need to handle variations or unexpected conditions.
              </Typography>
              <Typography paragraph>
                <strong>Natural Language Processing (NLP):</strong> AI-powered
                natural language processing enables robots to understand and
                respond to human speech. This capability is used in virtual
                assistants, customer service robots, and home automation
                systems, allowing for more intuitive and natural interactions
                with technology.
              </Typography>
              <Typography paragraph>
                <strong>Computer Vision:</strong> AI-driven computer vision
                enables robots to interpret and understand visual information
                from their surroundings. This technology is used in applications
                such as facial recognition, object detection, and scene
                understanding, allowing robots to interact with the world in a
                more meaningful way.
              </Typography>
            </div>

            <div style={scaleInStyle(1.5)}>
              <Typography variant="h6" gutterBottom color={"black"}>
                Applications of Robotics and AI
              </Typography>
              <Typography paragraph>
                <strong>Healthcare:</strong> Robots and AI are transforming
                healthcare by assisting in surgeries, managing patient care, and
                automating repetitive tasks. Surgical robots, such as the da
                Vinci Surgical System, use AI to enhance precision and reduce
                recovery times. AI algorithms analyze medical images to aid in
                diagnosis and treatment planning.
              </Typography>
              <Typography paragraph>
                <strong>Manufacturing:</strong> In manufacturing, robots
                equipped with AI are improving efficiency and quality.
                Collaborative robots (cobots) work alongside human workers,
                performing repetitive tasks and allowing for greater flexibility
                in production processes. AI-driven predictive maintenance
                systems analyze machine data to prevent breakdowns and optimize
                performance.
              </Typography>
              <Typography paragraph>
                <strong>Retail:</strong> AI and robotics are revolutionizing the
                retail industry by automating inventory management, enhancing
                customer service, and streamlining supply chains. Robots can
                restock shelves, assist with checkout, and provide personalized
                recommendations based on customer data.
              </Typography>
              <Typography paragraph>
                <strong>Agriculture:</strong> In agriculture, robots equipped
                with AI are being used for tasks such as planting, harvesting,
                and monitoring crops. These robots can analyze soil conditions,
                detect pests, and optimize resource usage, leading to more
                efficient and sustainable farming practices.
              </Typography>
            </div>

            <div style={fadeInUpStyle(2)}>
              <Typography
                variant="h6"
                gutterBottom
                fontWeight={500}
                color={"black"}
              >
                The Future of Robots and AI
              </Typography>
              <Typography paragraph>
                As robots and AI continue to evolve, their potential
                applications will expand, leading to new opportunities and
                challenges. The integration of AI with robotics is expected to
                drive further advancements in automation, personalization, and
                efficiency across various industries. However, it also raises
                important questions about ethics, job displacement, and the need
                for regulatory frameworks.
              </Typography>
              <Typography paragraph>
                The future of robotics and AI will be shaped by ongoing
                research, innovation, and collaboration between technologists,
                policymakers, and society at large. By harnessing the power of
                these technologies responsibly, we can create a future where
                robots and AI enhance our lives and contribute to a better
                world.
              </Typography>
            </div>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={handlePrevious}
                startIcon={<ArrowBackIcon />}
                sx={{
                  textTransform: "none",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "8px",
                  border: "1px solid #378c92",
                  color: "#378c92",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #378c92",
                  },
                }}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleNext}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: "none",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "8px",
                  border: "1px solid #378c92",
                  color: "#378c92",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #378c92",
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ marginBottom: "2rem", ...scaleInStyle(1) }}>
              <CardMedia
                component="img"
                image={webDevelopment}
                alt="Blog Image"
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  fontWeight={600}
                  color={"#378c92"}
                >
                  AI in Modern Web Development
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Discover how artificial intelligence is transforming the
                  landscape of web development.
                </Typography>{" "}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "1.5rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    backgroundColor: "#378c92",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "#378c92",
                    },
                    textTransform: "none",
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InsightDetails;
