<template>
  <aside>
    <span class="help" @click="toggleVisibilty">
      <i class="far fa-question-circle"></i>
    </span>
    <div v-show="active" class="modal info-modal">
      <div class="close-modal" @click="toggleVisibilty">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <div class="modal-content">
        <div class="question-answer" v-for="({question, answer}, index) in content" :key="index">
          <div class="question">{{question}}</div>
          <div class="answer">{{answer}}</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import questions from './questions.json'

export default {
  data () {
    return {
      active: false,
      questions
    }
  },
  methods: {
    toggleVisibilty () {
      this.active = !this.active
    }
  },
  props: {
    questionId: String
  },
  computed: {
    content () {
      try {
        return this.questions[this.$route.name][this.questionId]
      } catch (e) {}

      return false
    }
  }
}
</script>

<style scoped>
  aside {
    display: inline;
  }
  .help {
    position: relative;
    top: -5px;
    left: 2px;
  }
  .close-modal {
    position: absolute;
    right: 0;
    top: 0em;
  }
  .modal-content {
    margin: 1.5em;
  }
  .question-answer {
    margin-bottom: 1.33em;
    font-size: .9rem;
  }
  .question {
    font-style: oblique;
    font-weight: 700;
    margin-bottom: .1em;
  }
  .answer {
    font-weight: 300;
  }
  .info-modal {
    margin: 4em 2.66em;
    height: 80%;
  }
</style>
