<template>
  <GridComponent :cells="cells" />
</template>

<script>
import GridComponent from "@/components/GridComponent.vue";

export default {
  name: "RendersView",
  components: {
    GridComponent,
  },
  data() {
    return {
      cells: [
        {
          name: "headphone.png",
          url: "src/assets/images/headphone.png",
        },
        {
          name: "flower_closeup.png",
          url: "src/assets/images/flower_closeup.png",
        },
        {
          name: "cell_shaded.png",
          url: "src/assets/images/cell_shaded.png",
        },
        {
          name: "spicy_314_front.png",
          url: "src/assets/images/spicy_314_front.png",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
