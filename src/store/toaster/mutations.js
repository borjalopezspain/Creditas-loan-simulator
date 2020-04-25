export const setToasterState = (state, result) => {
  state.toasterActive = result.state;
  state.toasterMsg = result.msg;
  state.toasterType = result.type;
};
