import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
//import setupFarmSaga from './setupFarmSaga'
import workerSaga from './workerSaga';
import harvestYearSaga from './harvestYearSaga';

import waterSetup from './waterSetup';
import cropSetup from './cropSetup';

import setupSaga from './setupSaga';
import getLabelCodeSaga from './getLabelCodeSaga';
import setupManureSaga from './setupManureSaga';
import setupCompostSaga from './setupCompostSaga';
import personSaga from './personSaga';
import harvestSaga from './harvestLogSaga';
import employeeLogSaga from './employeeLogSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
   // setupFarmSaga(),
    workerSaga(),
    harvestYearSaga(),
    
    waterSetup(),
    cropSetup(),
    getLabelCodeSaga(),
    setupSaga(),
    setupManureSaga(),
    setupCompostSaga(),
    personSaga(),
    harvestSaga(),
    employeeLogSaga(),

  ]);
}
