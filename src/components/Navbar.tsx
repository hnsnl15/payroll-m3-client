import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { css } from "@emotion/css";

const navbarStyles = css`
  background-color: #333;
`;

const logoStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Navbar() {
  return (
    <AppBar position="fixed" className={navbarStyles}>
      <Toolbar className={logoStyles}>
        <Typography variant="h6">
          <span>My App</span>
        </Typography>
        <Avatar alt="Login Avatar" src="src\assets\avatar.jpg" />
      </Toolbar>
    </AppBar>
  );
}
