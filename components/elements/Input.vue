<template>
  <div class="text-sm text-black">
    <label v-if="labelText" :for="name"
      >{{ labelText }}<span class="text-red-600">*</span></label
    >

    <input
      v-if="type !== 'message'"
      class="my-1 w-full border border-[#cccccc] p-3 placeholder:text-[#cccccc] rounded-lg text-base text-[#666666] focus:border-black focus:outline-none transition-colors duration-200"
      maxlength="256"
      :name="name"
      :type="type"
      :placeholder="placeholderText"
      :required="required"
      :value="modelValue"
      @input="$emit('updateValue', $event.target.value)"
    />

    <textarea
      v-if="type === 'message'"
      class="m-0 min-h-28 w-full border border-[#cccccc] p-3 placeholder:text-[#cccccc] rounded-lg text-base text-[#666666]"
      maxlength="5000"
      :name="name"
      :placeholder="placeholderText"
      :required="required"
      :value="modelValue"
      @input="$emit('updateValue', $event.target.value)"
    ></textarea>
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
    modelValue: {
      type: String,
      required: false,
    },
  },

  emits: ["updateValue"],
};
</script>
