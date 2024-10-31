import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Slide,
} from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import RoomIcon from "@mui/icons-material/Room";
import { MuiTelInput } from "mui-tel-input";
import { useInView } from "react-intersection-observer";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  number: Yup.string().required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "80px 0px" },
    margin: "auto",
    width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
  subHeading: {
    fontSize: { xs: "20px", md: "40px" },
    fontFamily: "Barlow",
    fontWeight: "700",
    color: "#313431",
    width: "85%",
    lineHeight: "50px",
  },
  aboutContent: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
    mt: "1rem",
    lineHeight: "2",
    padding: { xs: "0", lg: "0 5rem 0 0" },
  },
  hqHeading: {
    fontSize: "24px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#378C92",
    textAlign: { xs: "center", lg: "start" },
    mt: { xs: "1rem", lg: "4rem" },
  },
  hqContent: {
    mt: "1rem",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    justifyContent: { xs: "center", lg: "flex-start" },
  },
  contact: {
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
    cursor: "pointer",
    "&:hover": {
      color: "#378C92",
    },
  },
  formHeading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
  },
  textField: {
    width: "100%",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f0f3f6",
      },
      "&:hover fieldset": {
        borderColor: "#378C92",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
      },
      input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #f0f0f0 inset",
          WebkitTextFillColor: "#000",
          color: "#000",
        },
      },
    },
  },
  aboutBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  aboutBtn: {
    mt: "1.5rem",
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "18px",
    height: "40px",
    width: { xs: "100%", md: "140px" },
    padding: { xs: "20px", md: "25px 30px" },
    transition: "background-color 0.3s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
};

const RequestQuote = ({ bgColor, inPage = false }) => {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    setSlideIn(true);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      select: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      sendEmail(values);
    },
  });

  const sendEmail = (values) => {
    setLoading(true);

    const params = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      number: parseInt(values.number.replace(/\D/g, "")),
      org: "TechieTribe",
      message: values.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params,
        import.meta.env.VITE_KEY
      )
      .then(() => {
        setSnackbarMessage("Email successfully sent!");
        setSnackbarOpen(true);
        sendAutoReply(params.email, params.first_name);
        formik.resetForm();
      })
      .catch((err) => {
        console.log(err);
        setSnackbarMessage("Email sending failed!");
        setSnackbarOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendAutoReply = (recipientEmail, firstName) => {
    const autoReplyParams = {
      from_name: "TechieTribe",
      to_name: `${firstName}`,
      reply_to: recipientEmail,
      message: `Hello ${firstName},\n\nThank you for reaching out. Your inquiry has been received, and we appreciate your interest in our services. Our team is currently reviewing your message and will get back to you as soon as possible.\n\nIn the meantime, feel free to explore our website for more information about our solutions: www.thetechietribe.com\n\nBest Regards,\nTeam Techietribe`,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        autoReplyParams,
        import.meta.env.VITE_KEY
      )
      .then(() => {
        console.log("Auto-reply email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending auto-reply email:", error);
      });
  };

  return (
    <Box
      sx={{ backgroundColor: bgColor ? bgColor : "rgb(240, 243, 246)" }}
      ref={ref}
    >
      <Box
        sx={{
          ...(inPage
            ? { ...styles.mainContainer, padding: "2rem" }
            : styles.mainContainer),
        }}
      >
        {inView && (
          <>
            <Slide in={slideIn} direction="right" timeout={1800}>
              {/* <Fade in={slideIn} timeout={1800}> */}
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  mt: { xs: "0rem", md: "0rem" },
                }}
              >
                <Typography sx={styles.heading}>REQUEST A QUOTE</Typography>
                <Typography sx={styles.subHeading}>
                  Unlock Innovation with Advanced Technologies
                </Typography>
                <Typography sx={styles.aboutContent}>
                  At Techietribe, we harness the power of cutting-edge
                  programming technologies to craft tailored solutions that meet
                  your unique needs. With expertise across a spectrum of
                  programming languages and technologies, our team delivers
                  robust systems, websites, and applications, empowering your
                  business for success.
                </Typography>
                <Box sx={{ mt: { xs: 0, md: "-1rem" } }}>
                  <Typography sx={styles.hqHeading}>Headquarters</Typography>
                  <Box sx={styles.hqContent}>
                    <LocalPhoneRoundedIcon
                      sx={{ color: "#313431", fontSize: "16px" }}
                    />
                    <Typography sx={styles.contact}>
                      <a href="tel:+923004561162">+92 300 456 1162</a>
                    </Typography>
                  </Box>
                  <Box sx={styles.hqContent}>
                    <RoomIcon sx={{ color: "#313431", fontSize: "16px" }} />
                    <Typography sx={styles.contact}>
                      <a
                        href="https://www.google.com/maps?q=Lahore,%20Pakistan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lahore, Pakistan
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* </Fade> */}
            </Slide>
            <Slide in={slideIn} direction="left" timeout={1800}>
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                  border: "1px solid lightgray",
                  borderRadius: "1rem",
                  width: { xs: "100%", md: "50%" },
                  mt: { xs: "2rem", md: "0rem" },
                  padding: "20px",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography sx={styles.formHeading}>
                  Get in touch with us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                    mt: "1rem",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <TextField
                    type="text"
                    size="small"
                    name="first_name"
                    placeholder="First Name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.first_name &&
                      Boolean(formik.errors.first_name)
                    }
                    helperText={
                      formik.touched.first_name && formik.errors.first_name
                    }
                    sx={styles.textField}
                  />
                  <TextField
                    type="text"
                    size="small"
                    name="last_name"
                    placeholder="Last Name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.last_name &&
                      Boolean(formik.errors.last_name)
                    }
                    helperText={
                      formik.touched.last_name && formik.errors.last_name
                    }
                    sx={styles.textField}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                    mt: "1.5rem",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <TextField
                    size="small"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={styles.textField}
                  />
                  <MuiTelInput
                    size="small"
                    name="number"
                    value={formik.values.number}
                    onChange={(newValue) =>
                      formik.setFieldValue("number", newValue)
                    }
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.number && Boolean(formik.errors.number)
                    }
                    helperText={formik.touched.number && formik.errors.number}
                    sx={styles.textField}
                    defaultCountry="PK"
                  />
                </Box>
                <Box sx={{ display: "flex", width: "100%", mt: "1.5rem" }}>
                  <TextField
                    size="small"
                    name="select"
                    id="select"
                    label="How did you hear about us?"
                    value={formik.values.select}
                    select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.select && Boolean(formik.errors.select)
                    }
                    helperText={formik.touched.select && formik.errors.select}
                    sx={styles.textField}
                    InputLabelProps={{
                      style: {
                        color: "gray",
                        opacity: 0.4,
                      },
                    }}
                  >
                    <MenuItem value="facebook">Facebook</MenuItem>
                    <MenuItem value="instagram">Instagram</MenuItem>
                    <MenuItem value="linkedin">LinkedIn</MenuItem>
                  </TextField>
                </Box>

                <Box sx={{ display: "flex", width: "100%", mt: "1.5rem" }}>
                  <TextField
                    name="message"
                    placeholder="Message"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    sx={styles.textField}
                  />
                </Box>

                <Box sx={styles.aboutBtnContainer}>
                  <Button type="submit" sx={styles.aboutBtn}>
                    {loading ? (
                      <CircularProgress sx={{ color: "#ffffff" }} size={24} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Box>
              </Box>
            </Slide>
          </>
        )}
      </Box>
      <Snackbar
        sx={{ mb: "1rem" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{snackbarMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

export default RequestQuote;
