<template>
  <div class="body">
    <div class="title">
      Housing info
    </div>

    <Progress />

    <div class="block">
      <div class="title">
        Current housing situation
      </div>
      <div class="control">
        <label class="radio" :class="{active: housing.status === 'own'}" for="own">
          <input id="own" type="radio" name="own" :checked="housing.status === 'own'" @change="setValueByPath({path: 'housing.status', value: 'own'})" value="own">
          Own
        </label>
        <label class="radio" :class="{active: housing.status === 'rent'}" for="rent">
          <input id="rent" type="radio" name="rent" :checked="housing.status === 'rent'" @change="setValueByPath({path: 'housing.status', value: 'rent'})" value="rent">
          Rent
        </label>
        <label class="radio" :class="{active: housing.status === 'Living w/ Parents'}" for="livingWithParents">
          <input id="livingWithParents" type="radio" name="livingWithParents" :checked="housing.status === 'other'" @change="setValueByPath({path: 'housing.status', value: 'Living w/ Parents'})" value="Living w/ Parents">
          Living w/ Parents
        </label>
        <label class="radio" :class="{active: housing.status === 'No Rent'}" for="noRent">
          <input id="noRent" type="radio" name="noRent" :checked="housing.status === 'No Rent'" @change="setValueByPath({path: 'housing.status', value: 'No Rent'})" value="No Rent">
          No Rent
        </label>
      </div>
    </div>

    <div v-show="!skipHousingInfo" class="block">
      <div class="title">
        Type of property
      </div>
      <div class="control">
        <label class="radio" :class="{active: housing.propertyType === 'singleFamilyHome'}" for="singleFamilyHome">
          <input id="singleFamilyHome" type="radio" name="singleFamilyHome" :checked="housing.propertyType === 'singleFamilyHome'" @change="setValueByPath({path: 'housing.propertyType', value: 'singleFamilyHome'})" value="singleFamilyHome">
          Single-Family House
        </label>
        <label class="radio" :class="{active: housing.propertyType === 'mobileHome'}" for="mobileHome">
          <input id="mobileHome" type="radio" name="mobileHome" :checked="housing.propertyType === 'mobileHome'" @change="setValueByPath({path: 'housing.propertyType', value: 'mobileHome'})" value="mobileHome">
          Mobile-House
        </label>
        <label class="radio" :class="{active: housing.propertyType === 'apartment'}" for="apartment">
          <input id="apartment" type="radio" name="apartment" :checked="housing.propertyType === 'apartment'" @change="setValueByPath({path: 'housing.propertyType', value: 'apartment'})" value="apartment">
          Apartment
        </label>
        <label class="radio" :class="{active: housing.propertyType === 'condo'}" for="condo">
          <input id="condo" type="radio" name="condo" :checked="housing.propertyType === 'condo'" @change="setValueByPath({path: 'housing.propertyType', value: 'condo'})" value="condo">
          Condo
        </label>
      </div>
    </div>

    <div v-show="!skipHousingInfo" class="block">
      <div class="title">
        Zip code
      </div>

      <div class="control">
        <div class="select-wrapper">
          <input
            type="tel"
            @change="setValueByPath({ path: 'housing.zip', value: $event.target.value})"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Progress from '@/components/Progress'

export default {
  components: { Progress },
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['housing', 'skipHousingInfo'])
  }
}
</script>
