<template>
  <div class="text-sm text-black">
    <label v-if="labelText" :for="name"
      >{{ labelText }}<span class="text-red-600">*</span></label
    >

    <input
      v-if="type !== 'message'"
      v-model="inputFieldValue"
      class="w-full border border-[#cccccc] p-3 placeholder:text-[#cccccc] rounded-lg text-base text-[#666666] focus:border-black focus:outline-none transition-colors duration-200"
      maxlength="256"
      :name="name"
      :type="getType"
      :placeholder="placeholderText"
      :required="required"
      @input="$emit('updateValue', $event.target.value)"
      @validated="handleValidation"
    />

    <textarea
      v-if="getType === 'message'"
      class="min-h-28 w-full border border-[#cccccc] p-3 placeholder:text-[#cccccc] rounded-lg text-base text-[#666666]"
      maxlength="5000"
      :name="name"
      :placeholder="placeholderText"
      :required="required"
      @input="$emit('updateValue', $event.target.value)"
    ></textarea>

    <div v-if="!validated" class="text-xs mx-2 text-red-600 mt-1 mb-2 rounded">
      {{ getErrorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholderText: {
      type: String,
      default: "",
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    labelText: {
      type: String,
      required: false,
    },
    min: {
      type: String,
      required: false,
    },
  },

  emits: ["updateValue", "validated"],

  data() {
    return {
      inputFieldValue: "",
      validated: true,
      emailReg:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      phoneReg:
        /^(?:(?:0|(?:\+46)[ -]?)(?:(?:7[0-9][ -]?\d{3}[ -]?\d{2}[ -]?\d{2})|(?:[1-9][0-9]{0,2}[ -]?\d{5,7})))$/, // needs more work
      orgNumberReg: /^\s*(\d{6}[-]?\d{4}|\d{11})\s*$/,
    };
  },

  computed: {
    getType() {
      if (this.type === "org") return "text";

      return this.type;
    },

    getErrorMessage() {
      if (this.type === "email") return "Email adressen behöver vara giltig";
      if (this.type === "tel") return "Telefonnumret behöver vara giltigt";
      if (this.type === "org")
        return "Organisationsnumret behöver vara giltigt";
      if (this.type === "number" && this.min)
        return "Beloppet måste vara större eller lika med " + this.min + " SEK";

      return "Okänt fel";
    },
  },

  watch: {
    inputFieldValue() {
      this.validated =
        this.type === "email" &&
        this.required &&
        this.emailReg.test(this.inputFieldValue);

      this.validated =
        this.type === "tel" &&
        this.required &&
        this.phoneReg.test(this.inputFieldValue);

      this.validated =
        this.type === "org" &&
        this.required &&
        this.orgNumberReg.test(this.inputFieldValue);

      this.validated =
        this.type === "number" &&
        this.required &&
        parseInt(this.inputFieldValue) >= parseInt(this.min);

      console.log(this.inputFieldValue, this.validated, parseInt(this.min));
      // this.$emit("validated", validated);
    },
  },
};
</script>
