import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './feature-style';
import ListProject from './ListProject';

function Category() {
  const classes = useStyles();
  return (
    <div className={classes.featureWrap}>
    
      <Container fixed>
        <ListProject />
      
      </Container>
    </div>
  );
}

export default Category;
