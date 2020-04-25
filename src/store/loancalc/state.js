import jsonData from '../../data/data.json'

const initialState = () => ({
  collateralValue: 0,
  loanValue: 0,
  formResultMonthlyInstallment: 0,
  formResultTotalPayable: 0,
  numberOfInstallments: 0,
  selectedData: {},
  selectedCollateralType: '',
  maxLoanAmount: 0,
  interestRate: jsonData.rules.interestRate,
  formResultCalcRules: jsonData.rules,
  collateralOptions: jsonData.options,
  dataOptions: jsonData,
  modalFormState: false
});

export default {
  initialState,
  collateralValue: initialState().collateralValue,
  loanValue: initialState().loanValue,
  formResultMonthlyInstallment: initialState().formResultMonthlyInstallment,
  formResultTotalPayable: initialState().formResultTotalPayable,
  collateralOptions: initialState().collateralOptions,
  dataOptions: initialState().dataOptions,
  selectedData: initialState().selectedData,
  selectedCollateralType: initialState().selectedCollateralType,
  formResultCalcRules: initialState().formResultCalcRules,
  numberOfInstallments: initialState().numberOfInstallments,
  maxLoanAmount: initialState().maxLoanAmount,
  modalFormState: initialState().modalFormState,
  interestRate: initialState().interestRate
};