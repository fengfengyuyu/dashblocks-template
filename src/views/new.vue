<template>
  <db-dashboard v-if="ready" :dbspec="dbspec" :dbdata="dbdata" :dark="isDark"> </db-dashboard>
</template>

<script>
import { DbData, DbDashboard } from 'dashblocks';
import * as d3 from 'd3';
export default {
  name: 'New',
  components: {},
  data() {
    return {
      isDark: false,
      dbdata: new DbData(),
      // Declare Dashboard Layout. Add widgets to your dashboard, specifying how many columns and rows
      // each widget takes. Dashblocks provides 16-columns CSS Grid layout.
      // Pass additional options to widgets to adjust appearance as needed.
      dbspec: {
        layout: {
          type: 'grid'
        },
        widgets: [
          {
            id: 'w1',
            type: 'DbRidgeline',
            cspan: 16
          }
        ]
      },
      ready: false
    };
  },
  mounted() {
    this.initialize();
    this.ready = true;
  },
  methods: {
    initialize: async function() {
      // Get the data, and when it becomes available, render dashboard by setting dashboard component
      let data = await this.getData();
      // Set data for our widget
      this.dbdata.setWData('w1', { data: data });
      // Trigger component drawing
      this.dbDashboardComponent = 'DbDashboard';
    },
    getData: async function() {
      const data = await d3.csv(
        'https://gist.githubusercontent.com/chrtze/c74efb46cadb6a908bbbf5227934bfea/raw/c32d94689dd432609c55d1758d8e69c59f94f802/traffic_weekly.csv',
        ({ name, date, total_1, total_2 }) => ({ name, date: new Date(date * 1000), value: +total_1 + +total_2 })
      );
      return d3
        .nest()
        .key(d => d.name)
        .sortValues((a, b) => a.date - b.date)
        .entries(data)
        .map(d => ((d.sum = d3.sum(d.values, d => d.value)), d))
        .sort((a, b) => b.sum - a.sum);
    }
  }
};
</script>
