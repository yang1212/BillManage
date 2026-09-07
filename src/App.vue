<template>
  <div id="app">
    <nav-bar v-if="!isHome" />
    <keep-alive>
      <router-view/>
    </keep-alive>
    <scroll-to-top />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ScrollToTop from './components/ScrollToTop.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ScrollToTop
  },
  data() {
    return {
      categoryGroups: [
        {
          id: 'learning',
          name: '听力素材',
          icon: 'fas fa-headphones-alt',
          isOpen: false,
          categories: [
            {
              id: 'vedio',
              name: '视频资源',
              description: '小红书账号-不和乔治玩的佩奇',
              icon: 'fas fa-play-circle'
            },
            {
              id: 'myVedio',
              name: '视频配套文档',
              description: '视频资源的文本整理，也可以打印',
              icon: 'fas fa-file-alt'
            },
            {
              id: 'source2',
              name: '打印文档',
              description: '已打印文档的记录',
              icon: 'fas fa-print'
            },
            {
              id: 'myVedio2',
              name: '其他文本整理',
              description: '小红书账号-Sahra每日学英语',
              icon: 'fas fa-align-left'
            }
          ]
        },
        {
          id: 'sentence',
          name: '高频造句集',
          icon: 'fas fa-pencil-alt',
          isOpen: false,
          categories: [
            {
              id: 'rendering',
              name: '造句翻译',
              description: '以“时态、句型、高频词”为核心，构造并整理数百条英语例句',
              icon: 'fas fa-language'
            }
          ]
        },
        {
          id: 'pronunciation',
          name: '发音',
          icon: 'fas fa-microphone-alt',
          isOpen: false,
          categories: [
            {
              id: 'pronunciation1',
              name: '英语趣配音',
              description: '看视频+跟读配音：选取美剧、动画、电影、演讲片段，进行角色扮演式配音',
              icon: 'fas fa-theater-masks'
            },
            {
              id: 'pronunciation2',
              name: '赖世雄音标课',
              description: '标准美式发音示范，逐音讲解纠正，帮助你掌握音标',
              icon: 'fas fa-volume-up'
            }
          ]
        }
      ]
    }
  },
  created() {
    // Share categoryGroups with all child components
    this.$root.$data.categoryGroups = this.categoryGroups;
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background: #f0f2f8;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media print {
  #app {
    background: white;
  }
}
</style>
