<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="profile-wrapper">
          <a
            href="https://github.com/gustavo-tomas/MyPortfolio"
            target="_blank"
            class="soc-link"
            title="Source code"
          >
            <div class="profile-image"></div>
          </a>
          <div class="profile-name">Gustavo Tomás</div>
        </div>

        <div class="socials-wrapper">
          <a
            href="https://github.com/gustavo-tomas/"
            target="_blank"
            class="soc-link"
          >
            <font-awesome-icon icon="fa-brands fa-github" class="fa-icon" />
          </a>

          <a href="https://t.me/gustavo_tomas" target="_blank" class="soc-link">
            <font-awesome-icon icon="fa-brands fa-telegram" class="fa-icon" />
          </a>

          <a
            href="mailto:guga.tomas10@gmail.com"
            target="_blank"
            class="soc-link"
          >
            <font-awesome-icon
              icon="fa-brands fa-square-google-plus"
              class="fa-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-tom%C3%A1s-373560212/"
            target="_blank"
            class="soc-link"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-icon" />
          </a>
        </div>
      </nav>
      <div class="welcome-section">Welcome to my Web portfolio!</div>

      <div class="sections-wrapper">
        <RouterLink class="router-link" to="/">HOME</RouterLink>
        <RouterLink class="router-link" to="/projects">PROJECTS</RouterLink>
        <RouterLink class="router-link" to="/renders">RENDERS</RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  max-height: 720px;
  gap: 2.5rem;
}

.socials-wrapper {
  display: flex;
  gap: 0.5rem;
}

.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.15rem;
  text-transform: uppercase;

  /* font-family: "Courier Prime", monospace; */
  font-family: "Cutive Mono", monospace;
  /* font-family: "Fuzzy Bubbles", cursive; */
  /* font-family: "Inter", sans-serif; */
  /* font-family: "Silkscreen", cursive; */
  /* font-family: "Source Sans Pro", sans-serif; */

  gap: 0.5rem;
}

.profile-name {
  margin-top: 1rem;
}

.sections-wrapper {
  display: flex;
  justify-content: center;
  letter-spacing: 0.07rem;
  gap: 4rem;
  margin-bottom: 1rem;
}

.welcome-section {
  font-size: 2rem;
  font-family: "Fuzzy Bubbles", cursive;
}

header {
  height: fit-content;
  width: fit-content;
  margin-bottom: 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

a {
  user-select: none;
  text-decoration: none;
  color: inherit;
}

.soc-link {
  display: flex;
}

.profile-image {
  border-radius: 50%;
  background-color: black;
  background-image: url("https://github.com/gustavo-tomas.png?size=350");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 350px;
  height: 350px;
  transition: all;
  transition-duration: 0.15s;
}

.fa-icon {
  width: 1.2rem;
  height: 1.2rem;
  transition: all;
  transition-duration: 0.15s;
  color: rgb(105, 105, 105);
}

.profile-image:hover,
.fa-icon:hover {
  border-radius: 35%;
  transition: all 0.2s ease;
}

.fa-icon:hover {
  color: black;
  transition: all 0.2s ease;
}

.router-link {
  padding: 0.7rem 1.4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid transparent;
  transition: all 0.3s ease;
}

.router-link:hover {
  border-color: black;
  transition: all 0.6s ease;
}

a.router-link-active:hover {
  background-color: black;
  border-color: black;
}

a.router-link-exact-active {
  background-color: black;
  padding: 0.7rem 1.4rem;
  color: white;
}
</style>
