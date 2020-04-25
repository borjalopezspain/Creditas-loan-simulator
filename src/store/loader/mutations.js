export const setLoaderState = (state, result) => {
  state.loaderActive = result.state;
  state.loaderMsg = result.loaderMsg
};