import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import  {  Link, useNavigate }  from "react-router-dom";
import { Tooltip } from "@mui/material";



const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const navigate=useNavigate()
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const removetoken=async ()=>{
await localStorage.removeItem("token")
navigate("/")
  }

  const Dashboard=async ()=>{
 navigate("/home/Dashboard")
  }


  return (
    <AppBar position="static" sx={{ bgcolor: 'text.disabled'  ,color:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://dynamic.brandcrowd.com/preview/logodraft/7d27584c-ae74-4b56-8ec1-1dbab9cb2a1a/image/large.png"
              sx={{ width: 50, height: 50 }}
            />
                      </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Hi</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="B" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <MenuItem  onClick={handleCloseUserMenu}>
             <Link to="/home" fw="bolder" style={{color:"black"}} type="button">Home</Link>  
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" fw="bolder" style={{color:"black"}} onClick={removetoken}>Log Out</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fw="bolder" style={{color:"black"}} onClick={Dashboard}>Dashboard</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar> 
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
