import React from 'react'
import styles from './Homepage.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography,Box } from '@material-ui/core';
import Login from '../../components/Login';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
// import Register from '../components/Register';


const Homepage = () => {
  const [value, setValue] = React.useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Grid>
            <Paper elevation = {20} className={`${styles.home}`} >
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor='primary'
                  onChange={handleChange}
                  >
                  <Tab label="Active"/>
                  <Tab label="Disabled"/>
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Login/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {/* <Register/> */}
                  Hello
                </TabPanel>
            </Paper>
        </Grid>
    </div>
  )
}

export default Homepage;
