import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
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
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     //backgroundColor: theme.palette.background.paper,
//   },
// }));

function LibraryTabsView({
  tabs, onClick
}) {
  const classes = {root: {flexGrow: 1}};
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={(evt, ...args) => {evt.preventDefault(); handleChange(evt, ...args); onClick(evt.target.innerText)}}>
        {
          tabs.map(el => {
            return (
              <LinkTab label={el.name} href={el.url} />
            );
          })
        }
        </Tabs>
      </AppBar>
    </div>
  );
}

export default LibraryTabsView;