import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { StyledWhiteText } from "../css";

const NavbarStyles = css`
  background-color: #333;
`;

const LogoStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Navbar() {
  return (
    <AppBar position="fixed" className={NavbarStyles}>
      <Toolbar className={LogoStyles}>
        <Typography variant="h6">
          <Link to="/" className={StyledWhiteText}>
            <span>Motor PH</span>
          </Link>
        </Typography>
        <Avatar alt="Login Avatar" src="/src/assets/avatar.jpg" />
      </Toolbar>
    </AppBar>
  );
}
