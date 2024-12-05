import { Box, CardMedia, Grid, Typography } from "@mui/material";
import image from "/assets/pngs/about/mk-5-removebg-preview.png";
import { motion } from 'framer-motion';


const cardVariantsBottom = {
  offscreen: {
    y: 50,
    opacity: 0,
  },

  onscreen: (index) => (
    {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 100,
        delay: index * 0.3,
      },
    }
  ),
};

const cardVariants = {
  offscreen: {
    scale: 1.2,
    opacity: 0,
  },

  onscreen: (index) => (
    {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 100,
        delay: index * 0.3,
      },
    }
  ),
};
const AboutUsCardNew = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage:
          " url(https://redvisionexperts.com/wp-content/uploads/2020/10/bg-map-3.png)",
        backgroundPosition: "100% -10%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgb(240, 243, 246)",
        textAlign: "center",
        justifyContent: "left",
        overflow: "hidden",
        position: "relative",
        px: { lg: 10, md: 5, sm: 3, xs: 2 },
        py: { lg: 2, md: 10, sm: 8, xs: 5 },
        pb: { lg: 2, xs: 0 },
      }}
      rowSpacing={1}
    >
      <Grid item xs={12} sm={12} md={6} sx={{ position: "relative" }}>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 100 }}
          custom={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image={image}
            alt="ok"
            sx={{
              cursor: "pointer",
              maxWidth: "100%",
              borderRadius: "5px",
            }}
          />
        </motion.div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{ position: "relative", my: "auto" }}
      >
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariantsBottom}
          transition={{ type: "spring", stiffness: 100 }}
          custom={1}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { md: "16px", sm: "13px", xs: "12px" },
              fontWeight: "600",
              lineHeight: "18px",
              textAlign: "left",
              fontFamily: "Barlow",
              textTransform: "capitalize",
              // fontSize: "16px",
              // fontWeight: "600",
              // lineHeight: "18px",
              color: "#378C92",
              letterSpacing: "3px",
            }}
          >
            CONTACT US
          </Typography>
        </motion.div>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariantsBottom}
          transition={{ type: "spring", stiffness: 100 }}
          custom={2}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { md: "42px", sm: "40px", xs: "20px" },
              fontWeight: "800",
              lineHeight: { xs: "44px", md: "46px" },
              textAlign: "left",
              color: "#11161f",
              my: 3,
              fontFamily: "Barlow",
            }}
          >
            Leading Innovators in Web and Mobile Development
          </Typography>
        </motion.div>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariantsBottom}
          transition={{ type: "spring", stiffness: 100 }}
          custom={3}
        >
          <Typography
            variant="body2"
            sx={{
              color: "grey",
              textAlign: "left",
              lineHeight: "22px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              fontSize: { md: "16px", sm: "16px", xs: "12px" },
            }}
          >
            Techietribe is not just another software house, we are your partners
            in innovation. Specializing in cutting-edge web and mobile
            development, we turn visionary ideas into functional, user-friendly
            applications. Our team combines expertise and creativity to deliver
            top-notch digital solutions, ensuring your business stands out in a
            competitive market.
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default AboutUsCardNew;
