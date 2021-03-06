import React ,{useEffect} from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import {withRouter} from 'react-router-dom';

import about from "./component/about/about";
import appointment from "./component/appointment/appointment";
import doctor_signin from "./component/doctor/doctor_signin";
import patient_signin from "./component/patient/patient_signin";
import patient_signup from "./component/patient/patient_signup";
import doctor_signup from "./component/doctor/doctor_signup";
import contact from "./component/contact/contact";
import Layout from "./component/layout";
import docProfile from "./component/doctor/profile"
import patProfile from "./component/patient/profile"
import Details from "./component/details"
import Allpatient from "./component/allpatient"



import Home from "./component/home/home";

import * as doc_actions from "./store/actions/doc_auth_action";
import * as pat_actions from "./store/actions/pat_auth_action";
import { useDispatch } from 'react-redux';

function App() {

  const dispatch=useDispatch();
 


  useEffect(() => {
    const role=localStorage.getItem('role');
    if(role && role==='patient'){
    dispatch(pat_actions.authCheckState());}
    if(role && role==='doctor'){
    dispatch(doc_actions.authCheckState());}
    
  });

  const user_role=localStorage.getItem('role');

  let routes=(
    <Switch>
        <Route path="/about" component={about} />
        <Route path="/appointment" component={appointment} />
        <Route path="/doctor_signin"  component={doctor_signin} />
        <Route path="/doctor_signup"  component={doctor_signup} />
        <Route path="/patient_signin"  component={patient_signin} />
        <Route path="/patient_signup"  component={patient_signup} />
        <Route path="/contact"  component={contact} />
        {/* <Route path="/details"  component={Details} /> */}
        {/* <Route path="/allpatient"  component={Allpatient} /> */}
        <Route path="/" exact component={Home} />
        
        <Redirect to='/' />
        </Switch>
  );

  if(user_role && user_role==='doctor'){
    routes=(
      <Switch>
        <Route path="/about" component={about} />
        <Route path="/appointment" component={appointment} />
        <Route path="/contact"  component={contact} />
        <Route path="/profile"  component={docProfile} />
        {/* <Route path="/details"  component={Details} /> */}
        <Route path="/allpatient"  component={Allpatient} />
        <Route path="/" exact component={Home} />
        <Redirect to='/' />
        </Switch>
    );
  };

  if(user_role && user_role==='patient'){
    routes=(
      <Switch>
        <Route path="/about" component={about} />
        <Route path="/appointment" component={appointment} />
        <Route path="/contact"  component={contact} />
        <Route path="/profile"  component={patProfile} />
        <Route path="/details"  component={Details} />
        {/* <Route path="/allpatient"  component={Allpatient} /> */}
        <Route path="/" exact component={Home} />
        <Redirect to='/' />
        </Switch>
    );
  }

  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default withRouter(App);
