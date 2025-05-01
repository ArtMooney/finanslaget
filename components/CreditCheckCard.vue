<template>
  <div
    v-if="months && price"
    class="bg-[#fafafa] font-body h-full flex flex-col justify-center rounded-lg p-8"
  >
    <div class="text-[#009bd9] font-heading text-2xl font-bold">
      {{ months }} månader
    </div>
    <p>{{ price }} SEK</p>
    <p>per månad</p>
  </div>
</template>

<script>
export default {
  name: "CreditCheckCard",

  props: {
    months: {
      type: Number,
      required: false,
      default: null,
    },
    price: {
      type: Number,
      required: false,
      default: null,
    },
  },
};
</script>
