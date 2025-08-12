<script>
import EventCulinary from '@/components/EventCulinary.vue';

export default {
    name: 'EventView',
    components: { EventCulinary },
    props: {
        appData: {
            type: Object,
            required: true
        }
    },
    computed: {
        events() {
            return this.appData.events;
        }
    }
}
</script>


<template>
    <div class="container my-5">
        <h2 class="text-center mb-5">Événements culinaires</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <EventCulinary :events="events" />
        </div>
        <div class="text-center mt-5">
            <h3>Vous organisez un événement culinaire ?</h3>
            <p>Faites-le nous savoir et nous pourrions le présenter ici !</p>
            <router-link 
                to="/evenements/formulaire-evenement" 
                class="btn btn-primary">
                Soumettre un événement
            </router-link>
        </div>
    </div>
</template>