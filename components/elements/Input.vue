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
      :type="type"
      :placeholder="placeholderText"
      :required="required"
      @input="$emit('updateValue', $event.target.value)"
      @validated="handleValidation"
    />

    <textarea
      v-if="type === 'message'"
      class="min-h-28 w-full border border-[#cccccc] p-3 placeholder:text-[#cccccc] rounded-lg text-base text-[#666666]"
      maxlength="5000"
      :name="name"
      :placeholder="placeholderText"
      :required="required"
      @input="$emit('updateValue', $event.target.value)"
    ></textarea>

    <div class="text-xs mx-2 text-red-600 mt-1 mb-2 rounded">
      Email adressen behöver vara giltig.
    </div>
  </div>
</template>

<script>
import { emailValidator } from "~/utils/emailValidator.js";
import { phoneValidator } from "~/utils/phoneValidator.js";

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
  },

  emits: ["updateValue", "validated"],

  data() {
    return {
      inputFieldValue: "",
      emailReg:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },

  watch: {
    inputFieldValue() {
      let validated = true;

      validated =
        this.type === "email" &&
        this.required &&
        this.emailReg.test(this.inputFieldValue);

      // if (this.type === "tel" && this.required) phoneValidator(value);

      console.log(this.inputFieldValue, validated);
      // this.$emit("validated", validated);
    },
  },
};
</script>
