import { FETCH_OPPS } from '../actions';

export default function(state={}, action) {
  switch(action.type) {
    case FETCH_OPPS:
      return action.payload
    default:
      return state;
  }
}
