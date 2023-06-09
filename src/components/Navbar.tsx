import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { css } from "@emotion/css";
import { Link, useNavigate } from "react-router-dom";
import { StyledWhiteText } from "../css";
import { useState } from "react";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "../hooks/useAuth";

const NavbarStyles = css`
  background-color: #333;
`;

const LogoStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" className={NavbarStyles}>
      <Toolbar className={LogoStyles}>
        <Typography variant="h6">
          <Link to="/" className={StyledWhiteText}>
            <span>Motor PH</span>
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Link to="/form/employee" className={StyledWhiteText}>
              Add Employee
            </Link>
            <Link to="/form/inventory" className={StyledWhiteText}>
              Add Stock
            </Link>
          </Box>
          <Button
            onClick={() => setShowMenu(!showMenu)}
            sx={{ position: "relative" }}
          >
            <Avatar alt="Login Avatar" src="/src/assets/avatar.jpg" />
          </Button>
          {showMenu && (
            <Box
              sx={{
                width: "130px",
                height: "100px",
                bgcolor: "white",
                position: "absolute",
                bottom: "-110px",
                right: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  Cookies.remove(TOKEN_COOKIE_NAME);
                  window.location.reload();
                  navigate("/login");
                }}
              >
                Log out
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
