<script>
export default {
  name: 'GenericImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: 'img-fluid rounded'
    }
  },
  methods: {
    getImagePath(image) {
      if (!image) return '';
      // Si c'est déjà une URL ou chemin absolu
      if (image.startsWith('/') || image.startsWith('http')) return image;
      // Sinon on prend le nom de fichier dans /src/assets
      const filename = image.split('/').pop();
      return new URL(`../assets/${filename}`, import.meta.url).href;

    }
  }
}
</script>

<template>
  <img :src="getImagePath(src)" :alt="alt" :class="classes" />
</template>
