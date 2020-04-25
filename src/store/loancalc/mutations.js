export const setRangeValueCollateral = (state, value) => {
  state.collateralValue = Number(value);
};

export const setRangeValueLoan = (state, value) => {
  state.loanValue = Number(value);
};

export const setFormResultTotalPayable = (state, result) => {
  state.formResultTotalPayable = result;
};

export const setFormResultMonthlyInstallment = (state, result) => {
  state.formResultMonthlyInstallment = result;
};

export const setSelectedData = (state, result) => {
  state.selectedData = result;
};
export const setCollateralType = (state, value) => {
  state.selectedCollateralType = value;
};

export const setNumberOfInstallments = (state, value) => {
  state.numberOfInstallments = value;
};

export const setMaxLoanAmount = (state, result) => {
  state.maxLoanAmount = result;
};

export const setModalFormResultState = (state, value) => {
  state.modalFormState = value;
};
