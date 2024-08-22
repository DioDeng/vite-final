<template>
  <section class="row h-100">
    <div class="col-1 d-none d-md-block"></div>
    <div class="col-5 d-none d-md-block">
      <div class="d-flex flex-column align-items-center justify-content-center h-100">
        <img src="@/assets/images/logo_lg.png" style="width: 80%" class="mb-3" alt="" />
        <img src="@/assets/images/img.png" alt="" />
      </div>
    </div>
    <div class="col-1 d-none d-md-block"></div>
    <div class="col-md-5 col-12">
      <div
        class="d-flex flex-column align-items-center align-items-sm-start justify-content-md-center h-100"
      >
        <div class="d-md-none mb-4" style="width: 80%; padding-top: 64px">
          <img src="@/assets/images/logo_lg.png" alt="" />
        </div>
        <RouterView />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>