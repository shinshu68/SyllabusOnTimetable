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
            "name": "歴史学",         // 教科名
            "teacher": "京極",        // 教師名
            "place": "S22",           // 場所
            "concurrently": false,    // 並行開講かどうか
            "compulsory": true,	      // 必修かどうか
            "url": "subject_code=90015&year=2014"
          }},
          { "3 4": {
            "name": "解析力学",
            "teacher": "榎本",
            "place": "S22",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=91011&year=2014"
          }},
          { "5 6": {
            "name": "応用情報システム",
            "teacher": "藤原賢",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95028&year=2014"
          }},
          { "7 8": null },
          { "9 10": null }
        ],
        "Tue": [
          { "1 2": {
            "name": "生物化学",
            "teacher": "三浦",
            "place": "S22",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=91018&year=2014"
          }},
          { "3 4": {
            "name": "ソフトウェア工学",
            "teacher": "木村",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=95013&year=2014"
          }},
          { "5 6": null },
          { "7 8": null },
          { "9 10": null }
        ],
        "Wed": [
          { "1 8": {
            "name": "情報科学実験",
            "teacher": "稲垣",
            "place": "テクノセンタ",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95001&year=2013"
          }},
          { "9 10": null }
        ],
        "Thu": [
          { "1 2": {
            "name": "技術者倫理",
            "teacher": "北野",
            "place": "S22",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=90013&year=2014"
          }},
          { "3 8": {
            "name": "特別研究I",
            "teacher": "担当教員",
            "place": "",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95302&year=2014"
          }},
          { "9 10": null }
        ],
        "Fri": [
          { "1 2": {
            "name": "線形代数学",
            "teacher": "吉澤",
            "place": "S22",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=91012&year=2014"
          }},
          { "3 4": {
            "name": "総合英語I",
            "teacher": "市川",
            "place": "S22 MM2",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=90011&year=2014"
          }},
          { "5 6": {
            "name": "コンピュータシステム",
            "teacher": "稲垣",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=95011&year=2014"
          }},
          { "7 8": {
            "name": "論理回路設計",
            "teacher": "仲野",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95017&year=2014"
          }},
          { "9 10": null }
        ]
      },
      secondTimetable: {
        "Mon": [
          { "1 2": {
            "name": "日本の言葉と文化",         // 教科名
            "teacher": "玉田",        // 教師名
            "place": "S22",           // 場所
            "concurrently": false,    // 並行開講かどうか
            "compulsory": false,	      // 必修かどうか
            "url": "subject_code=90016&year=2014"
          }},
          { "3 4": {
            "name": "原子物理学",
            "teacher": "高村",
            "place": "S22",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=91022&year=2014"
          }},
          { "5 6": {
            "name": "ディジタル信号処理",
            "teacher": "安藤",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95012&year=2014"
          }},
          { "7 8": null },
          { "9 10": null }
        ],
        "Tue": [
          { "1 2": {
            "name": "都市地域解析論",
            "teacher": "佐藤雄",
            "place": "CAD室",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=92023&year=2014"
          }},
          { "3 4": {
            "name": "知識情報工学",
            "teacher": "早坂太",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95029&year=2014"
          }},
          { "5 6": {
            "name": "コンピュータアーキテクチャ応用",
            "teacher": "仲野",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95019&year=2014"
          }},
          { "7 8": {
            "name": "技術英語",
            "teacher": "平野学",
            "place": "情報教室(5)",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=90311&year=2014"
          }},
          { "9 10": null }
        ],
        "Wed": [
          { "1 8": {
            "name": "情報科学実験",
            "teacher": "稲垣",
            "place": "テクノセンタ",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95001&year=2013"
          }},
          { "9 10": null }
        ],
        "Thu": [
          { "1 2": {
            "name": "応用解析学I",
            "teacher": "勝谷",
            "place": "S22",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=91023&year=2014"
          }},
          { "3 6": {
            "name": "特別研究I",
            "teacher": "担当教員",
            "place": "",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95302&year=2014"
          }},
          { "7 10": null }
        ],
        "Fri": [
          { "1 2": {
            "name": "地域と産業",
            "teacher": "高橋",
            "place": "S22",
            "concurrently": false,
            "compulsory": false,
            "url": "subject_code=90018&year=2014"
          }},
          { "3 4": {
            "name": "離散数学",
            "teacher": "米澤",
            "place": "演習室2",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95030&year=2014"
          }},
          { "5 6": {
            "name": "特別研究I",
            "teacher": "担当教員",
            "place": "",
            "concurrently": false,
            "compulsory": true,
            "url": "subject_code=95302&year=2014"
          }},
          { "7 8": null},
          { "9 10": null }
        ]
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