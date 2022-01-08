<template>
  <header class="flex">
      <div class="branding flex">
          <img src="@/assets/file-invoice-dollar-solid.png" alt="">
      </div>
  </header>
</template>

<script>
export default {
  name: "navigation"
}
</script>

<style scoped>
header {
  z-index: 99;
  flex-direction: row;
  background-color: #1e2139;
}
@media (min-width: 900px) {
  header {
    min-height: 100%;
    min-width: 90px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
}
header .branding {
  border-radius: 0 20px 20px 0;
  background-color: #7c5dfa;
  justify-content: center;
  padding: 24px;
}
@media (min-width: 900px) {
  header .branding {
    width: 100%;
  }
}
header .branding img {
  width: auto;
  height: 30px;
}

@media (max-width: 900px) {
  header {
    min-height: 100%;
    min-width: 90px;
    border-radius: 0 20px 20px 0;
  }
}
</style>