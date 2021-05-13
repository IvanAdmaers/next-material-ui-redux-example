import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 345,
    margin: theme.spacing(1, 1),
  },
  media: {
    height: 140,
  },
}));

export default useStyles;
