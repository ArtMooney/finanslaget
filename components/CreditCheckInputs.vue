<template>
  <div class="grid md:grid-cols-2 gap-x-3 gap-y-1">
    <Input
      name="email"
      label-text="Email"
      type="email"
      placeholder-text=""
      :required="true"
      autocomplete="email"
      @update-value="email = $event"
      @validated="okToSubmit = $event"
    />

    <Input
      name="phone"
      label-text="Mobilnummer"
      type="tel"
      placeholder-text="070XXXXXXX"
      :required="true"
      autocomplete="tel"
      @update-value="phone = $event"
      @validated="okToSubmit = $event"
    />

    <Input
      name="companyRegistrationNumber"
      label-text="Organisationsnummer"
      type="text"
      placeholder-text="55XXXX-XXXX"
      :required="true"
      autocomplete=""
      @update-value="companyRegistrationNumber = $event"
      @validated="okToSubmit = $event"
    />

    <Input
      name="amount"
      label-text="Belopp"
      type="text"
      placeholder-text="Lägst 10 000"
      :required="true"
      autocomplete=""
      @update-value="amount = $event"
      @validated="okToSubmit = $event"
    />
  </div>

  <Button
    @click="handleSubmit"
    text="Skapa snabbkalkyl"
    link=""
    hash=""
    type="submit"
    data-wait="Vänta..."
    class="mt-2"
  />
</template>

<script>
import Input from "~/components/elements/Input.vue";
import Button from "~/components/elements/Button.vue";

export default {
  name: "CreditCheck",

  components: { Button, Input },

  emits: ["submit"],

  data() {
    return {
      email: "",
      phone: "",
      companyRegistrationNumber: "",
      amount: "",
      okToSubmit: true,
    };
  },

  methods: {
    handleSubmit() {
      if (!this.okToSubmit) return;

      this.$emit("submit", {
        email: this.email,
        phone: this.phone,
        companyRegistrationNumber: this.companyRegistrationNumber,
        amount: this.amount,
      });
    },
  },
};
</script>
