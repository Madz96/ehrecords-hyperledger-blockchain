import AddRecordForm from '../addRecord/AddRecordForm';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

export default function PatientExpandedInfo(props) {
    //Obtains user full data with props KEY of user
    const [patientData, setPatientData] = useState({});

    useEffect(() => {
      axios.get(`http://localhost:4000/api/patients/${props.id}`)
      .then(
        (result) => {
          setPatientData(result.data.patient);
        }
      )
    }, [props.id]);

    const handleExit = () => {
      props.onExit();
    };

    return (
      <React.Fragment>
        <Typography variant="h6">
          Registers
        </Typography>
        <AddRecordForm patientId={props.id} handleExit={handleExit}/>
        <List>
          {
            patientData.records ?
              (
                patientData.records.map((record) =>
                  <ListItem key={record.date}>
                    <ListItemText
                      primary={record.information}
                      secondary={"Edited by "+record.doctorId+" the "+record.date}
                    />
                  </ListItem>
                )
              )
              :
              (null)
          }       
        </List>
      </React.Fragment>
    );
}