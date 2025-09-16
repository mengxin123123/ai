<template>
  <div class="member-center-container">
    <div class="banner-background">
      <!-- 顶部标题区域 -->
      <div class="member-header">
        <div class="header-content">
          <!-- <div class="title-container">
            <h1 class="title">会员中心</h1>
            <img class="title-icon" src="@/views/photos/MemberCenter.png" alt="会员图标">
          </div>
          <!-- 会员促销信息 -->
          <!-- <div class="promotion-banner">
            <span>各种会员类型续费5.5折起</span>
            <button class="btn-renew">立即续费</button>
          </div> --> 
        </div>
      </div>

      <!-- 会员权益区域 -->
      <div class="member-benefits">
        <div class="join-member-card">
          <!-- <h3>加入会员</h3>
          <p>享有更多专用户专属权益</p> -->
          <button class="btn-join">立即加入</button>
        </div>

        <div class="benefits-cards">
          <div class="benefit-card">
            <img class="benefit-icon" src="@/views/photos/Member图片 9.png" alt="专属优惠券">
            <h4 style="color: rgba(105, 96, 224, 1);">专属优惠券</h4>
            <p>每月10次更新</p>
          </div>
          <div class="benefit-card">
            <img class="benefit-icon" src="@/views/photos/Member图片 10.png" alt="模型专区">
            <h4 style="color: rgba(105, 96, 224, 1);">模型专区</h4>
            <p>提费5.5折起</p>
          </div>
          <div class="benefit-card">
            <img class="benefit-icon" src="@/views/photos/Member图片 11.png" alt="积分专区">
            <h4 style="color: rgba(105, 96, 224, 1);">积分专区</h4>
            <p>每月10日更新</p>
          </div>
        </div>
      </div>
      
      <!-- 分隔线 -->
      <div class="divider-line"></div>

      <!-- 滚动信息条 -->
      <div class="info-ticker">
        <div class="ticker-content">
          <span>每月10次专属会员活动，部分会员专属权优惠，非用户请看权益详情！</span>
        </div>
      </div>
    </div>
      
      
    
    <!-- 通知区域外层容器 -->
    <div class="announcement-wrapper">
    
      
      <!-- 小喇叭通知区域 -->
      <div class="announcement-ticker">
        <div class="ticker-icon">
          <i class="el-icon-message-solid"></i>
        </div>
        <div class="ticker-content">
          <marquee scrollamount="3">
            <span class="ticker-item"><span class="highlight-text">月会员专享通道开启</span> 用户1******5加入会员，获得<span class="highlight-text">9月V2会员专享尊贵通道</span></span>
            <span class="ticker-spacer"></span>
            <span class="ticker-item">用户p1******6加入会员，获得<span class="highlight-text">9月V2会员专享尊贵通道</span></span>
          </marquee>
        </div>
      </div>
    </div>
    
    <!-- 会员专属优惠券 -->
    <div class="member-coupons">
      <div class="coupon-header">
        <h2 class="section-title" style="position: relative;left: -300px;">会员专属优惠券</h2>
        <div class="section-subtitle"  style="position: relative;left: -300px;">
          每月10日更 <span class="highlight">免费领</span>。更新会员专属优惠券 
          <span class="link">活动规则></span> 包年终身用户可叠加使用 <span class="link">续费专区></span>
        </div>
      </div>

      <div class="coupons-container">
        <div class="coupon-card">
          <div class="coupon-tag">通用券</div>
          <div class="coupon-info">
            <div class="coupon-header">
              <span style="font-size: 22px;">会员专享通用券</span>
            </div>
            <ul class="coupon-benefits">
              <li style="font-size: 23px;">适用于教育、经营、开放场景</li>
              <li style="font-size: 23px;">适用于企业使用，套装模型产品</li>
              <li style="font-size: 23px;">2023年10月10日有效期</li>
              <li style="font-size: 23px;">V会员和会员均可领取</li>
            </ul>
          </div>
          <div class="coupon-value">
            <div class="value-label">
              <span class="currency" >¥</span>
              <span class="amount">50</span>
            </div>
            <div class="value-desc" style="font-size: 23px;">满¥200可用</div>
            <button class="btn-get" style="font-size: 23px;">立即领取</button>
          </div>
        </div>

        <div class="coupon-card premium">
          <div class="coupon-tag premium-tag">专享券</div>
          <div class="coupon-info">
            <div class="coupon-header">
              <span style="font-size: 23px;">V会员专享通用券</span>
            </div>
            <ul class="coupon-benefits">
              <li style="font-size: 23px;">适用于教育、经营、开放场景</li>
              <li style="font-size: 23px;">适用于企业使用，套装模型产品</li>
              <li style="font-size: 23px;">2023年10月10日有效期</li>
              <li style="font-size: 23px;">仅限V会员领取</li>
            </ul>
          </div>
          <div class="coupon-value">
            <div class="value-label">
              <span class="currency">¥</span>
              <span class="amount">150</span>
            </div>
            <div class="value-desc" style="font-size: 23px;">满¥500可用</div>
            <button class="btn-get">立即领取</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 金秋上云季续费专区 -->
    <div class="renewal-section">
      <h2 class="section-title">金秋上云季 续费专区</h2>
      <p class="section-subtitle">
        即会员福利即将与你共享，<span class="link-button">加入会员，更优惠！</span>
      </p>

      <div class="renewal-card">
        <div class="renewal-info">
          <h3>金秋上云·续费专区</h3>
          <p>赶紧借助新功能提高效率的同时产品品质再度升级</p>
          <button class="btn-renew-blue">立即续费</button>
        </div>

        <div class="discount-grid">
          <div class="discount-item">5.5折起</div>
          <div class="discount-item">4折起</div>
          <div class="discount-item">4折起</div>
          <div class="discount-item">8.9折起</div>
          <div class="discount-item">3.6折起</div>
          <div class="discount-item">3.6折起</div>
        </div>

        <div class="renewal-image">
          <img src="@/views/photos/图片 12.png" alt="续费图片">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberCenter',
  data() {
    return {
      // 数据可以根据需要添加
    }
  },
  methods: {
    // 方法可以根据需要添加
  }
}
</script>

<style scoped>
.member-center-container {
  min-height: 100vh;
  /* background: #f5f7fb; */
  font-family: 'PingFang SC', 'Helvetica Neue', sans-serif;
  /* color: #333; */
  padding-bottom: 50px;
  padding-top: 80px; /* 添加顶部内边距，等于导航栏高度 */
}

.banner-background {
  background-image: url('@/views/photos/MemberCenterbackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 700px;
  padding-bottom: 0px;
  padding-top: 150px;
  margin-top: 0;
  position: relative;
  /* background-color: #fff; */
}

/* 头部样式 */
.member-header {
  padding: 0 15%;
  position: relative;
  background: transparent;
  margin-bottom: 250px;
  top: 30px;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

.title {
  font-size: 86px;
  font-weight: bold;
  margin-right: 20px;
  color: #333;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.7);
}

.title-icon {
  width: 130px;
  height: 120px;
}

.promotion-banner {
  background-color: #ff3b3b;
  color: white;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 36px;
  position: absolute;
  top: 232px;
  left: 15%;
  box-shadow: 0 4px 10px rgba(255, 59, 59, 0.3);
}

.btn-renew {
  background-color: white;
  color: #ff3b3b;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
}

/* 会员权益区域 */
.member-benefits {
  margin: 0 15%;
  display: flex;
  gap: 30px;
  position: relative;
  top: 400px;
}

.join-member-card {
  background-image: url('@/views/photos/图片 8.jpeg');
  background-size: cover; /* 确保图片覆盖整个元素区域 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 防止图片重复 */
  flex: 0 0 30%;
  /* background: linear-gradient(135deg, #8a5bff, #5d49e8); */
  color: white;
  border-radius: 16px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 将按钮放到底部 */
  box-shadow: 0 8px 20px rgba(138, 91, 255, 0.2);
  width: 300px;
  height: 400px;
  overflow: hidden; /* 防止内容溢出 */
  position: relative; /* 添加相对定位以便于按钮定位 */
}

.btn-join {
  background-color:rgba(250, 250, 250, 0);
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 80%; /* 调整按钮宽度 */
  margin: 0 auto; /* 按钮水平居中 */
  font-size: 40px;
  cursor: pointer;
  font-weight: bold;
  z-index: 2; /* 确保按钮位于顶层 */
  position: relative; /* 使z-index生效 */
  margin-bottom: 20px; /* 增加底部间距 */
  position: relative;
  top: 40px;
}

.benefits-cards {
  flex: 0 0 70%;
  display: flex;
  gap: 40px; /* 增加卡片之间的间距 */
  justify-content: space-around; /* 改为space-around使卡片更均匀分布 */
  background-color: rgba(244, 229, 255, 1);
  width: 800px;
  height: 500px;
  position: relative;
  top: -30px;
  left: -100px;
  border-radius: 8px;
  padding: 60px 40px; /* 添加内边距，增加小卡片与外部区域的距离 */
  z-index: 10000000;
}

.benefit-card {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  width: 120px; /* 稍微调整宽度 */
  height: 300px;
  position: relative;
  top: -20px; /* 调整垂直位置，确保卡片在紫色区域内居中 */
  margin: 0 5px; /* 添加左右边距 */
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
}

.benefit-card h4 {
  font-size: 34px;
  margin-bottom: 15px;
  font-weight: 600;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 过长显示省略号 */
}

.benefit-card p {
  font-size: 18px;
  color: #666;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 过长显示省略号 */
}

/* 滚动信息条 */
.info-ticker {
  background:rgba(260, 270, 280, 0);
  /* border: 1px solid #d9edff; */
  margin: 40px 15% 0;
  padding: 15px 25px;
  /* border-radius: 10px; */
  display: flex;
  align-items: center;
  position: relative;
  top: 230px; /* 稍微调整下位置，在分隔线下方显示 */
  left: 600px;
  width: 1200px; /* 增加宽度以显示更多文字 */
  z-index: 10000000;
}

.ticker-icon {
  width: 30px;
  height: 30px;
  background-color: #409eff;
  border-radius: 50%;
  margin-right: 15px;
}

.ticker-content {
  font-size: 28px!important;
  color: #666;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 过长显示省略号 */
  width: 100%; /* 确保宽度足够 */
}

.ticker-content span {
  display: inline-block; /* 使span元素在一行显示 */
}

/* 会员优惠券 */
.member-coupons {
  margin: 0 15%;
  padding: 45px 50px;
  background: rgba(220, 220, 230, 0);
  border-radius: 12px;
  /* box-shadow: 0 6px 20px rgba(0,0,0,0.06); */
  position: relative;
  top: 150px;
  z-index: 5;
}

.coupon-header {
  margin-bottom: 40px;
  /* text-align: center; */
  position: relative;
  top: 30px;
  font-size: 30px;
}

.section-title {
  font-size: 68px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  /* background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(236, 72, 153, 0.2); */
  margin: 40px 15%;
}

.section-subtitle {
  font-size: 35px;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
  margin: 40px 15%;
}

.highlight {
  color: #ff9800;
  font-weight: bold;
}

.link {
  color: #1976d2;
  cursor: pointer;
  margin: 0 4px;
}

.coupons-container {
  display: flex;
  gap: 40px;
  justify-content: space-between;
}

.coupon-card {
  flex: 1;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s;
  height: 310px;
  max-width: 48%;
  position: relative;
}

.coupon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.coupon-tag {
  position: absolute;
  top: 15px;
  left: -8px;
  background: #ff9800;
  color: white;
  padding: 6px 15px;
  font-size: 23px;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 2;
  font-weight: 500;
}

.coupon-tag:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  border-top: 8px solid #cc7a00;
  border-left: 8px solid transparent;
}

.premium-tag {
  background: #ff5722;
}

.premium-tag:before {
  border-top: 8px solid #c41c00;
}

.coupon-info {
  flex: 3;
  background: white;
  padding: 25px 25px 25px 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-top: 48px;
}

.coupon-info::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: #f0f0f0;
}

.coupon-header {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.coupon-card .coupon-header {
  margin-bottom: 15px;
  position: relative;
  padding-left: 0;
  font-size: 18px;
}

.coupon-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  top: 10px;
}

.coupon-benefits li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.coupon-benefits li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #999;
}

/* .coupon-benefits li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #8B5CF6;
  font-weight: bold;
}

.premium .coupon-benefits li:before {
  color: #F59E0B;
} */

.coupon-value {
  flex: 1.5;
  background: #ff9800;

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  text-align: center;
  position: relative;
  min-width: 150px;
}

.coupon-value::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 0;
  height: 100%;
  width: 20px;
  background-image: radial-gradient(circle at 10px 12px, transparent 10px, #ff9800 10px, #ff9800 10px);
  background-size: 20px 20px;
  background-repeat: repeat-y;
}

.premium .coupon-value {
  background: #ff5722;
}

.premium .coupon-value::before {
  background-image: radial-gradient(circle at 10px 12px, transparent 10px, #ff5722 10px, #ff5722 10px);
}

.value-label {
  margin-top: 10px;
}

.currency {
  font-size: 22px;
  vertical-align: top;
  position: relative;
  top: 5px;
}

.amount {
  font-size: 42px;
  font-weight: bold;
  line-height: 1;
  margin-top: 5px;
}

.value-desc {
  font-size: 15px;
  margin: 10px 0 25px;
}

.btn-get {
  background: white;
  color: #ff9800;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  width: 80%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 5px;
}

.regular .btn-get {
  color: #8B5CF6;
}

.premium .btn-get {
  color: #F59E0B;
}

.btn-get:hover {
  background: #fffaf3;
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.2);
}

.premium .btn-get {
  color: #ff5722;
}

/* 续费专区 */
.renewal-section {
  background-color: rgba(225, 230, 242, 1);
  margin: 0px;
  padding-top: 30px;
  text-align: left;
  position: relative;
  width: 100%;
  height: 1000px;
  top: 150px;
}

.renewal-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(244, 229, 255, 0.3) 0%, rgba(244, 229, 255, 0.1) 100%);
  border-radius: 20px;
  z-index: -1;
  pointer-events: none;
}

.renewal-section .section-title {
  font-size: 68px;
  font-weight: bold;
  margin: 40px 15%;
  color: #333;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(236, 72, 153, 0.2);
  text-align: left;
  width: auto;
  display: inline-block;
}

.renewal-section .section-subtitle {
  font-size: 35px;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
  text-align: left;
}

.link-button {
  color: #1976d2;
  /* background: #e3f2fd; */
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 35px;
}

.renewal-card {
  background: rgba(202, 213, 242, 1);
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  padding: 50px;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 40px 15%;
  height: 400px;
  border: 2px solid white;
}

.renewal-info {
  flex: 0 0 30%;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.renewal-info h3 {
  font-size: 40px;
  margin-bottom: 35px;
  font-weight: bold;
  color: #333;
}

.renewal-info p {
  font-size: 24px;
  color: #666;
  margin-bottom: 50px;
  line-height: 1.6;
}

.btn-renew-blue {
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 40px;
  font-size: 24px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  width: fit-content;
}

.btn-renew-blue:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.discount-grid {
  flex: 0 0 45%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  padding: 0 30px;
  align-self: center;
  position: relative;
}

.discount-grid::after {
  content: '';
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 80%;
  background: white;
}

.discount-item {
  background: rgba(202, 213, 242, 1);
  padding: 25px 15px;
  border-radius: 16px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  color: #8B5CF6;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.discount-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  color: white;
}

.renewal-image {
  flex: 0 0 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.renewal-image img {
  max-height: 280px;
  transition: transform 0.5s;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
}

.renewal-image img:hover {
  transform: scale(1.05);
}

/* 分隔线 */
.divider-line {
  width: 50%;
  height: 6px;
  background: linear-gradient(to right, transparent, #FFFFFF, #FFFFFF, #FFFFFF, transparent);
  margin: 0 auto;
  position: relative;
  top: 260px;
  left: 233px;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
  z-index: 10000000;
}

/* 通知区域外层容器 */
.announcement-wrapper {
  margin: 20px 15%;
  padding: 20px 30px;
  background-color: rgba(239, 239, 239, 0.36);
  border-radius: 12px;
  position: relative;
  top: 165px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03); */
  border: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 10;
  width: 2050px;
}

.wrapper-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
  position: relative;
}

.wrapper-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 1px;
  background-color: #e0e0e0;
}

/* 小喇叭通知区域 */
.announcement-ticker {
  padding: 12px 20px;
  background-color: rgba(206, 206, 206, 0.27);
  border: 1px solid #ebeef5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 50px;
}

.ticker-icon {
  width: 30px;
  height: 30px;
  background-color: #409eff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 16px;
}

.ticker-content {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  color: #606266;
}

.highlight-text {
  color: #409eff;
  font-weight: 500;
}

.ticker-item {
  display: inline-block;
}

.ticker-spacer {
  display: inline-block;
  width: 50px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .member-header, .member-benefits, .info-ticker, .member-coupons, .renewal-section {
    margin-left: 5%;
    margin-right: 5%;
  }
  
  .member-benefits, .coupons-container {
    flex-direction: column;
  }
  
  .renewal-card {
    flex-direction: column;
  }
  
  .renewal-info, .discount-grid, .renewal-image {
    flex: auto;
    margin-bottom: 20px;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .promotion-banner {
    width: 100%;
    justify-content: space-between;
  }
}
</style> 