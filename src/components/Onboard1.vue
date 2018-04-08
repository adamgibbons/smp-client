<template>
  <onboard>
    <div class="content">
      <h3>
        50% of your income should go to absolute necessities in life.
      </h3>
      <p>Expenses that allow you to live, i.e. rent/mortgage, groceries, utilities, etc. The minimum required payment on debts also falls into this category.</p>
      <div class="graphic">
      </div>
      <div class="icons">
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
      <div class="progress">
        <span class="active">•</span>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </div>
  </onboard>
</template>

<script>
import Onboard from './onboard'

export default {
  components: { Onboard }
}
</script>
