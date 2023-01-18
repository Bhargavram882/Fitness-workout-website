import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/372.jpg';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '81px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Contact Us at <b>bhargavram5882@gmail.com</b></Typography>
  </Box>
);

export default Footer;