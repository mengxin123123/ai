<template>
  <sidebar-layout active-tab="assistant">
    <div class="content-wrapper">
    <div class="container">
      <!-- 页面头部 -->
      <header>
        <div class="header-title">
          <img src="@/views/photos/Assistant7.png" alt="Logo">
          <h1>你的<span class="highlight-text">工作学习</span>助手</h1>
        </div>
        <button class="discover-btn">
          <img src="@/views/photos/Assistant10.png" alt="Plus">
          发现更多智能体
        </button>
      </header>

      <!-- 功能卡片区域 -->
      <div class="function-cards">
        <div v-for="card in functionCards" :key="card.id" class="card" :style="{ backgroundColor: '#f0f0f0', backgroundImage: `url(${card.bgImage})`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }" @click="goToAssistantDetail(card.id)">
          <div class="card-header">
            <img :src="card.icon" :alt="card.title">
            <h3>{{ card.title }}</h3>
          </div>
          <p class="card-description">{{ card.description.substring(0, 10) }}<br>{{ card.description.substring(10) }}</p>
          <button class="card-button" @click.stop="goToAssistantDetail(card.id)">
            <span v-if="typeof card.buttonIcon === 'string' && !card.buttonIcon.includes('<svg')">{{ card.buttonIcon }}</span>
            <img v-else-if="typeof card.buttonIcon === 'string' && !card.buttonIcon.includes('<svg')" class="button-icon" :src="card.buttonIcon" alt="icon">
            <span v-else v-html="card.buttonIcon" class="svg-icon"></span>
            {{ card.buttonText }}
          </button>
        </div>
      </div>

      <!-- 融资助手区域 -->
      <div class="finance-assistant">
        <div class="finance-title">
          <img src="@/views/photos/Assistant8.png" alt="Finance">
          <h2>你的<span class="highlight-text">高效融资</span>助手</h2>
        </div>
        <div class="finance-card" :style="{ backgroundColor: '#f0f0f0', backgroundImage: `url(${require('@/views/photos/Assistant16.png')})`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }" @click="goToAssistantDetail('finance')">
          <div class="card-header">
            <img src="../views/photos/Assistant 4.png" alt="智股明晰">
            <h3>智股明晰</h3>
          </div>
          <p class="card-description">AI智能析股精准，<br>洞察行情决策更明</p>
          <button class="card-button" @click.stop="goToAssistantDetail('finance')">
            <span v-html="'<svg t=&quot;1756281527767&quot; class=&quot;icon&quot; viewBox=&quot;0 0 1024 1024&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; p-id=&quot;9221&quot; width=&quot;35&quot; height=&quot;35&quot;><path d=&quot;M426.573 236.76a47.75 47.75 0 0 1 4.468 14.78l12.485 186.106 6.197 93.54a96.404 96.404 0 0 0 4.468 28.364c7.485 17.825 25.491 29.154 45.082 28.364l298.515-19.575c12.927-0.213 25.41 4.633 34.702 13.474 7.744 7.368 12.744 17.006 14.319 27.372l0.529 6.294c-12.353 171.486-137.983 314.518-308.682 351.44-170.698 36.922-345.742-41.074-430.093-191.642-24.318-43.744-39.507-91.825-44.676-141.42a271.206 271.206 0 0 1-2.843-44.345C60.777 405.66 191.372 246.714 374.18 208.396c22.003-3.435 43.572 8.242 52.393 28.364z m-54.197 33.42l-4.347 1.134c-144.05 38.564-245.379 166.38-247.181 313.643l-0.023 5.05-0.01 0.582a211.374 211.374 0 0 0 1.844 31.92l0.371 2.643 0.184 1.249 0.13 1.255a309.884 309.884 0 0 0 37.368 118.386c71.462 127.56 220.171 193.822 365.31 162.428 137.65-29.774 240.523-140.55 259.413-275.747l0.485-3.678-283.488 18.59-0.752 0.30c-43.957 1.773-84.59-23.497-102.081-63.731l-0.523-1.224-1.066-2.538-0.828-2.626a156.238 156.238 0 0 1-7.158-41.896l-0.054-2.08-6.09-91.92-11.504-171.47zM546.754 79.008l0.94 0.03C753.616 84.268 926.686 232.126 960 431.278l-0.318 1.47-0.91 2.137 0.128 5.866c-0.472 7.772-3.477 15.25-8.656 21.29-5.394 6.291-12.764 10.576-20.88 12.239l-4.95 0.678-346.86 22.44c-11.538 1.137-23.025-2.578-31.606-10.22-7.15-6.368-11.72-14.964-13.012-24.227l-23.282-345.845a5.502 5.502 0 0 1 0-3.606c0.318-9.533 4.52-18.544 11.669-25.02 6.917-6.267 16.035-9.654 25.431-9.473z m24.374 61.27l19.949 296.32 305.02-19.734-0.23-0.982C859.551 266.357 729.538 155.32 572.574 140.404l-1.447-0.127z&quot; fill=&quot;#8CADF4&quot; p-id=&quot;9222&quot;></path></svg>'" class="svg-icon"></span>
            股票分析
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 助手详情模态框 -->
  <assistant-modal 
    :visible="modalVisible" 
    :assistant-id="selectedAssistantId"
    @close="closeModal"
    @switch-assistant="switchAssistant"
  />
  </sidebar-layout>
</template>

<script>
import SidebarLayout from '@/components/SidebarLayout.vue'
import AssistantModal from '@/components/AssistantModal.vue'

export default {
  name: 'Assistant',
  data() {
    return {
      modalVisible: false,
      selectedAssistantId: '1',
      functionCards: [
        {
          id: 1,
          title: '智能写作',
          description: '高效成文，精准润色，适配工学场景',
          buttonText: '开始写作',
          buttonIcon: '<svg t="1756280552843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="35" height="35"><path d="M972.146238 0.005962h-3.629346c-15.683959 0.907336-246.277047 15.683959-374.341111 93.714898-27.479334 16.850535-36.16384 49.12579-41.867098 104.602935a94.362995 94.362995 0 0 0-67.920617-31.627158 85.16001 85.16001 0 0 0-52.625517 18.924447c-47.051878 37.330416-207.391197 171.356977-277.256107 332.862872C68.698334 717.320267 82.826859 863.66068 83.474957 869.752797c0 1.555434 0.907336 2.981248 1.166575 4.536682-47.959214 61.439642-77.123602 104.732555-80.364089 109.398857a25.9239 25.9239 0 0 0 7.129073 35.515743A25.9239 25.9239 0 0 0 25.9239 1024a25.9239 25.9239 0 0 0 21.387217-11.406516c0-1.036956 27.479334-40.830142 72.716539-98.899677h1.685053A250.295251 250.295251 0 0 0 181.467298 920.304401c99.547775 0 305.902016-38.88585 570.325793-296.958271C987.570958 393.012282 1019.716594 99.294498 1023.086701 58.723595A47.829595 47.829595 0 0 0 1023.994038 51.853762a51.070082 51.070082 0 0 0-51.8478-51.8478zM716.406968 586.404573C461.575034 835.533249 267.405025 868.456602 181.467298 868.456602c-10.499179 0-18.794827 0-25.9239-1.166576 87.363542-107.195325 220.353147-251.202588 368.378615-349.972645a25.9239 25.9239 0 0 0-28.51629-42.644815c-145.173838 97.214624-272.200947 232.148522-361.89764 338.825369a795.215623 795.215623 0 0 1 67.531759-274.274859c64.809749-151.136335 221.001245-280.626214 262.220245-312.901469a33.182592 33.182592 0 0 1 20.998359-8.166029c45.237205 0 81.401045 108.750759 100.195872 108.75076h1.944293c16.202437-7.517931 9.591843-173.560508 34.349167-188.72599C741.034672 64.815712 972.146238 51.853762 972.146238 51.853762s-19.054066 303.180007-255.73927 534.550811z" fill="#5FC2DD" p-id="2327"></path></svg>',
          bgClass: 'card-blue',
          icon: require('@/views/photos/Assistant1.png'),
          bgImage: require('@/views/photos/Assistant13.png')
        },
        {
          id: 2,
          title: '智能代码',
          description: '生成调试优化全助力，学工开发高效准',
          buttonText: '上传需求',
          buttonIcon: '<svg t="1756281258023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4002" width="35" height="35"><path d="M826.656 661.856H662.4v165.056c0 54.912 26.56 103.392 67.648 133.376 27.328 19.968 60.032-10.208 96.64-10.208 90.976 0 101.312-55.424 121.856-123.168 9.6-31.68 33.792-64.8 17.088-90.432a164.96 164.96 0 0 0-138.976-74.624zM490.656 661.856h-165.312C233.824 661.856 160 735.36 160 825.856c0 63.168 35.2 117.824 87.136 145.6 23.264 12.448 28-23.68 56.32-23.68 91.616 0 146.784-30.496 146.784-121.92 26.944-53.12 40.416-92.992 40.416-119.552v-44.48zM826.656 160a164.864 164.864 0 0 0-165.312 165.088v165.056h52.032c25.056 0 57.184-9.792 96.384-29.44 91.936-0.736 118.24-50.272 147.36-135.616 12.32-36.032 21.888-73.664 0-101.664A164.96 164.96 0 0 0 826.656 160zM325.344 160A164.864 164.864 0 0 0 160 325.088a164.864 164.864 0 0 0 165.344 165.056h165.312v-164.512C489.92 233.856 416 160 325.344 160z" fill="#AFD7FB" p-id="4003"></path><path d="M534.4 533.856h228.256c126.944 0 229.344 101.216 229.344 228 0 124.192-97.248 225.92-220.512 230.016l-7.744 0.128a228.864 228.864 0 0 1-229.216-221.344l-0.128-7.744v-229.056z m-43.744 0v228a228.8 228.8 0 0 1-221.568 228.96l-7.744 0.128A228.864 228.864 0 0 1 32 761.856c0-123.168 98.24-223.84 221.6-227.872l7.744-0.128h229.312z m272 64H598.4v165.056A164.864 164.864 0 0 0 763.744 928C854.72 928 928 853.888 928 761.856c0-91.136-73.44-164-165.344-164z m-336 0H261.344C169.824 597.856 96 671.36 96 761.856a164.864 164.864 0 0 0 165.344 165.088 164.864 164.864 0 0 0 165.312-165.088v-164zM261.344 32c123.296 0 224.064 98.144 229.12 221.344l0.192 7.744v229.056H261.344A228.864 228.864 0 0 1 32 261.12a228.8 228.8 0 0 1 221.6-228.96L261.344 32z m501.312 0A228.864 228.864 0 0 1 992 261.088c0 123.136-98.24 223.808-221.6 228.864l-7.744 0.192h-229.312V261.12a228.8 228.8 0 0 1 221.568-228.96L762.656 32zM261.344 96A164.864 164.864 0 0 0 96 261.088a164.864 164.864 0 0 0 165.344 165.056h165.312V261.632C425.92 169.856 352 96 261.344 96z m501.312 0a164.864 164.864 0 0 0-165.312 165.088v165.056h164.8C854.048 425.376 928 351.52 928 261.12A164.864 164.864 0 0 0 762.656 96z" fill="#AFD7FB" p-id="4004"></path></svg>',
          bgClass: 'card-cyan',
          icon: require('@/views/photos/Assistant2.png'),
          bgImage: require('@/views/photos/Assistant14.png')
        },
        {
          id: 3,
          title: 'PPT创作',
          description: '快速生成美化排版，适配工学演示全场景',
          buttonText: '开始创作',
          buttonIcon: '<svg t="1756281346639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6361" width="35" height="35"><path d="M856.533333 451.349333L572.117333 177.813333a49.706667 49.706667 0 0 0-35.541333-13.674666l-294.272 8.938666c-21.888 0.597333-40.490667 15.637333-44.842667 36.288l-154.24 698.026667c-2.197333 15.786667 2.176 32.085333 12.032 41.045333 9.536 7.189333 21.248 11.242667 33.365334 11.562667h9.301333l725.802667-148.330667c21.376-4.352 36.928-22.144 37.76-43.136l9.28-283.008c0.426667-12.8-4.736-25.173333-14.229334-34.176z m-56.874666 298.773334L197.461333 861.632l342.933334-329.813333c21.333333-20.522667 32.277333-39.978667 10.944-60.48-21.333333-20.522667-41.557333-10.005333-62.890667 10.517333L145.493333 811.669333l115.968-581.781333 263.616-7.36 284.970667 274.048-10.389333 253.546667z m111.04-358.741334L642.688 133.632c-19.157333-18.410667-30.08-40.512-10.944-58.389333 19.136-17.898667 47.573333-13.162667 66.176 5.248l268.010667 257.749333c19.136 18.410667 21.888 43.669333 0 58.389333-19.136 13.162667-39.381333 8.96-55.253334-5.248z" fill="#AB78F6" p-id="6362"></path></svg>',
          bgClass: 'card-purple',
          icon: require('@/views/photos/Assistant 3.png'),
          bgImage: require('@/views/photos/Assistant15.png')
        },
        {
          id: 4,
          title: '智能写作',
          description: '高效成文，精准润色，适配工学场景',
          buttonText: '开始写作',
          buttonIcon: '<svg t="1756280552843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="35" height="35"><path d="M972.146238 0.005962h-3.629346c-15.683959 0.907336-246.277047 15.683959-374.341111 93.714898-27.479334 16.850535-36.16384 49.12579-41.867098 104.602935a94.362995 94.362995 0 0 0-67.920617-31.627158 85.16001 85.16001 0 0 0-52.625517 18.924447c-47.051878 37.330416-207.391197 171.356977-277.256107 332.862872C68.698334 717.320267 82.826859 863.66068 83.474957 869.752797c0 1.555434 0.907336 2.981248 1.166575 4.536682-47.959214 61.439642-77.123602 104.732555-80.364089 109.398857a25.9239 25.9239 0 0 0 7.129073 35.515743A25.9239 25.9239 0 0 0 25.9239 1024a25.9239 25.9239 0 0 0 21.387217-11.406516c0-1.036956 27.479334-40.830142 72.716539-98.899677h1.685053A250.295251 250.295251 0 0 0 181.467298 920.304401c99.547775 0 305.902016-38.88585 570.325793-296.958271C987.570958 393.012282 1019.716594 99.294498 1023.086701 58.723595A47.829595 47.829595 0 0 0 1023.994038 51.853762a51.070082 51.070082 0 0 0-51.8478-51.8478zM716.406968 586.404573C461.575034 835.533249 267.405025 868.456602 181.467298 868.456602c-10.499179 0-18.794827 0-25.9239-1.166576 87.363542-107.195325 220.353147-251.202588 368.378615-349.972645a25.9239 25.9239 0 0 0-28.51629-42.644815c-145.173838 97.214624-272.200947 232.148522-361.89764 338.825369a795.215623 795.215623 0 0 1 67.531759-274.274859c64.809749-151.136335 221.001245-280.626214 262.220245-312.901469a33.182592 33.182592 0 0 1 20.998359-8.166029c45.237205 0 81.401045 108.750759 100.195872 108.75076h1.944293c16.202437-7.517931 9.591843-173.560508 34.349167-188.72599C741.034672 64.815712 972.146238 51.853762 972.146238 51.853762s-19.054066 303.180007-255.73927 534.550811z" fill="#5FC2DD" p-id="2327"></path></svg>',
          bgClass: 'card-blue',
          icon: require('@/views/photos/Assistant1.png'),
          bgImage: require('@/views/photos/Assistant13.png')
        },
        {
          id: 5,
          title: '智能代码',
          description: '生成调试优化全助力，学工开发高效准',
          buttonText: '上传需求',
          buttonIcon: '<svg t="1756281258023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4002" width="35" height="35"><path d="M826.656 661.856H662.4v165.056c0 54.912 26.56 103.392 67.648 133.376 27.328 19.968 60.032-10.208 96.64-10.208 90.976 0 101.312-55.424 121.856-123.168 9.6-31.68 33.792-64.8 17.088-90.432a164.96 164.96 0 0 0-138.976-74.624zM490.656 661.856h-165.312C233.824 661.856 160 735.36 160 825.856c0 63.168 35.2 117.824 87.136 145.6 23.264 12.448 28-23.68 56.32-23.68 91.616 0 146.784-30.496 146.784-121.92 26.944-53.12 40.416-92.992 40.416-119.552v-44.48zM826.656 160a164.864 164.864 0 0 0-165.312 165.088v165.056h52.032c25.056 0 57.184-9.792 96.384-29.44 91.936-0.736 118.24-50.272 147.36-135.616 12.32-36.032 21.888-73.664 0-101.664A164.96 164.96 0 0 0 826.656 160zM325.344 160A164.864 164.864 0 0 0 160 325.088a164.864 164.864 0 0 0 165.344 165.056h165.312v-164.512C489.92 233.856 416 160 325.344 160z" fill="#AFD7FB" p-id="4003"></path><path d="M534.4 533.856h228.256c126.944 0 229.344 101.216 229.344 228 0 124.192-97.248 225.92-220.512 230.016l-7.744 0.128a228.864 228.864 0 0 1-229.216-221.344l-0.128-7.744v-229.056z m-43.744 0v228a228.8 228.8 0 0 1-221.568 228.96l-7.744 0.128A228.864 228.864 0 0 1 32 761.856c0-123.168 98.24-223.84 221.6-227.872l7.744-0.128h229.312z m272 64H598.4v165.056A164.864 164.864 0 0 0 763.744 928C854.72 928 928 853.888 928 761.856c0-91.136-73.44-164-165.344-164z m-336 0H261.344C169.824 597.856 96 671.36 96 761.856a164.864 164.864 0 0 0 165.344 165.088 164.864 164.864 0 0 0 165.312-165.088v-164zM261.344 32c123.296 0 224.064 98.144 229.12 221.344l0.192 7.744v229.056H261.344A228.864 228.864 0 0 1 32 261.12a228.8 228.8 0 0 1 221.6-228.96L261.344 32z m501.312 0A228.864 228.864 0 0 1 992 261.088c0 123.136-98.24 223.808-221.6 228.864l-7.744 0.192h-229.312V261.12a228.8 228.8 0 0 1 221.568-228.96L762.656 32zM261.344 96A164.864 164.864 0 0 0 96 261.088a164.864 164.864 0 0 0 165.344 165.056h165.312V261.632C425.92 169.856 352 96 261.344 96z m501.312 0a164.864 164.864 0 0 0-165.312 165.088v165.056h164.8C854.048 425.376 928 351.52 928 261.12A164.864 164.864 0 0 0 762.656 96z" fill="#AFD7FB" p-id="4004"></path></svg>',
          bgClass: 'card-cyan',
          icon: require('@/views/photos/Assistant2.png'),
          bgImage: require('@/views/photos/Assistant14.png')
        },
        {
          id: 6,
          title: 'PPT创作',
          description: '快速生成美化排版，适配工学演示全场景',
          buttonText: '开始创作',
          buttonIcon: '<svg t="1756281346639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6361" width="35" height="35"><path d="M856.533333 451.349333L572.117333 177.813333a49.706667 49.706667 0 0 0-35.541333-13.674666l-294.272 8.938666c-21.888 0.597333-40.490667 15.637333-44.842667 36.288l-154.24 698.026667c-2.197333 15.786667 2.176 32.085333 12.032 41.045333 9.536 7.189333 21.248 11.242667 33.365334 11.562667h9.301333l725.802667-148.330667c21.376-4.352 36.928-22.144 37.76-43.136l9.28-283.008c0.426667-12.8-4.736-25.173333-14.229334-34.176z m-56.874666 298.773334L197.461333 861.632l342.933334-329.813333c21.333333-20.522667 32.277333-39.978667 10.944-60.48-21.333333-20.522667-41.557333-10.005333-62.890667 10.517333L145.493333 811.669333l115.968-581.781333 263.616-7.36 284.970667 274.048-10.389333 253.546667z m111.04-358.741334L642.688 133.632c-19.157333-18.410667-30.08-40.512-10.944-58.389333 19.136-17.898667 47.573333-13.162667 66.176 5.248l268.010667 257.749333c19.136 18.410667 21.888 43.669333 0 58.389333-19.136 13.162667-39.381333 8.96-55.253334-5.248z" fill="#AB78F6" p-id="6362"></path></svg>',
          bgClass: 'card-purple',
          icon: require('@/views/photos/Assistant 3.png'),
          bgImage: require('@/views/photos/Assistant15.png')
        }
      ]
    };
  },
  components: {
    SidebarLayout,
    AssistantModal
  },
  methods: {
    goToAssistantDetail(id) {
      this.selectedAssistantId = id
      this.modalVisible = true
    },
    closeModal() {
      this.modalVisible = false
    },
    switchAssistant(id) {
      this.selectedAssistantId = id
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  flex: 1;
  background-color: #F4F5FA;
  padding: 20px;
  border-radius: 20px;
  overflow-y: auto;
  min-height: calc(100vh - 120px);
}

.container {
  max-width: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
}

.header-title {
  display: flex;
  align-items: center;
}

.header-title img {
  width: 3.5vw;
  height: 3.5vw;
  margin-right: 1rem;
}

.header-title h1 {
  font-size: 2.25rem;
  font-weight: 600;
  color: #1f2937;
}

.discover-btn {
  background-color: rgba(236, 218, 240, 1);
  color:rgba(151, 78, 250, 1);
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.discover-btn:hover {
  background-color: #6d28d9;
}

.discover-btn img {
  width: 2vw;
  height: 2vw;
  margin-right: 0.8rem;
}

.function-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 3rem;
  row-gap: 2rem;
  margin-bottom: 1rem;
  flex: 1;
  min-height: 50vh;
  padding: 0 0.5rem;
  position: relative;
  left: -0.6%;
}

.card {
  border-radius: 0.8rem;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20vh;
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.card-blue {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
}

.card-cyan {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
}

.card-purple {
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
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

.card-button span {
  font-size: 1.625rem;
  margin-right: 8px;
}

.card-button .svg-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
}

.card-button .svg-icon svg {
  width: 1.625rem;
  height: 1.625rem;
}

.card-button:hover {
  background-color: #f5f3ff;
}

.finance-assistant {
  margin-top: 1rem;
}

.finance-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.finance-title img {
  width: 3.5vw;
  height: 3.5vw;
  margin-right: 1rem;
  border-radius: 0.8rem;
}

.finance-title h2 {
  font-size: 2.25rem;
  font-weight: 600;
  color: #1f2937;
}

.finance-card {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 0.8rem;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 18vh;
  width: 32%!important;
  max-width: 40%;
  margin-top: 2rem;
  cursor: pointer;
}

.finance-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.finance-card .card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.finance-card .card-header img {
  width: 4vw;
  height: 4vw;
  margin-right: 1rem;
  background-color: white;
  border-radius: 0.8rem;
  padding: 0.4rem;
}

.finance-card .card-header h3 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
}

.finance-card .card-description {
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

.finance-card .card-button {
  width: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  color: #4299e1;
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

.finance-card .card-button:hover {
  background-color: #f5f3ff;
}

.header-title .highlight-text {
  color: #7c3aed;
  font-weight: 700;
}

.finance-title .highlight-text {
  color: rgba(170, 213, 251, 1);
  font-weight: 700;
}
</style>