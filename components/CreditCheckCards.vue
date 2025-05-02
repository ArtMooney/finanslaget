<template>
  <div class="text-black text-base mb-8">
    <b
      >Toppen! Här är ert resultat. Vi har räknat fram tre förslag med olika
      löptider som du kan se nedan.</b
    >
  </div>

  <div class="grid md:grid-cols-3 gap-3 min-h-32 text-center items-center">
    <CreditCheckCard
      v-for="card in sortedApiData"
      :key="card.montlyPayment"
      :months="card.noOfMonths"
      :price="card.monthlyPayment"
    ></CreditCheckCard>
  </div>

  <div class="text-black text-base mt-8">
    I förslagen har vi räknat med 10% i en första förhöjd avgift samt 10% i
    slutvärde.
  </div>
</template>

<script>
export default {
  name: "CreditCheckCards",

  props: {
    apiData: {
      type: Object,
      required: false,
      default: {},
    },
  },

  computed: {
    sortedApiData() {
      return [...this.apiData].sort((a, b) => a.noOfMonths - b.noOfMonths);
    },
  },
};
</script>
