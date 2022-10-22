<template>
  <div class="main-wrapper">
    <main id="main">
      <HeaderComponent />
      <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
          <Component :is="Component"></Component>
        </Transition>
      </RouterView>
      <FooterComponent />
    </main>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    RouterView,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Cutive+Mono&family=Fuzzy+Bubbles&family=Inter:wght@300;400&family=Silkscreen&family=Source+Sans+Pro:wght@300;400&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  line-height: 1.3;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
}

.main-wrapper {
  width: 100%;
  padding: 4rem 6rem;
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
