<script>

export default {
  name: "EventCulinary",
  props: {
    events: {
      type: Array,
      required: true,
    }
  },
  methods: {
    formatDate(datetime) {
      if (!datetime) return "";
      const options = { year: "numeric", month: "short", day: "numeric" };
      const date = new Date(datetime);
      return date.toLocaleDateString("fr-FR", options);
    },
    
    getImagePath(image) {
      if (!image) return '';
      // si là c'est déjà un chemin public (/images/...), on le retourne tel quel
      if (image.startsWith('/') || image.startsWith('http')) return image;

      // extraire seulement le nom de fichier (gère "src/assets/boeuf.jpg" ou "boeuf.jpg")
      const filename = image.split('/').pop();

      // IMPORTANT : RecipeImage.vue est dans src/components/recipe,
      // pour pointer vers src/assets il faut remonter 2 niveaux : ../../assets
      return new URL(`../../assets/${filename}`, import.meta.url).href;
    }
  }
}

</script>

<template>
      <div v-for="event in events" :key="event.event_id" class="col mb-4">
        <div class="card event-card h-100">
          <img
            :src="event.image"
            class="card-img-top event-image"
            :alt="event.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text">{{ event.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <i class="bi bi-calendar-event calendar-icon"></i>
                <small class="text-muted ms-2">
                  {{ formatDate(event.start_datetime) }}
                  <span v-if="event.end_datetime && event.end_datetime !== event.start_datetime">
                    - {{ formatDate(event.end_datetime) }}
                  </span>
                </small>
              </div>
              <router-link 
                :to="`/evenements/${event.slug}`"
                class="btn btn-warning"
              >
                En savoir plus
              </router-link>
            </div>
          </div>
        </div>
      </div>
</template>
