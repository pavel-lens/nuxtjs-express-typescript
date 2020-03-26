<template>
  <div>
    <h3>User details</h3>
    <div>First Name: {{ data.firstName }}</div>
    <div>Last Name: {{ data.lastName }}</div>
    <div>Ful Name: {{ fullName }}</div>
    <div>Message: {{ message }}</div>
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
    data: {
      type: Object,
      required: true,
    } as PropOptions<User>,
  },

  data() {
    return {
      message: 'This is a message',
    }
  },

  computed: {
    fullName(): string {
      return `${this.data.firstName} ${this.data.lastName}`
    },
  },
})
</script>
