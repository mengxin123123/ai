<template>
  <div class="ai-assistant-container">
    <!-- 左侧导航 -->
    <div class="left-sidebar">
      <div class="logo">
        <img src="../views/photos/AiAssistant图片 4 .png" alt="CueMe" class="logo-img">
      </div>
      
      <!-- 对话历史列表 -->
      <div class="chat-history">
        <div class="chat-item active">
          <img src="../views/photos/AiAssistant图片 5.png" alt="AI" class="chat-avatar">
          <div class="chat-info">
            <div class="chat-title">Cueme</div>
            <div class="chat-desc">遇到什么问题了么，快来试试...</div>
          </div>
        </div>
        <div class="service-item">
          <img src="../views/photos/AiAssistant图片 6.png" alt="Service" class="service-icon">
          <span>转人工客服</span>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 顶部导航 -->
      

      <!-- 聊天内容区域 -->
      <div class="chat-content">
        <div class="message-header">
            <span>Hi, 我叫CueMe</span>
          </div>
          <div class="message-content">
            <p>有关智能工具的使用，我都能帮你</p>
          </div>
        <div class="ai-message">
          <!-- 常见问题网格 -->
          <div class="faq-grid">
            <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
              <div class="faq-title">{{ item.question }}</div>
              <div class="faq-desc">{{ item.description }}</div>
            </div>
          </div>

        
        </div>
         <!-- 快速问题标签 -->
         <div class="quick-questions">
            <div v-for="(question, index) in quickQuestions" :key="index" class="question-tag">
              {{ question }}
            </div>
          </div>
      </div>

      <!-- 底部输入框 -->
      <div class="chat-input">
        <input type="text" placeholder="与AI助手对话历史丢失了，如何找回？" class="input-field">
        <button class="send-btn">
          <i class="el-icon-position"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiAssistant',
  data() {
    return {
      faqItems: [
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        },
        {
          question: '为什么无法使用AI助手？',
          description: '查看是否获取使用权限...'
        }
      ],
      quickQuestions: [
        '账号密码忘记了怎么办？',
        '会员到期如何续费？',
        '会员到期如何续费？',
        '为什么我已经是会员用户，但还是无法正常使用产品？',
        '账号密码忘记了怎么办？',
        '为什么显示已经是会员用户，但还是无法正常使用产品？',
        '会员到期如何续费？',
        '账号密码忘记了怎么办？'
      ]
    }
  }
}
</script>

<style scoped>
.ai-assistant-container {
  display: flex;
  height: 100vh;
  min-height: 100vh;
  background-image: url('../views/photos/AiAssistant图片 8.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.left-sidebar {
  width: 320px;

  padding: 30px;
  display: flex;
  flex-direction: column;
  /* border-right: 1px solid rgba(0, 0, 0, 0.1); */
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
}

.logo-img {
  width: 400px;
  height: 400px;
  position: relative;
  top: -150px;
  left: -89px;
}

.logo-text {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  font-family: 'PingFang SC', sans-serif;
}

.chat-history {
  margin-top: 20px;
  position: relative;
  top: -300px;
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  cursor: pointer;
  border-radius: 12px;
  margin-top: 30px;
}

.chat-item.active {
  background: rgba(243, 244, 246, 0.7);
}

.chat-avatar {
  width: 80px;
  height: 80px;
  border-radius: 16px;
}

.chat-info {
  flex: 1;
}

.chat-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
}

.chat-desc {
  font-size: 15px;
  color: #666;
  margin-top: 12px;
  line-height: 1.4;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 24px;
  color: #666;
}

.service-icon {
  width: 50px;
  height: 50px;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: url('../views/photos/AiAssistant图片 7.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  left: 20px;
  height: 100vh;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: calc(100% - 20px);
  align-self: stretch;
}

.top-nav {
  padding: 20px 40px;
  background: #fff;
  border-bottom: 1px solid #E5E5E5;
}

.nav-right {
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  align-items: center;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-size: 28px;
  transition: all 0.3s;
}

.member-btn {
  background: rgba(255, 207, 147, 1);
  padding: 10px 30px;
  border-radius: 25px;
  color: #fff;
}

.home-btn {
  font-size: 32px;
}

.chat-content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
}

.ai-message {
  border-radius: 30px;
  padding: 40px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  top: 400px;
  width: 2000px!important;
  left: -100px;
  background-color: #fff;
  /* background-image: url('../views/photos/AiAssistant图片 81.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}

.message-header {
  font-size: 24px;
  font-weight: bold;
  color:rgba(102, 102, 102, 1);
  margin-bottom: 20px;
  font-family: 'PingFang SC', sans-serif;
  position: relative;
  top: 230px;
  left: 333px;
}

.message-content {
  font-size: 34px;
  color:rgba(51, 51, 51, 1);
  margin-bottom: 50px;
  line-height: 1.4;
  position: relative;
  top: 230px;
  left: 333px;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 50px;
}

.faq-item {
  background: rgba(248, 249, 250, 0.8);
  padding: 25px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.faq-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.faq-title {
  color: #2B5AED;
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 500;
}

.faq-desc {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

.quick-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  position: relative;
  top: 500px;
  padding: 0 333px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  left: -400px;
  top: -2000px;
}
.quick-questions[data-v-51ff104c] {
  top: 470px;
}
.quick-questions {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  position: relative;
  top: 500px;
  padding: 0 40px;
  width: 100%;
}

.question-tag {
  background: rgba(243, 244, 246, 0.8);
  padding: 15px 25px;
  border-radius: 25px;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;

}

.question-tag:hover {
  background: rgba(229, 231, 235, 0.9);
  transform: translateY(-2px);
}

.chat-input {
  padding: 30px 50px;
  background:rgba(51, 51, 51, 0);
  display: flex;
  align-items: center;
  gap: 25px;
}

.input-field {
  flex: 1;
  height: 70px;
  border: 2px solid rgba(192, 141, 224, 1);
  border-radius: 35px;
  padding: 0 35px;
  font-size: 20px;
  outline: none;
  background: rgba(248, 249, 250, 0.5);
  transition: all 0.3s;
}

.input-field:focus {
  border-color: #2B5AED;
  background: #fff;
}

.send-btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.send-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
}
</style> 