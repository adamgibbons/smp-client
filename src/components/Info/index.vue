<template>
  <aside>
    <span class="info-icon" @click="toggleVisibilty">?</span>
    <div v-show="active" class="modal info-modal">
      <div class="close-modal" @click="toggleVisibilty">x</div>
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
  span {
    font-weight: 900;
    font-size: .8em;
    border-radius: 50%;
    padding: .1em .5em;
    color: black;
    background: white;
    opacity: .5;
    position: relative;
    top: -.5em;
    left: .5em;
  }
  .close-modal {
    position: absolute;
    right: .2em;
    top: .2em;
    font-size: 3em;
  }
  .info-icon {
    color: black;
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
