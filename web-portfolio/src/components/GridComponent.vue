<template>
  <div class="grid-container">
    <div class="grid">
      <TransitionGroup name="grid" appear>
        <div class="grid-cell" v-for="cell in cells" :key="cell">
          <GridCellComponent :name="cell.name" :url="cell.url" />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import GridCellComponent from "@/components/GridCellComponent.vue";

export default {
  name: "GridComponent",
  props: {
    cells: Array,
  },
  components: { GridCellComponent },
};
</script>

<style scoped>
.grid-container {
  display: flex;
}

.grid {
  gap: 0.4rem;
  max-width: 1920px;
}

.grid-cell {
  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-rows: 1fr auto;
  margin: 0 0 0.3rem 0;
  break-inside: avoid;
  border-radius: 5px;
}

.grid-enter-active,
.grid-leave-active {
  transition: all 1.2s ease;
}

.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(3rem);
}

@media (min-width: 1366px) {
  .grid {
    column-count: 5;
  }
}

@media (max-width: 1366px) {
  .grid {
    column-count: 4;
  }
}

@media (max-width: 1280px) {
  .grid {
    column-count: 3;
  }
}

@media (max-width: 1080px) {
  .grid {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .grid {
    column-count: 1;
  }
}
</style>
