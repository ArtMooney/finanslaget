<script setup>
import Input from "../components/elements/Input.vue";
import Button from "../components/elements/Button.vue";

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
  <div class="w-full p-32 bg-[skyblue]/10">
    <div class="grid grid-cols-2 gap-x-3 gap-y-1">
      <Input
        name="email"
        label-text="Email"
        type="email"
        placeholder-text=""
        :required="true"
        autocomplete="email"
      />

      <Input
        name="phone"
        label-text="Mobilnummer"
        type="tel"
        placeholder-text="070XXXXXXX"
        :required="true"
        autocomplete="tel"
      />

      <Input
        name="companyRegistrationNumber"
        label-text="Organisationsnummer"
        type="text"
        placeholder-text="55XXXX-XXXX"
        :required="true"
        autocomplete=""
      />

      <Input
        name="amount"
        label-text="Belopp"
        type="text"
        placeholder-text="Lägst 10 000"
        :required="true"
        autocomplete=""
      />
    </div>

    <Button text="Knapp" link="" hash="" type="submit" data-wait="Vänta..." />
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
