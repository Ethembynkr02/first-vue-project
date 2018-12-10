// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    text: 'merhaba dünya'
  }
})
new Vue({
  el: '#vfor',
  data: {
    liste: ['Ethem', 'Ali', 'Emir'],
    arkadasim: {
      isim: 'Ethem',
      yas: 23,
      meslek: 'Mühendis'
    }
  },
  methods: {
    rastgeleListe () {
      this.liste = this.liste.sort(() => Math.random() - 0.5)
    }
  }
})
