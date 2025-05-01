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

    <CreditCheckCards v-if="submitted" :api-data="apiData"></CreditCheckCards>
  </div>
</template>

<script>
export default {
  name: "Index",

  data() {
    const config = useRuntimeConfig();
    return {
      submitted: false,
      apiData: {},
      error: false,
      userName: config.public.userName,
      userPass: config.public.userPass,
    };
  },

  methods: {
    async handleSubmit() {
      try {
        this.apiData = await $fetch("/api/calculate", {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
          },
          body: {},
        });

        console.log(this.apiData);

        this.submitted = true;
      } catch (err) {}
    },
  },
};
</script>
