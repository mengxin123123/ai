<template>
  <div class="container" :style="{height: containerHeight + 'px'}">
    <!-- 顶部导航栏 -->
    <el-header class="top-nav" style="height: 80px">
      <div class="nav-left">
      </div>
      <div class="nav-right">
        <el-button link style="font-size: 20px;border-style: none;position:absolute;top: 25px;right: 233px">商店</el-button>
        <el-button link style="font-size: 20px;border-style: none;position:absolute;top: 25px;right: 120px">客服中心</el-button>
        <el-button @click="toggleNav" style="position: absolute;left: 200px;top: 25px;border-style: none">
          <!-- 折叠状态图标 -->


            <svg v-if="isCollapsed" t="1744794400953" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5214" width="32" height="32">
              <path d="M867.1 141.17H156.08c-17.67 0-32 14.33-32 32s14.33 32 32 32H867.1c17.67 0 32-14.33 32-32s-14.33-32-32-32zM867.92 367.52H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 573.87H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 800.22H156.9c-17.67 0-32 14.33-32 32s14.33 32 32 32h711.02c17.67 0 32-14.33 32-32 0-17.68-14.32-32-32-32zM312.01 367.52v270.35L137.47 489.71z" p-id="5215">

              </path>
            </svg>


          <!-- 展开状态图标（假设另一个 SVG，此处仅为示例） -->


            <svg v-else t="1744794578522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5682" width="32" height="32">
              <path d="M867.1 141.17H156.08c-17.67 0-32 14.33-32 32s14.33 32 32 32H867.1c17.67 0 32-14.33 32-32s-14.33-32-32-32zM867.92 367.52H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 573.87H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 800.22H156.9c-17.67 0-32 14.33-32 32s14.33 32 32 32h711.02c17.67 0 32-14.33 32-32 0-17.68-14.32-32-32-32zM137.47 637.87V367.52l174.54 148.15z" p-id="5683">
              </path>
            </svg>

        </el-button>
        <div class="nav-item" @mouseenter="showPanel = true" @mouseleave="showPanel = false" style="position:absolute;left:260px;font-size: 20px;top: 30px">
          AI工具集 <i class="el-icon-arrow-down"></i>
        </div>

          <!-- 未登录状态 -->
          <div v-if="!isLoggedIn" class="guest-mode" style="position: absolute;top: 16px;right: 0px;width: 130px">
            <div class="login-btn" @click="navigateTo('/login')">
              <span class="icon-user"></span>
              <span style="font-size: 20px">登录/注册</span>
            </div>
          </div>
          <!-- 已登录状态 -->
          <div v-else class="user-info" @mouseenter="showMenu" @mouseleave="hideMenu">
            <img :src="userInfo.avatar" class="user-avatar" alt="用户头像">
            <span class="username">{{ userInfo.name }}</span>

            <!-- 下拉菜单 -->
            <transition name="menu-slide">
              <div v-show="menuVisible" class="user-menu">
                <div class="menu-header">
                  <img :src="userInfo.avatar" class="menu-avatar">
                  <div class="user-details">
                    <p class="user-name">{{ userInfo.name }}</p>
                    <p class="user-email">{{ userInfo.email }}</p>
                  </div>
                </div>
                <div class="menu-item" @click="navigateTomenu1('/profile')">
                  <span class="icon-profile"></span>个人中心
                </div>
                <div class="menu-item" @click="navigateTomenu1('/settings')">
                  <span class="icon-settings"></span>账号设置
                </div>
                <div class="menu-divider"></div>
                <div class="menu-item logout" @click="handleLogout">
                  <span class="icon-logout"></span>退出登录
                </div>
              </div>
            </transition>
          </div>

      </div>
    </el-header>
    <!-- 下拉面板 -->
    <transition name="fade" >
      <div v-show="showPanel" class="tool-panel"
           @mouseenter="showPanel = true"
           @mouseleave="showPanel = false">
        <div class="panel-grid">
          <!-- 左侧功能分区 -->
          <div class="panel-column">
            <section class="category">
              <h3>大众推荐</h3>
              <div v-for="tool in popularTools" :key="tool.id" class="tool-card">
                {{ tool.name }}
                <el-tag v-if="tool.certified" type="success" size="mini">iW认证</el-tag>
              </div>
            </section>
          </div>

          <!-- 中部搜索区 -->
          <div class="panel-column">
            <el-input
                v-model="searchQuery"
                placeholder="请输入工具名称"
                class="search-box">
              <i slot="prefix" class="el-icon-search"></i>
            </el-input>

            <div class="quick-tags">
              <el-tag
                  v-for="tag in quickTags"
                  :key="tag"
                  :type="tagTypes[tag]"
                  @click="filterByTag(tag)">
                {{ tag }}
              </el-tag>
            </div>
          </div>

          <!-- 右侧扩展区 -->
          <div class="panel-column">
            <el-carousel indicator-position="none" height="120px">
              <el-carousel-item v-for="item in carouselItems" :key="item.id">
                <div class="carousel-card">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.content }}</p>
                </div>
              </el-carousel-item>
            </el-carousel>

            <el-button type="primary" class="more-btn" @click="navigateTo('/tools')">
              更多工具 <i class="el-icon-arrow-right"></i>
            </el-button>
          </div>
        </div>

        <!-- 企业服务入口 -->
        <div class="enterprise-service">
          <el-button type="text" @click="navigateTo('/enterprise')">申请定制企业服务</el-button>
        </div>
      </div>
    </transition>
    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 左侧导航 -->
      <el-aside :width="isCollapsed ? '64px' : '233px'" class="side-nav">
        <div class="nav-category" v-for="(nav, index) in navItems" :key="index"
             :class="{active: activeNav === index}"
             @click="scrollToSection(index)" style="font-size: 30px;margin-bottom: 40px;position: relative;top: 10px">
          <span v-html="nav.svg" style="position: relative;left: -10px"></span>
          <span style="position: relative;top: -5px">{{ nav.title }}</span>
        </div>
      </el-aside>

      <!-- 右侧内容区 -->
      <el-main class="content-area">
        <!-- 顶部导航选项卡 -->
        <div class="a" style="margin-left: -30px;margin-right: -30px">
        <div class="nav-tabs" style="position: relative;top: 0px">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="background-color:rgba(123,235,458,0);position:relative;width: 800px ;height: 60px;left: 55%;transform: translateX(-55%)">
            <el-menu-item index="1" class="menu-item" style="height: 70px;font-size: 40px">站内</el-menu-item>
            <el-menu-item index="2" class="menu-item" style="height: 70px;font-size: 40px">常用</el-menu-item>
            <el-menu-item index="3" class="menu-item" style="height: 70px;font-size: 40px">搜索</el-menu-item>
            <el-menu-item index="4" class="menu-item" style="height: 70px;font-size: 40px">工具</el-menu-item>

          </el-menu>
        </div>

        <!-- 搜索区域 -->
          <div class="custom-search" style="--main-color: rgba(238, 227, 180, 1); --active-color: rgba(238, 227, 180, 1);; --icon-color: #333;position: relative;left: 50%;transform: translateX(-50%)" >
            <div class="search-wrapper" style="width: 1200px;height: 80px">
              <input type="text" placeholder="Search..." class="search-input" v-model="searchText" style="width: 400px;font-size: 30px">
              <button class="search-button">
                <svg class="search-icon" viewBox="0 0 24 24" style="width: 40px;height: 40px;position: relative;left: 490px">
                  <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.494 4.494 0 0 1 9.5 14z"/>
                </svg>
              </button>
            </div>
          </div>
          <!-- 快捷入口 -->
          <div class="quick-access" style="font-size: 30px;background-color:rgba(43242,23,4234,0);position: relative;left: 1000px;">
            <el-tag
                v-for="(item, index) in quickLinks"
                :key="index"
                class="access-tag"
                @click="handleQuickAccess(item)"
                style="font-size: 30px;background-color:rgba(213,2313,2312,0);color: #333333;margin-right: 100px;position: relative;border-style: none"
            >
              {{ item }}
            </el-tag>
          </div>
          <div class="card-grid" style="gap: 100px;position: relative;display: flex;justify-content: center">
        <div
            v-for="(card, index) in cardListforexample"
            :key="index"
            class="ai-card"
            @click="navigateTo(card.path)"
            style="width: 1200px;height: 600px"
        >
          <!-- 图片区域 -->
          <div class="image-area" style="height: 453px">
            <img
                v-if="card.image"
                :src="card.image"
                class="card-image"
            >
            <div v-else class="image-placeholder"></div>
          </div>

          <!-- 文字区域 -->
          <div class="text-area">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-content">{{ card.content }}</p>
          </div>
        </div>
        </div>
        </div>
        <!-- 快捷入口 -->


        <!-- 当前分类 -->

        <!-- 内容区块 -->
        <section
            v-for="(section, index) in contentSections"
            :key="index"
            :ref="`section-${index}`"
            class="content-section">
          <div class="section-header">
            <h2 class="section-title" style=" font-size:30px">{{ section.title }}</h2>
            <el-button type="text" class="more-btn"style="font-size:20px">更多 +</el-button>
          </div>
          <div class="card-grid">
            <el-card
                v-for="(card, i) in section.cards"
                :key="i"
                class="card-item"
                shadow="hover"@click="navigateTo(card.path)">
              <div class="image-area">
                <img
                    v-if="card.image"
                    :src="card.image"
                    class="card-image"
                >
                <div v-else class="image-placeholder"></div>
              </div>

              <!-- 文字区域 -->
              <div class="text-area">
                <h3 class="card-title">{{ card.title }}</h3>
                <span class="card-text">{{ card.content }}</span>
                <el-tag v-if="card.hot" type="danger" size="mini">热门</el-tag>
              </div>
<!--              &lt;!&ndash; 图片容器 &ndash;&gt;-->
<!--              <div class="image-container">-->
<!--                <img-->
<!--                    :src="card.image"-->
<!--                    class="carousel-image"-->
<!--                    alt="AI功能展示"-->
<!--                >-->
<!--                &lt;!&ndash; 文字蒙层 &ndash;&gt;-->
<!--                <div class="text-overlay">-->
<!--                  <h3 class="title">{{ card.title }}</h3>-->
<!--                  <p class="subtitle">{{ card.subtitle }}</p>-->
<!--                </div>-->
<!--              </div>-->

            </el-card>
          </div>
        </section>
      </el-main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exhibitpage",
  data() {
    return {
      containerHeight: window.innerHeight,
      containerWidth: window.innerWidth,
      activeIndex: '1',
      isCollapsed: false,
      showPanel: false,
      searchQuery: '',
      selectedTag: null,
      tools: [
        { id: 1, name: 'AI写作工具', category: 'writing', certified: true, usageCount: 1500 },
        { id: 2, name: '法律助手', category: 'legal', usageCount: 1200 }
      ],
      quickTags: ['#办公增效', '#创意设计', '#开发工具'],
      tagTypes: {
        '#办公增效': 'primary',
        '#创意设计': 'warning',
        '#开发工具': 'success'
      },
      carouselItems: [
        { id: 1, title: 'AI工具周榜', content: '本周最受欢迎工具TOP10' },
        { id: 2, title: '新品速递', content: '最新上线AI工具推荐' }
      ],
      activeNav: 0,
      isLoggedIn: false,
      userInfo: {
        name: '加载中...',
        email: '',
        avatar: require('./photos/屏幕截图 2025-04-15 181132.png')
      },
      menuVisible: false,
      menuTimeout: null,
      activeTab: '站内',
      searchText: '',
      currentCategory: 'AI工具',
      quickLinks: ['AI店铺', '法律助手', 'AI筛选', '提现中心'],
      contentSections: [
        {
          title: '站内运营',
          cards: [
            { title: '智能写作', content: '自动生成高质量文档', hot: true ,image: require('D:\\vue\\代码\\first1\\vue\\src\\views\\photos\\图片 3.jpeg')},
            { title: '数据分析', content: '多维度数据可视化分析' },
            { title: '图像处理', content: 'AI智能图像增强' },
            { title: '语音合成', content: '自然语音生成引擎' }
          ]
        },
        {
          title: '大众推荐',
          cards: [
            { title: '法律文书', content: '智能法律文书生成' },
            { title: '合同审查', content: '合同风险自动检测', hot: true },
            { title: '财务分析', content: '企业财务健康诊断' },
            { title: '营销文案', content: '智能营销文案生成' }
          ]
        },
        {
          title: 'AI写作工具',
          cards: [
            { title: '法律文书', content: '智能法律文书生成' },
            { title: '合同审查', content: '合同风险自动检测', hot: true },
            { title: '财务分析', content: '企业财务健康诊断' },
            { title: '营销文案', content: '智能营销文案生成' }
          ]
        },
        {
          title: 'AI图像工具',
          cards: [
            { title: '法律文书', content: '智能法律文书生成' },
            { title: '合同审查', content: '合同风险自动检测', hot: true },
            { title: '财务分析', content: '企业财务健康诊断' },
            { title: '营销文案', content: '智能营销文案生成' }
          ]
        },
        {
          title: 'AI对话聊天',
          cards: [
            { title: '法律文书', content: '智能法律文书生成' },
            { title: '合同审查', content: '合同风险自动检测', hot: true ,path:'/aaaa'},
            { title: '财务分析', content: '企业财务健康诊断' },
            { title: '营销文案', content: '智能营销文案生成' }
          ]
        },
        {
          title: 'AI法律助手',
          cards: [
            { title: '法律文书', content: '智能法律文书生成' },
            { title: '合同审查', content: '合同风险自动检测', hot: true },
            { title: '财务分析', content: '企业财务健康诊断' },
            { title: '营销文案', content: '智能营销文案生成' }
          ]
        },
        {
          title: 'AI音频工具',
          cards: [
            { title: '法律文书', content: '智能法律文书生成' },
            { title: '合同审查', content: '合同风险自动检测', hot: true },
            { title: '财务分析', content: '企业财务健康诊断' },
            { title: '营销文案', content: '智能营销文案生成' }
          ]
        }
      ],
      cardListforexample:[
        {
          title: '',
          content: '智能刀具匹配系统',
          image: require('D:\\vue\\代码\\first1\\vue\\src\\views\\photos\\图片 3.jpeg'),
          path: '/knife-ai'
        },
        {
          title: '',
          content: '智能赛事管理平台',
          image: require('D:\\vue\\代码\\first1\\vue\\src\\views\\photos\\图片 3.jpeg'),
          path: '/match-system'
        },
      ],
      navItems: [
        { title: '大众推荐\u00A0\u00A0\u00A0\u00A0' ,svg:'<svg t="1744703954855" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2332" width="32" height="32"><path d="M190.193225 471.411583c14.446014 0 26.139334-11.718903 26.139334-26.13831 0-14.44499-11.69332-26.164916-26.139334-26.164916-0.271176 0-0.490164 0.149403-0.73678 0.149403l-62.496379 0.146333c-1.425466-0.195451-2.90005-0.295735-4.373611-0.295735-19.677155 0-35.621289 16.141632-35.621289 36.114522L86.622358 888.550075c0 19.949354 15.96767 35.597753 35.670407 35.597753 1.916653 0 3.808746 0.292666 5.649674 0l61.022819 0.022513c0.099261 0 0.148379 0.048095 0.24764 0.048095 0.097214 0 0.146333-0.048095 0.24457-0.048095l0.73678 0 0-0.148379c13.413498-0.540306 24.174586-11.422144 24.174586-24.960485 0-13.55983-10.760065-24.441669-24.174586-24.981974l0-0.393973-50.949392 0 1.450025-402.275993L190.193225 471.409536z" fill="#5D5D5D" p-id="2333"></path><path d="M926.52241 433.948343c-19.283182-31.445176-47.339168-44.172035-81.289398-45.546336-1.77032-0.246617-3.536546-0.39295-5.380544-0.39295l-205.447139-0.688685c13.462616-39.059598 22.698978-85.58933 22.698978-129.317251 0-28.349675-3.193739-55.962569-9.041934-82.542948l-0.490164 0.049119c-10.638291-46.578852-51.736315-81.31498-100.966553-81.31498-57.264215 0-95.466282 48.15065-95.466282 106.126063 0 3.241834-0.294712 6.387477 0 9.532097-2.996241 108.386546-91.240027 195.548698-196.23636 207.513194l0 54.881958-0.785899 222.227314 0 229.744521 10.709923 0 500.025271 0.222057 8.746198-0.243547c19.35686 0.049119 30.239721-4.817726 47.803749-16.116049 16.682961-10.761088 29.236881-25.50079 37.490869-42.156122 2.260483-3.341095 4.028757-7.075139 5.106298-11.20111l77.018118-344.324116c1.056052-4.053316 1.348718-8.181333 1.056052-12.160971C943.643346 476.446249 938.781618 453.944769 926.52241 433.948343zM893.82573 486.837924l-82.983993 367.783411-0.099261-0.049119c-2.555196 6.141884-6.879688 11.596106-12.872169 15.427364-4.177136 2.727111-8.773827 4.351098-13.414521 4.964058-1.49812-0.195451-3.046383 0-4.620227 0l-477.028511-0.540306-0.171915-407.408897c89.323375-40.266076 154.841577-79.670527 188.596356-173.661202 0.072655 0.024559 0.124843 0.049119 0.195451 0.072655 2.99931-9.137101 6.313799-20.73423 8.697079-33.164331 5.551436-29.185716 5.258771-58.123792 5.258771-58.123792-4.937452-37.98001 25.940812-52.965306 44.364417-52.965306 25.304316 0.860601 50.263777 33.656541 50.263777 52.326762 0 0 5.600555 27.563776 5.649674 57.190537 0.048095 37.366026-4.6673 56.847729-4.6673 56.847729l-0.466628 0c-5.872754 30.879288-16.214287 60.138682-30.464849 86.964654l0.36839 0.342808c-2.358721 4.815679-3.709485 10.220782-3.709485 15.943111 0 19.922748 19.088754 21.742187 38.765909 21.742187l238.761895 0.270153c0 0 14.666024 0.465604 14.690584 0.465604l0 0.100284c12.132318-0.638543 24.221658 5.207605 31.100322 16.409738 5.504364 9.016351 6.437619 19.6045 3.486404 28.988218L893.82573 486.837924z" fill="#5D5D5D" p-id="2334"></path><path d="M264.827039 924.31872c0.319272 0.024559 0.441045 0.024559 0.295735-0.024559 0.243547-0.048095 0.367367-0.074701-0.295735-0.074701s-0.539282 0.026606-0.271176 0.074701C264.43409 924.343279 264.532327 924.343279 264.827039 924.31872z" fill="#5D5D5D" p-id="2335"></path></svg>'},
        { title: 'AI写作工具' ,svg:'<svg t="1744706014898" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5121" width="32" height="32"><path d="M1018.319924 112.117535q4.093748 9.210934 6.652341 21.492179t2.558593 25.585928-5.117186 26.609365-16.374994 25.585928q-12.281245 12.281245-22.003898 21.492179t-16.886712 16.374994q-8.187497 8.187497-15.351557 14.32812l-191.382739-191.382739q12.281245-11.257808 29.167958-27.121083t28.144521-25.074209q14.32812-11.257808 29.679676-15.863275t30.191395-4.093748 28.656239 4.605467 24.050772 9.210934q21.492179 11.257808 47.589826 39.402329t40.425766 58.847634zM221.062416 611.554845q6.140623-6.140623 28.656239-29.167958t56.289041-56.80076l74.710909-74.710909 82.898406-82.898406 220.038979-220.038979 191.382739 192.406177-220.038979 220.038979-81.874969 82.898406q-40.937484 39.914047-73.687472 73.175753t-54.242167 54.753885-25.585928 24.562491q-10.234371 9.210934-23.539054 19.445305t-27.632802 16.374994q-14.32812 7.16406-41.960921 17.398431t-57.824197 19.957024-57.312478 16.886712-40.425766 9.210934q-27.632802 3.070311-36.843736-8.187497t-5.117186-37.867173q2.046874-14.32812 9.722653-41.449203t16.374994-56.289041 16.886712-53.730448 13.304682-33.773425q6.140623-14.32812 13.816401-26.097646t22.003898-26.097646z" p-id="5122"></path></svg>'},
        { title: 'AI图像工具' ,svg:'<svg t="1744706054639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6543" width="32" height="32"><path d="M831.792397 82.404802 191.548594 82.404802c-60.676941 0-110.042255 49.364291-110.042255 110.042255l0 640.245849c0 60.677964 49.364291 110.042255 110.042255 110.042255l640.244826 0c60.677964 0 110.042255-49.364291 110.042255-110.042255L941.835675 192.447057C941.834652 131.769093 892.470361 82.404802 831.792397 82.404802zM191.548594 122.420167l640.244826 0c38.612413 0 70.02689 31.414477 70.02689 70.02689l0 134.349871c-144.759965 4.953825-280.06151 63.59234-382.864898 166.396751-48.28061 48.28061-86.814228 103.732549-114.628714 163.962306-80.588433-68.744687-197.638289-73.051783-282.803971-12.938684L121.522728 192.447057C121.521704 153.834644 152.935158 122.420167 191.548594 122.420167zM121.521704 832.691883l0-136.601144c74.040297-72.025407 192.529945-71.925123 266.451538 0.301875-23.496134 62.998823-35.762505 130.383536-35.762505 199.672622 0 2.336208 0.420579 4.569062 1.157359 6.652514L191.548594 902.717749C152.935158 902.718773 121.521704 871.304296 121.521704 832.691883zM831.792397 902.718773 391.068743 902.718773c0.735757-2.084475 1.157359-4.317329 1.157359-6.652514 0-141.581576 55.054897-274.608312 155.023726-374.578164 95.245248-95.245248 220.499973-149.720953 354.570481-154.655336l0 465.860147C901.819287 871.304296 870.40481 902.718773 831.792397 902.718773z" fill="#272636" p-id="6544"></path><path d="M349.471346 477.533001c75.04723 0 136.102794-61.054541 136.102794-136.101771s-61.055564-136.102794-136.102794-136.102794-136.102794 61.055564-136.102794 136.102794S274.424116 477.533001 349.471346 477.533001zM349.471346 245.343801c52.982702 0 96.087429 43.104727 96.087429 96.087429 0 52.982702-43.104727 96.087429-96.087429 96.087429-52.982702 0-96.087429-43.104727-96.087429-96.087429C253.383918 288.448528 296.488645 245.343801 349.471346 245.343801z" fill="#272636" p-id="6545"></path></svg>'},
        { title: 'AI对话聊天' ,svg:'<svg t="1744706086528" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7656" width="32" height="32"><path d="M511.2 127.2c176.8 0 320 143.2 320 320 0 149.6-106.4 281.6-252 312.8l-28 5.6-14.4 24.8-24.8 42.4-24-42.4-14.4-24.8-28-5.6c-147.2-30.4-254.4-162.4-254.4-313.6 0-176 143.2-319.2 320-319.2m0-64c-212 0-384 172-384 384 0 184.8 131.2 340 305.6 376l80 138.4 80-138.4C765.6 785.6 895.2 632 895.2 448c0-212.8-172-384.8-384-384.8zM320 384c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z m192 0c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z m192 0c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z" p-id="7657"></path></svg>'},
        { title: 'AI法律助手' ,svg:'<svg t="1744706185303" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9281" width="32" height="32"><path d="M945.5 223.7h-867c-8 0-14.4-6.5-14.4-14.4s6.5-14.4 14.4-14.4h867c8 0 14.4 6.5 14.4 14.4s-6.5 14.4-14.4 14.4zM670 908.6H354c-8 0-14.4-6.5-14.4-14.4 0-8 6.5-14.4 14.4-14.4h316c8 0 14.4 6.5 14.4 14.4 0.1 7.9-6.4 14.4-14.4 14.4z" fill="#4D4D4D" p-id="9282"></path><path d="M512 901.7c-8 0-14.4-6.5-14.4-14.4V129.8c0-8 6.5-14.4 14.4-14.4 8 0 14.4 6.5 14.4 14.4v757.4c0 8-6.4 14.5-14.4 14.5zM208.7 695.5c-72.8 0-132.5-54.6-139-127-0.6-6.8 1.7-13.6 6.4-18.7 4.8-5.2 11.6-8.3 18.7-8.3h227.7c7.1 0 13.9 3 18.7 8.3 4.7 5.1 7 11.9 6.4 18.7-6.4 72.4-66.1 127-138.9 127zM98.9 570.4c7.1 55.2 53.5 96.3 109.8 96.3s102.7-41.1 109.8-96.3H98.9z" fill="#4D4D4D" p-id="9283"></path><path d="M333.8 570.4c-5.9 0-11.4-3.6-13.6-9.5L208.7 253.3 97.1 560.9c-2.7 7.5-11 11.4-18.5 8.6-7.5-2.7-11.4-11-8.6-18.5l118.3-326c3.1-8.7 11.2-14.3 20.4-14.3s17.2 5.6 20.4 14.3l118.3 326c2.7 7.5-1.1 15.7-8.6 18.5-1.7 0.6-3.4 0.9-5 0.9zM820.4 695.5c-72.8 0-132.5-54.6-139-127-0.6-6.8 1.7-13.6 6.4-18.7 4.8-5.2 11.6-8.3 18.7-8.3h227.7c7.1 0 13.9 3 18.7 8.3 4.7 5.1 7 11.9 6.4 18.7-6.4 72.4-66.2 127-138.9 127zM710.6 570.4c7.1 55.2 53.5 96.3 109.8 96.3s102.7-41.1 109.8-96.3H710.6z" fill="#4D4D4D" p-id="9284"></path><path d="M945.5 570.4c-5.9 0-11.4-3.6-13.6-9.5L820.4 253.4 708.8 560.9c-2.7 7.5-11 11.4-18.5 8.6-7.5-2.7-11.4-11-8.6-18.5L800 225c3.1-8.7 11.1-14.3 20.4-14.3 9.2 0 17.2 5.6 20.4 14.3L959 551c2.7 7.5-1.1 15.7-8.6 18.5-1.6 0.6-3.3 0.9-4.9 0.9z" fill="#4D4D4D" p-id="9285"></path></svg>'},
        { title: 'AI音频工具' ,svg:'<svg t="1744706280047" class="icon" viewBox="0 0 1107 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10949" width="32" height="32"><path d="M478.291602 974.18932h150.92217v-50.086015h-150.92217v50.086015z m437.879063-202.557807a252.450119 252.450119 0 0 1-35.392273 2.767183 25.485757 25.485757 0 0 1-25.153695-25.181367V349.636082a25.043008 25.043008 0 0 1 7.360707-17.709972 26.315912 26.315912 0 0 1 17.792988-7.194676 226.742988 226.742988 0 0 1 108.916329 27.671831 466.602423 466.602423 0 0 0-874.070143 1.383592 226.466269 226.466269 0 0 1 111.102404-29.055423 25.126023 25.126023 0 0 1 25.153695 24.904648v399.581247a25.043008 25.043008 0 0 1-7.360707 17.709972 23.991478 23.991478 0 0 1-17.792988 7.194677 225.802145 225.802145 0 0 1-204.494835-128.12058 223.090306 223.090306 0 0 1 28.917064-238.25447 24.904648 24.904648 0 0 1 0-10.238578 515.304847 515.304847 0 0 1 1005.234624 8.854987l0.249046 1.660309a223.782102 223.782102 0 0 1-60.878029 335.10588 511.652165 511.652165 0 0 1-316.953158 238.807906 50.113687 50.113687 0 0 1-49.809297 42.061184h-150.922169a50.279718 50.279718 0 0 1-50.362734-49.809296v-50.086015a49.809297 49.809297 0 0 1 14.776758-35.419945 49.006814 49.006814 0 0 1 35.585976-14.389352h150.922169a50.113687 50.113687 0 0 1 50.30739 49.809297v6.087803a465.384863 465.384863 0 0 0 236.677175-158.559595zM50.623446 549.426706c0.332062 156.345848 150.922169 174.332539 150.922169 174.332538V375.647604s-151.254231 17.433254-150.922169 173.779102z m1006.258482 0c0.332062-156.345848-150.922169-173.779102-150.922169-173.779102v348.11164s150.590107-17.98669 150.922169-174.332538z m0 0" fill="#666666" p-id="10950"></path></svg>'}
      ],
    }
  },
  computed: {
    popularTools() {
      return [...this.tools]
          .sort((a,b) => b.usageCount - a.usageCount)
          .slice(0,3)
    },
    currentCategory() {
      return this.navItems[this.activeNav]?.title || ''
    }
  },
  mounted() {
    this.loadTools();
    this.checkLoginStatus();
    window.addEventListener('resize', this.onResize)
    this.initIntersectionObserver()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    this.observer?.disconnect()
  },
  methods: {
    toggleNav() {
      this.isCollapsed = !this.isCollapsed
    },  handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    filterByTag(tag) {
      this.selectedTag = tag
      // 实现标签过滤逻辑
    },
    loadTools() {
      request.get('/api/tools').then(res => {
        this.tools = res.data
      })
    },
    async checkLoginStatus() {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const res = await request.get('/api/user/info');
          this.userInfo = {...res.data, avatar: res.data.avatar || this.userInfo.avatar};
          this.isLoggedIn = true;
        } catch (error) {
          this.handleLogout();
        }
      }
    },
    showMenu() {
      clearTimeout(this.menuTimeout);
      this.menuVisible = true;
    },
    scrollToSection(index) {
      this.activeNav = index
      const section = this.$refs[`section-${index}`]?.[0]
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    hideMenu() {
      this.menuTimeout = setTimeout(() => {
        this.menuVisible = false;
      }, 200);
    },
    async handleLogout() {
      try {
        await request.post('/api/logout');
      } finally {
        localStorage.removeItem('auth_token');
        this.isLoggedIn = false;
        this.$router.push('/login');
      }
    },
    navigateTomenu1(path) {
      this.hideMenu();
      this.$router.push(path);
    },
    initIntersectionObserver() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = this.contentSections.findIndex(
                (_, i) => this.$refs[`section-${i}`]?.[0] === entry.target
            )
            if (index !== -1) this.activeNav = index
          }
        })
      }, {
        root: document.querySelector('.content-area'),
        threshold: 0.5
      })

      this.contentSections.forEach((_, i) => {
        const el = this.$refs[`section-${i}`]?.[0]
        if (el) this.observer.observe(el)
      })
    }, navigateTo(routePath) {
      if (this.$route.path !== routePath) {
        this.$router.push(routePath)
      }
    },
    handleQuickAccess(item) {
      this.$router.push(`/${item.toLowerCase()}`)
    },
    onResize() {
      this.containerHeight = window.innerHeight
      this.containerWidth = window.innerWidth
    }
  }

}
</script>

<style scoped>
/* 导航选项卡样式 */
.nav-tabs {
  margin-bottom: 20px;
  background: rgba(3242,3553,463,0);
  padding: 12px;
  border-radius: 4px;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 每个卡片至少200px宽，自动填充 */
  gap: 16px; /* 卡片之间的间距 */
}
.tab-group .el-radio-button__inner {
  padding: 12px 20px;
  background: #fff;
  border-color: #ffe58f;
}

.tab-group .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background: #fff7d6;
  color: #d48806;
  box-shadow: -1px 0 0 0 #ffe58f;
}

/* 搜索区域 */
.search-section {
  margin-bottom: 24px;
}

.search-input {
  max-width: 600px;
}

.search-input .el-input-group__append {
  background: #d48806;
  border-color: #d48806;
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.custom-menu {
  background-color: #fffbe6 !important;
  position: absolute;
  right: 20px;  /* 改用right定位更合理 */
  top: 8px;
}

/* 菜单项样式 */
.el-menu--horizontal.el-menu{
  gap: 32px;  /* 增加菜单项间距 */
}

.custom-nav {
  background-color: #fffbe6 !important;
}

::v-deep(.el-menu--horizontal) {
  border-bottom: none !important;

.el-menu-item {
  color: #333 !important;
  height: 48px;
  font-size: 16px;
  margin: 0 16px;

/* 激活状态仅修改底部边框 */
&.is-active {
   border-bottom: 2px solid #FFD053 !important;
   background-color: transparent !important;
 }

&:hover {
   background-color: rgba(255, 208, 83, 0.1) !important;
 }
}
}
.nav-left {
  display: flex;
  align-items: center;
  background-image: url("./photos/屏幕截图 2025-04-15 182052.png");
  width: 622px;
  height: 80px;
  background-size: cover;
}
.logo {
  font-size: 20px;
  font-weight: bold;
  margin-right: 12px;
}
.subtitle {
  color: #666;
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.side-nav {
  background: #fff;
  border-right: 1px solid #eee;
  transition: width 0.3s;
}
.nav-category {
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}
.nav-category.active {
  background: #f5f7fa;
}

.content-area {
  position: relative;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
}

.current-category {
  background: #fff3cd;
  color: #856404;
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.card-item {
  height: 350px;
}
.ai-card {
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  margin-bottom: 30px;
  height: 300px;
}

.ai-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}
.content-section{
  top: 20px;
}
/* 图片区域 */
.image-area {
  width: 100%;
  height: 200px;
  background: #F8F9FA;
  position: relative;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ECF0F1 25%, #F8F9F9 50%, #ECF0F1 75%);
  animation: shimmer 2s infinite;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 文字区域 */
.text-area {
  padding: 20px;
}

.card-title {
  font: 600 20px/1.5 'Microsoft YaHei';
  color: #2C3E50;
  margin-bottom: 12px;
}
.a{
  background-image: url("./photos/图片5.png");
  position: relative;
  top: -40px;
  background-size: cover;
  padding: 0px!important;
}
.card-content {
  font: 14px/1.6 'Arial';
  color: #7F8C8D;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.custom-search {
  /* 红圈设置 */
  padding: 3px;
  display: inline-block;
}

.search-wrapper {
  /* 主容器样式 */
  display: flex;
  align-items: center;
  width: 560px;
  height: 44px;
  background: linear-gradient(180deg,
  var(--main-color) 0%,
  var(--active-color) 100%);
  border-radius: 20px;
  padding: 0 16px;
}

.search-input {
  /* 输入框定制 */
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #333;
  margin: 0 12px;
}

.search-input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.search-button {
  /* 按钮精确控制 */
  background: transparent;
  border: none;
  padding: 6px;
  margin: 0 -6px 0 6px;
  cursor: pointer;
}

.search-icon {
  /* 图标尺寸控制 */
  width: 24px;
  height: 24px;
  color: var(--icon-color);
}
.user-profile {
  margin-left: auto; /* 靠右对齐 */
  display: flex;
  align-items: center;
  position: relative;
}

.user-avatar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  transition: background 0.3s ease;
  cursor: pointer;
  position: relative;
}

/* 未登录状态 */
.user-avatar.guest {
  color: #666;
  background: #f5f5f5;
}

.user-avatar.guest:hover {
  background: #eee;
}

/* 已登录状态 */
.user-avatar.logged {
  padding: 4px 12px 4px 4px;
  background: #fff;
  border: 1px solid #e0e0e0;
}

.avatar-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

/* 用户菜单 */
.user-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 8px 0;
  min-width: 160px;
}

.user-avatar:hover .user-menu {
  display: block;
}

.user-menu a {
  display: block;
  padding: 10px 16px;
  color: #333;
  transition: background 0.2s;
}

.user-menu a:hover {
  background: #f8f9fa;
}

.logout-btn {
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: none;
  border-top: 1px solid #eee;
  color: #ff4d4f;
  cursor: pointer;
  text-align: left;
}
/* 交互状态 */
.search-input:focus {
  outline: none;
}
.nav-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  height: 60px;
}

/* 未登录状态样式 */
.login-btn {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  color: #666;
}

.login-btn:hover {
  background: #f5f5f5;
}

.icon-user {
  margin-right: 8px;
  font-size: 16px;
}

/* 已登录状态样式 */
.user-info {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.3s;
}

.user-info:hover {
  background: #f8f8f8;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.username {
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 下拉菜单样式 */
.user-menu {
  position: absolute;
  top: 100%;
  right: 0;
  width: 240px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 8px;
}

.menu-header {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.menu-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}

.user-details {
  flex: 1;
  overflow: hidden;
}

.user-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.user-email {
  font-size: 12px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-item {
  padding: 12px 16px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
}

.menu-item:hover {
  background: #f8f8f8;
}

.menu-divider {
  height: 1px;
  background: #eee;
  margin: 8px 0;
}

.logout {
  color: #ff4d4f;
}

.icon-profile,
.icon-settings,
.icon-logout {
  margin-right: 12px;
  font-size: 14px;
}

/* 菜单动画 */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
  opacity: 1;
  transform: translateY(0);
}
.brand {
  font-size: 24px;
  font-weight: 600;
  margin-right: 40px;
}

.nav-item {
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
}

.tool-panel {
  position: absolute;
  width: 100%;
  padding: 20px;
  background: white;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 1000;
}

.panel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

.tool-card {
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-box {
  margin-bottom: 20px;
}

.quick-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.carousel-card {
  padding: 15px;
  background: #f5f7fa;
  border-radius: 4px;
  height: 100px;
}

.more-btn {
  margin-top: 20px;
}

.enterprise-service {
  border-top: 1px solid #eee;
  margin-top: 20px;
  padding-top: 15px;
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.menu-slide-enter,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
