import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Typography,
  Checkbox,
  FormControlLabel,
  Tooltip,
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
  smsConsent: Yup.boolean().oneOf([true], "You must agree to receive SMS messages"),
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
    "& label.Mui-focused": {
      color: "#000000",
      width: "200px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F8F8F8",
      },
      "& .MuiSelect-": {
        color: "black",
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
      "& .MuiSelect-iconOutlined": {
        color: "black",
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
    fontSize: "15px",
    height: "40px",
    width: { xs: "100%", md: "140px" },
    padding: { xs: "20px", md: "23px 20px" },
    transition: "background-color 0.3s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    background: "linear-gradient(to right, #378c92, #536cb7)",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
};

const ContactUsFrom = () => {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [err, setErr] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      select: "",
      message: "",
      smsConsent: false,
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
      org: "Techietribe",
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
        setErr(false)
        setSnackbarMessage("Email successfully sent!");
        setSnackbarOpen(true);
        sendAutoReply(params.email, params.first_name);
        formik.resetForm();
      })
      .catch((err) => {
        console.log("EmIL JS REPSONE ", err);
        setErr(true);
        setSnackbarMessage("Email sending failed!");
        setSnackbarOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendAutoReply = (recipientEmail, firstName) => {
    const autoReplyParams = {
      from_name: "Techietribe",
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
        width: { xs: "100%", md: "40%" },
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100%",
        minWidth: { xs: "100%", md: "35rem" },
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          height: "100%",
          width: { xs: "100%", md: "100%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
            gap: "14px",
            mt: "1rem"
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography sx={{ fontFamily: "Barlow", fontSize: "1rem", mb: "3px", fontWeight: "500" }}>
              First Name:
            </Typography>
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
                  width: { xs: "100%", md: "14rem" },

                  "&::placeholder": {
                    color: "gray",
                    opacity: 0.4,
                  },
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px #F0F0F0 inset",
                    WebkitTextFillColor: "#000000",
                  },
                },
              }}
              classes={{
                listbox: customStyles.autocompleteBackground,
                paper: customStyles.autocompleteBackground,
              }}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography sx={{ fontFamily: "Barlow", fontSize: "1rem", mb: "3px", fontWeight: "500" }}>
              Last Name:
            </Typography>
            <TextField
              type=""
              size="small"
              name="last_name"
              placeholder="Last Name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
              sx={styles.textField}
              inputProps={{
                sx: {
                  width: { xs: "100%", md: "14rem" },
                  "&::placeholder": {
                    color: "gray",
                    opacity: 0.4,
                  },
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px #F0F0F0 inset",
                    WebkitTextFillColor: "black",
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            mt: "0.5rem",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontFamily: "Barlow", fontSize: "1rem", mb: "3px", fontWeight: "500" }}>
            Email Address:
          </Typography>
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
                "&:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 100px #F0F0F0 inset",
                  WebkitTextFillColor: "black",
                },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            mt: "0.5rem",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontFamily: "Barlow", fontSize: "1rem", mb: "3px", fontWeight: "500" }}>
            Phone Number:
          </Typography>
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
                "&:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 100px #F0F0F0 inset",
                  WebkitTextFillColor: "black",
                },
              },
            }}
          />
          <Box sx={{ mt: "0.5rem" }}>
            <Tooltip
              title="By providing your phone number and clicking submit, you agree to receive SMS messages from Techietribe regarding your inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time."
              placement="top"
              arrow
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="smsConsent"
                    checked={formik.values.smsConsent}
                    onChange={formik.handleChange}
                    sx={{
                      color: formik.touched.smsConsent && formik.errors.smsConsent ? "#d32f2f" : "#378C92",
                      "&.Mui-checked": {
                        color: "#378C92",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontFamily: "Barlow", fontSize: "0.875rem", color: "#313431" }}>
                    I agree to receive SMS messages
                  </Typography>
                }
              />
            </Tooltip>
            {formik.touched.smsConsent && formik.errors.smsConsent && (
              <Typography sx={{ color: "#d32f2f", fontSize: "0.75rem", ml: "14px", mt: "3px" }}>
                {formik.errors.smsConsent}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            mt: "0.5rem",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontFamily: "Barlow", fontSize: "1rem", mb: "7px", fontWeight: "500" }}>
            Referral Source:
          </Typography>
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
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #F0F0F0 inset",
                WebkitTextFillColor: "black",
              },
            }}
          >
            <MenuItem value="facebook">
              Facebook
            </MenuItem>
            <MenuItem value="instagram">
              Instagram
            </MenuItem>
            <MenuItem value="linkedin">
              LinkedIn
            </MenuItem>
          </TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            mt: "0.5rem",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontFamily: "Barlow", fontSize: "1rem", mb: "3px", fontWeight: "500" }}>
            Message:
          </Typography>
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
                "&:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 100px #F0F0F0 inset",
                  WebkitTextFillColor: "black",
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
            )}{" "}
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
        {
          !err ? (
            <Alert severity="success"
            >{snackbarMessage}</Alert>
          ) : (
            <Alert severity="error"
            >{snackbarMessage}</Alert>
          )
        }
      </Snackbar>
    </Box>
  );
};

export default ContactUsFrom;
