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
  <div class="max-w-[50rem] w-[50rem] mx-auto mt-12">
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

  methods: {
    handleSubmit() {
      console.log("submitted");
      this.submitted = true;
    },
  },
};
</script>
