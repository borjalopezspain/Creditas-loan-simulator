const initialState = () => ({
  toasterActive: false,
  toasterMsg: '',
  toasterType: '',
});

export default {
  initialState,
  toasterActive: initialState().toasterActive,
  toasterMsg: initialState().toasterMsg,
  toasterType: initialState().toasterType
};