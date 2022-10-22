<template>
  <GridComponent :cells="cells" />
</template>

<script>
import GridComponent from "@/components/GridComponent.vue";

export default {
  name: "ProjectsView",
  components: {
    GridComponent,
  },
  data() {
    return {
      cells: [
        {
          name: "eww_deviljho.png",
          url: "https://github.com/gustavo-tomas/Bars",
        },
        {
          name: "todorust.png",
          url: "https://github.com/gustavo-tomas/ToDoRust",
        },
        {
          name: "nomedaengine.png",
          url: "https://github.com/gustavo-tomas/NomeDaEngine",
        },
        {
          name: "twitterbot.png",
          url: "https://twitterbot-saber.herokuapp.com/",
        },
        {
          name: "discordbot.png",
          url: "https://github.com/gustavo-tomas/DiscordBot",
        },
        {
          name: "balancasolucoes.png",
          url: "https://balanca-solucoes.herokuapp.com",
        },
        {
          name: "gokuganira.png",
          url: "https://gokuganira-lp.herokuapp.com",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
