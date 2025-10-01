<template>
  <sidebar-layout active-tab="account">
    <div class="profile-container">
      <!-- 个人名片区域 -->
      <div class="profile-card">
        <h2 class="section-title">个人名片</h2>
        <div class="profile-content">
          <div class="avatar-section">
            <div class="avatar">
              <!-- 头像占位符，使用CSS伪元素显示 -->
            </div>
            <div class="avatar-edit">
              <span>点击编辑头像</span>
              <i class="edit-icon">✏️</i>
            </div>
            <div class="username">旺卡</div>
          </div>
          
          <div class="profile-info">
            <div class="info-row">
              <span class="label">账号ID:</span>
              <span class="value">186653254</span>
            </div>
            <div class="info-row">
              <span class="label">年龄:</span>
              <span class="value">18</span>
            </div>
            <div class="info-row">
              <span class="label">个人标签:</span>
              <span class="value">记得给自己的快乐充值，别让它停机了</span>
            </div>
            <div class="info-row">
              <span class="label">会员状态:</span>
              <span class="value membership">🌟 高级会员</span>
            </div>
            <div class="info-row">
              <span class="label">手机号码:</span>
              <span class="value">186***254</span>
              <i class="edit-icon">🔒</i>
            </div>
            <div class="info-row">
              <span class="label">邮箱:</span>
              <span class="value">1234567890@qq.com</span>
              <i class="edit-icon">🔒</i>
            </div>
            <div class="info-row">
              <span class="label">入驻时间:</span>
              <span class="value">2025-04-01 12:00</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 详细信息区域 -->
      <div class="detail-info">
        <h2 class="section-title" style="position: relative;left: -40%;">详细信息</h2>
        <div class="detail-content">
          <div class="detail-row">
            <span class="label">用户名:</span>
            <span class="value">旺卡</span>
            <i class="edit-icon">✏️</i>
          </div>
          <div class="detail-row">
            <span class="label">年龄:</span>
            <span class="value">18</span>
          </div>
          <div class="detail-row">
            <span class="label">出生日期:</span>
            <span class="value">2007-12-01</span>
            <i class="edit-icon">✏️</i>
          </div>
          <div class="detail-row">
            <span class="label">所在地:</span>
            <span class="value">中国</span>
            <i class="edit-icon">✏️</i>
          </div>
          <div class="detail-row">
            <span class="label">邮箱:</span>
            <span class="value">1234567890@qq.com</span>
            <i class="edit-icon">✏️</i>
          </div>
          <div class="detail-row">
            <span class="label">手机号码:</span>
            <span class="value">18658929254</span>
            <i class="edit-icon">✏️</i>
          </div>
          <div class="detail-row">
            <span class="label">会员认证:</span>
            <span class="value membership">🌟 高级会员</span>
          </div>
          <div class="detail-row">
            <span class="label">个人标签:</span>
            <span class="value">记得给自己的快乐充值，别让它停机了</span>
            <i class="edit-icon">✏️</i>
          </div>
          <div class="detail-row">
            <span class="label">会员状态:</span>
            <span class="value membership">🌟 高级会员</span>
          </div>
          <div class="detail-row">
            <span class="label">入驻时间:</span>
            <span class="value">2025-04-01 12:00</span>
          </div>
        </div>
      </div>
    </div>
  </sidebar-layout>
</template>

<script>
import SidebarLayout from '@/components/SidebarLayout.vue'

export default {
  name: 'AccountInfo',
  components: {
    SidebarLayout
  },
  data() {
    return {
      userInfo: {
        id: '186653254',
        username: '旺卡',
        age: 18,
        personalTag: '记得给自己的快乐充值，别让它停机了',
        membershipStatus: '🌟 高级会员',
        phone: '186***254',
        fullPhone: '18658929254',
        email: '1234567890@qq.com',
        joinDate: '2025-04-01 12:00',
        birthDate: '2007-12-01',
        location: '中国'
      }
    }
  },
  methods: {
    editField(field) {
      console.log('编辑字段:', field)
      // 这里可以添加编辑功能的逻辑
    }
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  gap: 40px;
  padding: 30px;
  min-height: calc(100vh - 100px);
  background: #F4F5FA;
}

.profile-card {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: calc(100vh - 240px);
}

.detail-info {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: calc(100vh - 240px);
}

.section-title {
  font-size: 68px;
  font-weight: 500;
  color: #333;
  margin: 0 0 30px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
  text-align: center;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 324px;
  height: 324px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none; /* 隐藏图片，使用伪元素显示头像 */
}

.avatar::before {
  content: '👤';
  font-size: 162px;
  color: white;
}

.avatar-edit {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 37.5px;
  cursor: pointer;
}

.avatar-edit:hover {
  color: #6c5ce7;
}

.username {
  font-size: 75px;
  font-weight: 600;
  color: #333;
}

.profile-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-row, .detail-row {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}

.info-row:last-child, .detail-row:last-child {
  border-bottom: none;
}

.label {
  font-size: 48px;
  color: #666;
  min-width: 324px;
  font-weight: 500;
}

.value {
  font-size: 48px;
  color: #333;
  flex: 1;
  margin-left: 54px;
}

.value.membership {
  color: #f39c12;
  font-weight: 600;
}

.edit-icon {
  font-size: 43.5px;
  color: #999;
  cursor: pointer;
  margin-left: 27px;
  transition: color 0.3s ease;
}

.edit-icon:hover {
  color: #6c5ce7;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.detail-row .label {
  min-width: 270px;
  font-size: 43.5px;
}

.detail-row .value {
  font-size: 43.5px;
  margin-left: 40.5px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .profile-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .profile-card, .detail-info {
    flex: none;
  }
}

@media (max-width: 768px) {
  .profile-container {
    padding: 20px;
  }
  
  .section-title {
    font-size: 75px;
  }
  
  .info-row, .detail-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .label {
    min-width: auto;
  }
  
  .value {
    margin-left: 0;
  }
}
</style>