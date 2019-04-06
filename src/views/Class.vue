<template>
  <div class="class">
    <component :is="link()"></component>
  </div>
</template>

<script>
import toyota20191J from '@/components/toyota/2019/1J/ClassData.vue'
export default {
  name: "class",
  components: {
    toyota20191J
  },
  data() {
    return {
      school: null,
      year: null,
      class: null
    }
  },
  created() {
    this.school = this.$route.params.school
    this.year = this.$route.params.year
    this.class = this.$route.params.class
  },
  methods: {
    link() {
      return this.school + this.year + this.class
    }
  }
}
</script>

