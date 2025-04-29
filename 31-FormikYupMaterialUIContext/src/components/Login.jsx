import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (
        user &&
        values.username === user.username &&
        values.password === user.password
      ) {
        setIsAuthenticated(true);
        toast.success("ugurla daxil olundu");
        navigate("/");
      } else {
        toast.error("username ve ya password yalnisdir");
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5">login</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          type="password"
          margin="normal"
          label="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button fullWidth type="submit" variant="contained">
          sign in
        </Button>
      </form>
    </Box>
  );
};

export default Login;
