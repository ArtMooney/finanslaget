<template>
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
</template>

<script>
import CreditCheckCard from "~/components/CreditCheckCard.vue";

export default {
  name: "CreditCheckCards",
  components: { CreditCheckCard },
};
</script>
