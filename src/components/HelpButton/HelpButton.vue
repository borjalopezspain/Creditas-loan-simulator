<template>
  <div class="help-button">
    <span 
      v-if="!loaderActive"
      @click="showQuestions = !showQuestions"
      :class="showAnswer === true ? 'no-click' : ''"
    >
      Help
    </span>
    <span class="help-loader-container">
      <div 
        id="loader" 
        class="loader"
        v-if="loaderActive"
      >
        <div></div>
        <div></div>
      </div>
    </span>
    <div 
      class="questions-container"
      :class="showQuestions ? 'show-questions' : ''"
    >
      <div 
        class="question"
        v-for="(question, index) in questions"
        :key="index"
        @click="callHelp(index), showQuestions = false"
      >
        {{ question.text }}
      </div>
    </div>
    <span 
      class="answer-container"
      :class="showAnswer ? 'show-answer' : ''"
    >
      <div class="answer">
        <p class="answer-text">{{ theAnswer }}</p>
        <p 
          v-if="answer.link !== ''" 
          @click="$router.push(answerLink), showAnswer = false"
          class="contact-link"
        >
          Contact form
        </p>
      </div>
    </span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "help"
);

const data = () => ({
  showQuestions: false,
  showAnswer: false,
  theAnswer: '',
  answerLink: ''
});

const callHelp = function _callHelp(index) {
  this.callForHelp(index);
};

const getAnswer = function _getAnswer() {
  if(this.answer !== {}) {
    this.showAnswer = true;
    if(this.answer.link.length !== 0) {
      this.answerLink = this.answer.link
    } else {
      this.answerLink = '';
    }
    if(this.answer.answer.length !== 0) {
      this.theAnswer = this.answer.answer
    } else {
      this.answerLink = '';
    }

    setTimeout(() => {
      this.showAnswer = false;
    }, 5000);

    if(this.showAnswer === false) {
      this.setAnswer('');
    }
  } 
};

export default {
  name: 'HelpButton',
  data,
  methods: {
    ...mapActions(['callForHelp']),
    ...mapMutations(['setAnswer']),
    callHelp,
    getAnswer
  },
  computed: {
    ...mapState(['loaderActive', 'answer', 'questions'])
  },
  watch: {
    answer() {
      if(this.answer !== '') {
        this.getAnswer();
      }
    }
  }
}
</script>

<style scoped src="./help-button.scss" lang="scss"/>