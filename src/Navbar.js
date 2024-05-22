


// import React from 'react';
// import { AppBar, Toolbar, Typography,Container } from '@mui/material';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import logo from './assets/Radush-Logo-PNG-e1643105522229-300x155.png'; // Adjust the file extension if needed
// import './App.css'; // Import your CSS file

// const Navbar = () => {
//   return (
   
//     <AppBar position="static" style={{ height: '120px' }}>
//       <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
//         <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}> {/* Link to Home */}
//           <img src={logo} alt="Logo" style={{ width: '150px', marginLeft: '20px' }} /> {/* Add your logo here */}
//         </Link>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <Typography variant="h6" className="navbar-item" style={{ marginRight: '10px', color: 'black', padding: '60px' }}>
//             <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</Link> {/* Link to Home */}
//           </Typography>
//           <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
//             <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link> {/* Link to About */}
//           </Typography>
//           <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
//             <Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link> {/* Link to Services */}
//           </Typography>
//           <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
//             <Link to="/global-presence" style={{ textDecoration: 'none', color: 'black' }}>Our Global Presence</Link> {/* Link to Global Presence */}
//           </Typography>
//           <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
//             <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Speak To Us</Link> {/* Link to Contact */}
//           </Typography>
//           <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
//             <Link to="/content-corner" style={{ textDecoration: 'none', color: 'black' }}>Content Corner</Link> {/* Link to Content Corner */}
//           </Typography>
//         </div>
//       </Toolbar>
//     </AppBar>
   
//   );
// };

// export default Navbar;






import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/Radush-Logo-PNG-e1643105522229-300x155.png';
import './App.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ height: '120px',backgroundColor: 'white'  }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
        <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
          <img src={logo} alt="Logo" style={{ width: '150px', marginLeft: '20px' }} />
        </Link>
        {isMobile ? (
          <>
            <IconButton
              onClick={handleMenuClick}
              style={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'black',  }}>Home</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/product" style={{ textDecoration: 'none', color: 'black' }}>Products</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/global-presence" style={{ textDecoration: 'none', color: 'black' }}>Our Global Presence</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Speak To Us</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/content-corner" style={{ textDecoration: 'none', color: 'black' }}>Content Corner</Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" className="navbar-item" style={{ marginRight: '10px', color: 'black', padding: '60px' }}>
              <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </Typography>
            <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
            </Typography>
            <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
              <Link to="/product" style={{ textDecoration: 'none', color: 'black' }}>Products</Link>
            </Typography>
            <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
              <Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link>
            </Typography>
            <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
              <Link to="/global-presence" style={{ textDecoration: 'none', color: 'black' }}>Our Global Presence</Link>
            </Typography>
            <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Speak To Us</Link>
            </Typography>
            <Typography variant="h6" className="navbar-item" style={{ marginRight: '40px', color: 'black' }}>
              <Link to="/content-corner" style={{ textDecoration: 'none', color: 'black' }}>Content Corner</Link>
            </Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
