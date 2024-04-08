
<template>
  <aside class="menu">123</aside>
<div class="content" style="padding-left: 0.5rem; padding-right: 0.5rem">
  <header style="display: flex; height: 50px; align-items: center; position: sticky; top: 0; background-color: antiquewhite">
    <div style="justify-content: center;">title</div>
    <div style="margin-left: auto; margin-right: 0.5rem">
      <button-tos style="margin-right: 5px">Создать</button-tos>
      <button-tos @click="testRequest">Печать</button-tos>
    </div>
    <input style="margin-right: 0.5rem">
    <div style="margin-right: 0.5rem">not</div>
    <div style="margin-right: 0.5rem">set</div>
    <div style="">lk</div>
  </header>
  <main>
  <button @click="addLike">like</button>
  <div>Количество лайков {{ likes }}</div>

    <router-view />
  </main>
</div>
</template>
<script>

import ButtonTos from "@/components/button-tos.vue";
import axios from "axios";

export default {
  components: {ButtonTos},
  data() {
    return {
      likes: 0,
    }
  },
  methods: {
    addLike() {
      this.likes++
    },
    async testRequest() {
      const response = await axios.get('https://kraft.toskins.ru/test/')

      console.log(response)
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu {
  display: flex;
  flex-direction: column; /* размещаем элементы к колонку */
  width: 240px;
  min-height: 100vh; /* на всю высоту экрана */
  position: fixed; /* чтобы меню было фиксированным */
  top: 0; /* прижимаем к верхнему */
  left: 0; /* .. и нижнему краю */
  background-color: #343951;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2); /* задаем тень, чтобы отделить от фона */
  @media only screen and (orientation: portrait) {
    display: none;
  }
}
.content {
  margin-left: 240px;
  @media only screen and (orientation: portrait) {
    margin-left: 0;
  }
}
</style>
