import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push('/');
    else if (value === 1) history.push('/movies');
    else if (value === 2) history.push('/series');
    else if (value === 3) history.push('/search');
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label='Trending'
        className='color-white'
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        label='Movies'
        className='color-white'
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        label='TV Series'
        className='color-white'
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        label='Search'
        className='color-white'
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
};
export default BottomNav;
