<script>
export default {
  name: 'FancyButton',
  props: {
    type: {
      type: String,
      default: 'submit'
    },
    btnClass: {
      type: String,
      default: 'btn btn-warning'
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit-form');
    }
  }
}
</script>

<template>
  <button @click="handleSubmit" :type="type" :class="btnClass">
    <slot></slot>
  </button>
</template>
