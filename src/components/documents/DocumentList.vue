<template>
  <v-container>
    <v-layout>
      <v-layout row wrap>
        <document-list-item v-for="(item, i) in documents" :document="item" :key="i"/>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import DocumentListItem from './DocumentListItem.vue';

  export default {
    name: 'DocumentList',
    components: {
      'document-list-item': DocumentListItem
    },
    props: {
      'documents': {
        type: Array,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
