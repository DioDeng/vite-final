<template>
  <!-- 尚無代辦事項 -->
  <div class="d-flex flex-column align-items-center" v-if="todoList.length === 0">
    <h5 class="mb-3 mt-5">目前尚無代辦事項</h5>
    <img src="@/assets/images/empty1.png" style="width: 50%" alt="" />
  </div>
  <!-- todo list -->
  <div class="card shadow border-0" v-else>
    <ul class="d-flex list-unstyled timeLine mb-0">
      <li class="text-center py-3">
        <a
          href="#"
          class="text-decoration-none text-dark fw-bold"
          :class="{ active: select === 0 }"
          @click.prevent="select = 0"
          >全部</a
        >
      </li>
      <li class="text-center py-3">
        <a
          href="#"
          class="text-decoration-none fw-bold text-dark"
          :class="{ active: select === 1 }"
          @click.prevent="select = 1"
          >待完成</a
        >
      </li>
      <li class="text-center py-3">
        <a
          href="#"
          class="text-decoration-none fw-bold text-dark"
          :class="{ active: select === 2 }"
          @click.prevent="select = 2"
          >已完成</a
        >
      </li>
    </ul>
    <div class="card-body">
      <!-- 全部 -->
      <ul class="list-unstyled">
        <template v-for="item in tempTodoList" :key="item.id">
          <li class="d-flex align-items-center border-bottom pb-2 mb-3 deleteSet">
            <a href="#" @click="toggleStatus(item.id)"
              ><i
                class="bi h4"
                :class="[item.status ? 'bi-check2-square text-warning' : 'bi-app text-dark']"
              ></i></a
            ><span
              class="ms-3"
              :class="[
                { 'text-decoration-line-through': item.status },
                { 'text-black-50': item.status }
              ]"
              >{{ item.content }}</span
            >
            <a
              href="#"
              class="ms-auto text-decoration-none deleteHover"
              @click="deleteTodo(item.id)"
              >X</a
            >
          </li>
        </template>
      </ul>
    </div>
    <div class="card-footer">{{ unCompletNum.length }}待完成項目</div>
  </div>
</template>

<style lang="scss">
.deleteHover {
  opacity: 0;
}
.deleteSet:hover {
  .deleteHover {
    opacity: 1;
  }
}
</style>

<script setup>
import { defineEmits, defineProps, ref, computed, watch } from 'vue'
import { apiPatchTodo, apiDeleteTodo } from '@/assets/javascript/api'

const select = ref(0)
const tempTodoList = ref([])
const props = defineProps(['todoList'])
const emit = defineEmits(['getTodos'])

const hakkaCookie = ref(
  document.cookie.replace(
    // eslint-disable-next-line no-useless-escape
    /(?:(?:^|.*;\s*)hexschoolTodoHakka\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
)
const unCompletNum = computed(() => props.todoList.filter((e) => !e.status))
watch(props, () => {
  selectTodolist()
})
watch(select, () => {
  selectTodolist()
})

// 方法
const deleteTodo = (id) => {
  apiDeleteTodo(id, {
    headers: {
      Authorization: hakkaCookie.value
    }
  })
    .then((res) => {
      emit('getTodos')
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

const toggleStatus = (id) => {
  apiPatchTodo(id, {
    headers: {
      Authorization: hakkaCookie.value
    }
  })
    .then((res) => {
      emit('getTodos')
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
const selectTodolist = () => {
  if (select.value === 1) {
    tempTodoList.value = props.todoList.filter((e) => !e.status)
  } else if (select.value === 2) {
    tempTodoList.value = props.todoList.filter((e) => e.status)
  } else {
    tempTodoList.value = props.todoList
  }
}
</script>