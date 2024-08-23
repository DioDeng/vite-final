<template>
  <Navbar :nickname="nickname" />
  <section class="h-100 d-md-flex flex-column justify-content-center align-items-center">
    <!-- 新增代辦事項按鈕 -->
    <div class="col-md-6 col-12 mb-3">
      <div class="input-group shadow w-100 rounded-3">
        <input
          type="text"
          class="form-control form-control-lg border-0"
          placeholder="新增代辦事項"
          v-model="tempTodo"
        />
        <div class="bg-white p-2 rounded-end-3">
          <a href="#" class="text-dark" @click.prevent="postTodo"
            ><i class="bi bi-plus-square-fill h1"></i
          ></a>
        </div>
      </div>
    </div>
    <!-- 代辦事項列表 -->
    <div class="col-md-6 col-12">
      <TodoList :todoList="todoList" @getTodos="getTodos" />
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/stylesheets/helpers/timeLine.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { apiCheckOut, apiGetTodos, apiPostTodo } from '@/assets/javascript/api'
import Navbar from '@/components/NavbarModal.vue'
import TodoList from '@/components/TodolistModal.vue'

const tempTodo = ref('')
const todoList = ref([])
const nickname = ref('')

const router = useRouter()

const hakkaCookie = ref(
  document.cookie.replace(
    // eslint-disable-next-line no-useless-escape
    /(?:(?:^|.*;\s*)hexschoolTodoHakka\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
)
const checkOut = () => {
  apiCheckOut({
    headers: {
      Authorization: hakkaCookie.value
    }
  })
    .then((res) => {
      console.log('check:', res)
      nickname.value = res.data.nickname
    })
    .catch((err) => {
      console.log(err)
      alert('請重新登入')
      router.push('/sign')
    })
}
const getTodos = () => {
  apiGetTodos({
    headers: {
      Authorization: hakkaCookie.value
    }
  })
    .then((res) => {
      console.log(res)
      todoList.value = res.data.data
    })
    .catch((err) => {
      console.log(err)
    })
}
const postTodo = () => {
  apiPostTodo(
    { content: tempTodo.value },
    {
      headers: {
        Authorization: hakkaCookie.value
      }
    }
  )
    .then((res) => {
      console.log(res)
      tempTodo.value = ''
      getTodos()
    })
    .catch((err) => {
      alert(`Error: ${err.response.data.message}`)
    })
}

onMounted(() => {
  checkOut()
  getTodos()
})
</script>