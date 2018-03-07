<template>
  <v-app light>
    <app-header/>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 sm12 md12 lg12>
            <v-card>
              <v-layout>
                <v-flex xs5>
                  <v-card-media :src="document.image" height="100%"/>
                </v-flex>
                <v-flex xs7>
                  <v-layout row justify-space-between>
                    <v-card-title><div class="headline">{{ document.title }}</div></v-card-title>
                    <v-card-title>
                      <div><v-btn icon color="primary"><v-icon>comment</v-icon></v-btn>{{ document.comments }}</div>
                    </v-card-title>
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
                </v-flex>
              </v-layout>
              <v-container>
                <v-layout>
                  <v-flex xs12>
                    <v-card>
                      <v-list two-line>
                        <template v-for="(item, index) in document.commentsText">
                          <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                            <v-list-tile-content>
                              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                              <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                              <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                              <v-icon
                                v-if="selected.indexOf(index) < 0"
                                color="grey lighten-1">star_border</v-icon>
                              <v-icon
                                v-else
                                color="yellow darken-2"
                              >star</v-icon>
                            </v-list-tile-action>
                          </v-list-tile>
                          <v-divider v-if="index + 1 < document.commentsText.length" :key="index"/>
                        </template>
                      </v-list>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
  import data from './../../data';
  import moment from 'moment';
  import AppHeader from './../shared/AppHeader.vue';
  import AppFooter from './../shared/AppFooter.vue';

  export default {
    name: 'DocumentInfo',
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
    },
    data() {
      return {
        id: this.$route.params.id,
        selected: [1],
        document: data.documents.find((doc) => {
          return doc.id == this.$route.params.id;
        })
      };
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
    },
    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index);

        if (i > -1) {
          this.selected.splice(i, 1);
        } else {
          this.selected.push(index);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
