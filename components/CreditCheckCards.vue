<template>
  <div class="text-black text-base mb-8">
    <b
      >Toppen! Här är ert resultat. Vi har räknat fram tre förslag med olika
      löptider som du kan se nedan.</b
    >
  </div>

  <div class="grid grid-cols-3 gap-x-3 gap-y-1 h-32 text-center items-center">
    <CreditCheckCard
      title="36 månader"
      price="1345 SEK"
      priceSubtext="per månad"
    ></CreditCheckCard>

    <CreditCheckCard
      title="48 månader"
      price="1054 SEK"
      priceSubtext="per månad"
    ></CreditCheckCard>

    <CreditCheckCard
      title="60 månader"
      price="877 SEK"
      priceSubtext="per månad"
    ></CreditCheckCard>
  </div>

  <div class="text-black text-base mt-8">
    I förslagen har vi räknat med 10% i en första förhöjd avgift samt 10% i
    slutvärde.
  </div>
</template>

<script>
import CreditCheckCard from "~/components/CreditCheckCard.vue";

export default {
  name: "CreditCheckCards",
  components: { CreditCheckCard },
};
</script>
