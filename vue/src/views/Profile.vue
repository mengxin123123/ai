<template>
  <sidebar-layout active-tab="home">
   <!-- 用户信息区域 -->
      <div class="user-info-section">
        <div class="user-header">
          <div class="user-avatar">
            <img src="@/views/photos/AiAssistant图片 5.png" alt="用户头像" class="avatar-img">
            <div class="user-details-wrapper">
              <div class="username-and-member">
                <span class="username">旺卡</span>
                <span class="member-tag">已开通会员</span>
              </div>
              <div class="user-meta">
                <span>中国 | 18岁 | 男</span>
                <span class="user-bio">记得给自己的开心充值，别让它停机了</span>
              </div>
              <div class="divider"></div>
            </div>
          </div>
          <div class="user-actions-buttons">
            <button class="collection-button">收藏夹</button>
            <button class="identity-verification-button">身份认证</button>
          </div>
        </div>
        <div class="user-announcement">
          <span class="announcement-icon"></span>
          <span class="announcement-text">公告 诚挚邀请您参与我们的【创意服务平台调研问卷】<span class="new-tag">NEW</span></span>
          <span class="announcement-date">2025/07/15</span>
        </div>
      </div>

      <div class="two-column-layout">
        <!-- 左侧内容区域 -->
        <div class="content-wrapper">
          <!-- 股票走势图 -->
          <div class="stock-chart-section">
            <div class="section-header">
              <h3 class="section-title">股票走势</h3>
              <div class="section-subtitle">查看更多股票走势 ></div>
            </div>
            <div class="chart-container">
              <div class="chart-area" ref="chartContainer" id="chartContainer"></div>
              <div class="chart-info">
                <div class="info-item">
                  <div class="info-label">最高股价（/股）</div>
                  <div class="info-value">XXX</div>
                </div>
                <div class="info-item">
                  <div class="info-label">投资金额</div>
                  <div class="info-value">XXX</div>
                </div>
                <div class="info-item">
                  <div class="info-label">昨日收益</div>
                  <div class="info-value">XXX</div>
                </div>
                <div class="info-item">
                  <div class="info-label">月均收入</div>
                  <div class="info-value">XXX</div>
                </div>
              </div>
             
            </div>
          </div>

          <!-- 我的助手 -->
          <div class="my-assistants-section">
            <div class="section-header">
              <h3 class="section-title">我的助手</h3>
              <div class="section-subtitle">更多 ></div>
            </div>
            <div class="assistants-grid">
              <div class="assistant-card" v-for="i in 5" :key="i">
                <div class="assistant-placeholder">DEMO</div>
              </div>
            </div>
          </div>

          <!-- 我的收藏 -->
          <!-- <div class="my-collections-section">
            <div class="section-header">
              <h3 class="section-title">我的收藏</h3>
              <div class="section-subtitle">更多 ></div>
            </div>
            <div class="collections-grid">
              <div class="collection-card" v-for="i in 3" :key="i">
                <div class="collection-placeholder">DEMO</div>
              </div>
            </div>
          </div> -->
        </div>

        <!-- 右侧区域 -->
        <div class="right-sidebar">
          <!-- 广告区域 -->
          <div class="ad-banner">
            <div class="ad-content">
              <h3>智能未来</h3>
              <p>AI让生活更美好</p>
            </div>
          </div>

          <!-- 收益日报 -->
          <div class="daily-earnings-section">
            <div class="section-header">
              <h3 class="section-title">收益日报</h3>
            </div>
            <div class="earnings-content">
              <div class="earnings-item">
                <span class="earnings-label">昨天你的股票上涨了</span>
                <span class="earnings-value">7.4%</span>
              </div>
              <div class="earnings-item">
                <span class="earnings-label">昨天你获得了</span>
                <span class="earnings-value">7.4%收益</span>
              </div>
            </div>
          </div>

          <!-- 钱包区域 -->
          <div class="wallet-section">
            <div class="section-header">
              <h3 class="section-title">钱包</h3>
              <div class="wallet-icon">
                <i class="eye-icon"></i>
              </div>
            </div>
            <div class="wallet-cards">
              <div class="wallet-card">
                <span class="card-value">XX</span>
                <span class="card-label">平台余额</span>
              </div>
              <div class="wallet-card">
                <span class="card-value">XX</span>
                <span class="card-label">店铺余额</span>
              </div>
              <div class="wallet-card">
                <span class="card-value">XX</span>
                <span class="card-label">积分余额</span>
              </div>
            </div>
          </div>

          <!-- 我的收藏 -->
          <div class="my-collections-right-section">
            <div class="section-header">
              <h3 class="section-title">我的收藏</h3>
              <div class="section-more">更多 ></div>
            </div>
            <div class="collections-right-grid">
            <div class="collection-right-card" v-for="i in 3" :key="i">
              <div class="collection-right-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </sidebar-layout>
</template>

<script>
import * as echarts from 'echarts'
import SidebarLayout from '@/components/SidebarLayout.vue'

export default {
  name: 'Profile',
  components: {
    SidebarLayout
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      if (this.$refs.chartContainer) {
        this.chart = echarts.init(this.$refs.chartContainer)
        const option = {
          grid: {
            top: 10,
            right: 10,
            bottom: 20,
            left: 40
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月'],
            axisLine: {
              lineStyle: {
                color: '#ddd'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#eee'
              }
            }
          },
          series: [{
            data: [120, 150, 180, 130, 140],
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#6c5ce7',
              width: 3
            },
            itemStyle: {
              color: '#6c5ce7'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(108, 92, 231, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(108, 92, 231, 0)'
                }]
              }
            }
          }]
        }
        this.chart.setOption(option)
      }
    },
    resizeChart() {
      if (this.chart) {
        this.chart.resize()
      }
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
    window.removeEventListener('resize', this.resizeChart)
  },
  created() {
    window.addEventListener('resize', this.resizeChart)
  }
}
</script>

<style scoped>
.chart-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 在项目之间创建空间 */
  margin-top: 40px;
}

.chart-info .info-item {
  width: calc(50% - 10px); /* 减去一半的间距 */
  margin-bottom: 40px; /* 每行之间的间距 */
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box; /* 确保内边距和边框包含在宽度内 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  height: 130px;
}

.chart-info .info-item:nth-child(odd) {
  margin-right: 20px; /* 奇数项右侧间距 */
}

.chart-info .info-item:nth-child(even) {
  margin-left: 0; /* 偶数项左侧无间距 */
}

.chart-info .info-label {
  font-size: 24px;
  color: #666;
  margin-bottom: 5px;
}

.chart-info .info-value {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* 主内容区域样式 */
.main-content {
  flex: 1;
  padding: 35px;
  background-color: #fff;
  margin: 20px;
  margin-left: 240px;
  margin-right: 320px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
  height: 1370px;
  overflow: hidden;
right: -240px;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 25px;
  margin-top: 25px;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  width: 1370px;
}

/* 右侧区域样式 */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 广告区域样式 */
.ad-banner {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  border-radius: 16px;
  padding: 25px;
  color: white;
  text-align: center;
  height: 310px!important;
  width: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.3);
  overflow: hidden;
  position: relative;
  top: -335px;
  left: -550px;


}

.ad-content h3 {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
}

.ad-content p {
  font-size: 14px;
  opacity: 0.9;
}

/* 收益日报区域样式 */
.daily-earnings-section {
  background: white;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  position: relative;
  top: -330px;
  width: 850px;
left: -550px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-title {
  font-size: 26px!important;
  font-weight: 500;
  color: #333;
  margin: 0;
}

.section-more {
  font-size: 12px;
  color: #999;
  cursor: pointer;
}

.earnings-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.earnings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.earnings-label {
  color: #666;
}

.earnings-value {
  color: #4caf50;
  font-weight: 500;
}

/* 钱包区域样式 */
.wallet-section {
  background: white;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  position: relative;
  top: -350px;
  width: 850px;
left: -550px;
}

.wallet-icon {
  display: flex;
  align-items: center;
}

.eye-icon {
  width: 20px;
  height: 20px;
  background-color: #ddd; /* 临时占位，实际应使用图标 */
  cursor: pointer;
}

.wallet-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.wallet-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 10px 5px;
}

.card-value {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
}

.card-label {
  font-size: 12px;
  color: #999;
}

/* 右侧收藏区域样式 */
.my-collections-right-section {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  margin-bottom: 25px;
  position: relative;
  top: -370px;
  width: 850px;
left: -550px;

height: 275px;
}

.collections-right-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 15px;
}

.collection-right-card {
  background: linear-gradient(to right, #f8f9ff, #f0f3ff);
  border-radius: 12px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.collection-right-card:hover {
  transform: translateX(3px);
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.15);
}

.collection-right-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6c5ce7;
  font-size: 16px;
  font-weight: 500;
}

.user-info-section {
  background: linear-gradient(135deg, #e0e7ff, #f0e0ff);
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1370px;
  height: 310px;

}

.user-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-avatar {
  display: flex;
  align-items: center;
}

.avatar-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
  border: 3px solid #fff;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);
}

.user-details-wrapper {
  display: flex;
  flex-direction: column;
}

.username-and-member {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  position: relative;
  top: 14px;
}

.username {
  font-size: 34px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
}

.member-tag {
  background-color: #ffecb3;
  color: #ffa000;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.member-tag::before {
  content: '●'; /* Or a star icon */
  font-size: 20px;
  margin-right: 5px;
  color: #ffa000;
}

.user-meta {
  font-size: 2cap;
  color: #666;
  position: relative;
  top: 34px;
  font-size: 24px;
}

.divider {
  width: 1000px;
  height: 1px;
  background-color: rgba(187, 187, 187, 1);
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  top: 50px;
}

.user-meta span {
  margin-right: 10px;
}

.user-bio {
  margin-top: 5px;
  color: #555;
}

.user-actions-buttons {
  display: flex;
  gap: 15px;
}

.collection-button,
.identity-verification-button {
  background-color: #fff;
  color: #6c5ce7;
  border: 1px solid #6c5ce7;
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(108, 92, 231, 0.1);
  width: 150px;
  position: relative;
  left: -100px;
}

.collection-button:hover,
.identity-verification-button:hover {
  background-color: #6c5ce7;
  color: #fff;
  box-shadow: 0 4px 10px rgba(108, 92, 231, 0.2);
}

.user-announcement {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 28px;
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  top: 50px;
}

.announcement-icon {
  /* Placeholder for an icon */
  width: 18px;
  height: 18px;
  background-color: #6c5ce7;
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM11 5h2v6h-2V5zm0 8h2v2h-2v-2z"/></svg>') no-repeat center / contain;
  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM11 5h2v6h-2V5zm0 8h2v2h-2v-2z"/></svg>') no-repeat center / contain;
}

.announcement-text {
  flex: 1;
}

.new-tag {
  background-color: #ff4d4f;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
}

.announcement-date {
  font-size: 22px;
  color: #999;
}

/* 用户卡片区域样式 */
.user-card-section {
  grid-column: 1 / 2;
}

.user-card {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-card-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-name {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-tags {
  display: flex;
  gap: 5px;
}

.tag-level, .tag-role {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  border: 1px solid #e6e6e6;
}

.card-content {
  padding: 10px 0;
}

.content-text {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

.content-time {
  font-size: 12px;
  color: #999;
}

/* 股票走势图区域样式 */
.stock-chart-section {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 25px;
  grid-column: 1 / 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  width: 1370px;
  height: 450px;
  
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
}

.section-subtitle {
  font-size: 14px;
  color: #6c5ce7;
  cursor: pointer;
  font-weight: 500;
  margin-right: 0px;
}

.chart-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.chart-area {
  flex: 1;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9fafc;
  position: relative;
  top: 40px;

}



/* 我的助手区域样式 */
.my-assistants-section {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  width:1370px;
  position: relative;
  top: -200px;
  height: 500px;

}

.assistants-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-top: 10px;
}

.assistant-card {
  background: linear-gradient(to bottom, #f8f9ff, #f0f3ff);
  border-radius: 12px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 20px;
}

.assistant-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.15);
}

.assistant-placeholder {
  color: #6c5ce7;
  font-size: 16px;
  font-weight: 500;
}

/* 收益日报区域样式 */
.daily-earnings-section {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  margin-bottom: 25px;
}

.earnings-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 10px;
  background-color: #f9fafc;
  border-radius: 12px;
  padding: 20px;
}

.earnings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px dashed #e0e0e0;
}

.earnings-item:last-child {
  border-bottom: none;
}

.earnings-label {
  font-size: 15px;
  color: #222;
  font-weight: 500;
}

.earnings-value {
  font-weight: 600;
  color: #6c5ce7;
  font-size: 16px;
}

.earnings-item:nth-child(2) .earnings-value {
  color: #ff6b6b;
}

/* 钱包区域样式 */
.wallet-section {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  margin-bottom: 25px;
}

.wallet-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.wallet-card {
  background: linear-gradient(to right, #f8f9ff, #f0f3ff);
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.wallet-card:hover {
  transform: translateX(3px);
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.15);
}

.card-value {
  font-size: 20px;
  font-weight: 600;
  color: #6c5ce7;
}

.card-label {
  font-size: 15px;
  color: #444;
  font-weight: 500;
  margin-bottom: 5px;
}

/* 我的收藏区域样式 */
.my-collections-section {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
}

.collections-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 10px;
}

.collection-card {
  background: linear-gradient(to bottom, #f8f9ff, #f0f3ff);
  border-radius: 12px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.collection-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.15);
}

.collection-placeholder {
  color: #6c5ce7;
  font-size: 16px;
  font-weight: 500;
}

/* 右侧区域样式 */
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 300px;
}

.ad-banner {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  border-radius: 16px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 25px;
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.3);
  overflow: hidden;
  position: relative;
}

.ad-banner::before, .ad-banner::after {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.ad-banner::before {
  top: -50px;
  right: -50px;
  width: 180px;
  height: 180px;
}

.ad-banner::after {
  bottom: -30px;
  left: -30px;
  width: 120px;
  height: 120px;
}

.ad-content {
  text-align: center;
}

.ad-content h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.ad-content p {
  font-size: 16px;
}
</style>