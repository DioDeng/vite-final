<template>
  <div
    class="modal fade"
    id="messageModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div
          class="alert mb-0"
          role="alert"
          :class="[messageData.status ? 'alert-primary' : 'alert-danger']"
        >
          {{ messageData.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap'

let modal = ref(null)
const messageData = ref({})

const showModal = () => {
  modal.value.show()
}

onMounted(() => {
  // eslint-disable-next-line no-undef
  modal.value = new Modal('#messageModal')
  showModal()
})
</script>