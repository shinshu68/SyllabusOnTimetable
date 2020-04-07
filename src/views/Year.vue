<template>
  <div class="year">
    <router-link :to="link('1J')">1J</router-link>
    <br>
    <router-link :to="link('2J')">2J</router-link>
  </div>
</template>

<script>
export default {
  name: "year",
  components: {
  },
  data() {
    return {
      school: null,
      year: null
    }
  },
  created() {
    this.school = this.$route.params.school
    this.year = this.$route.params.year
  },
  methods: {
    link(cls) {
      return `/${this.school}/${this.year}/${cls}/`
    }
  }
}
</script>