import { combineReducers } from 'redux';

import WorkloadReducer from './reducer_workload';

const rootReducer = combineReducers({
  workload: WorkloadReducer
});

export default rootReducer;
