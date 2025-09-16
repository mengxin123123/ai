<template>
  <div class="login-container">
    <!-- 顶部导航栏 -->
          <div class="nav-bar">
        <div class="nav-right">
          <a href="#" class="nav-link">客户端下载</a>
          <router-link to="/ai-assistant" class="nav-link">帮助中心</router-link>
          <router-link to="/member-center" class="nav-link member-btn">会员中心</router-link>
        </div>
      </div>

    <!-- 左侧内容区域 -->
    <div class="left-content">
      <h1 class="main-title">强大AI功能</h1>
      <p class="sub-title">人工智能高效处理<br>复杂图文轻松应对</p>
    </div>

    <!-- 右侧登录表单 -->
    <div class="login-form-container">
      <div class="login-header">
        <div class="login-tabs">
          <span 
            v-for="(tab, index) in tabs" 
            :key="index"
            :class="['tab-item', { active: currentTab === tab.value }]"
            @click="currentTab = tab.value"
          >
            {{ tab.label }}
          </span>
        </div>
        <div class="qr-code">
          <img src="../views/photos/图标 1@1x.png" alt="二维码">
        </div>
      </div>

      <!-- 手机号输入框 -->
      <div class="input-group">
        <el-input
          v-model="phone"
          placeholder="请输入手机号"
          class="custom-input"
        >
          <i slot="prefix" class="el-icon-mobile-phone"></i>
          <el-button 
            v-if="currentTab === 'sms'"
            slot="suffix"
            @click="sendCode" 
            :disabled="countdown > 0"
            class="verify-code-btn"
          >
            {{ countdown > 0 ? `${countdown}s后重新获取` : '获取验证码' }}
          </el-button>
        </el-input>
      </div>

      <!-- 验证码/密码输入框 -->
      <div class="input-group">
        <el-input
          v-model="verificationCode"
          :type="currentTab === 'sms' ? 'text' : 'password'"
          :placeholder="getPlaceholder"
          class="custom-input"
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </div>

      <!-- 提示文字 -->
      <div class="login-tip">新用户使用短信登录自动注册AI科技账号</div>

      <!-- 登录按钮 -->
      <el-button type="primary" class="login-btn" @click="handleLogin">
        登录/注册
      </el-button>

      <!-- 协议同意 -->
      <div class="agreement">
        <el-checkbox v-model="agreeTerms">
          我已阅读并同意
          <a href="#" class="link">AI用户协议</a>、
          <a href="#" class="link">隐私政策</a>、
          <a href="#" class="link">手机号服务协议</a>
        </el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      tabs: [
        { label: '短信登录', value: 'sms' },
        { label: '手机登录', value: 'phone' },
        { label: '账号登录', value: 'account' }
      ],
      currentTab: 'sms',
      phone: '',
      verificationCode: '',
      agreeTerms: false,
      countdown: 0,
      timer: null
    }
  },
  computed: {
    getPlaceholder() {
      switch(this.currentTab) {
        case 'sms':
          return '请输入验证码'
        case 'phone':
          return '请输入密码'
        case 'account':
          return '请输入密码'
        default:
          return '请输入验证码'
      }
    }
  },
  methods: {
    sendCode() {
      if (this.countdown > 0) return
      if (!this.phone) {
        this.$message.warning('请先输入手机号')
        return
      }
      // 这里添加发送验证码的逻辑
      this.countdown = 60
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--
        } else {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    handleLogin() {
      if (!this.phone) {
        this.$message.warning('请输入手机号')
        return
      }
      if (!this.verificationCode) {
        this.$message.warning(this.currentTab === 'sms' ? '请输入验证码' : '请输入密码')
        return
      }
      if (!this.agreeTerms) {
        this.$message.warning('请先同意用户协议')
        return
      }
      // 这里添加登录逻辑
      console.log('登录信息：', {
        type: this.currentTab,
        phone: this.phone,
        code: this.verificationCode
      })
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-image: url('../views/photos/LoginView.png');
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: #f5f5f5; /* 添加背景色，防止图片不够大时露出白色 */
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 60px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}

.nav-right {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 28px;
  transition: all 0.3s;
  font-weight: 500;
  padding: 8px 0;
}

.nav-link:hover {
  opacity: 0.8;
}

.member-btn {
  background:rgba(255, 207, 147, 1);
  padding: 10px 30px;
  border-radius: 25px;
  font-size: 28px;
  font-weight: 600;
  backdrop-filter: blur(5px);
}

.member-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
}

.left-content {
  flex: 1;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 120px;
  position: relative;
  top: 560px;
  left: 300px;
}

.main-title {
  font-size: 58px;
  color:rgba(102, 102, 102, 1);
  margin-bottom: 20px;
  font-weight: bold;
}

.sub-title {
  font-size: 30px;
  color: #666;
  line-height: 1.5;
}

.robot-image {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  width: 500px;
  height: 500px;
}

.robot-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.login-form-container {
  width: 900px;
  background: rgba(255, 255, 255, 0.9);
  padding: 80px 90px;
  border-radius: 40px;
  margin: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: absolute;
  right: 300px;
  top: 250px;
}

.login-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.login-tabs {
  display: flex;
  gap: 70px;
  margin-bottom: 40px;
}

.login-tip {
  font-size: 20px;
  color: #999;
  text-align: left;
  padding: 5px 0;
  margin-top: 5px;
}

.tab-item {
  font-size: 36px;
  color: #666;
  cursor: pointer;
  padding-bottom: 18px;
  border-bottom: 4px solid transparent;
  transition: all 0.3s;
  font-weight: 500;
}

.tab-item.active {
  color: #7B61FF;
  border-bottom-color: #7B61FF;
  font-weight: bold;
}

.qr-code {
  width: 65px;
  height: 65px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  right: 30px;
}

.qr-code img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.qr-code:hover img {
  transform: scale(1.1);
}

.input-group {
  margin-bottom: 30px;
}

.custom-input {
  margin-bottom: 20px;
}

.custom-input :deep(.el-input__inner) {
  height: 90px;
  border-radius: 20px;
  border: 2px solid #E5E5E5;
  font-size: 26px;
  padding: 0 35px 0 100px;
}

.custom-input :deep(.el-input__prefix) {
  left: 40px;
  color: #999;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 40px;
  width: 40px;
}

.custom-input :deep(.el-input__icon) {
  line-height: normal;
  font-size: 40px !important;
  height: 100%;
  display: flex;
  align-items: center;
  transform: scale(1.5);
}

.verify-code-btn {
  color: #7B61FF;
  border: none;
  background: none;
  font-size: 24px;
  padding: 0 35px;
  height: 100%;
  font-weight: 500;
}

.verify-code-btn:hover {
  color: #6B51EF;
}

.verify-code-btn:disabled {
  color: #999;
  cursor: not-allowed;
}

.login-btn {
  width: 100%;
  height: 90px;
  background: linear-gradient(135deg, #8B6BFF 0%, #6C4FFF 100%);
  border: none;
  border-radius: 20px;
  font-size: 30px;
  font-weight: 600;
  margin-top: 65px;
  margin-bottom: 55px;
  letter-spacing: 3px;
}

.login-btn:hover {
  background: #6B51EF;
}

.agreement {
  font-size: 20px;
  color: #999;
  text-align: center;
}

.link {
  color: #7B61FF;
  text-decoration: none;
  font-size: 20px;
}

.link:hover {
  text-decoration: underline;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #7B61FF;
  border-color: #7B61FF;
  transform: scale(1.3);
}

:deep(.el-checkbox) {
  display: flex;
  align-items: center;
}

:deep(.el-checkbox__inner) {
  transform: scale(1.3);
  margin-right: 5px;
}

:deep(.el-checkbox__label) {
  font-size: 20px;
  color: #999;
  line-height: 1.5;
  display: inline-flex;
  align-items: center;
}

:deep(.el-button--primary:focus),
:deep(.el-button--primary:hover) {
  background: #6B51EF;
  border-color: #6B51EF;
}
</style> 