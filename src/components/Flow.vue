<template>
  <div class="body">
    <router-view></router-view>
    <nav>
      <button @click="back">Back</button>
      <button @click="next">Next</button>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progress: [
        'personal-1',
        'personal-2',
        'financial',
        'housing-1',
        'housing-2',
        'housing-3'
      ],
      position: 0
    }
  },
  methods: {
    back () {
      if (this.position === 0) return

      this.$router.replace(this.progress[this.position - 1])
      this.position = this.position - 1
    },
    next () {
      if (this.position + 1 === this.progress.length) return

      this.$router.push(this.progress[this.position + 1])
      this.position = this.position + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
nav {
  border: 1px solid red;
  margin: auto;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
