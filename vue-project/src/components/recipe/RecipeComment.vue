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
  data() {
    return {
      currentPage: 1,
      commentsPerPage: 5
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.comments.length / this.commentsPerPage);
    },
    paginatedComments() {
      const start = (this.currentPage - 1) * this.commentsPerPage;
      const end = start + this.commentsPerPage;
      return this.comments.slice(start, end);
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>

<template>
  <div class="card mb-4">
    <div v-for="comment in paginatedComments" 
         :key="comment.comment_id" 
         class="card-body">
      <p class="card-text">{{ comment.content }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="text-muted mb-1">
            <strong>Posté le :</strong> {{ comment.date_time }}
            <span class="ms-2"><strong>Posté par :</strong> {{ comment.username }}</span>
          </p>   
        </div>
        <div class="text-warning d-flex">
          <CommentRating />
        </div>
      </div>
    </div>
  </div>

    <!-- Pagination -->
    <div aria-label="Page navigation">
      <ul class="pagination justify-content-center mb-5">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="prevPage">Précédent</a>
        </li>

        <li class="page-item" 
            v-for="page in totalPages" 
            :key="page" 
            :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="nextPage">Suivant</a>
        </li>
      </ul>
    </div>
</template>

