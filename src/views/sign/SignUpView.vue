<template>
  <section>
    <h4 class="mb-4 text-center text-md-start">最實用的線上代辦事項服務</h4>
    <VForm v-slot="{ meta }" class="mb-4" @submit="signUp">
      <div class="mb-3">
        <label for="inputEmail4" class="form-label mb-0 h6">Email</label>
        <VField
          type="email"
          name="email"
          placeholder="請輸入Email"
          rules="required|email"
          class="form-control form-control-lg"
        />
        <ErrorMessage class="text-danger" name="email" />
      </div>
      <div class="mb-3">
        <label for="inputEmail4" class="form-label mb-0 h6">您的暱稱</label>
        <VField
          type="text"
          name="nickname"
          placeholder="請輸入您的暱稱"
          rules="required"
          class="form-control form-control-lg"
        />
        <ErrorMessage class="text-danger" name="nickname" />
      </div>
      <div class="mb-3">
        <label for="inputEmail4" class="form-label mb-0 h6">密碼</label>
        <VField
          type="password"
          name="password"
          placeholder="請輸入密碼"
          rules="required"
          class="form-control form-control-lg"
        />
        <ErrorMessage class="text-danger" name="password" />
      </div>
      <div class="mb-4">
        <label for="inputEmail4" class="form-label mb-0 h6">再次輸入密碼</label>
        <VField
          type="password"
          name="再次輸入密碼"
          placeholder="請再次輸入密碼"
          rules="required"
          class="form-control form-control-lg"
        />
        <ErrorMessage class="text-danger" name="再次輸入密碼" />
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn"
          style="padding: 12px 48px"
          :disabled="!meta.valid"
          :class="meta.valid ? 'btn-dark' : 'btn-outline-dark'"
        >
          註冊帳號
        </button>
      </div>
    </VForm>
    <div class="text-center">
      <RouterLink to="/sign" class="h5">登入</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { apiPostSignup } from '@/assets/javascript/api'

const router = useRouter()

const signUp = (e) => {
  if (e.password !== e.再次輸入密碼) {
    return alert('註冊失敗：密碼不同')
  }
  apiPostSignup(e)
    .then((res) => {
      console.log(res)
      alert('註冊成功')
      router.push('/sign')
    })
    .catch((err) => {
      console.log(err.response.data.message)
      alert(`註冊失敗: ${err.response.data.message}`)
    })
}

// const tempData = ref({})
</script>