<template>
  <header class="main-header">
    <a href="/">
      <img src="/images/avatar.png" id="logo">
    </a>
    <section class="intro">
      <a href="/">
        <h1>Turner Kendall</h1>
      </a>
      <span class="sub-heading">Digital Development; A Slight Return...</span>
    </section>
  </header>
</template>

<style lang="css" scoped>
.intro {
  margin: 0 var(--half);
  font-size: 1rem;
}

#logo {
  height: 3rem;
  margin: 1.3rem 0 0 .3rem;
  opacity: .8;
}

#logo:hover {
  opacity: 1;
}

.main-header {
  padding: 1rem 0 0 1rem;
  text-align: left;
}

.sub-heading {
  padding-left: .25rem;
}

@media (min-width: 1024px) {
  .main-header {
    padding: 0;
    text-align: left;
  }

  #logo {
    height: 5rem;
    margin: 0;
  }
}
</style>