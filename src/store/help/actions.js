import axios from 'axios';

const getAnswer = (data, value) => {
  const result = Object.keys(data)
  .filter(key => key === `question_${value}`)
  .reduce((obj, key) => {
    obj = data[key];
    return obj;
  }, {});

  return result;
};

export const callForHelp = async ({commit}, value) => {
  const toasterMsgNegative = 'Error. Please try again';

  commit('setHelpLoaderState', true);

  try {
    const res = await axios.get('http://localhost:3000/help')
    if(res) {
      setTimeout(() => {
        commit('setHelpLoaderState', false); //simulate a response in 5 sec
        commit('setAnswer', getAnswer(res.data, value));
      }, 5000);
    }
  } catch(e) {
    commit('toaster/setToasterState', {state: true, toasterMsgNegative, type: 'negative'}, { root: true })
    console.error(e)
  }
};