<template>
  <router-link :to="{ name: 'home' }">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>XYZ Corp</v-toolbar-title>
    </v-toolbar>
  </router-link>
</template>

<script>
export default {
  name: 'Header'
};
</script>
