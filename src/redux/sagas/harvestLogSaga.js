import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* addHarvestLog(action){
    console.log('in addHarvestLog')
    try{
        let result = yield axios.post(`/log/harvest/`, action.payload)
    }
    catch (error){
        console.log('ERROR IN HARVEST LOG POST', error);
        alert(`Sorry! Was unable to add harvest log! Try again later.`)
    }
}



function* harvestLogSaga() {
//   yield takeLatest('ADD_FARM', addFarmSaga);
  yield takeLatest('ADD_HARVEST_LOG', addHarvestLog);
}

export default harvestLogSaga;
