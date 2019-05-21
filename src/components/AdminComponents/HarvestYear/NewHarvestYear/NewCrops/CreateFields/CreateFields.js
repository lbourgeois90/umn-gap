
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './CreateFields.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class CreateFields extends Component {


  state= {
    newField: {
      name: '',
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      newField: {
        ...this.setState,
        [propertyName]: event.target.value,

      }
    });
  }

  addFieldSource = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_FIELD_SOURCE', payload: this.state.newField })
    this.setState({
      newField: {
        name: '',
        harvest_year_id: this.props.reduxState.user.current_harvest_year,
      }
    })
  }

  removeFieldSource = (event) => {
    this.props.dispatch({ type: 'DELETE_FIELD_SOURCE', payload: event.currentTarget.name })

  }

  nextPage = () => {
    this.props.history.push('/labelcode')
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
            
            <Grid container spacing={24}
          container
          direction="column"
          justify="center"
          alignItems="center">
               
                <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Create Fields
            </Typography>
                </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Crops to track" variant="outlined" color="primary"
              onChange={this.handleInputChangeFor('name')}
              value={this.state.newField.type}
            >
            </TextField>
            <Button size="large" color="primary" onClick={this.addFieldSource} >Add</Button>

          </Grid>
          <Grid item xs={12} sm={6}>
            <ul> My Fields:</ul>
            {
              this.props.reduxState.cropSetup.fieldSetup.map(crop =>
                <li key={crop.farm_field_id}>{crop.field_name}
                  <Button size="large" color="primary" 
                  onClick={this.removeFieldSource} 
                  name={crop.farm_field_id} >
                    Remove
                </Button>
                </li>
              )
            }
            <Grid item xs={12} sm={6}>
              <Button size="large" color="primary" onClick={this.nextPage}>Next</Button>
            </Grid>

          </Grid>

            </Grid>
           
        </React.Fragment>
    );
  }
}

const styles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
});

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect( mapReduxStateToProps )(withStyles(styles)(CreateFields)));