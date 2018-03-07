<template>
  <v-flex xs12 sm6 md6 lg4 class="py-1 px-1">
    <v-card height="100%">
      <v-card-media :src="document.image" height="200px"/>
      <v-layout row>
        <v-flex xs9>
          <v-card-title><div class="headline">{{ document.title }}</div></v-card-title>
        </v-flex>
        <v-flex xs3>
          <v-card-title class="mr-0 pr-0">
            <div><v-btn icon color="primary"><v-icon>comment</v-icon></v-btn>{{ document.comments }}</div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-card-text class="my-0 py-0">
        <v-progress-linear
          :value="percentagePassed"
          :color="daysRemaining > 30 ? 'primary' : 'red'"
          class="my-0 py-0">
          {{ daysRemaining }}
        </v-progress-linear>
      </v-card-text>
      <v-layout row justify-space-between class="my-0 py-0">
        <div>
          <v-card-text>
            <span class="text-xs-left caption">
              {{ formattedStartDate }}
            </span>
          </v-card-text>
        </div>
        <div>
          <v-card-text>
            <span class="text-xs-left caption">
              {{ daysRemaining }} days remaining
            </span>
          </v-card-text>
        </div>
        <div>
          <v-card-text>
            <span class="text-xs-right caption">
              {{ formattedClosingDate }}
            </span>
          </v-card-text>
        </div>
      </v-layout>
      <v-card-text class="my-0 py-0">
        <div class="subheading">{{ document.description }}</div>
      </v-card-text>
      <v-card-actions class="ml-1 mt-3">
        <v-btn class="primary" dark>READ</v-btn>
        <router-link :to="{ name: 'document', params: { id: document.id } }">
          <v-btn class="primary" dark>
            LEARN MORE
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import moment from 'moment';
  import DocumentInfo from './DocumentInfo.vue';

  export default {
    name: 'DocumentListItem',
    components: {
      'document-info': DocumentInfo
    },
    props: {
      'document': {
        type: Object,
        required: true
      }
    },
    computed: {
      daysRemaining: function() {
        let endDate = moment(this.document.closingDate);
        let today = moment(new Date());

        return endDate.diff(today, 'days');
      },
      percentagePassed: function() {
        let startDate = moment(this.document.startDate);
        let endDate = moment(this.document.closingDate);
        let today = moment(new Date());

        let total = endDate.diff(startDate, 'days');
        let passed  = today.diff(startDate, 'days');

        return (passed / total) * 100;
      },
      formattedStartDate: function() {
        return moment(new Date(this.document.startDate)).format('DD MMM YYYY');
      },
      formattedClosingDate: function() {
        return moment(new Date(this.document.closingDate)).format('DD MMM YYYY');
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
