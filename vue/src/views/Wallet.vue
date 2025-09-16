<template>
  <sidebar-layout active-tab="wallet">
    <div class="wallet-container">
      <!-- 主内容区域 -->
      <div class="main-content">
        <!-- 平台余额卡片 -->
        <div class="balance-card">
          <div class="card-header">
            <div class="balance-title">
              <span class="title-text">平台余额</span>
              <i class="eye-icon" @click="toggleBalanceVisibility">👁</i>
            </div>
            <div class="account-status">账户</div>
          </div>
          <div class="balance-amount">
            <span class="currency">¥</span>
            <span class="amount">{{ balanceVisible ? '2,630.60' : '****' }}</span>
          </div>
          <div class="balance-footer">
            <span class="account-type">余额（元）</span>
            <button class="bind-account-btn">绑定账户</button>
          </div>
        </div>

        <!-- 资金流水 -->
        <div class="transaction-section">
          <div class="section-header">
            <h3>资金流水</h3>
            <div class="filter-tabs">
              <span class="tab active">全部</span>
              <span class="tab">资金流动</span>
            </div>
          </div>
          
          <div class="transaction-table">
            <div class="table-header">
              <div class="col-icon"></div>
              <div class="col-type">收支</div>
              <div class="col-desc">说明</div>
              <div class="col-date">日期</div>
              <div class="col-amount">金额</div>
            </div>
            
            <div class="transaction-item" v-for="transaction in transactions" :key="transaction.id">
              <div class="col-icon">
                <div class="transaction-icon" :class="transaction.iconClass">
                  <span v-if="transaction.iconClass === 'expense-icon'">⚫</span>
                  <span v-else>G</span>
                </div>
              </div>
              <div class="col-type">{{ transaction.type }}</div>
              <div class="col-desc">{{ transaction.description }}</div>
              <div class="col-date">{{ transaction.date }}</div>
              <div class="col-amount" :class="transaction.amountClass">
                <div class="amount-value" :class="transaction.amountClass">{{ transaction.amount }}</div>
                <div class="balance-after">¥ {{ transaction.balanceAfter }}</div>
              </div>
            </div>
          </div>
          
          <div class="pagination">
            <span class="page-info">共8条记录</span>
          </div>
        </div>
      </div>

      <!-- 右侧信息栏 -->
      <div class="sidebar-info">
        <!-- 消费详情 -->
        <div class="consumption-detail">
          <h3>消费详情</h3>
          <div class="user-info">
            <div class="user-avatar">
              <span style="color: white; font-size: 18px;"></span>
            </div>
            <div class="user-details">
              <div class="username">购买XX助手</div>
              <div class="user-id">-130YUAN</div>
            </div>
          </div>
          
          <div class="detail-items">
            <div class="detail-item">
              <span class="label">消费日期</span>
              <span class="value">2025年04月15日13:00</span>
            </div>
            <div class="detail-item">
              <span class="label">消费金额</span>
              <span class="value">-130YUAN</span>
            </div>
            <div class="detail-item">
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
              <div class="bank-icon bank-ccb">🏦</div>
              <span class="bank-name">中国农业银行</span>
              <button class="action-link">解绑</button>
            </div>
            <div class="bank-card-item">
              <div class="bank-icon bank-icbc">🏦</div>
              <span class="bank-name">中国工商银行</span>
              <button class="action-link">立即绑定</button>
            </div>
            <div class="bank-card-item">
              <div class="bank-icon bank-abc">🏦</div>
              <span class="bank-name">中国农业银行</span>
              <button class="action-link">解绑</button>
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
      transactions: [
        {
          id: 1,
          type: '支出',
          description: '购买助手',
          date: '2025/04/15',
          amount: '-130 YUAN',
          balanceAfter: '2,630.60',
          iconClass: 'expense-icon',
          amountClass: 'expense'
        },
        {
          id: 2,
          type: '收入',
          description: '支付宝充值',
          date: '2025/04/15',
          amount: '+1300 YUAN',
          balanceAfter: '2,760.60',
          iconClass: 'income-icon',
          amountClass: 'income'
        },
        {
          id: 3,
          type: '支出',
          description: '购买学习会员',
          date: '2025/04/15',
          amount: '-230 YUAN',
          balanceAfter: '1,530.60',
          iconClass: 'expense-icon',
          amountClass: 'expense'
        },
        {
          id: 4,
          type: '支出',
          description: '购买助手',
          date: '2025/04/15',
          amount: '-130 YUAN',
          balanceAfter: '2,630.60',
          iconClass: 'expense-icon',
          amountClass: 'expense'
        },
        {
          id: 5,
          type: '收入',
          description: '支付宝充值',
          date: '2025/04/15',
          amount: '+1300 YUAN',
          balanceAfter: '2,760.60',
          iconClass: 'income-icon',
          amountClass: 'income'
        }
      ]
    }
  },
  methods: {
    toggleBalanceVisibility() {
      this.balanceVisible = !this.balanceVisible
    }
  }
}
</script>

<style scoped>
.wallet-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  min-height: calc(100vh - 40px);
  background: transparent;
}

.main-content {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  margin-right: 20px;
}

/* 平台余额卡片 */
.balance-card {
  background: linear-gradient(135deg, #c8b7e8, #d4c4f0);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  height: 160px;
}

.balance-card::before {
  content: '';
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.balance-card::after {
  content: '';
  position: absolute;
  bottom: -10px;
  right: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%);
  background-size: 30px 30px;
  background-repeat: repeat-x;
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
  font-size: 15px;
  color: #5a4a7a;
  font-weight: 500;
}

.eye-icon {
  cursor: pointer;
  font-size: 16px;
  color: #7a6a9a;
}

.account-status {
  font-size: 13px;
  color: #7a6a9a;
}

.balance-amount {
  margin: 18px 0;
}

.currency {
  font-size: 22px;
  color: #2c1810;
  margin-right: 3px;
  font-weight: 600;
}

.amount {
  font-size: 38px;
  font-weight: 700;
  color: #2c1810;
}

.balance-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.account-type {
  font-size: 13px;
  color: #5a4a7a;
}

.bind-account-btn {
  background: #8a7ca8;
  color: white;
  border: none;
  border-radius: 18px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bind-account-btn:hover {
  background: #5a4fcf;
}

/* 资金流水 */
.transaction-section {
  margin-top: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.filter-tabs {
  display: flex;
  gap: 12px;
}

.tab {
  font-size: 12px;
  color: #666;
  cursor: pointer;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab.active {
  color: #6c5ce7;
  border-bottom-color: #6c5ce7;
}

.transaction-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.table-header {
  display: grid;
  grid-template-columns: 35px 60px 1fr 90px 110px;
  gap: 10px;
  background: #f8f8f8;
  padding: 12px 16px;
  font-size: 13px;
  color: #666;
  font-weight: 500;
  border-bottom: 1px solid #e5e5e5;
}

.transaction-item {
  display: grid;
  grid-template-columns: 35px 60px 1fr 90px 110px;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  font-size: 13px;
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: white;
  margin: 0 auto;
}

.expense-icon {
  background: #ff4757;
}

.income-icon {
  background: #2ed573;
}

.col-type {
  font-size: 13px;
  color: #333;
}

.col-desc {
  font-size: 13px;
  color: #666;
}

.col-date {
  font-size: 13px;
  color: #666;
}

.col-amount {
  text-align: right;
}

.amount-value {
  font-size: 13px;
  font-weight: 500;
}

.amount-value.expense {
  color: #333;
}

.amount-value.income {
  color: #52c41a;
}

.balance-after {
  font-size: 11px;
  color: #52c41a;
  margin-top: 2px;
}

.pagination {
  text-align: center;
  margin-top: 16px;
  padding: 12px;
}

.page-info {
  font-size: 14px;
  color: #666;
}

/* 右侧信息栏 */
.sidebar-info {
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.consumption-detail,
.bank-cards {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
}

.consumption-detail h3,
.bank-cards h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 18px 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.user-details {
  flex: 1;
}

.username {
  font-size: 13px;
  color: #333;
  font-weight: 500;
}

.user-id {
  font-size: 11px;
  color: #666;
  margin-top: 2px;
}

.detail-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-item .label {
  font-size: 12px;
  color: #666;
}

.detail-item .value {
  font-size: 12px;
  color: #333;
}

.bank-card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bank-card-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.bank-card-item:hover {
  border-color: #6c5ce7;
  background: #f8f7ff;
}

.bank-icon {
  width: 18px;
  height: 18px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
}

.bank-ccb {
  background: #4CAF50;
}

.bank-icbc {
  background: #FF9800;
}

.bank-abc {
  background: #2196F3;
}

.bank-name {
  flex: 1;
  font-size: 12px;
  color: #333;
}

.action-link {
  background: none;
  border: none;
  color: #6c5ce7;
  font-size: 11px;
  cursor: pointer;
  text-decoration: underline;
}

.action-link:hover {
  color: #5a4fcf;
}
</style>