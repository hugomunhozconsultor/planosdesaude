import VueGtm from '@gtm-support/vue2-gtm'
import Vue from 'vue'

Vue.use(VueGtm, {
  id: process.env.NODE_ENV === 'production' ? 'GTM-DJ5BQSG' : 'GTM-WRSRFN5',
  defer: false,
  compatibility: false,
  enabled: true,
  debug: process.env.NODE_ENV !== 'production',
  loadScript: true,
  trackOnNextTick: false,
})