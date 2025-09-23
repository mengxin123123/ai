<template>
  <sidebar-layout active-tab="wallet">
    <div class="wallet-container">
      <!-- 主内容区域 -->
      <div class="a">
        <!-- 平台余额卡片 -->
        <div class="balance-card">
          <div class="card-header">
            <div class="balance-title">
              <span class="title-text">平台余额</span>
              <i class="eye-icon" @click="toggleBalanceVisibility">👁</i>
            </div>
            <div class="account-status">充值</div>
          </div>
          <div class="balance-amount">
            <span class="currency">¥</span>
            <span class="amount">{{ balanceVisible ? '2,630.60' : '****' }}</span>
          </div>
          <div class="balance-footer">
            <span class="account-type">余额（元）</span>
            <button class="bind-account-btn">绑定账户</button>
          </div>
          <!-- 波浪纹理 -->
          <div class="wave-pattern"></div>
        </div>

        <!-- 资金流水 -->
        <div class="transaction-section">
          <div class="section-header">
            <h3>资金流水</h3>
            <div class="filter-tabs">
              <span class="tab active">全部</span>
              <div class="dropdown-tab" @click="toggleTimeDropdown">
                <span class="tab">{{ selectedTimeRange }}</span>
                <span class="dropdown-arrow" :class="{ 'rotated': showTimeDropdown }">▼</span>
                <div class="dropdown-menu" v-show="showTimeDropdown">
                  <div class="dropdown-item" 
                       v-for="option in timeRangeOptions" 
                       :key="option.value"
                       @click="selectTimeRange(option)"
                       :class="{ 'active': selectedTimeRange === option.label }">
                    {{ option.label }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="transaction-table">
            <div class="table-header">
              <div class="col-icon"></div>
              <div class="col-type">收支</div>
              <div class="col-desc">明细</div>
              <div class="col-date">日期</div>
              <div class="col-amount header-amount">资金浮动</div>
            </div>
            
            <div class="transaction-item" v-for="transaction in transactions" :key="transaction.id">
              <div class="col-icon">
                <div class="transaction-icon" :class="transaction.iconClass">
                  <!-- Apple 图标 -->
                  <svg v-if="transaction.iconType === 'apple'" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="white"/>
                  </svg>
                  <!-- Google 图标 -->
                  <svg v-else-if="transaction.iconType === 'google'" width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path d="M18.2 10.2c0-.7-.1-1.4-.2-2H10v3.8h4.6c-.2 1.1-.8 2-1.7 2.6v2.2h2.7c1.6-1.5 2.6-3.7 2.6-6.6z" fill="#4285F4"/>
                    <path d="M10 18c2.3 0 4.2-.8 5.6-2.1l-2.7-2.2c-.8.5-1.8.8-2.9.8-2.2 0-4.1-1.5-4.8-3.5H2.4v2.3C3.8 15.8 6.7 18 10 18z" fill="#34A853"/>
                    <path d="M5.2 11c-.2-.5-.2-1-.2-1.5s.1-1 .2-1.5V5.7H2.4C1.5 7.5 1.5 9.5 2.4 11.3l2.8-2.3z" fill="#FBBC05"/>
                    <path d="M10 4.5c1.2 0 2.3.4 3.2 1.2l2.4-2.4C14.2 1.9 12.2 1 10 1 6.7 1 3.8 3.2 2.4 6.3l2.8 2.2C5.9 6 7.8 4.5 10 4.5z" fill="#EA4335"/>
                  </svg>
                  <!-- 默认图标 -->
                  <span v-else>●</span>
                </div>
              </div>
              <div class="col-type">{{ transaction.type }}</div>
              <div class="col-desc">{{ transaction.description }}</div>
              <div class="col-date">{{ transaction.date }}</div>
              <div class="col-detail">
                <button class="detail-btn" @click="viewDetail(transaction)">查看详情</button>
              </div>
              <div class="col-amount" :class="transaction.amountClass">
                <div class="amount-value" :class="transaction.amountClass">{{ transaction.amount }}</div>
                <div class="balance-after">¥ {{ transaction.balanceAfter }}</div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>

      <!-- 右侧信息栏 -->
      <div class="sidebar-info">
        <!-- 消费详情 -->
        <div class="consumption-detail">
          <h3 style="font-size: 40px;">消费详情</h3>
          <div class="user-info">
            <div class="user-avatar apple-icon">
              <svg width="61" height="58" viewBox="0 0 20 24" fill="none">
                <path d="M15.5 12.5c0-3.5 2.8-5.2 2.9-5.3-1.6-2.3-4.1-2.6-5-2.6-2.1-.2-4.1 1.2-5.2 1.2s-2.7-1.2-4.5-1.2c-2.3 0-4.4 1.3-5.6 3.4-2.4 4.2-.6 10.4 1.7 13.8 1.1 1.7 2.5 3.5 4.3 3.4 1.7-.1 2.4-1.1 4.5-1.1s2.7 1.1 4.5 1.1c1.9-.1 3.1-1.6 4.2-3.3 1.3-2 1.8-3.9 1.8-4 0-.1-3.5-1.3-3.6-5.4z" fill="white"/>
                <path d="M12.8 4.5c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.7 2-1.8 2.1-1.7 5.4-1.7 5.4s2.9.2 4.1-3.3z" fill="white"/>
              </svg>
            </div>
            <div class="user-details">
              <div class="username">购买XX助手</div>
              <div class="user-amount">-130YUAN</div>
            </div>
          </div>
          
          <div class="detail-items">
            <div class="detail-item">
              <div class="detail-icon">📅</div>
              <span class="label">消费日期</span>
              <span class="value">2025年04月15日13:00</span>
            </div>
            <div class="detail-item">
              <div class="detail-icon">💰</div>
              <span class="label">消费金额</span>
              <span class="value">-130YUAN</span>
            </div>
            <div class="detail-item">
              <div class="detail-icon">📋</div>
              <span class="label">订单编号</span>
              <span class="value">XB-2345-BB</span>
            </div>
          </div>
        </div>

        <!-- 银行卡 -->
        <div class="bank-cards">
          <h3>银行卡</h3>
          <div class="bank-card-list">
            <div class="bank-card-item">
              <div class="bank-icon bank-abc">🏛</div>
              <span class="bank-name">中国农业银行</span>
              <button class="action-link unbind">解绑</button>
            </div>
            <div class="bank-card-item">
              <div class="bank-icon bank-icbc">🏭</div>
              <span class="bank-name">中国工商银行</span>
              <button class="action-link bind">立即绑定</button>
            </div>
            <div class="bank-card-item">
              <div class="bank-icon bank-abc">🏛</div>
              <span class="bank-name">中国农业银行</span>
              <button class="action-link unbind">解绑</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </sidebar-layout>
</template>

<script>
import SidebarLayout from '@/components/SidebarLayout.vue'

export default {
  name: 'Wallet',
  components: {
    SidebarLayout
  },
  data() {
    return {
      balanceVisible: true,
      showTimeDropdown: false,
      selectedTimeRange: '本月',
      timeRangeOptions: [
        { label: '今天', value: 'today' },
        { label: '本周', value: 'thisWeek' },
        { label: '本月', value: 'thisMonth' },
        { label: '最近3个月', value: 'last3Months' },
        { label: '最近6个月', value: 'last6Months' },
        { label: '本年', value: 'thisYear' }
      ],
      transactions: [
        {
          id: 1,
          type: '支出',
          description: '购买助手',
          date: '2025/04/15',
          amount: '-130 YUAN',
          balanceAfter: '2,630.60',
          iconClass: 'expense-icon',
          amountClass: 'expense',
          iconType: 'apple',
          iconAlt: 'Apple'
        },
        {
          id: 2,
          type: '收入',
          description: '支付宝充值',
          date: '2025/04/15',
          amount: '+1300 YUAN',
          balanceAfter: '2,760.60',
          iconClass: 'income-icon',
          amountClass: 'income',
          iconType: 'google',
          iconAlt: 'Google'
        },
        {
          id: 3,
          type: '支出',
          description: '购买学习会员',
          date: '2025/04/15',
          amount: '-230 YUAN',
          balanceAfter: '1,530.60',
          iconClass: 'expense-icon',
          amountClass: 'expense',
          iconType: 'apple',
          iconAlt: 'Apple'
        },
        {
          id: 4,
          type: '支出',
          description: '购买助手',
          date: '2025/04/15',
          amount: '-130 YUAN',
          balanceAfter: '2,630.60',
          iconClass: 'expense-icon',
          amountClass: 'expense',
          iconType: 'apple',
          iconAlt: 'Apple'
        },
        {
          id: 5,
          type: '收入',
          description: '支付宝充值',
          date: '2025/04/15',
          amount: '+1300 YUAN',
          balanceAfter: '2,760.60',
          iconClass: 'income-icon',
          amountClass: 'income',
          iconType: 'google',
          iconAlt: 'Google'
        },
        {
          id: 6,
          type: '收入',
          description: '支付宝充值',
          date: '2025/04/15',
          amount: '+1300 YUAN',
          balanceAfter: '2,760.60',
          iconClass: 'income-icon',
          amountClass: 'income',
          iconType: 'google',
          iconAlt: 'Google'
        },
        
        
      ]
    }
  },
  methods: {
    toggleBalanceVisibility() {
      this.balanceVisible = !this.balanceVisible
    },
    // 查看交易详情
    viewDetail(transaction) {
      console.log('查看详情:', transaction)
      // 这里可以打开详情弹窗或跳转到详情页面
      alert(`查看 ${transaction.description} 的详情\n金额: ${transaction.amount}\n日期: ${transaction.date}`)
    },
    // 切换时间下拉菜单
    toggleTimeDropdown() {
      this.showTimeDropdown = !this.showTimeDropdown
    },
    // 选择时间范围
    selectTimeRange(option) {
      this.selectedTimeRange = option.label
      this.showTimeDropdown = false
      this.filterTransactionsByTime(option.value)
    },
    // 根据时间范围筛选交易记录
    filterTransactionsByTime(timeRange) {
      console.log('筛选时间范围:', timeRange)
      // 这里可以根据选择的时间范围筛选交易记录
      // 实际项目中可以调用API获取对应时间范围的数据
    },
    // 添加新交易记录的辅助方法
    addTransaction(type, description, amount, iconType = 'apple') {
      const newTransaction = {
        id: this.transactions.length + 1,
        type: type,
        description: description,
        date: new Date().toLocaleDateString('zh-CN').replace(/\//g, '/'),
        amount: amount,
        balanceAfter: '2,630.60', // 这里可以根据实际逻辑计算
        iconClass: type === '支出' ? 'expense-icon' : 'income-icon',
        amountClass: type === '支出' ? 'expense' : 'income',
        iconType: iconType, // 'apple', 'google', 或其他自定义类型
        iconAlt: iconType === 'apple' ? 'Apple' : iconType === 'google' ? 'Google' : iconType
      }
      this.transactions.unshift(newTransaction)
    }
  },
  // 点击外部关闭下拉菜单
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.showTimeDropdown = false
      }
    })
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style scoped>
.main-content {
  flex: 1;
  padding: 40px;
  background-color: rgba(244, 245, 250, 1)!important;
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
.wallet-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  min-height: calc(100vh - 40px);
  background:#F4F5FA;
}
.a{
  flex: 1;
  min-width: 0;
  background-color: #FFFFFF;
  z-index: 99999;
  height: 1270px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
}


/* 平台余额卡片 */
.balance-card {
  background-image: url('../views/photos/walletbackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  height: 430px;
  box-sizing: border-box;
}

.balance-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 15px,
      rgba(255,255,255,0.08) 15px,
      rgba(255,255,255,0.08) 30px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 20px,
      rgba(255,255,255,0.05) 20px,
      rgba(255,255,255,0.05) 40px
    );
}

.balance-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 80px;
  background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
  border-radius: 50% 0 0 50%;
}

.wave-pattern {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 8px,
      rgba(255,255,255,0.08) 8px,
      rgba(255,255,255,0.08) 16px
    );
  mask: 
    radial-gradient(ellipse 100px 30px at 100% 100%, transparent 50%, black 50%),
    radial-gradient(ellipse 80px 25px at 80% 100%, transparent 50%, black 50%),
    radial-gradient(ellipse 60px 20px at 60% 100%, transparent 50%, black 50%);
  mask-composite: intersect;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.balance-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-text {
  font-size: 56px;
  color:#000000;
  font-weight: 600;
}

.eye-icon {
  cursor: pointer;
  font-size: 50px;
  color: #7a6a9a;
}

.account-status {
  font-size: 30px;
  color: #7a6a9a;
}

.balance-amount {
  margin: 60px 20px 60px 0;
  text-align: left;
}

.currency {
  font-size: 88px;
  color: #333333;
  margin-right: 4px;
  font-weight: 600;
}

.amount {
  font-size: 88px;
  font-weight: 500;
  color: #333333;
}

.balance-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  position: absolute;
  bottom: 28px;
  left: 28px;
  right: 28px;
}

.account-type {
  font-size: 30px;
  color: #5a4a7a;
}

.bind-account-btn {
  background: white;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 35px 0 0 35px;
  padding: 18px 36px;
  font-size: 32px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  margin-right: -36px;
  padding-right: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 60px;
}

.bind-account-btn:hover {
  background: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.bind-account-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* 资金流水 */
.transaction-section {
  margin-top: 0;
  height: 700px;
  border-bottom-left-radius: 400px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-header h3 {
  font-size: 30px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.filter-tabs {
  display: flex;
  align-items: center;
  gap: 24px;
}

.tab {
  font-size: 30px;
  color: #666;
  cursor: pointer;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
}

.tab.active {
  color: #333;
  border-bottom-color: #6c5ce7;
  font-weight: 500;
  font-size: 30px;
}

.dropdown-tab {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  position: relative;
}

.dropdown-arrow {
  font-size: 30px;
  color: #666;
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 8px;
  min-width: 120px;
}

.dropdown-item {
  padding: 12px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f5f5f5;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f8f9fa;
  color: #6c5ce7;
}

.dropdown-item.active {
  background: #6c5ce7;
  color: white;
}

.dropdown-item:first-child {
  border-radius: 8px 8px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 8px 8px;
}

.transaction-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  min-height: 400px;

  border-bottom-left-radius: 20px;
}

.table-header {
  display: grid;
  grid-template-columns: 0px 10px 100px 100px 40%;
  gap: 150px;
  background: #FFFFFF;
  padding: 12px 20px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  border-bottom: 1px solid #e8e8e8;
}

.transaction-item {
  display: grid;
  grid-template-columns: 0px 10px 100px 100px 80px 1fr;
  gap: 150px;
  padding: 19px 20px;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
  font-size: 14px;
  min-height: 50px!important;
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-item:hover {
  background: #fafafa;
}

.transaction-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: white;
  margin: 0 auto;
  overflow: hidden;
}

.transaction-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.expense-icon {
  background: #333;
}

.income-icon {
  background: #4CAF50;
}

/* SVG图标样式 - 调整大小让图标在圆形中居中 */
.expense-icon svg,
.income-icon svg {
  width: 32px;
  height: 32px;
  display: block;
}

/* 苹果图标特殊调整 - 确保完美居中 */
.transaction-icon svg {
  flex-shrink: 0;
}

/* 确保SVG图标在不同背景下都可见 */
.expense-icon svg path {
  fill: white;
}

.income-icon svg path {
  fill: white;
}

/* 查看详情文字按钮样式 */
.detail-btn {
  background: none;
  color: #6c5ce7;
  border: none;
  padding: 0;
  font-size: 30px;
  cursor: pointer;
  transition: color 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
}

.detail-btn:hover {
  color: #5a4fcf;
  text-decoration: underline;
}

.col-detail {
  text-align: center;
  position: relative;
  left: 100px;
}

.col-type {
  font-size: 30px;
  color: #333;
  font-weight: 500;
  width: 100px;

}

.col-desc {
  font-size: 30px;
  color:  #333;
  width: 180px;
}

.col-date {
  font-size: 30px;
  color:  #333;
}

.col-amount {
  text-align: right;
  font-size: 30px;
  color:  #333;
}

.header-amount {
  margin-right: 20px;
}

.amount-value {
  font-size: 30px;
  font-weight: 600;
}

.amount-value.expense {
  color: #333;
}

.amount-value.income {
  color: #52c41a;
}

.balance-after {
  font-size: 14px;
  color: #52c41a;
  margin-top: 1px;
}

.pagination {
  text-align: left;
  margin-top: 0;
  padding: 10px 16px;
  background: white;
  border-top: 1px solid #f5f5f5;
}

.page-info {
  font-size: 15px;
  color: #999;
}

/* 右侧信息栏 */
.sidebar-info {
  width: 35%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  left: 10px;
}

.consumption-detail {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8e8e8;
  min-height: 730px;
  display: flex;
  flex-direction: column;
}

.bank-cards {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8e8e8;
  min-height: 520px;
}

.consumption-detail h3,
.bank-cards h3 {
  font-size: 40px;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  padding-bottom: 20px;
}

.user-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  position: relative;
  left: 40%;
  top: 20px;
}

.user-avatar.apple-icon {
  background: #000;
}

.user-details {
  flex: 1;
  position: relative;
  top: 150px;
  left: 23%;
}

.username {
  font-size: 20px;
  color:  #666;
  font-weight: 500;
  margin-bottom: 6px;

}

.user-amount {
  font-size: 30px;
  color:#333;
  margin-left: -25px;
}

.detail-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 150px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
}

.detail-icon {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:40px;
  opacity: 0.7;
}

.detail-item .label {
  font-size: 23px;
  color: #666;
  min-width: 80px;
  margin-left: 6px;
}

.detail-item .value {
  font-size: 23px;
  color: #333;
  font-weight: 500;
  flex: 1;
  text-align: right;
}

.bank-card-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bank-card-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease;
  min-height: 96px;

}

.bank-card-item:hover {
  border-color: #d0d0d0;
  background: #fafafa;
}

.bank-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
}

.bank-ccb {
  background: #4CAF50;
}

.bank-icbc {
  background: #FF5722;
}

.bank-abc {
  background: #2196F3;
}

.bank-name {
  flex: 1;
  font-size: 30px;
  color: #333;
  font-weight: 400;
}

.action-link {
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  text-decoration: underline;
  padding: 6px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.action-link.bind {
  color: #6c5ce7;
}

.action-link.bind:hover {
  color: #5a4fcf;
}

.action-link.unbind {
  color: #ff4757;
}

.action-link.unbind:hover {
  color: #ff3742;
}
</style>