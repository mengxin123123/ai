<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="../views/photos/1001.png" alt="AI科技">
    </div>
    <div class="nav-items">
      <div class="nav-item" :class="{active: $route.path === '/'}" @click="navigateTo('/')">首页</div>
      <div class="nav-item" :class="{active: $route.path === '/workshop'}" @click="navigateTo('/workshop')">智能工坊</div>
      <div class="nav-item" :class="{active: $route.path === '/member'}" @click="navigateTo('/member')">能量站</div>
      <div class="nav-item" @click="openInNewWindow('/profile')">个人中心</div>
      <div class="nav-item">客服中心</div>
    </div>
    <div class="nav-tools">
      <div class="tool-item">
        <svg class="icon search-icon" viewBox="0 0 1024 1024">
          <path d="M945.28 905.472l-183.808-184.32c55.296-62.464 88.576-143.36 88.576-231.424 0-199.68-162.304-361.984-361.984-361.984S126.976 289.792 126.976 489.728c0 199.68 162.304 361.984 361.984 361.984 79.872 0 153.6-25.6 213.504-69.632l185.856 185.856c12.288 12.288 32.768 12.288 45.056 0 12.288-12.288 12.288-32.768 0-45.056zM487.424 774.144c-156.672 0-284.416-127.744-284.416-284.416s127.744-284.416 284.416-284.416 284.416 127.744 284.416 284.416S644.096 774.144 487.424 774.144z"/>
        </svg>
      </div>
      <div class="tool-item">
        <svg class="icon collect-icon" viewBox="0 0 1179 1024">
          <path d="M142.31918 540.267127l350.13559 373.653781c54.296613 63.852817 139.806023 63.883844 195.033436-1.054906l362.204951-388.670672c42.661625-48.866952 65.466202-112.130263 65.466203-182.902021a279.239726 279.239726 0 0 0-501.018122-169.653647 30.99561 30.99561 0 0 1-25.534922 12.131415 30.99561 30.99561 0 0 1-25.503895-12.131415A279.239726 279.239726 0 0 0 62.053272 341.293309c0 72.850542 28.792718 144.242832 77.411458 195.498835 1.054906 1.116959 1.985705 2.264944 2.85445 3.474983z" fill="#7140BF"/>
        </svg>
      </div>
      <div class="user-avatar" @click="handleAvatarClick">
        <img :src="isLoggedIn ? '../views/photos/tool.icon.text.png' : require('../views/photos/图标 11@1x.png')" :alt="isLoggedIn ? '用户头像' : '未登录'">
        <div class="avatar-border"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isLoggedIn: false // 默认未登录状态
    }
  },
  methods: {
    navigateTo(path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    openInNewWindow(path) {
      // 在新窗口中打开页面
      const url = this.$router.resolve(path).href
      window.open(url, '_blank')
    },
    handleAvatarClick() {
      // 直接跳转到登录页面，因为默认是未登录状态
      this.$router.push('/login')
    },
    // 移除登录状态检查方法，因为我们希望保持未登录状态
    checkLoginStatus() {
      this.isLoggedIn = false
    }
  },
  created() {
    // 组件创建时设置为未登录状态
    this.checkLoginStatus()
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center; /* 确保所有子元素垂直居中 */
  width: 1925px;
  
  background: rgba(255,255,255,0.98);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 84px; /* 增加导航栏高度 */
}

.logo {
  display: flex;
  align-items: center;
  position: relative;
  left: 276px;
}

.logo img {
  height: 45px; /* 增大logo大小 */
}

.nav-items {
  display: flex;
  align-items: center; /* 确保文本项垂直居中 */
  gap: 80px;
  font-size:20px;


  
  margin: 0 auto;
}

.nav-item {
  font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei', sans-serif;
  font-weight: 500;
  font-size: 25px; /* 放大导航字体 */
  line-height: 1.2;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  padding: 0 5px;
  outline: none; /* 移除可能导致椭圆轮廓的outline */
  user-select: none; /* 防止文本选择干扰点击 */
}

.nav-item.active {
  color: #7140BF;
  font-weight: 600;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px; /* 增加下划线粗细 */
  background: #7140BF;
  border-radius: 2px;
}

.nav-tools {
  display: flex;
  align-items: center; /* 确保垂直居中对齐 */
  gap: 30px; /* 增加间距 */
  position: relative;
  right:276px;
}

.tool-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px; /* 与头像大小一致 */
  cursor: pointer; /* 确保鼠标指针显示正确 */
  outline: none; /* 移除可能导致椭圆轮廓的outline */
}

.icon {
  width: 38px; /* 进一步增大图标尺寸 */
  height: 38px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
  vertical-align: middle; /* 确保垂直居中 */
  outline: none; /* 移除可能导致椭圆轮廓的outline */
}

.icon:hover {
  opacity: 1;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* 确保鼠标指针显示正确 */
  outline: none; /* 移除可能导致椭圆轮廓的outline */
}

.user-avatar img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  object-fit: contain;
  padding: 5px;
}

.avatar-border {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid #7140BF;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none; /* 防止边框干扰点击 */
}

.user-avatar:hover .avatar-border {
  opacity: 1;
}
</style>