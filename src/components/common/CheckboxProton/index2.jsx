import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
});

const CheckboxProton2 = ({ changeChecked2, zone }) => {
  
  const classes = useStyles();
  const { checked, label, id } = zone;
  return (
    <div>
      <Button
        classes={{
          checked: classes.checked,
          root: classes.root,
        }}
        size='small'
        variant={checked ? 'contained' : 'outlined'}
        color={checked ? 'primary' : 'default'}
        onClick={() => changeChecked2(id)}
      >
        {label}
      </Button>
    </div>
  );
};

export default CheckboxProton2;
