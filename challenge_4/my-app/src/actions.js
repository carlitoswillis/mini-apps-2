const CLICK_SQUARE = 'CLICK_SQUARE';

const clickSquare = (e) => ({
  type: CLICK_SQUARE,
  payload: { pos: JSON.stringify(e.target.name) },
});

module.exports = {
  CLICK_SQUARE, clickSquare,
};
