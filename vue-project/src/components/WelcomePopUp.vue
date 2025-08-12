
<script>
export default {
  props: ['show'],
  data() {
    return {
      userEmail: JSON.parse(localStorage.getItem('user'))?.email || ''
    }
  },
  methods: {
    closePopup() {
      this.$emit('close')
    }
  }
}
</script>

<style>
.popup {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border: 2px solid black;
  z-index: 1000;
}
</style>

<template>
  <div v-if="show" class="popup">
    <p>Bienvenue {{ userEmail }} 🎉</p>
    <button @click="closePopup">OK</button>
  </div>
</template>
