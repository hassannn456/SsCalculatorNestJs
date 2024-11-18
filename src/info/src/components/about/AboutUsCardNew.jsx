import { Box, CardMedia, Grid, Typography } from "@mui/material";
import image from "/assets/pngs/about/mk-5-removebg-preview.png";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";

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
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{ position: "relative", my: "auto" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { md: "20px", sm: "17px", xs: "12px" },
            fontWeight: "800",
            lineHeight: "1.2",
            textAlign: "left",
            color: "#11161f",
            mb: 5,
            fontFamily: "Barlow",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { md: "46px", sm: "40px", xs: "20px" },
            fontWeight: "800",
            lineHeight: "1.2",
            textAlign: "left",
            color: "#11161f",
            mb: 5,
            fontFamily: "Barlow",
          }}
        >
          Leading Innovators in Web and Mobile Development
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "grey",
            textAlign: "left",
            lineHeight: "1.5",
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
      </Grid>
    </Grid>
  );
};

export default AboutUsCardNew;
