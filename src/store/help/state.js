import jsonData from '../../data/data.json'

const initialState = () => ({
  loaderActive: false,
  answer: '',
  questions: jsonData.helpQuestions
});

export default {
  initialState,
  loaderActive: initialState().loaderActive,
  answer: initialState().answer,
  questions: initialState().questions
};