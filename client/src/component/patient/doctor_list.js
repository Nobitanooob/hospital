import React,{useCallback,useEffect} from 'react';

import {
    Button,
    Card,
    CardContent,
    //Image,
    Avatar,
    Typography,
    CardActions,
    makeStyles,
    Paper,
    CardActionArea,
    CardMedia
  } from '@material-ui/core';


import {useSelector,useDispatch} from 'react-redux';
import * as actions from "../../store/actions/pat_operation";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
     
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  media: {
    height: 180,
  },
}));

export default function Doctorlist(props) {


//   const error=useSelector(state => state.patauth.error);
  const list=useSelector(state => state.patauth.docList);
  const dispatch=useDispatch();

  const tryList = useCallback(() =>{
    dispatch(actions.getDoctorsList());
    },[dispatch]);
  useEffect(()=>{
    tryList();
  },[tryList]);

  


  const classes = useStyles();


  return (
    <div>
        <div className="row p-2">
            {list ? list.map(doc=>{
                return(
                    <div  className="col-sm-12 col-md-4 col-lg-3 p-4" key={doc.userId}>
                    <Paper elevation={3}>
                        <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        >{doc.image ? '' 
        : <Avatar variant='square' className="w-100 h-100" style={{alignSelf: 'center'}}>
        </Avatar>}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textTransform:'capitalize', textAlign:'center'}}>
           Dr. {`${doc.firstName} ${doc.lastName}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Make an appointment
        </Button>
        
      </CardActions>
    </Card>
                    </Paper>
                    </div>
                );
            }) : ''}
        </div>
    </div>
  );
}