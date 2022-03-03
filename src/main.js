import Vue from 'vue'
import App from './App.vue'
import TypeIt from "typeit";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new TypeIt("#inner-text-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true
})
  .pause(2000)
  .type("हृषीकेश राजेश तेरदाळकर", {speed: 75})
  .pause(1500)
  .delete(22, { deleteSpeed: 75 })
  .type("Hrishikesh Rajesh Terdalkar", {speed: 100})
  .pause(1500)
  .delete(8, { deleteSpeed: 130 })
  .move(-1)
  .delete(6, { deleteSpeed: 130 })
  .move(-1)
  .delete(1, { deleteSpeed: 130 })
  .move(-10)
  .pause(1500)
  .type("https://")
  .move(1)
  .delete(1)
  .type("h")
  .move(10)
  .delete(1)
  .type("r")
  .move(1)
  .delete(1)
  .type("t")
  .type(".github.io/")
  .pause(1500)
  .delete(31, { deleteSpeed: 100 })
  .pause(1500)
  .go();