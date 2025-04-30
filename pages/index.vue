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
  <div class="w-full p-32 bg-[pink]/25">
    <CreditCheck></CreditCheck>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
