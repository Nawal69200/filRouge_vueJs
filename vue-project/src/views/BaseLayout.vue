<!-- src/components/BaseLayout.vue -->
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot></slot> <!-- Slot par défaut -->
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
// Aucun script nécessaire ici si c’est juste un layout
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header, footer {
  background-color: #f3f3f3;
  padding: 20px;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
