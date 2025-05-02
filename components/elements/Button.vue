<template>
  <button
    @click="navigateTo({ path: link, hash: hash })"
    class="rounded-lg px-6 py-3 text-center text-base text-white no-underline duration-200 bg-[#009bd9] hover:bg-[#2ba8da] cursor-pointer"
    :type="type"
    text=""
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    hash: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
