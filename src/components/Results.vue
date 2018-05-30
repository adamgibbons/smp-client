<template>
  <div class="body gradient" style="overflow-y:scroll;">
    <div class="title">
      Finished
    </div>
    <p>Thanks for finishing your financial profile. Here are your results:</p>

    <div class="results-row results-header-row">
      <div class="cell">Current</div>
      <div class="cell">Suggested</div>
    </div>

    <div class="results-row">
      <div class="cell lightblue">
        <div class="results-cell">
          <div>{{score.needs | percentage}}</div>
          <div>{{results.needs | currency}}</div>
        </div>
      </div>
      <div class="cell darkblue">
        <div class="results-cell">
          <div>50%</div>
          <div>foo</div>
        </div>
      </div>
    </div>

    <div class="results-row">
      <div class="cell teal">
        <div class="results-cell">
          <div>{{score.wants | percentage}}</div>
          <div>{{results.wants | currency}}</div>
        </div>
      </div>
      <div class="cell darkblue">
        <div class="results-cell">
          <div>30%</div>
          <div>foo</div>
        </div>
      </div>
    </div>

    <div class="results-row">
      <div class="cell gray">
        <div class="results-cell">
          <div>{{score.savings | percentage}}</div>
          <div>{{results.savings | currency}}</div>
        </div>
      </div>
      <div class="cell darkblue">
        <div class="results-cell">
          <div>20%</div>
          <div>foo</div>
        </div>
      </div>
    </div>

    <p>Need help on how to master the suggested spending?</p>

    <button class="button">Show me how</button>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['results', 'score'])
  },
  filters: {
    currency: (val) => {
      if (val && typeof val === 'number') {
        return `$${val.toLocaleString()}`
      }
      return '$0'
    },
    percentage: (num) => {
      if (num && typeof num === 'number') {
        return `${Math.round(num)}%`
      }

      return '0%'
    }
  }
}
</script>

<style scoped>
  .body {
    padding: 0 1em;
    text-align: center;
  }
  .results-row {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 1px;
  }
  .results-header-row .cell {
    background-color: transparent;
  }
  .cell {
    padding: 1em;
    flex: 1 1 50%;
  }
  .results-cell {
    display: flex;
    flex-flow: row nowrap;
  }
  .results-cell > div {
    flex: 1 1 50%;
  }
  .darkblue {
    background-color: #32426c;
  }
  .lightblue {
    background-color: #3e528b;
  }
  .teal {
    background-color: #1f7690;
  }
  .gray {
    background-color: #373b54;
  }
</style>
