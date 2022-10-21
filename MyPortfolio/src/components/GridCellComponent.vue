<template>
  <a :href="url" target="_blank">
    <img :src="imagesPath + `${name}`" :title="title" :alt="`${name}`" />
  </a>
</template>

<script>
export default {
  name: "GridCellComponent",
  props: {
    name: String,
    url: String,
    title: String,
  },
  data() {
    return {
      imagesPath: "./src/assets/images/",
    };
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  transition: all 0.3s ease-in-out;
}

a {
  display: flex;
}

img:hover {
  transform: scale(1.2);
}
</style>
