import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const LibraryTabsView = ({
    classes,
    activeTab,
    tabs,
    onClick
}) => {
    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={activeTab}>
              {
                  tabs.map(el => <Tab value={'el'} label={el} onClick={(evt) => {evt.preventDefault(); onClick(evt.target.innerText)}} />)
              }
            </Tabs>
          </AppBar>
        </div>
      </NoSsr>
    );
}

LibraryTabsView.propTypes = {
  classes: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(LibraryTabsView);