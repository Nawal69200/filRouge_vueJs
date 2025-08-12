<script>
import CommentRating from '../CommentRating.vue';

export default {
  name: 'RecipeComment',
  components: { CommentRating },
  props: {
    comments: {
      type: Array,
      required: true
    },
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    getUserName(userId) {
      const user = this.users.find(u => u.id === userId);
      return user ? user.username : `Utilisateur #${userId}`;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
}
</script>

<template>
    <div class="card mb-4">
        <div v-for="comment in comments" 
            :key="comment.id" 
            class="card-body"
        >
            <p class="card-text">{{ comment.content }}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p class="text-muted mb-1">
                        <strong>Posté le :</strong> {{comment.date_time}}
                        <span class="ms-2"><strong>Posté par :</strong>{{ comment.user_id }}</span>
                    </p>   
                </div>
                <div class="text-warning d-flex">
                    <CommentRating />
                </div>
            </div>
        </div>
    </div>
</template>


                    