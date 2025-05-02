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

    <div v-if="error" class="text-sm mt-4 bg-red-200 p-2">
      Något gick tyvärr fel när beräkningen skulle göras.
    </div>
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
    async handleSubmit(event) {
      try {
        this.apiData = await $fetch("/api/calculate", {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
          },
          body: event,
        });

        console.log(this.apiData);

        this.submitted = true;
      } catch (err) {
        this.error = true;
      }
    },
  },
};
</script>
