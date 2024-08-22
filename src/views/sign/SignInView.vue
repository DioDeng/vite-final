<template>
  <section>
    <h4 class="mb-4 text-center text-md-start">最實用的線上代辦事項服務</h4>
    <VForm v-slot="{ meta }" class="mb-4" @submit="signIn">
      <div class="mb-3">
        <label for="inputEmail4" class="form-label mb-0 h6">Email</label>
        <VField
          type="email"
          name="email"
          rules="required|email"
          class="form-control form-control-lg"
        />
        <ErrorMessage class="text-danger" name="email" />
      </div>
      <div class="mb-4">
        <label for="inputEmail4" class="form-label mb-0 h6">密碼</label>
        <VField
          type="password"
          name="password"
          rules="required"
          class="form-control form-control-lg"
        />
        <ErrorMessage class="text-danger" name="password" />
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn"
          style="padding: 12px 48px"
          :disabled="!meta.valid"
          :class="meta.valid ? 'btn-dark' : 'btn-outline-dark'"
        >
          登入
        </button>
      </div>
    </VForm>
    <div class="text-center">
      <RouterLink to="/sign/signup" class="h5">註冊帳號</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { apiPostSignin } from '@/assets/javascript/api'

const router = useRouter()

const signIn = (e) => {
  apiPostSignin(e)
    .then((res) => {
      document.cookie = `hexschoolTodoHakka=${res.data.token}; expires=${res.data.exp}`
      router.push('/')
    })
    .catch((err) => {
      console.log(err.response.data.message)
      alert(`登入失敗: ${err.response.data.message}`)
    })
}
</script>