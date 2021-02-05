import React from 'react';
import Typography from '@material-ui/core/Typography';
import BackupIcon from '@material-ui/icons/Backup';
import ExploreIcon from '@material-ui/icons/Explore';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import Grid from '@material-ui/core/Grid';
import useStyles from './feature-style';
import { Button } from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';

function Code() {
  const classes = useStyles();
  return (
    <div className={classes.pageSection}>
    
        <div className={classes.comp}>
        <container>
            <Typography variant="h5">
            Latest Computer Scence Final Year Topic And Complete Project Materail
            </Typography>
            </container>
            </div>
            <hr />
      <Grid container className={classes.root} spacing={6}>
        <Grid md={4} item>
          <div className={classes.featureList}>
            <PhoneAndroidIcon className={classes.icon} />
            <Typography variant="h5">
            Mobile App Project Source Code
            </Typography>
            <Typography variant="body1">
            This means that after posting your material, the only thing you have to do is sit back and watch your earnings 
            grow with time. But remember, the more content you upload, the higher your earning power
            <br />
            <Button variant="contained" color="primary">View All Mobile Project</Button>
            
            </Typography>
          </div>
        </Grid>
       
        <Grid md={4} item>
          <div className={classes.featureList}>
            <LaptopMacIcon className={classes.icon} />
            <Typography variant="h5">
            Javascript Python Web App Project Source Code
            </Typography>
            <Typography variant="body1">
            Paraphrasing tool is an AI-based most accurate rephrasing and rewriting. Best paraphrase 
            tool to Reword the essays or phrases in seconds without any registration.
            <br />
            <Button variant="contained" color="primary">View All Python Project</Button>
            
            </Typography>
          </div>
        </Grid>
     
        <Grid md={4} item>
          <div className={classes.featureList}>
            <MusicIcon className={classes.icon} />
            <Typography variant="h5">
            PHP, Nodejs Reactjs
            </Typography>
            <Typography variant="body1">
            We are a web & app development Team that turns your ideas into a new driving force of your business.
            <br />
            <Button variant="contained" color="primary"> View All Project In PHP NODE  </Button>
            </Typography>
          </div>
        </Grid>
      </Grid>

<br /> <br /> <hr />
      <Grid container className={classes.roor} spacing={6}>
           <Grid md={12} item>
          <div className={classes.featureList}>
            <MusicIcon className={classes.icon} />
            <Typography variant="h5">
            Artificial Intelligence And Machine Learning Project
            </Typography>
            <Typography variant="body1">
            We are a web & app development Team that turns your ideas into a new driving force of your business.
            <br />
            <Button variant="contained" color="primary"> View All Project In PHP NODE  </Button>
            </Typography>
          </div>
        </Grid>
      </Grid>

    </div>
  );
}

export default Code;
