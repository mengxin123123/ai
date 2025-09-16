<template>
  <div class="min-h-screen">
    <!-- Main Content -->
    <main>
      <!-- Banner Carousel Region -->
      <section class="banner">
        <div class="container">
          <h2 class="banner-title">全场景多功能定制化助手</h2>
          <p class="banner-subtitle">海量助手，支持定制化，快来试试AI助手为您的助力下的自己部署</p>
          <div class="banner-carousel">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(slide, index) in bannerSlides" :key="index" class="carousel-item">
                <div class="banner-image-container">
                  <img :src="slide.imageUrl" :alt="slide.alt" class="banner-image" />
                </div>
              </div>
            </div>
            <div class="carousel-indicators">
              <button 
                v-for="(slide, index) in bannerSlides" 
                :key="index" 
                class="carousel-indicator" 
                :class="{ active: currentSlide === index }"
                @click="setCurrentSlide(index)">
              </button>
            </div>
            <div class="carousel-controls">
              <button class="carousel-btn carousel-btn-left" @click="scrollBanner('left')">
                <span class="chevron">←</span>
              </button>
              <button class="carousel-btn carousel-btn-right" @click="scrollBanner('right')">
                <span class="chevron">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">{{ features.title }}</h2>
            <p class="section-subtitle">{{ features.subtitle }}</p>
          </div>
          <div class="features-grid">
            <!-- Main Feature Card -->
            <div class="main-feature-card">
              <h3 class="feature-title1">{{ features.mainFeature.title }}</h3>
              <p class="feature-description1">
                智能撰写小说通感句
                高效成稿文章<br>轻松自如
              </p>
              <!-- <img :src="features.mainFeature.imageUrl" :alt="features.mainFeature.title" class="feature-image" /> -->
              <button class="btn btn-primary">前往获取 →</button>
            </div>

            <!-- Sub Feature Cards -->
            <div class="sub-features-grid">
              <div v-for="(feature, index) in features.subFeatures" :key="index" 
                   :class="['sub-feature-card', `sub-feature-card-${index+1}`]">
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Industry Tags Section -->
      <section class="industries-section">
        <div class="container">
          <div class="industries-grid">
            <div v-for="(industry, index) in industries" :key="index" class="industry-tag">
              <div class="industry-icon-container">
                <img :src="industry.iconUrl" :alt="industry.name" class="industry-icon" />
              </div>
              <span class="industry-name">{{ industry.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Solution Showcase Section -->
      <section class="solutions-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">行业专用助手，使工作更轻松！</h2>
            <p class="section-subtitle">包含各行业专属功能，点击进入，帮助您更高效的完成工作，提高业绩</p>
          </div>
          <!-- Solution Cards Grid -->
          <div class="solution-cards-grid">
            <!-- 动态渲染卡片 -->
            <template v-for="(category, index) in solutions.allCategories">
              <!-- 大卡片 - 当前活跃的解决方案 -->
              <div v-if="activeSolutionIndex === index" :key="'large-'+index" class="solution-large-card" :class="{ 'grid-col-2': index === 1 }">
                <h3 class="featured-solution-title">{{ category.name }}</h3>
                <div class="large-card-content">
                  <div class="large-card-text">
                    <template v-if="index === 0">
                      <p class="featured-solution-description">AI全链路精准股票数据，智能分析市场动态，帮助投资者理性投资</p>
                    </template>
                    <template v-else>
                      <p class="featured-solution-description">{{ category.description }}</p>
                    </template>
                  </div>
                  <button class="btn btn-white">前往体验 →</button>
                </div>
              </div>
              
              <!-- 小卡片 - 非活跃的解决方案 -->
              <div v-else :key="'small-'+index" class="solution-small-card" @click="setActiveSolution(index)">
                <div class="category-icon-container">
                  <span class="category-icon">{{ category.icon }}</span>
                </div>
                <h3 class="tab-title">{{ category.name }}</h3>
                <p class="small-card-description">AI 智能{{ category.name }}，精准高效运营</p>
              </div>
            </template>
          </div>
        </div>
      </section>

      <!-- AI助手展示区域 -->
      <section class="ai-assistants-section">
        <div class="container">
          <h2 class="section-title">海量精品AI助手任你挑选！</h2>
          <p class="section-subtitle">包含各种AI助手，每个助手都有独特的能力，以满足您不同需求！</p>
          
          <!-- 分类标签 -->
          <div class="assistant-categories">
            <button 
              v-for="(category, index) in assistantCategories" 
              :key="index"
              :class="['category-button', { active: activeAssistantCategory === index }]"
              @click="setActiveAssistantCategory(index)"
            >
              {{ category }}
            </button>
          </div>
          
          <!-- 助手卡片网格 -->
          <div class="assistants-grid">
            <div v-for="(assistant, index) in filteredAssistants" :key="index" class="assistant-card">
              <div class="assistant-avatar"></div>
              <h3 class="assistant-name">{{ assistant.name }}</h3>
              <p class="assistant-description">{{ assistant.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
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
            <a href="#" class="social-link"><i class="el-icon-s-home"></i></a>
            <a href="#" class="social-link"><i class="el-icon-chat-dot-round"></i></a>
            <a href="#" class="social-link"><i class="el-icon-share"></i></a>
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
import { reactive, ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default {
  name: 'WorkshopView',
  setup() {
    // 轮播图相关
    const currentSlide = ref(0);
    const autoPlayInterval = ref(null);
    
    // 轮播图数据
    const bannerSlides = reactive([
      { 
        imageUrl: require("@/views/photos/轮播1.png"), 
        alt: "AI金融助手展示" 
      },
      { 
        imageUrl: require("@/views/photos/图片 1004.png"), 
        alt: "AI智能助手展示" 
      },
      { 
        imageUrl: require("@/views/photos/图片 1005.png"), 
        alt: "AI服务展示" 
      }
    ]);
    
    const totalSlides = bannerSlides.length;
    
    // 手动轮播
    const scrollBanner = (direction) => {
      if (direction === 'left') {
        currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
      } else {
        currentSlide.value = (currentSlide.value + 1) % totalSlides;
      }
      resetAutoPlay(); // 手动切换后重置自动播放
    };
    
    // 直接设置当前幻灯片
    const setCurrentSlide = (index) => {
      currentSlide.value = index;
      resetAutoPlay(); // 手动切换后重置自动播放
    };
    
    // 自动轮播
    const startAutoPlay = () => {
      autoPlayInterval.value = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % totalSlides;
      }, 5000); // 5秒切换一次
    };
    
    // 重置自动播放
    const resetAutoPlay = () => {
      if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
        startAutoPlay();
      }
    };
    
    // 组件挂载时启动自动轮播
    onMounted(() => {
      startAutoPlay();
    });
    
    // 组件卸载前清除定时器
    onBeforeUnmount(() => {
      if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
      }
    });
    // Mock data
    const banner = reactive({
      title: "AI助手1",
      subtitle: "请提需求，支持多轮对话，快来试试AI助手的陪伴下的自己拥有...",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/1.jpeg"
    });

    const features = reactive({
      title: "常用助手,让生活更智能!",
      subtitle: "日常生活中常用的功能，协助您解决生活中大多数问题",
      mainFeature: {
        title: "智启文思，笔落生花",
        description: "智能撰写小说通感句，高效成稿文章轻松出",
        imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/3.jpeg"
      },
      subFeatures: [
        { title: "智能编码", description: "智能理解需求变化，学习生成代码，高效工作", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/7.jpeg" },
        { title: "PPT创作", description: "生成创意演示方案，掌控PPT设计，提升演示效果", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/8.jpeg" },
        { title: "视频处理", description: "视频剪辑特效制作，高效处理，快乐剪辑", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/9.jpeg" },
        { title: "智能对话", description: "智能问答，多轮对话，快速获取信息", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/10.jpeg" }
      ]
    });

    const industries = reactive([
      { name: "金融", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/11.jpeg" },
      { name: "电商", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/12.jpeg" },
      { name: "医疗", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/5.jpeg" },
      { name: "教育", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/6.jpeg" },
      { name: "品牌", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/4.jpeg" },
      { name: "新闻", iconUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/2.jpeg" }
    ]);

    // 解决方案相关
    const activeSolutionIndex = ref(0);
    
    const setActiveSolution = (index) => {
      activeSolutionIndex.value = index;
    };
    
    const solutions = reactive({
      title: "行业专用助手，使工作更轻松！",
      subtitle: "包含各行业专属功能，点击进入，帮助您更高效的完成工作，提高业绩",
      allCategories: [
        { 
          name: "慧股智投", 
          icon: "📊", 
          description: "AI全链路精准股票数据，智能分析市场动态，帮助投资者理性投资",
          imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/13.jpeg"
        },
        { 
          name: "电商", 
          icon: "🛒", 
          description: "AI智能电商助手，精准分析市场趋势，优化产品定价，提升销售转化率，实现高效运营",
          imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/12.jpeg"
        },
        { 
          name: "医疗", 
          icon: "🏥", 
          description: "AI智能医疗助手，辅助医生诊断，提供治疗建议，优化医疗资源分配，提高医疗服务质量",
          imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/5.jpeg"
        },
        { 
          name: "教育", 
          icon: "🎓", 
          description: "AI智能教育助手，个性化学习计划，智能答疑解惑，全面提升学习效率，激发学习兴趣",
          imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/6.jpeg"
        },
        { 
          name: "品牌", 
          icon: "🏆", 
          description: "AI智能品牌助手，深度洞察消费者需求，制定精准营销策略，提升品牌影响力，实现品牌价值最大化",
          imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132601223682/image/region_images/supplies_images/AiServiceHomePage/4.jpeg"
        }
      ]
    });

    // AI助手相关
    const assistantCategories = reactive([
      '学习教育类',
      '生活服务类',
      '办公效率类',
      '金融理财类',
      '创意创作类',
      '行业专业类'
    ]);
    
    const activeAssistantCategory = ref(0);
    
    const assistants = reactive([
      {
        name: 'Khanmigo',
        description: '数学/AI学习伴侣，文字作品风格化对话模拟十种作者风格',
        category: 0
      },
      {
        name: '网上编程教学平台',
        description: '编程学习伴侣，解释编程节点与编程技巧，帮助你快速掌握编程技巧',
        category: 0
      },
      {
        name: 'Khanmigo',
        description: '数学/AI学习伴侣，文字作品风格化对话模拟十种作者风格',
        category: 0
      },
      {
        name: '网上编程教学平台',
        description: '编程学习伴侣，解释编程节点与编程技巧，帮助你快速掌握编程技巧',
        category: 0
      },
      {
        name: 'Khanmigo',
        description: '数学/AI学习伴侣，文字作品风格化对话模拟十种作者风格',
        category: 0
      },
      {
        name: '网上编程教学平台',
        description: '编程学习伴侣，解释编程节点与编程技巧，帮助你快速掌握编程技巧',
        category: 0
      },
      // 其他类别的助手
      {
        name: '生活助手',
        description: '帮助你规划日常生活，提供健康饮食建议',
        category: 1
      },
      {
        name: '效率专家',
        description: '提高工作效率，优化时间管理',
        category: 2
      }
    ]);
    
    const filteredAssistants = computed(() => {
      return assistants.filter(assistant => assistant.category === activeAssistantCategory.value);
    });
    
    const setActiveAssistantCategory = (index) => {
      activeAssistantCategory.value = index;
      assistantSlideOffset.value = 0; // 重置轮播位置
    };
    
    return {
      currentSlide,
      bannerSlides,
      scrollBanner,
      setCurrentSlide,
      features,
      industries,
      solutions,
      activeSolutionIndex,
      setActiveSolution,
      
      // AI助手相关
      assistantCategories,
      activeAssistantCategory,
      filteredAssistants,
      setActiveAssistantCategory
    };
  }
}
</script>

<style scoped>
@import './WorkshopView.css';

.min-h-screen {
  min-height: 100vh;
  padding-top: 80px; /* 为顶部导航栏留出空间 */
}

.banner { 
  background: linear-gradient(135deg, #e9e8ff 0%, #d8e3ff 100%);
  padding: 3rem 0 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 1400px; /* 增加最小高度以适应1200px的图片 */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1800px; /* 增加容器的最大宽度 */
  margin: 0 auto;
  padding: 0;
}

.banner-title {
  font-size: 68px;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.8rem;
  position: relative;
  top: -100px;
}

.banner-subtitle {
  font-size:28px;
  color: #666;
  width: 1200px;
  margin: 0 auto 2.5rem;
  max-width: 1000px!important;
  position: relative;
  top: -50px;
}

.banner-carousel {
  position: relative;
  width: 100%; /* 使用100%宽度 */
  max-width: 100%; /* 最大宽度也是100% */
  margin: 0 auto;
  height: 700px; /* 保持高度 */
  overflow: hidden;
  background-color: transparent; /* 设置背景透明 */
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
  width: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  height: 100%;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-indicator.active {
  background-color: #ffffff;
}

.banner-image-container {
  position: relative;
  padding: 0; /* 移除内边距 */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* 设置背景透明 */
  overflow: visible; /* 允许图片溢出容器 */
}

.banner-image { 
  width: 100% !important; /* 使用100%宽度 */
  height: auto !important; /* 高度自动调整，保持比例 */
  min-width: 1500px !important; /* 设置最小宽度 */
  min-height: 1000px !important; /* 设置最小高度 */
  object-fit: contain; /* 保持contain确保图片完整显示 */
  border-radius: 0px; 
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.15); 
  transition: transform 0.5s ease;
  background-color: rgba(0, 0, 0, 0); /* 设置背景透明 */
}

.banner-image:hover {
  transform: scale(1.3); /* 鼠标悬停时放大图片 */
}

.carousel-controls {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 2rem; /* 增加内边距 */
  z-index: 30; /* 提高层级，确保按钮在最上层 */
  pointer-events: none; /* 防止控制区域阻挡点击 */
}

.carousel-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  pointer-events: auto; /* 确保按钮可以点击 */
  position: relative; /* 确保按钮完全显示 */
  z-index: 40; /* 进一步提高按钮的层级 */
  border: 2px solid #e0e0e0; /* 添加边框使按钮更明显 */
}

.carousel-btn:hover {
  background-color: #fff;
}

.chevron {
  font-size: 24px;
  color: #555;
  font-weight: bold;
}

.banner-subtitle {
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto 2rem;
}

.banner-image-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

/* 这个样式定义被上面的样式覆盖了，可以删除 */

.banner-image:hover {
  transform: scale(1.02);
}

.features-section {
  padding: 4rem 1rem;
  background-color: #f3f4f6;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 68px!important;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #6b7280;
  max-width: 900px!important;
  margin: 0 auto;
  font-size: 28px!important;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: 1.5fr 1fr; /* 调整主卡片和子卡片区域的比例 */
  }
}

.main-feature-card {
  /* background: linear-gradient(135deg, #f0e7ff 0%, #e0f2fe 100%); */
  background-image: url("@/views/photos/WorkshopView1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 600px; /* 增加最小高度 */
}
.feature-title1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0.75rem;
  position: relative;
  left: 80px;
  top: 50px;
}
.feature-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.feature-description1 {
  color:rgba(102, 102, 102, 1);
  margin-bottom: 1.5rem;
  font-size: 32px;
  position: relative;
  left: 80px;
  top: -110px;
}
.feature-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-size: 28px;
}

.feature-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-weight: 500;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;
  width: 300px;
  position: relative;
  top: -230px;
  left: 90px;
}

.btn-primary {
  background-color: #8b5cf6;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #7c3aed;
}

.sub-features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem; /* 减小间距 */
  height: 100%; /* 确保子卡片区域填满整个高度 */
}

@media (max-width: 640px) {
  .sub-features-grid {
    grid-template-columns: 1fr;
  }
}

.sub-feature-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 280px; /* 增加最小高度 */
  position: relative;
  overflow: hidden;
}

.sub-feature-card-1 {
  background-image: url("@/views/photos/WorkshopView2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.sub-feature-card-2 {
  background-image: url("@/views/photos/WorkshopView3.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.sub-feature-card-3 {
  background-image: url("@/views/photos/WorkshopView4.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.sub-feature-card-4 {
  background-image: url("@/views/photos/WorkshopView5.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.feature-icon-container {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.feature-icon {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

/* Industries Section Styles */ 
.industries-section { 
  padding: 2rem 1rem; 
} 

.industries-grid { 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem; 
} 

@media (min-width: 640px) { 
  .industries-grid { 
    grid-template-columns: repeat(3, 1fr); 
  } 
} 

@media (min-width: 768px) { 
  .industries-grid { 
    grid-template-columns: repeat(6, 1fr); 
  } 
} 

.industry-tag { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  padding: 1.5rem; 
  border-radius: 20px; 
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%); 
} 

.industry-icon-container { 
  width: 60px; 
  height: 60px; 
  border-radius: 50%; 
  background-color: #bfdbfe; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin-bottom: 1rem; 
} 

.industry-icon { 
  width: 36px; 
  height: 36px; 
  object-fit: contain; 
} 

.industry-name { 
  font-size: 1.25rem; 
  font-weight: 500; 
  color: #111827; 
} 

/* Solution Showcase Styles */ 
.solutions-section { 
  padding: 3rem 1rem; 
  background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%); 
} 

.solution-cards-grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
  max-width: 3000px;
  margin: 0 auto;
  overflow-x: auto; /* 允许在小屏幕上水平滚动 */
  padding: 1rem 0;
}

.solution-small-card {
  flex: 1;
  min-width: 300px;
  max-width: 300px;
  height: 400px!important; /* 固定高度 */
}

.solution-large-card {
  flex: 2;
  min-width: 400px;
  max-width: 400px;
  height: 400px!important; /* 与小卡片相同的高度 */
}

@media (max-width: 1200px) {
  .solution-cards-grid {
    padding-bottom: 1rem; /* 添加底部内边距以适应滚动条 */
  }
}

.solution-small-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 400px!important;
}

.solution-small-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.solution-large-card {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.large-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.large-card-text {
  margin-bottom: 2rem;
}

.tab-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.75rem 0;
  color: #333;
  text-align: center;
}

.small-card-description {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.featured-solution-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.featured-solution-description {
  color: #e0e7ff;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.featured-solution-card { 
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); 
  border-radius: 20px; 
  padding: 2rem; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
  color: #ffffff; 
  height: 100%; 
  min-height: 500px; /* 增加最小高度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} 

.featured-solution-title { 
  font-size: 2rem; 
  font-weight: 700; 
  margin-bottom: 1rem; 
} 

.featured-solution-description { 
  color: #e0e7ff; 
  font-size: 1.25rem; 
  margin-bottom: 1.5rem; 
  line-height: 1.6;
} 

.btn-white { 
  background-color: #ffffff; 
  color: #6366f1; 
} 

.btn-white:hover { 
  background-color: #f3f4f6; 
} 

.solution-categories-grid { 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 1.5rem; 
  height: 100%;
} 

@media (min-width: 640px) { 
  .solution-categories-grid { 
    grid-template-columns: 1fr 1fr; 
  } 
} 

.solution-category-card { 
  background-color: #ffffff; 
  border-radius: 20px; 
  padding: 2rem; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); 
  border: 1px solid #f0f0f0; 
  display: flex; 
  flex-direction: column; 
  height: 100%; 
  min-height: 230px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
} 

.solution-category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.category-icon-container { 
  width: 64px; 
  height: 64px; 
  border-radius: 50%; 
  background-color: #e0e7ff; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin-bottom: 1.5rem; 
} 

.category-icon { 
  font-size: 2rem; 
  color: #6366f1; 
}

.btn-white {
  background-color: #ffffff;
  color: #6366f1;
  padding: 0.8rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;
  display: inline-block;
  margin-top: 1.5rem;
  position: static;
  left: auto;
  top: auto;
}

.btn-white:hover {
  background-color: #f9fafb;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.feature-image {
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin: 1.5rem 0;
}

/* AI助手展示区域样式 */
.ai-assistants-section {
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #f0f4ff 0%, #e6eaff 100%);
  text-align: center;
}

.ai-assistants-section .section-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.ai-assistants-section .section-subtitle {
  font-size: 1.25rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.assistant-categories {
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  margin-top: 100px;
}

.category-button {
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-button.active {
  background-color: #4f46e5;
  color: white;
  box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
}

.assistants-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  max-width: 1600px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.assistant-card {
  min-width: 350px;
  min-height: 250px;
  padding: 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.assistant-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

.assistant-avatar {
  width: 100px;
  height: 100px;
  background-color: #f0f4ff;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 4px solid #e6eaff;
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);
}

.assistant-name {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.assistant-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  flex-grow: 1;
}

.assistant-description {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
}
.assistant-description {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
}

/* 底部区域样式 */
.footer-section {
  background: #333333;
  padding: 0;
  color: #FFFFFF;
  height: 400px;
  position: relative;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 100px;
  display: flex;
  justify-content: space-between;
}

.company-info {
  max-width: 400px;
  position: relative;
  left: -800px;
}

.company-name {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
}

.contact-info {
  font-size: 20px;
  line-height: 2;
  color: rgba(255, 255, 255, 0.7);
  width: 400px;
}

.contact-info div {
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.social-link {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  left: 200px;
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
  left: 0;
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
</style>
