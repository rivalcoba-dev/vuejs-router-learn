<template>
  <div id="nav">
    <p class="logo">ITGAM APP</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li
        class="links"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// Importando los datos
import store from "@/store.js";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped="true">
#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a.itgam-link-active-class {
  color: coral;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
