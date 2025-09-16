<template>
  <div class="layout-container">
    <!-- 左侧导航栏 -->
    <div class="left-sidebar">
      <div class="logo">
        <span class="logo-text">| AI科技</span>
        <span class="logo-text-en">AI KE JI</span>
      </div>

      <div class="create-btn">
        <button>定制助手</button>
      </div>

      <div class="nav-menu">
        <div class="nav-item" :class="{ active: activeTab === 'home' }" @click="navigateTo('/profile', 'home')">
          <i class="nav-icon home-icon"></i>
          <span style="font-size: 30px;">首页</span>
        </div>
        <div class="nav-item" :class="{ active: activeTab === 'assistant' }" @click="navigateTo('/assistant', 'assistant')">
          <i class="nav-icon assistant-icon"></i>
          <span style="font-size: 30px;">我的助手</span>
        </div>
        <div class="nav-item" :class="{ active: activeTab === 'wallet' }" @click="navigateTo('/wallet', 'wallet')">
          <i class="nav-icon wallet-icon"></i>
          <span style="font-size: 30px;">我的钱包</span>
        </div>
        <div class="nav-item" :class="{ active: activeTab === 'collection' }" @click="navigateTo('/collection', 'collection')">
          <i class="nav-icon collection-icon"></i>
          <span style="font-size: 30px;">我的收藏</span>
        </div>
        <div class="nav-item" :class="{ active: activeTab === 'account' }" @click="navigateTo('/account', 'account')">
          <i class="nav-icon account-icon"></i>
          <span style="font-size: 30px;">账户信息</span>
        </div>
        <div class="nav-item" :class="{ active: activeTab === 'settings' }" @click="navigateTo('/settings', 'settings')">
          <i class="nav-icon settings-icon"></i>
          <span style="font-size: 30px;">账号设置</span>
        </div>
      </div>

      <div class="footer-link">
        <i class="footer-icon"></i>
        <span>帮助与反馈</span>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarLayout',
  props: {
    activeTab: {
      type: String,
      default: 'home'
    }
  },
  methods: {
    navigateTo(path, tab) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
      this.$emit('tab-change', tab);
    }
  }
}
</script>

<style scoped>
.layout-container {
  position: relative;
  display: flex;
  min-height: 100vh;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  overflow: hidden;
  padding: 40px; /* 添加统一的内边距 */
}

/* 添加紫色背景层 */
.layout-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  z-index: 0;
}

/* 添加背景装饰元素 */
.layout-container::after {
  content: '';
  position: absolute;
  top: 10%;
  right: 5%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  z-index: 0;
}

/* 左侧导航栏样式 */
.left-sidebar {
  width: 500px;
  height: 1370px;
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 50px;
  left: 70px;
  z-index: 10;
  border-right: 1px solid #e6e6e6;
  z-index: 1;
  border-radius: 20px;
}

.logo {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
}

.logo-img {
  width: 120px;
  height: 120px;
}

.logo-text {
  font-size: 48px;
  font-weight: bold;
  margin-left: 8px;
}

.logo-text-en {
  font-size: 36px;
  color: #999;
  margin-left: 5px;
}

.create-btn {
  padding: 0 20px;
  margin-bottom: 30px;
}

.create-btn button {
  width: 100%;
  padding: 10px 0;
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 32px;
  box-shadow: 0 2px 5px rgba(108, 92, 231, 0.3);
  transition: all 0.3s;
  height: 100px;
}

.create-btn button:hover {
  background-color: #5d4fd3;
  box-shadow: 0 4px 8px rgba(108, 92, 231, 0.4);
}

.nav-menu {
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 26px 60px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  background-color: #f0f0f0;
  color: #6c5ce7;
  border-left: 3px solid #6c5ce7;
}

.nav-item.active {
  background-color: #f0f0f0;
  color: #8A2BE2;
  border-left: 3px solid #6c5ce7;
  font-weight: 500;
}

.nav-icon {
  width: 56px;
  height: 56px;
  margin-right: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.home-icon {
  background-image: url('@/views/photos/Profile2.png');
}

.nav-item.active .home-icon {
  background-image: url('@/views/photos/Profile21.png');
}

.assistant-icon {
  background-image: url('@/views/photos/Profile2.png');
}

.nav-item.active .assistant-icon {
  background-image: url('@/views/photos/Profile21.png');
}

.wallet-icon {
  background-image: url('@/views/photos/Profile2.png');
}

.nav-item.active .wallet-icon {
  background-image: url('@/views/photos/Profile21.png');
}

.collection-icon {
  background-image: url('@/views/photos/Profile2.png');
}

.nav-item.active .collection-icon {
  background-image: url('@/views/photos/Profile21.png');
}

.account-icon {
  background-image: url('@/views/photos/Profile2.png');
}

.nav-item.active .account-icon {
  background-image: url('@/views/photos/Profile21.png');
}

.settings-icon {
  background-image: url('@/views/photos/Profile2.png');
}

.nav-item.active .settings-icon {
  background-image: url('@/views/photos/Profile21.png');
}

.footer-link {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  color: #666;
  font-size: 28px;
  border-top: 1px solid #eee;
}

.footer-icon {
  width: 48px;
  height: 48px;
  margin-right: 24px;
  background-color: #ddd; /* 临时占位，实际应使用图标 */
}

/* 主内容区域样式 */
.main-content {
  flex: 1;
  padding: 40px;
  background-color: #fff;
  margin: 20px;
  margin-left: 550px;
  margin-right: 70px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
  height: 1370px;
  overflow: hidden;
  width: 1600px !important;
  top: -10px;
}
</style>