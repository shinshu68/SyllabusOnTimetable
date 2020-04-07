<template>
  <div class="classdata">
    <div id="nav">
      <button @click="changeMode('first')">前期</button> |
      <button @click="changeMode('second')">後期</button>
    </div>
    <Timetable :data="firstTimetable" :schoolID="schoolID" :departmentID="departmentID" v-show="isMode('first')"/>
    <Timetable :data="secondTimetable" :schoolID="schoolID" :departmentID="departmentID" v-show="isMode('second')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Timetable from '@/components/Timetable.vue'
export default {
  name: 'classdata',
  components: {
    Timetable
  },
  data() {
    return {
      schoolID: 23,
      departmentID: 25,
      firstTimetable: {
        "Mon": [
          { "1 2": {
            "name": "初等代数",         // 教科名
            "teacher": "米澤",        // 教師名
            "place": "S21",           // 場所
            "concurrently": false,    // 並行開講かどうか
            "compulsory": false,	      // 必修かどうか
            "url": "subject_code=91021&year=2014"
          }},
          { "3 4": null },
          { "5 6": null },
          { "7 8": {
            "name": "電子工学",
            "teacher": "都築",
            "place": "S21",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=95023&year=2014"
          }},
          { "9 10": null }
        ],
        "Tue": [
          { "1 2": {
            "name": "生体情報論",
            "teacher": "加藤貴",
            "place": "S21",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=91019&year=2014"
          }},
          { "3 4": {
            "name": "形式言語理論",
            "teacher": "勝谷",
            "place": "演習室2",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=95031&year=2014"
          }},
          { "5 6": {
            "name": "ネットワークセキュリティ",
            "teacher": "平野",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=95025&year=2014"
          }},
          { "7 8": null },
          { "9 10": null }
        ],
        "Wed": [
          { "1 2": null },
          { "3 4": {
            "name": "情報科学実験",
            "teacher": "稲垣",
            "place": "テクノセンタ",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95002&year=2014"
          }},
          { "5 6": null },
          { "7 8": null },
          { "9 10": null }
        ],
        "Thu": [
          { "1 2": {
            "name": "上級英語表現",
            "teacher": "水口",
            "place": "S21",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=90014&year=2014"
          }},
          { "3 4": {
            "name": "情報システム工学",
            "teacher": "吉岡",
            "place": "S21",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=92014&year=2014"
          }},
          { "5 8": {
            "name": "特別研究II",
            "teacher": "担当教員",
            "place": "",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95303&year=2014"
          }},
          { "9 10": null }
        ],
        "Fri": [
          { "1 2": {
            "name": "信頼性工学",
            "teacher": "中村裕",
            "place": "S21",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=92012&year=2014"
          }},
          { "3 4": {
            "name": "数理論理学",
            "teacher": "米澤",
            "place": "演習室2",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=95024&year=2014"
          }},
          { "5 6": null },
          { "7 8": null },
          { "9 10": null }
        ]
      },
      secondTimetable: {

      },
      mode: 'first'
    }
  },
  methods: {
    changeMode(m) {
      this.mode = m
      // console.log(this.mode)
    },
    isMode(m) {
      if (this.mode == m) return true
      else return false
    }
  }
}
</script>
