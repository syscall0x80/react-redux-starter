import { INCREMENT, DOUBLE, ADD } from '../../actions/counter';

const initialState = {
  count: 0,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });

    case DOUBLE:
      return Object.assign({}, state, {
        count: state.count * 2,
      });

    case ADD:
      return Object.assign({}, state, {
        count: state.count + action.num,
      });

    default:
      return state
  }
}
