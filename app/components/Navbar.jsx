import { Button, Box, AppBar, Toolbar, Typography, Container, Badge } from "@mui/material"

export default function Header() {
  return (
    <AppBar 
      position="absolute" 
      sx={{ 
        bgcolor: 'transparent',
        boxShadow: 'none',
        zIndex: 50
      }}
    >
      <Box sx={{ px: 0 }}>
        <Toolbar sx={{ px: 0, py: 2, justifyContent: 'space-between', minHeight: 'auto' }}>
          {/* Logo Section - Far Left */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: -2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Icons above logo */}
              <Box sx={{ display: 'flex', gap: 1, mb: 0.5,marginLeft: 10 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  bgcolor: '#FFD700', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  ☀️
                </Box>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  bgcolor: '#FF8C00', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  🌴
                </Box>
              </Box>
              {/* Logo text */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1,
                  mb: 0.5
                }}
              >
                RIVIERA
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  lineHeight: 1
                }}
              >
                TRAVEL
              </Typography>
            </Box>
          </Box>

          {/* Navigation Links - Center */}
          <Box 
            component="nav" 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              gap: 4,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <Typography
              component="a"
              href="#"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': { color: '#000000' },
                transition: 'color 0.2s'
              }}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              Featured
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              About Us
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              Blog
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': { color: '#333333' },
                transition: 'color 0.2s'
              }}
            >
              Contact Us
            </Typography>
          </Box>

          {/* Action Icons and Button - Far Right */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 3 }}>
            {/* Flag icon */}
            <Box 
              sx={{ 
                width: 24, 
                height: 24, 
                bgcolor: '#000000', 
                borderRadius: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#333333' }
              }}
            >
              <span style={{ color: 'white', fontSize: '14px' }}>🏁</span>
            </Box>
            
            {/* Shopping cart with badge */}
            <Badge badgeContent={1} color="error">
              <Box 
                sx={{ 
                  width: 24, 
                  height: 24, 
                  bgcolor: '#000000', 
                  borderRadius: 1, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#333333' }
                }}
              >
                <span style={{ color: 'white', fontSize: '14px' }}>🛒</span>
              </Box>
            </Badge>
            
            {/* Book with Us button */}
            <Button 
              variant="outlined"
              sx={{
                borderColor: '#000000',
                color: '#000000',
                bgcolor: 'white',
                px: 3,
                py: 1,
                borderRadius: 1,
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  borderColor: '#000000'
                }
              }}
            >
              Book with Us
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}
