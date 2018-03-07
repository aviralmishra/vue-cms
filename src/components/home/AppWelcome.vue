<template>
  <v-jumbotron height="120">
    <v-container>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-1">Welcome</h3>
          <span class="subheading">
            <v-icon large color="green darken-2">business</v-icon>{{ config.welcome }}
            Ready for business...
          </span>
          <v-divider class="my-3"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>

export default {
  name: 'Welcome',
  props: {
    'config': {
      type: Object,
      required: true
    }
  }
};
</script>
