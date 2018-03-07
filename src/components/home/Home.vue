<template>
  <v-app light>
    <app-header/>
    <v-content>
      <v-container>
        <app-welcome :config="config"/>
        <document-list :documents="documents"/>
      </v-container>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
  import data from './../../data';
  import AppHeader from './../shared/AppHeader.vue';
  import AppFooter from './../shared/AppFooter.vue';
  import AppWelcome from './AppWelcome.vue';
  import DocumentList from './../documents/DocumentList.vue';

  export default {
    name: 'Home',
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'app-welcome': AppWelcome,
      'document-list': DocumentList,
    },
    data() {
      return {
        config: data.config,
        documents: data.documents
      };
    }
  };
</script>
