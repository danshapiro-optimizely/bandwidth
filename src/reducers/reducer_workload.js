export default function(state={}, action) {
  switch(action.type) {
    case 'example_data':
      return 'The action controller worked properly'
    default:
      return state;
  }
}
