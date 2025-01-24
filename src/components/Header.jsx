import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

  // return (
  //   <header>
  //     <nav>
  //       <ul>
  //         <li>
  //           <a href="#about">About</a>
  //         </li>
  //         <li>
  //           <a href="#education">Education</a>
  //         </li>
  //         <li>
  //           <a href="#experience">Experience</a>
  //         </li>
  //         <li>
  //           <a href="#projects">Projects</a>
  //         </li>
  //         <li>
  //           <a href="#skills">Skills</a>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // );
};

export default Header;
