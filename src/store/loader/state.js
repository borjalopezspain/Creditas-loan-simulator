const initialState = () => ({
  loaderActive: false,
  loaderMsg: ''
});

export default {
  initialState,
  loaderActive: initialState().loaderActive,
  loaderMsg: initialState().loaderMsg
};