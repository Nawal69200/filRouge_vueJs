//EXEMPLE

<template>
  <form @submit.prevent="handleLogin">
    <h3>Connexion</h3>
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Mot de passe" required>
    <button type="submit">Se connecter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Simulation d'une connexion réussie
      localStorage.setItem('user', JSON.stringify({ email: this.email }))
      this.$emit('login-success')
      this.$router.push('/') // redirection après connexion
    }
  }
}
</script>
