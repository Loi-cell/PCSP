import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch} from 'react-redux';

import useStyles from './styles';
import {createPost} from '../../actions/posts';


const Form = () => {
    const [postData, setPostData] = useState({ name: '', organization: '', address: '', pcontact: '', scontact: '', eaddress: '', aemail: '', sreport: '', dateoc: '', datedis: '', timeoc: '', timedis: '', eventov: '', dateend: '', timeend: ''});
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleSumbit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {}

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSumbit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="name" variant="outlined" label="Name:" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value})}/>
                <TextField name="organization" variant="outlined" label="Organization:" fullWidth value={postData.organization} onChange={(e) => setPostData({ ...postData, organization: e.target.value})}/>
                <TextField name="address" variant="outlined" label="Address:" fullWidth value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value})}/>
                <TextField name="pcontact" variant="outlined" label="Primary Contact:" fullWidth value={postData.pcontact} onChange={(e) => setPostData({ ...postData, pcontact: e.target.value})}/>
                <TextField name="scontact" variant="outlined" label="Secondary Contact:" fullWidth value={postData.scontact} onChange={(e) => setPostData({ ...postData, scontact: e.target.value})}/>
                <TextField name="eaddress" variant="outlined" label="Email Address:" fullWidth value={postData.eaddress} onChange={(e) => setPostData({ ...postData, eaddress: e.target.value})}/>
                <TextField name="aemail" variant="outlined" label="Alternative Email:" fullWidth value={postData.aemail} onChange={(e) => setPostData({ ...postData, aemail: e.target.value})}/>
                <TextField name="sreport" variant="outlined" label="Summary Report:" fullWidth value={postData.sreport} onChange={(e) => setPostData({ ...postData, sreport: e.target.value})}/>
                <TextField name="dateoc" variant="outlined" label="Date Occured:" fullWidth value={postData.dateoc} onChange={(e) => setPostData({ ...postData, dateoc: e.target.value})}/>
                <TextField name="datedis" variant="outlined" label="Date Discovered:" fullWidth value={postData.datedis} onChange={(e) => setPostData({ ...postData, datedis: e.target.value})}/>
                <TextField name="timeoc" variant="outlined" label="Time Occured:" fullWidth value={postData.timeoc} onChange={(e) => setPostData({ ...postData, timeoc: e.target.value})}/>
                <TextField name="timedis" variant="outlined" label="Time Discovered:" fullWidth value={postData.timedis} onChange={(e) => setPostData({ ...postData, timedis: e.target.value})}/>
                <TextField name="eventov" variant="outlined" label="Event Over:" fullWidth value={postData.eventov} onChange={(e) => setPostData({ ...postData, eventov: e.target.value})}/>
                <TextField name="dateend" variant="outlined" label="Date End:" fullWidth value={postData.dateend} onChange={(e) => setPostData({ ...postData, dateend: e.target.value})}/>
                <TextField name="timeend" variant="outlined" label="Time End:" fullWidth value={postData.timeend} onChange={(e) => setPostData({ ...postData, timeend: e.target.value})}/>


                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );

}

export default Form;