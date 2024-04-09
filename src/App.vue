
<template>
<!--  <aside class="menu">123</aside>-->
<!--  <input type="checkbox" id="nav-toggle" hidden>-->
<!--    <nav class="nav">-->
<!--        <label for="nav-toggle" class="nav-toggle" onclick></label>-->
<!--        <h2 class="logo">-->
<!--            <a href="//dbmast.ru/">DBmast.ru</a>-->
<!--        </h2>-->
<!--        <ul>-->
<!--          <li><a href="#1">Один</a></li>-->
<!--            <li><a href="#2">Два</a></li>-->
<!--            <li><a href="#3">Три</a></li>-->
<!--            <li><a href="#4">Четыре</a></li>-->
<!--            <li><a href="#5">Пять</a></li>-->
<!--            <li><a href="#6">Шесть</a></li>-->
<!--            <li><a href="#7">Семь</a> </li>-->
<!--        </ul>-->
<!--    </nav>-->
<!--<div class="main" style="padding-left: 0.5rem; padding-right: 0.5rem">-->

<!--  <main>-->
<!--  <button @click="addLike">like</button>-->
<!--  <div>Количество лайков {{ likes }}</div>-->

<!--    <router-view />-->
<!--  </main>-->
<!--</div>-->
<!--  <div style="position: absolute; top: 0; left: 0; height: 100vh; width: 100px"></div>-->
  <div style="display: flex" class="" id="">
    <div class="n" >
      <div class="nav-list" style="height: 100%; padding-top: 20px" id="nav">
        <div style="margin-bottom: 20px" class="nav-img-header">ФОТО</div>
      <div class="nav-item">RMP</div>
      <div class="nav-item">RMZ</div>
      <div class="nav-item">RMT</div>
      <div class="nav-item">RMNP</div>
      <div class="nav-item">RMF</div>
      <div class="nav-item">RMD</div>
      <div class="nav-item">Задачи</div>
        </div>
    </div>
    <div  style="width: 100%" id="content">
        <header style="display: flex; height: 50px; align-items: center; position: sticky; top: 0; background-color: antiquewhite">
    <div style="justify-content: center;">Клиенты</div>
    <div style="margin-left: auto; margin-right: 0.5rem">
<!--      <button-tos style="margin-right: 5px">Создать</button-tos>-->
<!--      <button-tos @click="testRequest">Печать</button-tos>-->
    </div>
          <div style="margin-right: 0.5rem; padding: 0.5rem; height: 100%">
            <input placeholder="login" type="text" v-model="login">
            <input placeholder="password" type="password" v-model="password">
            <button @click="auth">Войти</button>
    <input style="height: 100%" @keyup="searchToPage">
            </div>
    <div style="margin-right: 0.5rem">not</div>
    <div style="margin-right: 0.5rem">set</div>
    <div style="">lk</div>
  </header>
      <div id="data-page">
      <CustomerList :data="customers"/>
<!--        <router-view/>-->
        </div>
    </div>
  </div>
</template>
<script>

import ButtonTos from "@/components/button-tos.vue";
import axios from "axios";
import './variables.scss'
import CustomerList from "@/components/CustomerList.vue";

export default {
  components: {CustomerList, ButtonTos},
  data() {
    return {
      likes: 0,
      customers: [],
      login: '',
      password: ''
    }
  },
  methods: {
    addLike() {
      this.likes++
    },
    async testRequest() {
      try {
      const response = await axios.get('https://kraft.toskins.ru/api/v1/customers/', {
          // const response = await axios.get('http://127.0.0.1:8000/api/v1/customers/', {
            headers: {
              'authorization': `Bearer ${localStorage.access_token}`,
            }
          })
        console.log(response.data)


      this.customers = response.data
        } catch (e) {
        console.log(e)
      }
    },
    searchToPage() {
      const searchList = document.querySelectorAll('[data-search]')
    for (const searchEl of searchList) {
      if (!searchEl.innerText.toLowerCase().includes(event.target.value.toLowerCase())) {
        searchEl.style.display = 'none'
      } else {
        searchEl.style.display = 'flex'
      }
    }
    },
    async auth() {
      const response = await axios.post('https://kraft.toskins.ru/api/auth/jwt/create/',
      //     const response = await axios.post('http://127.0.0.1:8000/api/auth/jwt/create/',
          {username: this.login, password: this.password})
      console.log(response)
      localStorage.access_token = response.data.access
    }

  },
  mounted() {
      this.testRequest();
    }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.d-none {
  display: none;
}

#content {
  background-color: var(--bg-gray-100)
}
#data-page {
  height: var(--h-content);
  padding: 0.5rem;
}
.n {
  width: 0;
  transition-duration: 0.3s;
  height: 100vh;
}

 .hidden-scr::-webkit-scrollbar {
    width: 0;
  }

@keyframes invisible {
from {
opacity: 1;
}
to {
opacity: 0;
}
}

.nav-list {

transition-duration: 0.3s;
  //background-color: #343951;
  display: none;
  width: 300px;
  animation-duration: 0.3s;
  animation: invisible 1s;
}

.nav-img-header {
  text-align: center;
  font-size: 32px;
}

.nav-item {
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 0.5rem;
}
.n-open {

}
@keyframes shows {
from {
opacity: 0;
}
to {
opacity: 1;
}
}
.n:hover {
 width: 300px;

  .nav-list {
    animation-duration: 0.3s;
    display: block;
    background-color: var(--bg-gray-100);
    transition-duration: 0.3s;
    animation: shows 1s;
  }
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
.nav {
    /*  ширна произвольная, не стесняйтесь экспериментировать */
    width: 320px;
    min-width: 320px;
    /* фиксируем и выставляем высоту панели на максимум */
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    margin: 0;
    left: -320px;
    padding: 15px 20px;
    /* плавный переход смещения панели */
    -webkit-transition: left 0.3s;
    -moz-transition: left 0.3s;
    transition: left 0.3s;
    background: #16a085;
    /* поверх других элементов */
    z-index: 2000;
}


/**
 * Кнопка переключения панели
 * тег <label>
 */

.nav-toggle {
    /* абсолютно позиционируем */
    position: absolute;
    /* относительно левого края панели */
    left: 320px;
    /* отступ от верхнего края панели */
    top: 1em;
    /* внутренние отступы */
    padding: 0.5em;
    /* определяем цвет фона переключателя
     * чаще вчего в соответствии с цветом фона панели
    */
    background: inherit;
    /* цвет текста */
    color: #dadada;
    /* вид курсора */
    cursor: pointer;
    /* размер шрифта */
    font-size: 1.2em;
    line-height: 1;
    /* всегда поверх других элементов страницы */
    z-index: 2001;
    /* анимируем цвет текста при наведении */
    -webkit-transition: color .25s ease-in-out;
    -moz-transition: color .25s ease-in-out;
    transition: color .25s ease-in-out;
}


/* определяем текст кнопки
 * символ Unicode (TRIGRAM FOR HEAVEN)
*/

.nav-toggle:after {
    content: '\2630';
    text-decoration: none;
}


/* цвет текста при наведении */

.nav-toggle:hover {
    color: #f4f4f4;
}


/**
 * Скрытый чекбокс (флажок)
 * невидим и недоступен :)
 * имя селектора атрибут флажка
 */

[id='nav-toggle'] {
    position: absolute;
    display: none;
}


/**
 * изменение положения переключателя
 * при просмотре на мобильных устройствах
 * когда навигация раскрыта, распологаем внутри панели
*/

[id='nav-toggle']:checked ~ .nav > .nav-toggle {
    left: auto;
    right: 2px;
    top: 1em;
}


/**
 * Когда флажок установлен, открывается панель
 * используем псевдокласс:checked
 */

[id='nav-toggle']:checked ~ .nav {
    left: 0;
    box-shadow:4px 0px 20px 0px rgba(0,0,0, 0.5);
    -moz-box-shadow:4px 0px 20px 0px rgba(0,0,0, 0.5);
    -webkit-box-shadow:4px 0px 20px 0px rgba(0,0,0, 0.5);
    overflow-y: auto;
}


/*
 * смещение контента страницы
 * на размер ширины панели,
 * фишка необязательная, на любителя
*/

[id='nav-toggle']:checked ~ main > article {
    -webkit-transform: translateX(320px);
    -moz-transform: translateX(320px);
    transform: translateX(320px);
}


/*
 * изменение символа переключателя,
 * привычный крестик (MULTIPLICATION X),
 * вы можете испльзовать любой другой значок
*/

[id='nav-toggle']:checked ~ .nav > .nav-toggle:after {
    content: '\2715';
}


/**
 * профиксим баг в Android <= 4.1.2
 * см: http://timpietrusky.com/advanced-checkbox-hack
 */

body {
    -webkit-animation: bugfix infinite 1s;
}

@-webkit-keyframes bugfix {
    to {
      padding: 0;
    }
}


/**
 * позаботьтимся о средних и маленьких экранах
 * мобильных устройств
 */

@media screen and (min-width: 320px) {
    html,
    body {
      margin: 0;
      overflow-x: hidden;
    }
}

@media screen and (max-width: 320px) {
    html,
    body {
      margin: 0;
      overflow-x: hidden;
    }
    .nav {
      width: 100%;
      box-shadow: none
    }
}


/**
 * Формируем стиль заголовка (логотип) панели
*/

.nav h2 {
    width: 90%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    text-shadow: rgba(255, 255, 255, .1) -1px -1px 1px, rgba(0, 0, 0, .5) 1px 1px 1px;
    font-size: 1.3em;
    line-height: 1.3em;
    opacity: 0;
    transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -webkit-transform: scale(0.1, 0.1);
    transform-origin: 0% 0%;
    -ms-transform-origin: 0% 0%;
    -moz-transform-origin: 0% 0%;
    -webkit-transform-origin: 0% 0%;
    transition: opacity 0.8s, transform 0.8s;
    -ms-transition: opacity 0.8s, -ms-transform 0.8s;
    -moz-transition: opacity 0.8s, -moz-transform 0.8s;
    -webkit-transition: opacity 0.8s, -webkit-transform 0.8s;
}

.nav h2 a {
    color: #dadada;
    text-decoration: none;
    text-transform: uppercase;
}


/*плавное появление заголовка (логотипа) при раскрытии панели */

[id='nav-toggle']:checked ~ .nav h2 {
    opacity: 1;
    transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
}


/**
 * формируем непосредственно само меню
 * используем неупорядоченный список для пунктов меню
 * прикрутим трансфомации и плавные переходы
 */

.nav > ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav > ul > li {
    line-height: 2.5;
    opacity: 0;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: opacity .5s .1s, -webkit-transform .5s .1s;
    -moz-transition: opacity .5s .1s, -moz-transform .5s .1s;
    -ms-transition: opacity .5s .1s, -ms-transform .5s .1s;
    transition: opacity .5s .1s, transform .5s .1s;
}

[id='nav-toggle']:checked ~ .nav > ul > li {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}


/* определяем интервалы появления пунктов меню */

.nav > ul > li:nth-child(2) {
    -webkit-transition: opacity .5s .2s, -webkit-transform .5s .2s;
    transition: opacity .5s .2s, transform .5s .2s;
}

.nav > ul > li:nth-child(3) {
    -webkit-transition: opacity .5s .3s, -webkit-transform .5s .3s;
    transition: opacity .5s .3s, transform .5s .3s;
}

.nav > ul > li:nth-child(4) {
    -webkit-transition: opacity .5s .4s, -webkit-transform .5s .4s;
    transition: opacity .5s .4s, transform .5s .4s;
}

.nav > ul > li:nth-child(5) {
    -webkit-transition: opacity .5s .5s, -webkit-transform .5s .5s;
    transition: opacity .5s .5s, transform .5s .5s;
}

.nav > ul > li:nth-child(6) {
    -webkit-transition: opacity .5s .6s, -webkit-transform .5s .6s;
    transition: opacity .5s .6s, transform .5s .6s;
}

.nav > ul > li:nth-child(7) {
    -webkit-transition: opacity .5s .7s, -webkit-transform .5s .7s;
    transition: opacity .5s .7s, transform .5s .7s;
}


/**
 * оформление ссылок пунктов меню
 */

.nav > ul > li > a {
    display: inline-block;
    position: relative;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    color: #dadada;
    width: 100%;
    text-decoration: none;
    /* плавный переход */
    -webkit-transition: color .5s ease, padding .5s ease;
    -moz-transition: color .5s ease, padding .5s ease;
    transition: color .5s ease, padding .5s ease;
}


/**
 * состояние ссылок меню при наведении
 */

.nav > ul > li > a:hover,
.nav > ul > li > a:focus {
    color: white;
    padding-left: 15px;
}


/**
 * линия подчеркивания ссылок меню
 */

.nav > ul > li > a:before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    -webkit-transition: width 0s ease;
    transition: width 0s ease;
}

.nav > ul > li > a:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: #3bc1a0;
    -webkit-transition: width .5s ease;
    transition: width .5s ease;
}


/**
 * анимируем линию подчеркивания
 * ссылок при наведении
 */

.nav > ul > li > a:hover:before {
    width: 0%;
    background: #3bc1a0;
    -webkit-transition: width .5s ease;
    transition: width .5s ease;
}

.nav > ul > li > a:hover:after {
    width: 0%;
    background: transparent;
    -webkit-transition: width 0s ease;
    transition: width 0s ease;
}


/* фон затемнения на основной контент
 * при этом элементы блокируютя
 * спорная такая фича, если оно вам надо
 * просто раскомментируйте
*/

/*
.mask-content {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
}

[id='nav-toggle']:checked ~ .mask-content {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .5s, visibility .5s;
    transition: opacity .5s, visibility .5s;
}
*/
</style>
