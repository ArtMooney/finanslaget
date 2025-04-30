<template>
  <div
    class="bg-[#fafafa] font-body h-full flex flex-col justify-center rounded-lg p-8"
  >
    <div class="text-[#009bd9] font-heading text-2xl font-bold">
      {{ title }}
    </div>
    <p>{{ price }}</p>
    <p>{{ priceSubtext }}</p>
  </div>
</template>

<script>
export default {
  name: "CreditCheckCard",

  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    price: {
      type: String,
      required: false,
      default: "",
    },
    priceSubtext: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
