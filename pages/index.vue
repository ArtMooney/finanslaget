<script setup>
useSeoMeta({
  title: "",
  description: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "",
  twitterTitle: "",
  twitterDescription: "",
  twitterImage: "",
});

definePageMeta({
  ssr: false,
});
</script>

<template>
  <div class="max-w-[50rem] w-full mx-auto mt-12 p-4">
    <CreditCheckInputs
      v-if="!submitted"
      @submit="handleSubmit"
    ></CreditCheckInputs>

    <CreditCheckCards v-if="submitted"></CreditCheckCards>
  </div>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {
      submitted: false,
    };
  },

  async mounted() {
    try {
      this.apiData = await $fetch("/api/calculate");
      console.log("Data:", this.apiData);
    } catch (err) {
      this.error = err;
      console.error("Error:", err);
    }
  },

  methods: {
    handleSubmit() {
      console.log("submitted");
      this.submitted = true;
    },
  },
};
</script>
