<template>
  <div class="my-5">
    <h3>User details</h3>
    <div>First Name: {{ payload.firstName }}</div>
    <div>Last Name: {{ payload.lastName }}</div>
    <div>Ful Name: {{ fullName }}</div>
    <div>Message: {{ message }}</div>

    <div>
      Counter: {{ formattedCounter }}
      <button @click="counter += 1">+</button>
      <button @click="counter -= 1">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface User {
  firstName: string
  lastName: number
}

export default Vue.extend({
  name: 'User',

  props: {
    payload: {
      type: Object,
      required: true,
    } as PropOptions<User>,
    initialCount: {
      type: Number,
      required: false,
      default: 0,
      // The `number` type is automatticaly inferred, so you don't have to do this:
      // } as PropOptions<number>,
    },
  },

  data() {
    return {
      counter: this.initialCount,
      message: 'This is a message',
    }
  },

  computed: {
    // You always have to specify return type!
    fullName(): string {
      return `${this.payload.firstName} ${this.payload.lastName}`
    },
    upMessage(): string {
      return this.message.toUpperCase()
    },
    formattedCounter(): string {
      return this.counter.toFixed(2)
    },
  },

  methods: {
    processData() {
      // You will not be able to change props by mistake. Vetur
      // this.count += 1
      // This will complain because Typescript knows that counter is number
      // this.counter += 'asr'
    },
  },
})
</script>
