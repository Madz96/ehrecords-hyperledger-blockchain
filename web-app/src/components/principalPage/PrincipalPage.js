import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PatientList from '../patientList/PatientList';
import SearchBoxPatients from '../searchBoxPatients/SearchBoxPatients';


const styles = {
    heroContent: {
        padding: '24px 0px 18px',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default class PrincipalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filter: ''};
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(newValue) {
        this.setState({filter: newValue});
    }

    render () {
        const pacientes = [
            {'id': 'C', 'firstName': 'El pity Martinez, que loco que está', 'lastName': 'asda'},
            {'id': 'A', 'firstName': 'Pepe', 'lastName': 'asdas'},
            {'id': 'B', 'firstName': 'PedfWWe', 'lastName': 'asdas'}
        ];

        const filter = this.state.filter;

        return (
            <Container maxWidth="sm" component="main" style={styles.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Patients
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    List of Patients
                </Typography>
                <SearchBoxPatients inputValue={filter} onFilterChange={this.handleFilterChange}/>
                <PatientList patients={pacientes} filter={filter}/>
            </Container>
        );

    }
}