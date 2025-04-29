import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    toast.success("logout olundu");
    navigate("/");
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            products
          </Link>
        </Typography>

        <Button color="inherit" onClick={handleOpen}>
          account
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {!isAuthenticated ? (
            <>
              <MenuItem component={Link} to="/register" onClick={handleClose}>
                register
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleClose}>
                login
              </MenuItem>
            </>
          ) : (
            <MenuItem onClick={handleLogout}>log out</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
