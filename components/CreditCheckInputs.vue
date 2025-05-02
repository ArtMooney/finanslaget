<template>
  <div class="grid md:grid-cols-2 gap-x-3 gap-y-1">
    <Input
      name="email"
      label-text="Email"
      type="email"
      placeholder-text="din.epost@exempel.se"
      :required="true"
      autocomplete="email"
      @update-value="email = $event"
      @validated="handleValidated"
      :submitted="submitted"
    />

    <Input
      name="phone"
      label-text="Mobilnummer"
      type="tel"
      placeholder-text="070XXXXXXX"
      :required="true"
      autocomplete="tel"
      @update-value="phone = $event"
      @validated="handleValidated"
      :submitted="submitted"
    />

    <Input
      name="companyRegistrationNumber"
      label-text="Organisationsnummer"
      type="org"
      placeholder-text="55XXXX-XXXX"
      :required="true"
      autocomplete=""
      @update-value="companyRegistrationNumber = $event"
      @validated="handleValidated"
      :submitted="submitted"
    />

    <Input
      name="amount"
      label-text="Belopp"
      type="number"
      min="10000"
      placeholder-text="Lägst 10000"
      :required="true"
      autocomplete=""
      @update-value="amount = $event"
      @validated="handleValidated"
      :submitted="submitted"
    />
  </div>

  <Button
    @click="handleSubmit"
    :text="buttonText"
    link=""
    hash=""
    type="submit"
    class="mt-2"
  />
</template>

<script>
import Input from "~/components/elements/Input.vue";
import Button from "~/components/elements/Button.vue";

export default {
  name: "CreditCheckInputs",

  components: { Button, Input },

  emits: ["submit"],

  data() {
    return {
      buttonText: "Skapa snabbkalkyl",
      email: "",
      phone: "",
      companyRegistrationNumber: "",
      amount: "",
      submitted: false,
      validations: [],
    };
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
      this.validations = [];
      this.buttonText = "Vänta...";

      setTimeout(() => {
        let check = false;

        for (const validation of this.validations) {
          if (!validation) {
            check = true;
          }
        }

        if (check) {
          this.buttonText = "Skapa snabbkalkyl";
          return;
        }

        this.$emit("submit", {
          email: this.email,
          phone: this.phone,
          companyRegistrationNumber: this.companyRegistrationNumber,
          amount: this.amount,
        });
      }, 500);
    },

    handleValidated(event) {
      this.validations.push(event);
      this.submitted = false;
    },
  },
};
</script>
