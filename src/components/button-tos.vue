<script setup>

</script>

<template>
<button class="btn"><slot></slot></button>
</template>

<style scoped>
.btn {
  min-width: 100px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
}
.btn:hover {

  transform: scale(1.02);
  transition-duration: 0.15s;
}

.btn:active {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}
.btn[disabled] {
    color: #d2d5db;
    background: #6c7589;
    cursor: not-allowed;
}
</style>