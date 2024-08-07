import React from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const HomeSection: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Professional WordPress Themes & Website Templates for any project
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover thousands of easy to customize themes, templates & CMS products, made by world-class developers.
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        <TextField
          label="e.g. responsive WordPress"
          variant="outlined"
          sx={{ flexGrow: 1, marginRight: 2 }}
        />
        <Button variant="contained" color="success">
          Search
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/image1.jpg"
              alt="Best Selling WooCommerce Theme"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                #1 Best Selling WooCommerce Theme
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The perfect theme for any WordPress or WooCommerce Site
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/image2.jpg"
              alt="Best Selling Creative Theme"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Best Selling Creative Theme
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2 Page Builders, 570+ Demos, 160,000+ Customers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/image3.jpg"
              alt="Uncode"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Uncode
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Trusted by over 85,000 users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection;import React from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const HomeSection: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Professional WordPress Themes & Website Templates for any project
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover thousands of easy to customize themes, templates & CMS products, made by world-class developers.
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        <TextField
          label="e.g. responsive WordPress"
          variant="outlined"
          sx={{ flexGrow: 1, marginRight: 2 }}
        />
        <Button variant="contained" color="success">
          Search
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/image1.jpg"
              alt="Best Selling WooCommerce Theme"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                #1 Best Selling WooCommerce Theme
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The perfect theme for any WordPress or WooCommerce Site
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/image2.jpg"
              alt="Best Selling Creative Theme"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Best Selling Creative Theme
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2 Page Builders, 570+ Demos, 160,000+ Customers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/image3.jpg"
              alt="Uncode"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Uncode
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Trusted by over 85,000 users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection;