// src/components/HomeSection.tsx
import React from 'react';
import { Box as MuiBox, Typography, TextField, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const HomeSection: React.FC = () => {
  return (
    <MuiBox sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Professional WordPress Themes & Website Templates for any project
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover thousands of easy to customize themes, templates & CMS products, made by world-class developers.
      </Typography>
      <MuiBox component="form" noValidate autoComplete="off" sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        <TextField
          label="e.g. responsive WordPress"
          variant="outlined"
          sx={{ flexGrow: 1, marginRight: 2 }}
        />
        <Button variant="contained" color="success">
          Search
        </Button>
      </MuiBox>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/2277747/pexels-photo-2277747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              image="https://images.pexels.com/photos/27332202/pexels-photo-27332202/free-photo-of-surfer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Best Selling Creative Theme"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                #2 Best Selling WooCommerce Theme
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
              image="https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Uncode"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                #3 Best Selling WooCommerce Theme
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Trusted by over 85,000 users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MuiBox>
  );
};

export default HomeSection;
