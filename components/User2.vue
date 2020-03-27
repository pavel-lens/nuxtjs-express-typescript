<template>
  <div class="my-5">
    <h3>User2 details</h3>
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
import { Vue, Component, Prop } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import User from '~/components/User.vue'

interface User {
  firstName: string
  lastName: string
}

// Looks like the only drawback with this syntax is that
// when declaring stateful properties (see `message`, `counter`)
// you can't leave them uninitialied or assign `undefined`.
// If you do so, the property will not become reactive.
// https://class-component.vuejs.org/guide/class-component.html#data

@Component
export default class User2 extends Vue {
  // Props
  @Prop({ required: true })
  readonly payload!: User

  @Prop({ required: false })
  readonly initialCount: number = 0

  // Data
  message = 'This is a message'
  counter: number = 0

  get fullName(): string {
    return `${this.payload.firstName} ${this.payload.lastName}`
  }

  get formattedCounter(): string {
    return this.counter.toFixed(2)
  }

  processData() {
    // You will not be able to change props by mistake. Vetur
    // this.count += 1
    // This will complain because Typescript knows that counter is number
    // this.counter += 'asr'
  }
}
</script>
