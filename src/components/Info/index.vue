<template>
  <aside>
    <span class="info-icon" @click="toggleVisibilty">?</span>
    <div v-show="active" class="modal">
      <div class="modal-content">{{content}}</div>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleVisibilty () {
      this.active = !this.active
    }
  },
  computed: {
    content () {
      return 'foo'
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
  .info-icon {
    color: black;
  }
  .modal-content {
    margin: 1em;
    background: red;
  }
</style>
