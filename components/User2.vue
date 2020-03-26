<template>
  <div>
    <h3>User2 details</h3>
    <div>First Name: {{ data.firstName }}</div>
    <div>Last Name: {{ data.lastName }}</div>
    <div>Ful Name: {{ fullName }}</div>
    <div>Message: {{ message }}</div>
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

@Component
export default class User2 extends Vue {
  // Props
  @Prop({ required: true })
  readonly data!: User

  // Data
  message: string = 'This is a message'

  get fullName(): string {
    return `${this.data.firstName} ${this.data.lastName}`
  }
}
</script>
