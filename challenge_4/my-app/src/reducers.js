import actions from './actions';

const coords = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case actions.CLICK_SQUARE: {
      const { pos } = payload;
      const update = [];
      for (let i = 0; i < 10; i += 1) {
        update.push([...state[i]]);
      }
      update[pos[0]][pos[1]] = 1;
      return update;
    }
  }
};

module.exports = { coords };
