import axios from 'axios';

export const calcCollateralRangeValue = ({commit}, payload) => {
  commit('setRangeValueCollateral',  Number(payload.value) );
};

export const calcLoanRangeValue = ({commit}, payload) => {
  commit('setRangeValueLoan',  Number(payload.value) );
};

export const calcFormResult = ({commit, state}) => {
  const totalPayable = ((Number(state.formResultCalcRules.fft) / 100) + (Number(state.formResultCalcRules.interestRate) / 100) + (Number(state.numberOfInstallments) / 1000) + 1) * Number(state.loanValue);
  const monthlyInstallment = totalPayable / state.numberOfInstallments;

  const totalPayableResult = totalPayable.toFixed(2);
  const monthlyInstallmentResult = monthlyInstallment.toFixed(2);

  commit('setFormResultTotalPayable',  totalPayableResult );
  commit('setFormResultMonthlyInstallment',  monthlyInstallmentResult );
};

export const setSelectedData = ({commit, state}, value) => {
  const result = Object.keys(state.dataOptions)
  .filter(key => key === value)
  .reduce((obj, key) => {
    obj = state.dataOptions[key];
    return obj;
  }, {});

  commit('setCollateralType', value);
  commit('setSelectedData', result);
};

export const calcMaxLoanAmount = ({commit, state}, payload) => {
  const result = (payload.value * Number(state.formResultCalcRules.maxPercentageLoanAmount)) / 100;

  commit('setMaxLoanAmount', Math.round(result));
};

export const sendFormResult = async ({commit}, payload) => {
  const data = payload.data;
  const loaderMsg = payload.loadingMsg;
  const toasterMsgPositive = 'The form has been send correctly. Thank you!';
  const toasterMsgNegative = 'The form has not been send correctly. Please try again';

  commit('loader/setLoaderState', {state: true, loaderMsg}, { root: true });
  commit('setModalFormResultState', false);

  try {
    const res = await axios.post(`${process.env.VUE_APP_DB_URL}/loanRequest`, {data});
    if(res) {
      setTimeout(() => {
        commit('loader/setLoaderState', {state: false, loaderMsg: ''}, { root: true }); //simulate a response in 5 sec
        commit('toaster/setToasterState', {state: true, msg: toasterMsgPositive, type: 'positive'}, { root: true }); //simulate a response in 5 sec
      }, 5000);
    } 
  } catch(e) {
    commit('toaster/setToasterState', {state: true, msg: toasterMsgNegative, type: 'negative'}, { root: true });
  }
}