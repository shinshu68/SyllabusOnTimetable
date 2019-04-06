<template>
  <div class="school">
    <router-link :to="link(2019)">2019</router-link>
  </div>
</template>

<script>
export default {
  name: "school",
  components: {
  },
  data() {
    return {
      school: null,
    }
  },
  created() {
    this.school = this.$route.params.school
  },
  methods: {
    link(year) {
      return `/${this.school}/${year}/`
    }
  }
}
</script>