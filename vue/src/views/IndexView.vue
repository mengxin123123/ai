
<template>
  <div class="index-container">
    <!-- 背景图片区域 -->
    <div class="hero-section">
      <img :src="backgroundImage" alt="背景" class="background-image">
      <div class="hero-content">
        <div class="text-content">
          <h1 class="hero-title">AI科创大模型</h1>
          <p class="hero-subtitle">AI科创先行行业多多年，拥行业知识和大模型能力相结合，为事业行业打造大模型</p>
        </div>
        <div class="button-group">
          <button class="primary-btn">定制模型</button>
        </div>
      </div>
    </div>

    <!-- 功能介绍区域 -->
    <div class="features-section">
      <div class="section-header">
        <h2 class="section-title">功能介绍</h2>
        <a href="#" class="more-link">查看更多></a>
      </div>
      <div>
        <img src="./photos/function1.png" class="function1">
        <img src="./photos/function2.png" class="function2">
        <div class="point1">
          <hr class="line1"></hr>
          <img src="./photos/function-document.png" class="function-document">
        </div>
        <div class="point2">
          <hr class="line2">
          <img src="./photos/function-text.png" class="function-text">
        </div>
        <div class="point3">
          <hr class="line3">
          <img src="./photos/function-knowledge.png" class="function-knowledge">
        </div>
        <div class="point4">
          <hr class="line4">
          <img src="./photos/function-understanding.png" class="function-understanding">
        </div>
      </div>
      
      <div class="features-visual">
        
        <div class="feature-item feature-item-1">
          <div class="feature-header1">
        
            <h3 class="feature-title">文本生成</h3>
          </div>
          <p class="feature-desc1">支持各类知识内容，满足复杂语境<br>质量生成各类型文本内容。</p> 
        </div>
        
        
        <div class="feature-item feature-item-2">
          <div class="feature-header2">
            <h3 class="feature-title">文档解析</h3>
          </div>
         <p class="feature-desc2">支持上传文档，通过智能分析,<br>帮助识别并解析文档内容。</p> 
        </div>
        
        
        <div class="feature-item feature-item-3">
          <div class="feature-header3">
            
            <h3 class="feature-title">语义理解</h3>
          </div>
         <p class="feature-desc3">支持对语境的内容，通过模型理解<br>行为语的语义理解。</p> 
        </div>
        
         
        <div class="feature-item feature-item-4">
          <div class="feature-header4">
            
            <h3 class="feature-title">知识总结</h3>
          </div>
          <p class="feature-desc4">支持对提问或生成的内容进行归纳<br>以及简明的结论输出。</p>
        </div>
      </div> 
    </div>

    <!-- 优势区域 -->
    <div class="advantages-section">
      <div class="advantages-header">
        <h2 class="advantages-title">我们的优势</h2>
      </div>
      <div class="advantages-tabs-container">
        <div class="advantages-tabs">
          <div 
            v-for="(advantage, index) in advantages" 
            :key="index"
            :class="['advantages-tab', { active: selectedAdvantageIndex === index }]"
            @click="selectedAdvantageIndex = index"
          >
            {{ advantage.title }}
          </div>
          <img src="./photos/advantage.png" alt="" class="advantageicon">
        </div>
      </div>
      <div class="advantages-content">
        <div class="advantage-detail">
          <div class="advantage-text-content">
            <h3 class="advantage-detail-title">{{ currentAdvantage.titlecontent }}</h3>
            <p class="advantage-detail-desc">{{ currentAdvantage.description }}</p>
            <button class="advantage-btn">立即定制 <span class="btn-arrow">→</span></button>
          </div>
        </div>
      </div>
    </div>

    <!-- 模型服务行业 -->
    <div class="industry-section">
      <img src="./photos/modelserve-icon.png" alt="" class="modelicon  flip-horizontal">
      <div class="industry-header">
        <h2 class="industry-main-title">模型服务行业</h2>
      </div>
      <div class="industry-tabs-container">
        <div class="industry-tabs">
          <div 
            v-for="(industry, index) in industries" 
            :key="index"
            :class="['industry-tab', { active: selectedIndustryIndex === index }]"
            @click="selectedIndustryIndex = index"
          >
            {{ industry.title }}
          </div>
        </div>
      </div>
      <div class="industry-content">
        <div class="industry-detail">
          <div class="industry-text-content">
            <h3 class="industry-detail-title">{{ currentIndustry.title }}行业</h3>
            <p class="industry-detail-desc">{{ currentIndustry.description }}</p>
            <button class="industry-btn">查看详情 <span class="btn-arrow">→</span></button>
          </div>
        </div>
      </div>
    </div>

    <!-- 我们可以定制的大模型 -->
    <div class="models-section">
      <div class="section-header">
        <h2 class="section-title">我们可以定制的大模型</h2>
      </div>
      <div class="models-content">
        <div class="model-tabs-container">
          <div class="model-tabs">
            <div 
              v-for="(model, index) in modelTypes" 
              :key="index"
              :class="['model-tab', { active: selectedModelIndex === index }]"
              @click="selectedModelIndex = index"
            >
              {{ model.title }}
            </div>
          </div>
        </div>
        <div class="model-detail-container">
          <div class="model-detail-content">
            <h3 class="model-detail-title">{{ currentModel.title }}介绍</h3>
            <p class="model-detail-desc">{{ currentModel.description }}</p>
            <button class="model-btn">定制咨询<span class="btn-arrow">→</span></button>
          </div>
        </div>
        <div class="tailoricon-box">
          <img src="./photos/tailormade-icon1.png" alt="" class="tailoricon1">
          <img src="./photos/tailormade-icon3.png" alt="" class="tailoricon3">
          <img src="./photos/tailormade-icon4.png" alt="" class="tailoricon4">
          <div class="tailoricon2-box">
            <img src="./photos/tailormade-icon2.png" alt="" class="tailoricon2">
            <img src="./photos/tailormade-icon2.png" alt="" class="tailoricon2">
            <img src="./photos/tailormade-icon2.png" alt="" class="tailoricon2">
          </div>
        </div>
      </div>
    </div>

    <!-- 底部区域 -->
    <div class="footer-section">
      <div class="footer-content">
        <div class="company-info">
          <div class="company-name">XXXXXXXXXXXX有限公司</div>
          <div class="contact-info">
            <div>地址: 北京市朝阳区三元桥国际商务中心</div>
            <div>电话: 010-00000000</div>
            <div>邮箱: support@modao.cc</div>
          </div>
          <div class="social-links">
            <a href="#" class="social-link"><img src="./photos/weiboicon.png" alt="" class="weiboicon"></a>
            <a href="#" class="social-link"><img src="./photos/weixinicon.png" alt="" class="weixinicon"></a>
            <a href="#" class="social-link"><img src="./photos/Twittericon.png" alt="" class="Twittericon"></a>
          </div>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h3>企业介绍</h3>
            <a href="#">企业介绍</a>
            <a href="#">法律介绍</a>
            <a href="#">关于我们</a>
          </div>
          <div class="link-column">
            <h3>服务范围</h3>
            <a href="#">产品介绍</a>
            <a href="#">制造实力</a>
            <a href="#">服务优势</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>友情链接:</span>
        <a href="#">官网</a> |
        <a href="#">帮助</a> |
        <a href="#">网站</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  data() {
    return {
      backgroundImage: require('../views/photos/IndexViewbag1.jpg'),
              features: [
        {
          title: '文本生成',
          description: '多样的生成内容，满足用户的各种需求，生成优质的文本内容和方案',
          icon: require('../views/photos/IndexViewbag15.png')
        },
        {
          title: '文档解析',
          description: '多种文本类型，满足理解分析，帮助用户有效的理解内容',
          icon: require('../views/photos/IndexViewbag16.png')
        },
        {
          title: '语义理解',
          description: '多种语言理解功能，满足理解需求并给出正确反馈',
          icon: require('../views/photos/IndexViewbag17.png')
        },
        {
          title: '知识总结',
          description: '全面的知识总结功能帮助用户总结内容并给出建议总结',
          icon: require('../views/photos/IndexViewbag18.png')
        }
      ],
      // 优势数据
      selectedAdvantageIndex: 0,
      advantages: [
        {
          title: '支持定制化',
          description: '定制化 AI 助手让更多为您心。深度适配各类场景与功能，为个人用户提供精准化服务，随时随地为您答疑解惑，陪伴您的日常生活。',
          image: require('../views/photos/IndexViewbag20.png'),
          titlecontent:'定制化助手'
        },
        {
          title: '精准语义理解',
          description: '通过先进的自然语言处理技术，精准理解用户意图和上下文语境，提供更加准确的回答和服务，减少沟通成本。',
          image: require('../views/photos/IndexViewbag20.png'),
          titlecontent:'精准理解'
        },
        {
          title: '推理能力强',
          description: '基于深度学习和知识图谱的强大推理能力，能够从已有信息中推导出新的见解，解决复杂问题，提供创新思路。',
          image: require('../views/photos/IndexViewbag20.png'),
          titlecontent:'超强推理'
        },
        {
          title: '全业务场景覆盖',
          description: '覆盖金融、医疗、教育、零售等多个行业场景，提供全方位的智能解决方案，满足不同领域的专业需求。',
          image: require('../views/photos/IndexViewbag20.png'),
          titlecontent:'全场景覆盖'
        },
        {
          title: '海量行业数据',
          description: '基于海量的行业数据训练，具备丰富的专业知识和经验，能够提供更加专业、准确的行业解决方案。',
          image: require('../views/photos/IndexViewbag20.png'),
          titlecontent:'海量数据'
        }
      ],
      // 行业数据
      selectedIndustryIndex: 0,
      industries: [
        {
          title: '金融',
          description: '金融模型实现 AI 助手，深度解析数据产品，监测风险预警等，合规检查与风控，防范网络攻击，为金融决策提供支持，为金融决策提供支持。',
          image: require('../views/photos/IndexViewbag1.jpg')
        },
        {
          title: '电商',
          description: '电商模型提供智能推荐系统、客户行为分析、库存管理优化、价格策略制定和个性化营销方案，帮助电商平台提升用户体验和销售转化率。',
          image: require('../views/photos/IndexViewbag1.jpg')
        },
        {
          title: '医疗',
          description: '医疗模型支持医学影像分析、疾病诊断辅助、药物研发加速、患者数据管理和个性化治疗方案制定，提高医疗效率和准确性。',
          image: require('../views/photos/IndexViewbag1.jpg')
        },
        {
          title: '教育',
          description: '教育模型提供个性化学习路径、智能题库生成、学习进度跟踪、教学内容优化和学生表现分析，促进因材施教和教学质量提升。',
          image: require('../views/photos/IndexViewbag1.jpg')
        },
        {
          title: '品牌广告',
          description: '品牌广告模型支持目标受众分析、创意内容生成、广告效果预测、投放策略优化和品牌声誉监测，提升广告投放的精准度和转化率。',
          image: require('../views/photos/IndexViewbag1.jpg')
        },
        {
          title: '新闻媒体',
          description: '新闻媒体模型提供内容自动生成、热点事件预测、用户兴趣分析、个性化推荐和内容质量评估，帮助媒体机构提高内容生产效率和用户粘性。',
          image: require('../views/photos/IndexViewbag1.jpg')
        }
      ],

      // 大模型类型
      selectedModelIndex: 0,
      modelTypes: [
        {
          title: '营销大模型',
          description: '通过大数据和AI技术，为企业提供精准的营销策略和方案，提升营销效果和ROI。通过大数据和AI技术，为企业提供精准的营销策略和方案，提升营销效果和ROI。通过大数据和AI技术，为企业提供精准的营销策略和方案，提升营销效果和ROI。',
          image: require('../views/photos/777.png')
        },
        {
          title: '人力大模型',
          description: '智能化的人力资源管理系统，提供招聘、培训、绩效评估等全方位解决方案。',
          image: require('../views/photos/IndexViewbag19.png')
        },
        {
          title: '电商大模型',
          description: '为电商平台提供智能推荐、定价策略、库存管理等多维度的优化方案。',
          image: require('../views/photos/IndexViewbag19.png')
        },
        {
          title: '时序大模型',
          description: '针对时间序列数据进行分析和预测，为企业决策提供数据支持。',
          image: require('../views/photos/IndexViewbag19.png')
        },
        {
          title: '品质管理大模型',
          description: '通过AI技术实现产品质量的全程监控和管理，提升产品品质。',
          image: require('../views/photos/IndexViewbag19.png')
        },
        {
          title: '互联网产品大模型',
          description: '为互联网产品提供用户行为分析、产品优化、运营策略等解决方案。',
          image: require('../views/photos/IndexViewbag19.png')
        }
      ]
    }
  },
  computed: {
    currentModel() {
      return this.modelTypes[this.selectedModelIndex]
    },
    currentAdvantage() {
      return this.advantages[this.selectedAdvantageIndex]
    },
    currentIndustry() {
      return this.industries[this.selectedIndustryIndex]
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
/* 引入思源黑体（Noto Sans SC）的多个字重 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap');
.function-document{
  position: relative;
  width:100px;
  left: 440px;
  bottom: 100px;

}

.tailoricon-box{
  top: 505px;
  position: absolute;
  width: auto;
  left: 1000px;
}
.tailoricon1{
  width: 870px;
  position: relative;
  top: -320px;
  left: -238px;
  z-index: 10;
}
.tailoricon2-box{
  display: flex;
  flex-direction: column;
  position: relative;
  top: -1238px;
  left: -87px;
}
.tailoricon2{
  width: 200px;
  position: relative;
  margin: -78px;
}
.tailoricon3{
  width: 200px;
  position: relative;
  top: -1050px;
  left: 350px;
  z-index: 15;
}
.tailoricon4{
  width: 400px;
  position: relative;
  top: -875px;
  left: -208px;
  z-index:5 ;
}
.modelicon{
  position: absolute;
  width: 1080px;
  left: 168px;
  top: 58px;
}
.flip-horizontal {
   transform: scaleX(-1); 
  }
.advantageicon{
  position: absolute;
  width: 640px;
  left: 720px;
  top: -70px;
  z-index: 0;
}
.line1{
  width: 526px;
  margin-left: 9px;
  margin-top: 4px;
}
.point1{
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #BEBEBE; 
  background-color: white;
  left: 985px;
  top: 870px;
  z-index: 20;
}
.function-text{
  position: relative;
  width:65px;
  left: -470px;
  top: -115px;
}
.line2{
  width: 480px;
  margin-left: -478px;
  margin-top: 4px;
}
.point2{
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #BEBEBE;
  background-color: white;
  left: 880px;
  top: 940px;
  z-index: 30;
}
.function-knowledge{
  position: relative;
  width: 75px;
  left: 300px;
  top: -120px;
}
.line3{
  width: 366px;
  margin-left: 8px;
  margin-top: 4px;
}
.point3{
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #BEBEBE;
  background-color: white;
  left: 1060px;
  top: 1090px;


}
.function-understanding{
  position: relative;
  width: 80px;
  left: -375px;
  top: -102px;
}
.line4{
  width: 380px;
  margin-left: -380px;
  margin-top: 4px;
}
.point4{
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid #BEBEBE;
  background-color: white;
  border-radius: 50%;
  left: 870px;
  top: 1145px;
 

}
.function1{
  position: absolute;
  width: 436px;
  left: 736px;
  top: 846px;
  z-index: 10;
}
.function2{
  position: absolute;
  width: 494px;
  left: 714px;
  top: 886px;
}
.index-container {
  min-height: 100vh;
  background: #fff;
  overflow-x: hidden;
}

.hero-section {
  height: 545px; /* 增加高度 */
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
}

.background-image {
  width: 1925px;
  height: 545px;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center top; /* 图片从顶部开始显示 */
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1; /* 确保内容在背景图片上层 */
}

.text-content {
  position: relative;
  left: 278px;
  top: -35px;
}

.hero-title {
  font-size: 62px;
  font-weight: 700;
  margin-bottom: 0px;
  letter-spacing: 3px;
  color: rgba(56, 116, 251, 1);
  font-family: 'Noto Sans SC', sans-serif;
}

.hero-subtitle {
  font-size: 23px;
  line-height: 1.6;
  color:rgba(102, 102, 102, 1);
  font-family: 'PingFang SC', 'Helvetica Neue', sans-serif;
  max-width: 460px;
  position: relative;
  top: 14px;
}

.button-group {
  display: flex;
  position: relative;
  left: 278px;
  top: 15px;
}

.primary-btn {
  padding: 12px 38px;
  font-size: 21px;
  background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0), rgba(86, 118, 237, 1)),
    linear-gradient(90deg, rgba(184, 134, 248, 1), rgba(184, 134, 134, 0));
  color: #FFFFFF;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(86, 118, 237, 0.5);
  position: relative;
  top: 0px;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(86, 118, 237, 0.5);
  background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0.1), rgba(76, 108, 227, 1)),
    linear-gradient(90deg, rgba(174, 124, 238, 1), rgba(184, 134, 134, 0.1));
}

.section-header {
  text-align: center;
  margin-bottom: 0px;
}

.section-title {
  color: #333333;
  margin-bottom: -70px;
  font-size: 48px;
  font-weight: 600;
  font-family: 'Noto Sans SC', sans-serif;
  letter-spacing: 3px;
}

.section-subtitle {
  font-size: 36px;
  color: rgba(102, 102, 102, 0.8);
  font-family: 'PingFang SC', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

.features-section {
  padding: 80px 0 0; /* 移除底部内边距 */
  background-color: #E5EEFF;
  margin-top: -12px; /* 保持与下方区域的间距 */
  width: 1925px;
  height: 806px; /* 设置一个固定的高度，确保图片能完全显示 */
}

.more-link {
  color: #3874FB;
  font-size: 22px;
  letter-spacing: 4px;
  text-decoration: none;
  display: inline-block;
  margin-top:-5px;
}

.features-visual {
  position: relative;
  height: 600px;
  max-width: 1400px;
  margin: 0 auto;
}

.features-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.center-circle {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #3874FB, #5B8DEF);
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 30px rgba(56, 116, 251, 0.3);
}

.center-ring {
  width: 300px;
  height: 300px;
  border: 15px solid rgba(56, 116, 251, 0.15);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: inset 0 0 20px rgba(56, 116, 251, 0.1);
}

.feature-item {
  position: absolute;
  width: 300px;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.feature-item-1 {
  top: 10%;
  left: 5%;
}

.feature-item-2 {
  top: 10%;
  right: 5%;
}

.feature-item-3 {
  bottom: 10%;
  left: 5%;
}

.feature-item-4 {
  bottom: 10%;
  right: 5%;
}

.feature-header1 {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  top: -14px;
  left:160px;

}
.feature-header2 {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  top: -84px;
  left: 10px;

}
.feature-header3 {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  top: -172px;
  left:260px;

}
.feature-header4 {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  top: -228px;
  left: -68px;

}

.feature-icon-wrapper {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  box-shadow: 0 4px 15px rgba(56, 116, 251, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.feature-icon {
  width: 35px;
  height: 35px;
  object-fit: contain;
  opacity: 0.9;
}

.feature-title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #333333;
  margin: 0;
}

.feature-desc1 {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-left: 65px;
  width: 400px;
  position: relative;
  top: -8px;
  left: 10px;

}
.feature-desc2 {
  font-size: 18px;
  letter-spacing: 1px;
  color: #666;
  line-height: 1.6;
  margin-left: 65px;
  width: 400px;
  position: relative;
  top: -75px;
  left: -245px;
  text-align: right;
}
.feature-desc3 {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-left: px;
  width: 400px;
  position: relative;
  top: -165px;
  left: 166px;
  letter-spacing: 1px;
}
.feature-desc4 {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-left: 65px;
  width: 400px;
  position: relative;
  top: -220px;
  left: -325px;
  text-align: right;
  letter-spacing: 1px;
  }

.connecting-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.line {
  position: absolute;
  background: linear-gradient(to right, rgba(56, 116, 251, 0.1), rgba(56, 116, 251, 0.3));
  z-index: 1;
}

.line-1, .line-2, .line-3, .line-4 {
  height: 2px;
  width: 150px;
}

.line-1 {
  top: 30%;
  left: 25%;
  transform: rotate(45deg);
}

.line-2 {
  top: 30%;
  right: 25%;
  transform: rotate(-45deg);
}

.line-3 {
  bottom: 30%;
  left: 25%;
  transform: rotate(-45deg);
}

.line-4 {
  bottom: 30%;
  right: 25%;
  transform: rotate(45deg);
}

.dot {
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #3874FB, #5B8DEF);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px rgba(56, 116, 251, 0.5);
}

.dot-1 {
  top: 25%;
  left: 35%;
}

.dot-2 {
  top: 25%;
  right: 35%;
}

.dot-3 {
  bottom: 25%;
  left: 35%;
}

.dot-4 {
  bottom: 25%;
  right: 35%;
}

/* 添加背景装饰元素 */
.features-section::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(56, 116, 251, 0.1) 0%, rgba(245, 248, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.features-section::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(56, 116, 251, 0.08) 0%, rgba(245, 248, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

/* 优势区域样式 */
.advantages-section {
  padding: 80px 0;
  background-image: url(../views/photos/advantage-background.png);
  width: 1920px;
  height: 670px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  
}

.advantages-header {
  text-align: center;
  margin-bottom: 0px;
  position: relative;
  top: 14px;
  left: -560px;
  letter-spacing: 2px;
}

.advantages-title {
  font-size: 48px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Noto Sans SC', sans-serif;
}

.advantages-tabs-container {
  margin-bottom: 60px;
  position: relative;
  left: 304px;
  width: 1400px;
}

.advantages-tabs {
  display: flex;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.advantages-tab {
  font-family: 'Noto Sans SC', sans-serif;
  padding: 15px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 26px;
  color: #666666;
  position: relative;
  font-weight: 600;
  top: 4px;
  left: -250px;
  z-index: 10;
}

.advantages-tab.active {
  color: #3874FB;
  font-weight: 600;
}

.advantages-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 22px;
  width: 73%;
  height: 3px;
  background: #3874FB;
}

.advantages-content {
  max-width: 1200px;
  position: relative;
}

.advantage-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.advantage-text-content {
  flex: 1;
  max-width: 500px;
  position: relative;
  left: 276px;
  top:-15px;

}

.advantage-detail-title {
  font-size: 30px;
  font-weight: 600;
  font-family: 'Noto Sans SC', sans-serif;
  color: #333;
  
}

.advantage-detail-desc {
  font-size: 20px;
  line-height: 1.6;
  color: #666;
  font-weight: normal;
  font-family: 'Noto Sans SC', sans-serif;
  position: relative;
  top: 30px;
  
}

.advantage-btn {
  padding: 8px 18px;
  font-size: 18px;
  background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0), rgba(86, 118, 237, 1)),
    linear-gradient(90deg, rgba(184, 134, 248, 1), rgba(184, 134, 134, 0));
  color: #FFFFFF;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(86, 118, 237, 0.4);
  position: absolute;
  top: 232px;
  
}

.advantage-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(86, 118, 237, 0.5);
  background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0.1), rgba(76, 108, 227, 1)),
    linear-gradient(90deg, rgba(174, 124, 238, 1), rgba(184, 134, 134, 0.1));
}

.advantage-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.advantage-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
}

@media (max-width: 1200px) {
  .advantage-info {
    flex-direction: column;
  }
  
  .advantage-image {
    width: 100%;
    max-width: 500px;
    margin-top: 30px;
  }
}

.advantages-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 60px;
}

.advantages-left {
  flex: 1;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.advantage-item {
  background: #F5F8FF;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.advantage-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.advantage-text {
  font-size: 16px;
  color: #333;
  text-align: center;
}

.advantages-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.advantages-image {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.feature-card:hover,
.advantage-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.footer-section {
  background: #333333;
  padding: 0;
  color: #FFFFFF;
  width: 1925px;
  height: 400px;
  position: relative;
}

.footer-content {
  margin: 0 auto;
  padding: 60px 100px;
  display: flex;
  justify-content: space-between;
}

.company-info {
  
  position: relative;
  left: 55px;
}

.company-name {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
}

.contact-info {
  font-size: 14px;
  line-height: 2;
  color: rgba(255, 255, 255, 0.7);
  width: 400px;
}

.contact-info div {
  margin-bottom: 10px;
}
.el-icon-s-home{
  size: 10px;
}
.social-links {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
.weiboicon{
  width: 25px;
}
.weixinicon{
  width: 25px;
}
.Twittericon{
  width: 25px;
}
.social-link {
  width: 70px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.footer-links {
  display: flex;
  gap: 200px;
  margin-right: 100px;
}

.link-column {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 200px;
  width: 200px;
}

.link-column h3 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #FFFFFF;
}

.link-column a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.link-column a:hover {
  color: #FFFFFF;
}

.footer-bottom {
  position: absolute;
  bottom: 0;
  left: 55px;
  right: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  text-align: left;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 100px;
}

.footer-bottom span {
  margin-right: 20px;
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin: 0 15px;
  transition: color 0.3s ease;
}

.footer-bottom a:hover {
  color: #FFFFFF;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 40px;
  }

  .footer-links {
    gap: 40px;
  }

  .company-info {
    max-width: 100%;
  }
}

.industry-section {
  background-image: url(../views/photos/modelserve-background.png);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  height: 670px;
  width: 1925px;
}

.industry-header {
  text-align: center;
  margin-bottom: 40px;
}

.industry-main-title {
  font-size: 48px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  left: 220px;
  top: 100px;
  font-family: 'Noto Sans SC', sans-serif;
  letter-spacing: 3px;
}

.industry-tabs-container {

  margin-bottom: 60px;
}

.industry-tabs {
  display: flex;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  left: 375px;
  top: 70px;

}

.industry-tab {
  padding: 15px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
  position: relative;
  margin: 0 22px;
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 24px;
  font-weight: 600;
}

.industry-tab.active {
  color: #3874FB;
  font-weight: 600;
}

.industry-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 3px;
  background: #3874FB;
}

.industry-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.industry-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  position: relative;
  left: 650px;
  top: 52px;
}

.industry-text-content {
  flex: 1;
  max-width: 500px;
}

.industry-detail-title {
  color: #333;
  margin-bottom: 30px;
   font-size: 30px;
  font-weight: 600;
  font-family: 'Noto Sans SC', sans-serif;
}

.industry-detail-desc {
  font-size: 20px;
  line-height: 1.6;
  color: #666;
  font-weight: normal;
  font-family: 'Noto Sans SC', sans-serif;
}

.industry-btn {
background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0), rgba(86, 118, 237, 1)),
    linear-gradient(90deg, rgba(184, 134, 248, 1), rgba(184, 134, 134, 0));
  color: #FFFFFF;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(86, 118, 237, 0.4);
  padding: 8px 18px;
  font-size: 18px;
  position: absolute;
  top: 232px;

  
}

.industry-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(86, 118, 237, 0.5);
  background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0.1), rgba(76, 108, 227, 1)),
    linear-gradient(90deg, rgba(174, 124, 238, 1), rgba(184, 134, 134, 0.1));
}

.industry-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.industry-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
}

.models-section {
  padding: 100px 0;
  background: #EDF3FD;
  width: 1925px;
  position: relative;
  overflow: hidden;
  height: 910px; /* 增加高度以确保图片完整显示 */
}

.section-header, .models-content {
  position: relative;
  z-index: 1;
}

.models-content {
  max-width: 2800px;
  margin: 0 auto;
  padding: 0 20px;
}

.model-tabs-container {

  margin-top: 120px;

}

.model-tabs {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.model-tab {
  padding: 10px 27px;
  margin: 0 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
  position: relative;
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 20px;
  font-weight: 600;

}

.model-tab.active {
  color: #3874FB;
  font-weight: 600;
  background-color: #4F7CFE;
  color: white;
  border-radius: 30px;
}

.model-detail-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  top: 95px;
}

.model-detail-content {
  flex: 1;
  max-width: 500px;
  position: relative;
  left: -100px;
}

.model-detail-title {
  color: #333;
  font-size: 36px;
  font-weight: 600;
  font-family: 'Noto Sans SC', sans-serif;
  
}
.model-detail-desc {
  font-size: 20px;
  line-height: 1.6;
  color: #666;
  font-weight: normal;
  font-family: 'Noto Sans SC', sans-serif;
  margin-top: 35px;
  width: 400px;
}

.model-btn {
  background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0), rgba(86, 118, 237, 1)),
    linear-gradient(90deg, rgba(184, 134, 248, 1), rgba(184, 134, 134, 0));
  color: #FFFFFF;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(86, 118, 237, 0.4);
  padding: 8px 18px;
  font-size: 18px;
  position: absolute;
  top: 330px;

}

.model-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(86, 118, 237, 0.5);
  background: 
    linear-gradient(90deg, rgba(15, 64, 64, 0.1), rgba(76, 108, 227, 1)),
    linear-gradient(90deg, rgba(174, 124, 238, 1), rgba(184, 134, 134, 0.1));
}

.model-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.model-detail-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
}

@media (max-width: 1200px) {
  .model-info {
    flex-direction: column;
  }

  .model-image {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantages-container {
    flex-direction: column;
  }

  .advantage-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .industry-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .models-content {
    flex-direction: column;
  }

  .models-left {
    flex-direction: column;
  }

  .model-types {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .model-type {
    flex: 1;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .features-grid,
  .advantage-grid {
    grid-template-columns: 1fr;
  }

  .industry-grid {
    grid-template-columns: 1fr;
  }
}
</style> 