
import './App.css';
import { Box, ThemeProvider, Typography } from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context';
import SearchBox from './components/search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
      <Appbar/>
      <Banner/>
      <Promotions/>
      <Box display='flex' justifyContent='center' p={4}>
        <Typography variant='h4'>Our Products</Typography>
      </Box>
      <Products/>
      <Footer/>
      <AppDrawer/>
      <SearchBox/>
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
