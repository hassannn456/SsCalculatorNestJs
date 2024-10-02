import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { MuiTelInput } from "mui-tel-input";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  number: Yup.string().required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const customStyles = {
  autocompleteBackground: {
    backgroundColor: "white",
  },
};

const styles = {
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
    backgroundColor: "#ffffff",
    "& label.Mui-focused": {
      color: "#378C92",
      width: "200px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
      },
    },
  },
  selectField: {
    width: "100%",
    borderRadius: "10px",
    "& .MuiOutlinedSelect-root": {
      "& fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },
    },
    "& .MuiSelect-iconOutlined": {
      color: "#378C92",
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
    fontSize: "15px",
    height: "40px",
    width: { xs: "100%", md: "140px" },
    padding: { xs: "20px", md: "23px 20px" },
    transition: "background-color 0.3s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

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
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);

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
      .catch((error) => {
        console.error("Email sending failed:", error);
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
      message: `Hello ${firstName},\n\nThank you for reaching out. Your inquiry has been received, and we sincerely appreciate your interest in our services. Our team is currently reviewing your message and will get back to you as soon as possible.\n\nIn the meantime, feel free to explore our website for more information about our solutions and capabilities: www.thetechietribe.com\n\nBest Regards,\nTeam Techietribe`,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_AUTO_REPLY_TEMPLATE_ID,
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
      sx={{
        width: { xs: "100%", md: "100%" },
        height: { xs: "100%", md: "28rem" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          border: "1px solid lightgray",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          height: "100%",
          width: { xs: "100%", md: "100%" },
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
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
            size="small"
            name="first_name"
            placeholder="First Name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
            sx={styles.textField}
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.4,
                },
              },
            }}
            classes={{
              listbox: customStyles.autocompleteBackground,
              paper: customStyles.autocompleteBackground,
            }}
          />
          <TextField
            size="small"
            name="last_name"
            placeholder="Last Name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
            sx={styles.textField}
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.4,
                },
              },
            }}
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
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.4,
                },
              },
            }}
          />
          <MuiTelInput
            size="small"
            name="number"
            value={formik.values.number}
            onChange={(newValue) => formik.setFieldValue("number", newValue)}
            onBlur={formik.handleBlur}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            sx={styles.textField}
            defaultCountry="PK"
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.2,
                },
              },
            }}
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
            error={formik.touched.select && Boolean(formik.errors.select)}
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
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={styles.textField}
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.5,
                },
              },
            }}
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
        <Alert
          severity={snackbarMessage.includes("failed") ? "error" : "success"}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
