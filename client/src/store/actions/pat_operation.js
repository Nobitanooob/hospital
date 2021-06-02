import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const make_appointment=(patient,history)=>{


    const pat=patient;
    // console.log(pat);
    axios.post("/api/patient/makeAppointment",{...pat})
    .then(res=>{
        // console.log(res.data);
        if(res.data.error){
            console.log(res.data.error);
            alert(res.data.error);
        }
        else{
            alert(res.data.message);
            // console.log(pat.fileUrl);
             console.log(pat);
            // alert(pat);
             history.push({
                 pathname:"/details",
                 state:{detail:pat},
             });
        }
    }).catch(err=>{
        //console.log(err);
        alert(err);
    });

}


export const setDoctorsList=(list)=>{
    return{
        type:actionTypes.PAT_GET_DOCTORLIST,
        docList:list
    };
};


export const getPatientList=(history)=>{

    return dispatch=>{
        axios.get("/api/doctor/allPatient")
        .then(res=>{
            if(res.data.error){
                console.log(res.data.error);
                alert(res.data.error);
            }
            else{
                
                 console.log(res.data.patientList);
                // alert(pat);
                history.push({
                    pathname: '/allpatient',
                    state: { detail:res.data.patientList }
                });
                // window.location.href = `/allpatient?detail=${res.data}`
                  
        //         <Redirect to={{
        //             pathname: '/allpatient',
        //             state: { detail:res.data.patientList }
        //         }}
        // />
                
                 
        }})
        .catch(err=>{
            alert("something went wrong in catch");
            console.log(err);
        })
    }
};