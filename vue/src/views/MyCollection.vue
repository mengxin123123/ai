<template>
  <sidebar-layout active-tab="collection">
    <div class="my-collection">
      <!-- 顶部标题区域 -->
      <div class="collection-header">
        <div class="logo-section">
        </div>
        <div class="page-title">
          <div class="title-icon">
            <svg t="1759227925795" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7643" width="68" height="68">
              <path d="M425.82016 40.96h394.1376A165.64224 165.64224 0 0 1 985.6 206.60224v496.5376A95.58016 95.58016 0 0 1 890.01984 798.72H425.82016a95.58016 95.58016 0 0 1-95.58016-95.58016V136.54016A95.58016 95.58016 0 0 1 425.82016 40.96z" fill="#AB78F6" p-id="7644" data-spm-anchor-id="a313x.search_index.0.i6.486f3a81cxnP2Z" class="selected"></path><path d="M215.04 163.84h430.08a163.84 163.84 0 0 1 163.84 163.84v491.52a163.84 163.84 0 0 1-163.84 163.84l-221.81888-79.32928L215.04 983.04A163.84 163.84 0 0 1 51.2 819.2V327.68a163.84 163.84 0 0 1 163.84-163.84z" fill="#AB78F6" p-id="7645" data-spm-anchor-id="a313x.search_index.0.i5.486f3a81cxnP2Z" class="selected"></path><path d="M473.1904 366.8992l10.5984 32.62464a45.33248 45.33248 0 0 0 43.1104 31.32416h34.29376a45.32224 45.32224 0 0 1 26.624 81.99168l-27.7504 20.16256A45.34272 45.34272 0 0 0 543.60064 583.68l10.5984 32.62464a45.32224 45.32224 0 0 1-69.74464 50.67776l-27.7504-20.16256a45.34272 45.34272 0 0 0-53.248 0l-27.7504 20.16256a45.32224 45.32224 0 0 1-69.74464-50.67776L316.55936 583.68a45.34272 45.34272 0 0 0-16.46592-50.67776l-27.7504-20.16256a45.32224 45.32224 0 0 1 26.624-81.99168h34.29376a45.33248 45.33248 0 0 0 43.1104-31.32416l10.5984-32.62464a45.33248 45.33248 0 0 1 86.2208 0z" fill="#FBFDFD" p-id="7646">

            </path>
            </svg>
          </div>
          <h1>精品收藏</h1>
        </div>
      </div>

      <!-- 分类导航 -->
      <div class="category-nav">
        <div class="nav-item" :class="{ active: activeCategory === '全部' }" @click="activeCategory = '全部'">全部</div>
        <div class="nav-item" :class="{ active: activeCategory === '日常助手' }" @click="activeCategory = '日常助手'">日常助手</div>
        <div class="nav-item" :class="{ active: activeCategory === '金融' }" @click="activeCategory = '金融'">金融</div>
        <div class="nav-item" :class="{ active: activeCategory === '电商' }" @click="activeCategory = '电商'">电商</div>
        <div class="nav-item" :class="{ active: activeCategory === '医疗' }" @click="activeCategory = '医疗'">医疗</div>
        <div class="nav-item" :class="{ active: activeCategory === '教育' }" @click="activeCategory = '教育'">教育</div>
        <div class="nav-item" :class="{ active: activeCategory === '品牌' }" @click="activeCategory = '品牌'">品牌</div>
        <div class="nav-item" :class="{ active: activeCategory === '新闻' }" @click="activeCategory = '新闻'">新闻</div>
      </div>

      <!-- 助手卡片网格 -->
      <div class="assistants-grid">
        <div v-for="assistant in assistants" :key="assistant.id" class="assistant-card" @click="openAssistant(assistant.id)">
          <div class="card-content" :style="{ 
            backgroundColor: '#f0f0f0', 
            backgroundImage: `url(${assistant.bgImage})`, 
            backgroundSize: '100% 100%', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat' 
          }">
            <div class="card-header">
              <img :src="assistant.icon" :alt="assistant.title">
              <h3>{{ assistant.title }}</h3>
            </div>
            <p class="card-description">{{ assistant.description.substring(0, 10) }}<br>{{ assistant.description.substring(10) }}</p>
            <button class="card-button" @click.stop="openAssistant(assistant.id)">
              <span v-html="assistant.buttonIcon" class="svg-icon"></span>
              {{ assistant.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </sidebar-layout>
</template>

<script>
import SidebarLayout from '@/components/SidebarLayout.vue'

export default {
  name: 'MyCollection',
  components: {
    SidebarLayout
  },
  data() {
    return {
      activeCategory: '全部',
      assistants: [
        {
          id: 1,
          title: '智能写作',
          description: '高效成文，精准润色，适配工学场景',
          buttonText: '开始写作',
          buttonIcon: '<svg t="1756280552843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="20" height="20"><path d="M972.146238 0.005962h-3.629346c-15.683959 0.907336-246.277047 15.683959-374.341111 93.714898-27.479334 16.850535-36.16384 49.12579-41.867098 104.602935a94.362995 94.362995 0 0 0-67.920617-31.627158 85.16001 85.16001 0 0 0-52.625517 18.924447c-47.051878 37.330416-207.391197 171.356977-277.256107 332.862872C68.698334 717.320267 82.826859 863.66068 83.474957 869.752797c0 1.555434 0.907336 2.981248 1.166575 4.536682-47.959214 61.439642-77.123602 104.732555-80.364089 109.398857a25.9239 25.9239 0 0 0 7.129073 35.515743A25.9239 25.9239 0 0 0 25.9239 1024a25.9239 25.9239 0 0 0 21.387217-11.406516c0-1.036956 27.479334-40.830142 72.716539-98.899677h1.685053A250.295251 250.295251 0 0 0 181.467298 920.304401c99.547775 0 305.902016-38.88585 570.325793-296.958271C987.570958 393.012282 1019.716594 99.294498 1023.086701 58.723595A47.829595 47.829595 0 0 0 1023.994038 51.853762a51.070082 51.070082 0 0 0-51.8478-51.8478zM716.406968 586.404573C461.575034 835.533249 267.405025 868.456602 181.467298 868.456602c-10.499179 0-18.794827 0-25.9239-1.166576 87.363542-107.195325 220.353147-251.202588 368.378615-349.972645a25.9239 25.9239 0 0 0-28.51629-42.644815c-145.173838 97.214624-272.200947 232.148522-361.89764 338.825369a795.215623 795.215623 0 0 1 67.531759-274.274859c64.809749-151.136335 221.001245-280.626214 262.220245-312.901469a33.182592 33.182592 0 0 1 20.998359-8.166029c45.237205 0 81.401045 108.750759 100.195872 108.75076h1.944293c16.202437-7.517931 9.591843-173.560508 34.349167-188.72599C741.034672 64.815712 972.146238 51.853762 972.146238 51.853762s-19.054066 303.180007-255.73927 534.550811z" fill="#5FC2DD" p-id="2327"></path></svg>',
          icon: require('@/views/photos/Assistant1.png'),
          bgImage: require('@/views/photos/Assistant13.png')
        },
        {
          id: 2,
          title: '智能代码',
          description: '生成调试优化全助力，学工开发高效准',
          buttonText: '上传需求',
          buttonIcon: '<svg t="1756281258023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4002" width="20" height="20"><path d="M826.656 661.856H662.4v165.056c0 54.912 26.56 103.392 67.648 133.376 27.328 19.968 60.032-10.208 96.64-10.208 90.976 0 101.312-55.424 121.856-123.168 9.6-31.68 33.792-64.8 17.088-90.432a164.96 164.96 0 0 0-138.976-74.624z" fill="#AFD7FB" p-id="4003"></path></svg>',
          icon: require('@/views/photos/Assistant2.png'),
          bgImage: require('@/views/photos/Assistant14.png')
        },
        {
          id: 3,
          title: 'PPT创作',
          description: '快速生成美化排版，适配工学演示全场景',
          buttonText: '开始创作',
          buttonIcon: '<svg t="1756281346639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6361" width="20" height="20"><path d="M856.533333 451.349333L572.117333 177.813333a49.706667 49.706667 0 0 0-35.541333-13.674666l-294.272 8.938666c-21.888 0.597333-40.490667 15.637333-44.842667 36.288l-154.24 698.026667c-2.197333 15.786667 2.176 32.085333 12.032 41.045333 9.536 7.189333 21.248 11.242667 33.365334 11.562667h9.301333l725.802667-148.330667c21.376-4.352 36.928-22.144 37.76-43.136l9.28-283.008c0.426667-12.8-4.736-25.173333-14.229334-34.176z" fill="#AB78F6" p-id="6362"></path></svg>',
          icon: require('@/views/photos/Assistant 3.png'),
          bgImage: require('@/views/photos/Assistant15.png')
        },
        {
          id: 4,
          title: '智能写作',
          description: '高效成文，精准润色，适配工学场景',
          buttonText: '开始写作',
          buttonIcon: '<svg t="1756280552843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="20" height="20"><path d="M972.146238 0.005962h-3.629346c-15.683959 0.907336-246.277047 15.683959-374.341111 93.714898-27.479334 16.850535-36.16384 49.12579-41.867098 104.602935a94.362995 94.362995 0 0 0-67.920617-31.627158 85.16001 85.16001 0 0 0-52.625517 18.924447c-47.051878 37.330416-207.391197 171.356977-277.256107 332.862872C68.698334 717.320267 82.826859 863.66068 83.474957 869.752797c0 1.555434 0.907336 2.981248 1.166575 4.536682-47.959214 61.439642-77.123602 104.732555-80.364089 109.398857a25.9239 25.9239 0 0 0 7.129073 35.515743A25.9239 25.9239 0 0 0 25.9239 1024a25.9239 25.9239 0 0 0 21.387217-11.406516c0-1.036956 27.479334-40.830142 72.716539-98.899677h1.685053A250.295251 250.295251 0 0 0 181.467298 920.304401c99.547775 0 305.902016-38.88585 570.325793-296.958271C987.570958 393.012282 1019.716594 99.294498 1023.086701 58.723595A47.829595 47.829595 0 0 0 1023.994038 51.853762a51.070082 51.070082 0 0 0-51.8478-51.8478zM716.406968 586.404573C461.575034 835.533249 267.405025 868.456602 181.467298 868.456602c-10.499179 0-18.794827 0-25.9239-1.166576 87.363542-107.195325 220.353147-251.202588 368.378615-349.972645a25.9239 25.9239 0 0 0-28.51629-42.644815c-145.173838 97.214624-272.200947 232.148522-361.89764 338.825369a795.215623 795.215623 0 0 1 67.531759-274.274859c64.809749-151.136335 221.001245-280.626214 262.220245-312.901469a33.182592 33.182592 0 0 1 20.998359-8.166029c45.237205 0 81.401045 108.750759 100.195872 108.75076h1.944293c16.202437-7.517931 9.591843-173.560508 34.349167-188.72599C741.034672 64.815712 972.146238 51.853762 972.146238 51.853762s-19.054066 303.180007-255.73927 534.550811z" fill="#5FC2DD" p-id="2327"></path></svg>',
          icon: require('@/views/photos/Assistant1.png'),
          bgImage: require('@/views/photos/Assistant13.png')
        },
        {
          id: 5,
          title: '智能代码',
          description: '生成调试优化全助力，学工开发高效准',
          buttonText: '上传需求',
          buttonIcon: '<svg t="1756281258023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4002" width="20" height="20"><path d="M826.656 661.856H662.4v165.056c0 54.912 26.56 103.392 67.648 133.376 27.328 19.968 60.032-10.208 96.64-10.208 90.976 0 101.312-55.424 121.856-123.168 9.6-31.68 33.792-64.8 17.088-90.432a164.96 164.96 0 0 0-138.976-74.624z" fill="#AFD7FB" p-id="4003"></path></svg>',
          icon: require('@/views/photos/Assistant2.png'),
          bgImage: require('@/views/photos/Assistant14.png')
        },
        {
          id: 6,
          title: 'PPT创作',
          description: '快速生成美化排版，适配工学演示全场景',
          buttonText: '开始创作',
          buttonIcon: '<svg t="1756281346639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6361" width="20" height="20"><path d="M856.533333 451.349333L572.117333 177.813333a49.706667 49.706667 0 0 0-35.541333-13.674666l-294.272 8.938666c-21.888 0.597333-40.490667 15.637333-44.842667 36.288l-154.24 698.026667c-2.197333 15.786667 2.176 32.085333 12.032 41.045333 9.536 7.189333 21.248 11.242667 33.365334 11.562667h9.301333l725.802667-148.330667c21.376-4.352 36.928-22.144 37.76-43.136l9.28-283.008c0.426667-12.8-4.736-25.173333-14.229334-34.176z" fill="#AB78F6" p-id="6362"></path></svg>',
          icon: require('@/views/photos/Assistant 3.png'),
          bgImage: require('@/views/photos/Assistant15.png')
        },
        {
          id: 7,
          title: '智能写作',
          description: '高效成文，精准润色，适配工学场景',
          buttonText: '开始写作',
          buttonIcon: '<svg t="1756280552843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="20" height="20"><path d="M972.146238 0.005962h-3.629346c-15.683959 0.907336-246.277047 15.683959-374.341111 93.714898-27.479334 16.850535-36.16384 49.12579-41.867098 104.602935a94.362995 94.362995 0 0 0-67.920617-31.627158 85.16001 85.16001 0 0 0-52.625517 18.924447c-47.051878 37.330416-207.391197 171.356977-277.256107 332.862872C68.698334 717.320267 82.826859 863.66068 83.474957 869.752797c0 1.555434 0.907336 2.981248 1.166575 4.536682-47.959214 61.439642-77.123602 104.732555-80.364089 109.398857a25.9239 25.9239 0 0 0 7.129073 35.515743A25.9239 25.9239 0 0 0 25.9239 1024a25.9239 25.9239 0 0 0 21.387217-11.406516c0-1.036956 27.479334-40.830142 72.716539-98.899677h1.685053A250.295251 250.295251 0 0 0 181.467298 920.304401c99.547775 0 305.902016-38.88585 570.325793-296.958271C987.570958 393.012282 1019.716594 99.294498 1023.086701 58.723595A47.829595 47.829595 0 0 0 1023.994038 51.853762a51.070082 51.070082 0 0 0-51.8478-51.8478zM716.406968 586.404573C461.575034 835.533249 267.405025 868.456602 181.467298 868.456602c-10.499179 0-18.794827 0-25.9239-1.166576 87.363542-107.195325 220.353147-251.202588 368.378615-349.972645a25.9239 25.9239 0 0 0-28.51629-42.644815c-145.173838 97.214624-272.200947 232.148522-361.89764 338.825369a795.215623 795.215623 0 0 1 67.531759-274.274859c64.809749-151.136335 221.001245-280.626214 262.220245-312.901469a33.182592 33.182592 0 0 1 20.998359-8.166029c45.237205 0 81.401045 108.750759 100.195872 108.75076h1.944293c16.202437-7.517931 9.591843-173.560508 34.349167-188.72599C741.034672 64.815712 972.146238 51.853762 972.146238 51.853762s-19.054066 303.180007-255.73927 534.550811z" fill="#5FC2DD" p-id="2327"></path></svg>',
          icon: require('@/views/photos/Assistant1.png'),
          bgImage: require('@/views/photos/Assistant13.png')
        },
        {
          id: 8,
          title: '智能代码',
          description: '生成调试优化全助力，学工开发高效准',
          buttonText: '上传需求',
          buttonIcon: '<svg t="1756281258023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4002" width="20" height="20"><path d="M826.656 661.856H662.4v165.056c0 54.912 26.56 103.392 67.648 133.376 27.328 19.968 60.032-10.208 96.64-10.208 90.976 0 101.312-55.424 121.856-123.168 9.6-31.68 33.792-64.8 17.088-90.432a164.96 164.96 0 0 0-138.976-74.624z" fill="#AFD7FB" p-id="4003"></path></svg>',
          icon: require('@/views/photos/Assistant2.png'),
          bgImage: require('@/views/photos/Assistant14.png')
        },
        {
          id: 9,
          title: 'PPT创作',
          description: '快速生成美化排版，适配工学演示全场景',
          buttonText: '开始创作',
          buttonIcon: '<svg t="1756281346639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6361" width="20" height="20"><path d="M856.533333 451.349333L572.117333 177.813333a49.706667 49.706667 0 0 0-35.541333-13.674666l-294.272 8.938666c-21.888 0.597333-40.490667 15.637333-44.842667 36.288l-154.24 698.026667c-2.197333 15.786667 2.176 32.085333 12.032 41.045333 9.536 7.189333 21.248 11.242667 33.365334 11.562667h9.301333l725.802667-148.330667c21.376-4.352 36.928-22.144 37.76-43.136l9.28-283.008c0.426667-12.8-4.736-25.173333-14.229334-34.176z" fill="#AB78F6" p-id="6362"></path></svg>',
          icon: require('@/views/photos/Assistant 3.png'),
          bgImage: require('@/views/photos/Assistant15.png')
        }
      ]
    }
  },
  methods: {
    openAssistant(id) {
      // 打开助手详情模态框
      this.$emit('open-assistant', id)
    }
  }
}
</script>

<style scoped>
.my-collection {
  min-height: 100vh;
  padding: 2rem;
}

/* 顶部标题区域 */
.collection-header {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2rem;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.brand-subtitle {
  font-size: 0.8rem;
  color: #6b7280;
  margin-top: -2px;
}

.page-title {
  display: flex;
  align-items: center;
  gap: 0rem;
  color: #1f2937;
  margin-left: -40px;
}

.page-title h1 {
  font-size: 46px;

  font-weight: 600;
  margin-left: 10px;
}

/* 分类导航 */
.category-nav {
  display: flex;
  gap: 0rem;
  margin-bottom: 3rem;
  background: transparent;
  padding: 0;
  border-radius: 0;
  width: 100%;
  border: none;
  border-bottom: 3px solid #e5e7eb;
  padding-bottom: 0;
}

.nav-item {
  padding: 1.2rem 2.5rem;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s;
  color: #9ca3af;
  font-weight: 400;
  font-size: 1.5rem;
  position: relative;
  border-bottom: 3px solid transparent;
  margin-bottom: -3px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

.nav-item:hover {
  color: #6b7280;
}

.nav-item:focus {
  outline: none;
}

.nav-item:active {
  outline: none;
  border-left: 0px solid #1f2937!important;
}

.nav-item.active {
  color: #9ca3af;
  font-weight: 400;
  border-bottom: 3px solid #1f2937;
  background: transparent;
  border-left: 0px solid #1f2937!important;
}

/* 助手卡片网格 */
.assistants-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 2rem;
  margin-bottom: 1rem;
  flex: 1;
  min-height: 50vh;
  padding: 0 0.5rem;
  position: relative;
  left: -0.6%;
}

.assistant-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0.8rem;
  overflow: hidden;
}

.assistant-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.card-content {
  border-radius: 0.8rem;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20vh;
  width: 100%;
  margin: 0 auto;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.card-header img {
  width: 4vw;
  height: 4vw;
  margin-right: 1rem;
  background-color: white;
  border-radius: 0.8rem;
  padding: 0.4rem;
}

.card-header h3 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.card-description {
  font-size: 1.56rem;
  color: #6b7280;
  line-height: 1.6;
  flex: 1;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4rem;
  white-space: normal;
  text-overflow: ellipsis;
  word-break: break-word;
}

.card-button {
  width: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  color: #7c3aed;
  border: 2px solid rgba(206, 206, 206, 1);
  border-radius: 1.8rem;
  padding: 0.9rem 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}

.card-button:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-1px);
}

.svg-icon {
  font-size: 1.625rem;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .assistants-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .assistants-grid {
    grid-template-columns: 1fr;
  }
  
  .my-collection {
    padding: 1rem;
  }
  
  .collection-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
