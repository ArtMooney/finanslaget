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

  <CreditCheckCards v-if="submitted" :api-data="apiData"></CreditCheckCards>

  <div v-if="error" class="text-sm mt-4 bg-red-200 p-2">
    Något gick tyvärr fel när beräkningen skulle göras.
  </div>

  <div class="bg-[pink] text-white">DATA: {{ buttonUrl }}</div>
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

  computed: {
    buttonUrl() {
      const encodedUrl = this.$route.query.button_url || "#";
      if (encodedUrl === "#") return "#";

      try {
        return decodeURIComponent(encodedUrl);
      } catch (e) {
        console.error("Error decoding URL:", e);
        return encodedUrl;
      }
    },
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
