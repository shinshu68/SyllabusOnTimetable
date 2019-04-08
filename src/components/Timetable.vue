<template>
  <div class="timetable">
    <!-- {{ data }} -->
    <ul v-for="day in Object.keys(formatData)" :key="day">
      <p>{{day}}<br></p>
      <grid-layout
            :layout.sync="timeData"
            :col-num="5"
            :row-height="30"
            :is-draggable="false"
            :is-resizable="false"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[1, 1]"
            :use-css-transforms="false">
        <grid-item v-for="item in timeData"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i">
          {{item.i}}
        </grid-item>
      </grid-layout>
      <grid-layout
            :layout.sync="formatData[day]"
            :col-num="5"
            :row-height="175"
            :is-draggable="false"
            :is-resizable="false"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[1, 1]"
            :use-css-transforms="false">
        <grid-item v-for="item in formatData[day]"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.id"
                  :style="{background: item.detail[3]}"
                  >
          <span>
            <p @click="jump(item.url)">{{item["detail"][0]}}</p>
            <p @click="jump(item.url)">{{item["detail"][1]}}</p>
            <p @click="jump(item.url)">{{item["detail"][2]}}</p>
          </span>
        </grid-item>
      </grid-layout>
    </ul>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
export default {
  name: "timetable",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  props: {
    data: Object,
    schoolID: Number,
    departmentID: Number
  },
  data() {
    return {
      formatData: {},
      timeData: [
        {"x": 0, "y": 0, "w":1, "h":1, "i":"1 2"},
        {"x": 1, "y": 0, "w":1, "h":1, "i":"3 4"},
        {"x": 2, "y": 0, "w":1, "h":1, "i":"5 6"},
        {"x": 3, "y": 0, "w":1, "h":1, "i":"7 8"},
        {"x": 4, "y": 0, "w":1, "h":1, "i":"9 10"}
      ]
    }
  },
  created() {
    let tmpArray = []
    let x = 0
    let y = 0
    let h = 1
    let w = 0
    Object.keys(this.data).forEach(day => {
      tmpArray = []
      x = 0
      this.data[day].forEach((subject, index) => {
        let nums = Object.keys(subject)[0].split(' ')
        let start = Number(nums[0])
        let end = Number(nums[1])
        w = (end - start + 1) / 2
        let obj = this.data[day][index][Object.keys(subject)[0]]
        let i = ""
        let detail = []
        let url = ""
        if (obj) {
          i = obj["name"]
          detail.push(obj["name"])
          detail.push(obj["teacher"])
          detail.push(obj["place"])
          if (obj["compulsory"]) {
            detail.push('orange')
          } else {
            detail.push('cyan')
          }
          url = obj['url']
        } else {
          detail.push(null)
          detail.push(null)
          detail.push(null)
          detail.push('')
        }
        let subjectData = {"id": `${x}${y}${w}${h}`, "x": x, "y": y, "w": w, "h": h, "i": i, "detail": detail, "url": url}
        x += w
        tmpArray.push(subjectData)
      })
      this.$set(this.formatData, day, tmpArray)
      y += 1
    });
  },
  methods: {
    jump(url) {
      let baseurl = 'https://syllabus.kosen-k.go.jp/Pages/PublicSyllabus'
      location.href = baseurl + `?school_id=${this.schoolID}&department_id=${this.departmentID}&` + url
      // console.log(baseurl + url)
    }
  }
}
</script>

<style scoped>
ul {
  text-align: center;
  margin: 0;
  padding: 0;
}

p {
  margin-block-start: 0.125rem;
  margin-block-end: 0.125rem;
  font-size: 16px;
  vertical-align: middle;
}

span {
  vertical-align: middle;
}

div.vue-grid-item {
  border: 1px solid #000000;
  display: inline-block;
  width: calc(100vw / 5);
  touch-action: auto;
}
</style>


