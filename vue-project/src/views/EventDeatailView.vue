<script>
export default {
    name: 'EventDetailView',
    props: {
        appData: {
            type: Object,
            required: true
        }
    },
    computed: {
        currentEvent() {
            return this.appData.events.find(
                e => e.slug === this.$route.params.slug
            )
        }
    },
    getImagePath(image) {
    if (!image) return '';
    if (image.startsWith('/') || image.startsWith('http')) return image;
    const filename = image.split('/').pop();
    return new URL(`../assets/${filename}`, import.meta.url).href;
    }
}
</script>

<template>
    <main v-if="currentEvent">
        <div class="container my-5 bg-white p-4 rounded w-75">
            <div class="row mb-4">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <h2 class="border-bottom border-danger pb-2">Détails de l'événement</h2>

                    <p><strong>Date:</strong> {{ currentEvent.start_datetime }}</p>
                    <p><strong>Lieu:</strong> {{ currentEvent.location }}</p>
                    <p><strong>Horaires:</strong> {{ currentEvent.start_datetime }}</p>
                    <p><strong>Entrée:</strong> {{ currentEvent.price }}</p>

                    <div class="col-sm-12 col-md-6 col-lg-6 mt-5">
                        <img  :src="currentEvent.image" :alt="currentEvent.name" class="img-fluid rounded">
                    </div>

                    <h3 class="border-bottom border-danger pb-2">Description</h3>
                    <p>{{ currentEvent.description }}</p>

                    <h3 class="border-bottom border-danger pb-2">Au programme</h3>
                    <ul class="list-group list-group-flush mb-4">
                        <li v-for="(item, idx) in currentEvent.program" :key="idx" class="list-group-item">{{ item }}</li>
                    </ul>

                    <h3 v-if="currentEvent.event_id === 1" class="border-bottom border-danger pb-2">Stands et Ateliers</h3>
                    <h3 v-else-if="currentEvent.event_id === 2" class="border-bottom border-danger pb-2">Régions et plats explorés</h3>
                    <h3 v-else class="border-bottom border-danger pb-2">Variétés de pains explorées</h3>

                    <ul class="list-group list-group-flush mb-4">
                        <li v-for="(stand, sidx) in currentEvent.stands" :key="sidx" class="list-group-item">{{ stand }}</li>
                    </ul>

                    <h3 v-if="currentEvent.event_id === 1" class="border-bottom border-danger pb-2">Ce que vous découvrirez</h3>
                    <h3 v-else class="border-bottom border-danger pb-2">Ce que vous apprendrez</h3>

                    <ul class="list-group list-group-flush mb-4">
                        <li v-for="(discover, didx) in currentEvent.discovery" :key="didx" class="list-group-item">{{ discover }}</li>
                    </ul>
                </div>
            </div>

            <router-link 
                to="/evenements/formulaire-inscription" 
                class="btn btn-primary">
                S'inscrire ?
            </router-link>
        </div>
    </main>
</template>


