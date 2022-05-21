import Header from '../Header';
import Sidebar from '../Sidebar';
import Grid from '@mui/material/Grid';

const Layout = ({ children }) => {
  return (
    <>
      <Grid container fluid={false} spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
