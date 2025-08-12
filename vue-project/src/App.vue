<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: { AppHeader, AppFooter },
  data() {
    return {
      appData: null
    };
  },
  mounted() {
    axios.get('/data.json') // fichier placé dans /public
      .then(response => {
        this.appData = response.data;
      })
      .catch(error => {
        console.error("Erreur lors du chargement de data.json :", error);
      });
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <router-view v-if="appData" :appData="appData" />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>
