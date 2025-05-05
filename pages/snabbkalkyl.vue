<script setup>
definePageMeta({
  ssr: true,
});
</script>

<template>
  <CreditCheckInputs
    v-if="!submitted"
    @submit="handleSubmit"
  ></CreditCheckInputs>

  <CreditCheckCards
    v-if="submitted"
    :api-data="apiData"
    :button-url="savedButtonUrl"
  ></CreditCheckCards>

  <div v-if="error" class="text-sm mt-4 bg-red-200 p-2">
    Något gick tyvärr fel när beräkningen skulle göras.
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
      savedButtonUrl: this.$route?.query?.button_url || "#",
    };
  },

  methods: {
    async handleSubmit(event) {
      event.pageUri = window.location.href;
      event.pageName = document.title;

      try {
        this.apiData = await $fetch("/api/calculate", {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
          },
          body: event,
        });

        this.submitted = true;
      } catch (err) {
        this.error = true;
      }
    },
  },
};
</script>
