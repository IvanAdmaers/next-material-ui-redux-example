import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 'auto'),
  },
  posts: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(1, 0),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
  },
}));

export default useStyles;
