<script>
import ConnexionForm from '@/components/ConnexionForm.vue'
import PopupBienvenue from '@/components/PopupBienvenue.vue'

export default {
  components: { ConnexionForm, PopupBienvenue },
  data() {
    return {
      showPopup: false
    }
  }
}
</script>


<template>
  <div>
    <ConnexionForm @login-success="showPopup = true" />
    <PopupBienvenue :show="showPopup" @close="showPopup = false" />
  </div>
  <p>v-for="user in users" v-if="user.isActive.</p> 
</template>