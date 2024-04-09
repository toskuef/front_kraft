<template>
  <div class="table"
       style="background-color: white; border-radius: 8px; font-size: 16px;box-shadow: 0 0.3125rem 0.625rem 0 rgba(0, 0, 0, 0.12) !important;">
    <div
        style="display: flex; padding-right: 0.5rem; padding-left: 0.5rem; border-bottom-color: #343951; border-bottom-style: solid"
        class="row">
      <div class="col w-40" style="margin: 0.5rem">Имя</div>
      <div class="col w-40" style="margin: 0.5rem">Адрес</div>
      <div class="col w-20" style="margin: 0.5rem">Телефон</div>
    </div>
    <div class="hidden-scr" style=" overflow-y: scroll; ">
      <div @click="$router.push(`/customers/${customer.id}/`)" class="row customer-item" v-for="customer of data"
           data-search>
        <div class="col w-40" style="margin: 0.5rem">{{ customer.full_name }}
        </div>
        <div class="col w-40" style="margin: 0.5rem">{{ customer.address }}
        </div>
        <div class="col w-20" style="margin: 0.5rem">{{ customer.phone }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
  },
  data() {
    return {}
  },
  methods: {
    hover() {
      event.target.style.backgroundColor = '#dee2e6'

    },
    unhover() {
      event.target.style.backgroundColor = ''
    },
  }
}
</script>
<style scoped>
.table {
  height: 100%;
  display: flex; /*added*/
  flex-direction: column; /*added*/
}
.w-40 {
  width: 40%;
}

.w-20 {
  width: 20%;
}

.row {
  font-size: 16px;
  font-family: "Open Sans";
}


.customer-item {
  display: flex;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  border-bottom-color: #343951;
  border-bottom-style: solid;
  cursor: pointer;
  @media only screen and (orientation: portrait) {
    display: block;
  }
}

.customer-item:hover {
  background-color: #dee2e6;
}


.col {
  @media only screen and (orientation: portrait) {
    width: 100%;
  }
}
</style>
