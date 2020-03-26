<template>
  <div class="container">
    <div>
      <div @click="increment()">
        <logo />
      </div>
      <h1 class="title">
        nuxt-typescript
      </h1>
      <h2 class="subtitle" @click="decrement()">
        My awesome Nuxt.js project. Counter: {{ this.count }}
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

interface User {
  firstName: string
  lastName: number
}

@Component({
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    Logo,
  },
})
export default class IndexPage extends Vue {
  // Props
  @Prop()
  readonly user!: User

  // Data
  count: number = 0
  message: string = 'This is a message'

  get fullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  // Methods will be component methods
  async increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
