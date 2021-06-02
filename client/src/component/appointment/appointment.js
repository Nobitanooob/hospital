import React,{useState} from 'react';
import firebase from './firebase';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import "./appointment.css";
import * as actions from "../../store/actions/pat_operation";

import {useDispatch} from 'react-redux';

import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    MenuItem
  } from '@material-ui/core';

export default function Appointment(props){

    const dispatch=useDispatch();

    // const doc_id=props.location.id;
    const pat_id=localStorage.getItem('userId');

    const [name,setname]=useState('');
    const [age,setage]=useState('');
    const [adhar,setadhar]=useState('');
    const [fever,setfever]=useState('');
    const [grade,setgrade]=useState('');
    const [respiratory,setrespiratory]=useState('');
    const [chest,setchest]=useState('');
    const [diagnosis,setdiagnosis]=useState('');
    const [observation,setobservation]=useState('');

    const [uploaded,setuploaded]=useState(false);
    const [files, setFiles] = useState([]);
    const [urlFiles, seturlFiles] = useState([]);
    
    const onFileChange = e => {
      for (let i = 0; i < e.target.files.length; i++) {
           const newFile = e.target.files[i];
           newFile["id"] = Math.random();
        // add an "id" property to each File object
           setFiles(prevState => [...prevState, newFile]);
         }
       };
  //  const userId =localStorage.getItem('userId');  
  //  let url=[];
   const onUploadSubmission = e => {
        e.preventDefault(); // prevent page refreshing
        const promises = [];
        files.forEach(file =>
          {
          const uploadTask = firebase.storage().ref().child(`files/${pat_id}/${file.name}`).put(file);
          promises.push(uploadTask);
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
            const progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                            console.log(`Progress: ${progress}%`);
                }},
            error => console.log(error.code),
               async () => {
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                          console.log(downloadURL);
                          seturlFiles(prevState => [...prevState, downloadURL]);
                 // url.push(downloadURL);
                 // console.log(url);
                          }
                         );
                       });
        Promise.all(promises)
        .then(() => {
              setuploaded(true);
              alert('All files uploaded successfully, Now you can submit the form.');
        })
                    .catch(err => console.log(err.code));
             }     

    const changename=(e)=>{
        setname(e.target.value);
    }
    const changeage=(e)=>{
      setage(e.target.value);
  }
  const changeadhar=(e)=>{
    setadhar(e.target.value);
}

const changefever=(e)=>{
    setfever(e.target.value);
}
const changegrade=(e)=>{
  setgrade(e.target.value);
}
    const changechest=(e)=>{
        setchest(e.target.value);
    }
    
    const changerespiratory=(e)=>{
        setrespiratory(e.target.value);
    }
    
    const changediagnosis=(e)=>{
      setdiagnosis(e.target.value);
  }
  const changeobservation=(e)=>{
    setobservation(e.target.value);
}



    const Ref = React.createRef();



    const handleSubmit=(e)=>{
        const patient={
            patientId:pat_id,
            patientName:name,
            age:age,
            adhar:adhar,
            fever:fever,
            grade:grade,
            respiratory:respiratory,
            chest :chest,
            diagnosis: diagnosis,
            observation:observation,
            fileUrl:urlFiles
        }
         
        dispatch(actions.make_appointment(patient,props.history));

    }



    return(
        
        <div className=" bg ">
            <div className="row main p-4 m-0">
                <div className="col-sm-12 col-lg-7 p-4 slot" >
                <h2>Fill the form for Diagnosis.</h2>
    <p> Please fill all the feilds and upload atmost 1 image file ,12 audio files and  1 video file for better diagnosis. </p>
    <h4>Don`t upload more than 14 files.</h4>
    <h2>For Help Call : +91-172-2237052-55</h2>
    
                </div>
                <div className=" col-sm-12 col-lg-5 p-2">
    <ValidatorForm
    onSubmit={handleSubmit}
    instantValidate={false}
  >
    <Card>
      <CardHeader
        
        title="Registration Form"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <TextValidator
            ref={Ref}
            onChange={changename}
              fullWidth
              label="Patient name"
              name="name"
              value={name}
              variant="outlined"
              validators={['required']}
              errorMessages={['this field is required']}
            />
            
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextValidator
              fullWidth
              label="Aadhar number"
              name="adhar"
              type="number"
              value={adhar}
              variant="outlined"
              validators={['required']}
              ref={Ref}
              onChange={changeadhar}
              errorMessages={['this field is required']}
            />

          </Grid>
          
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextValidator
             fullWidth
              label="Age"
              name="age"
              value={age}
              type="number"
              variant="outlined"
              ref={Ref}
              onChange={changeage}
              validators={['required', 'isNumber']}
              errorMessages={['this field is required','invalid input']}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextValidator
                variant="outlined"
                fullWidth
                select
                id="fever"
                label="Fever"
                name="fever"
                autoComplete="fever"
                ref={Ref}
                onChange={changefever}
                value={fever}
                validators={['required']}
                errorMessages={['this field is required']}
              >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
              
            
               </TextValidator> 
          </Grid>
          
          <Grid
            item
            xs={12}
          >
            <TextValidator
              fullWidth
              label="Fever Grade"
              name="number"
              type="number"
              value={grade}
              variant="outlined"
              ref={Ref}
              onChange={changegrade}
              validators={['required','isNumber']}
              errorMessages={['this field is required','Invalid number, fill 0 if not having fever']}
            />
          </Grid>

          <Grid
            item
            xs={12}
          >
            <TextValidator
              fullWidth
              label="Respiratory Rate"
              name="number"
              type="number"
              value={respiratory}
              variant="outlined"
              ref={Ref}
              onChange={changerespiratory}
              validators={['required','isNumber']}
              errorMessages={['this field is required','Invalid number']}
            />
          </Grid>
          
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextValidator
                variant="outlined"
                fullWidth
                select
                id="chest"
                label="Chest Indrawing"
                name="chest"
                autoComplete="chest"
                ref={Ref}
                onChange={changechest}
                value={chest}
                validators={['required']}
                errorMessages={['this field is required']}
              >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
              
            
               </TextValidator> 
          </Grid>

          <Grid
            item
            xs={12}
          >
            <TextValidator
              fullWidth
              multiline
              label="Diagnosis"
              name="diagnosis"   
              value={diagnosis}             
              variant="outlined"
              ref={Ref}
              onChange={changediagnosis}
              validators={['required']}
              errorMessages={['this field is required']}
            />
              
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextValidator
              fullWidth
              multiline
              label="Any Other Observation"
              name="observation"   
              value={observation}             
              variant="outlined"
              ref={Ref}
              onChange={changeobservation}
              validators={['required']}
              errorMessages={['this field is required']}
            />
              
          </Grid>
          <Grid
            item 
            md={6}
            xs={12}
          >
            <input
              fullWidth
              multiple
              type="file"
              label="Upload your files"
              name="record"              
              variant="outlined"
              ref={Ref}
              onChange={onFileChange}
            />
              
          </Grid>
          
          <Grid
            item
            md={6}
            xs={12}
          >
            <Button
              
              color="secondary"
              variant="contained"
              onClick={onUploadSubmission}>Upload Files
              </Button>
              
          </Grid>

        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p:4
        }}
      >
        <Button
         type="submit"
          color="primary"
          variant="contained"
          disabled={!uploaded}
          id="submitButton"
        >
          Submit
        </Button>
      </Box>
    </Card>
  </ValidatorForm>
  </div>
  </div>
  </div>
    );
}