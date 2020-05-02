<template>
  <div id="app">
    <div class="container">
      <nav
        id="top-nav"
        class="navbar is-fixed-top is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="#">DA CREW</a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>

            <a class="navbar-item">Documentation</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <router-view id="contents" />

      <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
        <div class="columns is-mobile is-centered is-vcentered">
          <div class="column has-text-centered">
            <a class="navbar-item">
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
            </a>
          </div>
          <div class="column has-text-centered">
            <a class="navbar-item">
              <span class="icon">
                <i class="fas fa-search"></i>
              </span>
            </a>
          </div>
          <div class="column has-text-centered">
            <a class="navbar-item">
              <span class="icon">
                <i class="fas fa-comment-dots"></i>
              </span>
            </a>
          </div>
          <div class="column has-text-centered">
            <a class="navbar-item">
              <span class="icon">
                <i class="fas fa-bell"></i>
              </span>
            </a>
          </div>
          <div class="column has-text-centered">
            <a class="navbar-item">
              <span class="icon">
                <i class="fas fa-ellipsis-h"></i>
              </span>
            </a>
          </div>
          <div class="column has-text-centered">
            <a class="navbar-item" @click="routeToPostEditor">
              <span class="icon">
                <i class="fas fa-edit"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    routeToPostEditor() {
      this.$router.push({ name: "PostEditor" });
    }
  }
};
</script>

<style scoped>
#app {
  background-color: #e9ebebdc;
}
#contents {
  margin-top: 50px;
}
</style>
