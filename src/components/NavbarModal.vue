<template>
  <section class="px-md-4 pt-3 mb-3 mb-md-0 fixedTop">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <img src="@/assets/images/logo_lg.png" style="width: 80%" alt="" />
      </div>
      <ul class="d-flex list-unstyled mb-0">
        <li class="fw-bold d-none d-md-block">
          <span class="fw-bold fst-italic me-1">{{ nickname }}</span
          >代辦事項
        </li>
        <li class="ms-5">
          <a href="#" class="text-dark text-nowrap" @click.prevent="signOut">登出</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@media (min-width: 768px) {
  .fixedTop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
}
</style>

<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { apiPostSignOut } from '@/assets/javascript/api'

const router = useRouter()
const hakkaCookie = ref(null)

defineProps(['nickname'])

const signOut = () => {
  hakkaCookie.value = document.cookie.replace(
    // eslint-disable-next-line no-useless-escape
    /(?:(?:^|.*;\s*)hexschoolTodoHakka\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
  apiPostSignOut(
    {},
    {
      headers: {
        Authorization: hakkaCookie.value
      }
    }
  )
    .then((res) => {
      console.log(res)
      alert('成功登出')
      router.push('/sign')
    })
    .catch((err) => {
      console.log(err.response.data.message)
      alert(`登出失敗: ${err.response.data.message}`)
    })
}
</script>