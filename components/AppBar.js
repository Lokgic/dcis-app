import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link'

const styles = {
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};


const MenuItems = [
    "Home",
    "What is DCIS?",
    "What are my options?",
    "Active Surveillance vs Treatment",
    "Decision Support Tool",
    "Risk and Uncertainty",
    "Patient Testimonies",
    "Other Resources"
]

const getLink = item => {
    switch (item){
        default: 
            return "/"
    }
}


class Bar extends React.Component {
    state = {
        open:0
    }
    toggleDrawer = ()=>{
        const open = 1 - this.state.open;
        this.setState({open})
    }
    render (){
        const { classes } = this.props;
        console.log(this.props)
        return (

            <AppBar position="static">
              <Toolbar variant="regular">
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                  DCIS Decision Tools
                </Typography>
              </Toolbar>
              <Drawer anchor="left" open={this.state.open===1} onClose={this.toggleDrawer}>
                <div role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
                <List>
                    {
                        MenuItems.map((d,i)=>(
                            <Link href={getLink(d)}>
                            <ListItem button key={d}>
                                <ListItemText primary={d}/>
                            </ListItem>
                            </Link>
                        ))
                    }
                </List>
                </div>
              </Drawer>
            </AppBar>

        );
    }
  
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);