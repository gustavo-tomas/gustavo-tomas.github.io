<template>
  <div class="main-wrapper">
    <CanvasComponent />
    <main id="main">
      <!-- <HeaderComponent />
      <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
          <Component :is="Component"></Component>
        </Transition>
      </RouterView>
      <FooterComponent /> -->
    </main>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import CanvasComponent from "./components/CanvasComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    RouterView,
    HeaderComponent,
    CanvasComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: rgba(255, 0, 0, 0.11);
}

.main-wrapper {
  width: 100vw;
  padding: 4rem 6rem;
}

.hide {
  visibility: hidden;
}

.route-enter-active {
  transition: all 0.5 ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(1rem);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}
</style>
