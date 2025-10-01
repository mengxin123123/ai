<template>
  <div v-if="visible" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <button class="close-button" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div class="modal-content">
        <!-- 主要内容区域 -->
        <div class="main-content">
          <!-- 左侧主内容 -->
          <div class="main-column">
            <!-- 助手信息和介绍合并 -->
            <div class="assistant-header">
              <div class="assistant-info">
                <div class="assistant-icon">
                  <img :src="currentAssistant.icon" :alt="currentAssistant.title">
                </div>
                <div class="assistant-details">
                  <h1 class="assistant-title">{{ currentAssistant.title }}</h1>
                  <div class="assistant-rating">
                    <span class="rating-text">评分: </span>
                    <div class="stars">
                      <span v-for="i in 5" :key="i" class="star">★</span>
                    </div>
                    
                  </div>
                  <div class="assistant-category">
                    <span class="category-tag">分类：{{ currentAssistant.category }}</span>
                  </div>
                  <button class="start-button">
                    {{ currentAssistant.buttonText }}
                  </button>
                </div>
              </div>
              
              <!-- 助手介绍部分直接放在同一个容器内 -->
              <div class="assistant-description-inline">
                <h2>{{ currentAssistant.title }}助手的简介</h2>
                <p class="description-text">{{ currentAssistant.fullDescription }}</p>
              </div>
            </div>

            <!-- 功能特色 -->
            <div class="features-section">
              <h2>功能特色</h2>
              <div class="features-grid">
                <div v-for="feature in currentAssistant.features" :key="feature.id" class="feature-card">
                  <div class="feature-icon">
                    <span v-html="feature.icon"></span>
                  </div>
                  <h3>{{ feature.title }}</h3>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>

            <!-- 用户评论 -->
            <div class="reviews-section">
              <h2>"{{ currentAssistant.title }}"的评论 <span class="review-count">...共计{{ currentAssistant.reviews.length }}条</span></h2>
              <div class="reviews-list">
                <div v-for="review in currentAssistant.reviews" :key="review.id" class="review-item">
                  <div class="reviewer-avatar">
                    <img :src="review.avatar" :alt="review.username">
                  </div>
                  <div class="review-content">
                    <div class="review-header">
                      <span class="reviewer-name">{{ review.username }}</span>
                      <div class="review-stars">
                        <span v-for="i in review.rating" :key="i" class="star filled">★</span>
                        <span v-for="i in (5 - review.rating)" :key="i + review.rating" class="star">★</span>
                      </div>
                      <span class="review-date">{{ review.date }}</span>
                    </div>
                    <p class="review-text">{{ review.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧推荐栏 -->
          <div class="recommendation-column">
            <div class="recommendation-section">
              <h3>相关推荐</h3>
              <div class="recommendation-cards">
                <div v-for="rec in recommendations" :key="rec.id" class="rec-card" @click="switchAssistant(rec.id)">
                  <img :src="rec.icon" :alt="rec.title">
                  <h4>{{ rec.title }}</h4>
                  <p>{{ rec.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssistantModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    assistantId: {
      type: [String, Number],
      default: '1'
    }
  },
  data() {
    return {
      assistantData: {
        1: {
          id: 1,
          title: '智能写作',
          category: '内容创作',
          buttonText: '开始写作',
          buttonIcon: '<svg t="1756280552843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="20" height="20"><path d="M972.146238 0.005962h-3.629346c-15.683959 0.907336-246.277047 15.683959-374.341111 93.714898-27.479334 16.850535-36.16384 49.12579-41.867098 104.602935a94.362995 94.362995 0 0 0-67.920617-31.627158 85.16001 85.16001 0 0 0-52.625517 18.924447c-47.051878 37.330416-207.391197 171.356977-277.256107 332.862872C68.698334 717.320267 82.826859 863.66068 83.474957 869.752797c0 1.555434 0.907336 2.981248 1.166575 4.536682-47.959214 61.439642-77.123602 104.732555-80.364089 109.398857a25.9239 25.9239 0 0 0 7.129073 35.515743A25.9239 25.9239 0 0 0 25.9239 1024a25.9239 25.9239 0 0 0 21.387217-11.406516c0-1.036956 27.479334-40.830142 72.716539-98.899677h1.685053A250.295251 250.295251 0 0 0 181.467298 920.304401c99.547775 0 305.902016-38.88585 570.325793-296.958271C987.570958 393.012282 1019.716594 99.294498 1023.086701 58.723595A47.829595 47.829595 0 0 0 1023.994038 51.853762a51.070082 51.070082 0 0 0-51.8478-51.8478zM716.406968 586.404573C461.575034 835.533249 267.405025 868.456602 181.467298 868.456602c-10.499179 0-18.794827 0-25.9239-1.166576 87.363542-107.195325 220.353147-251.202588 368.378615-349.972645a25.9239 25.9239 0 0 0-28.51629-42.644815c-145.173838 97.214624-272.200947 232.148522-361.89764 338.825369a795.215623 795.215623 0 0 1 67.531759-274.274859c64.809749-151.136335 221.001245-280.626214 262.220245-312.901469a33.182592 33.182592 0 0 1 20.998359-8.166029c45.237205 0 81.401045 108.750759 100.195872 108.75076h1.944293c16.202437-7.517931 9.591843-173.560508 34.349167-188.72599C741.034672 64.815712 972.146238 51.853762 972.146238 51.853762s-19.054066 303.180007-255.73927 534.550811z" fill="#5FC2DD" p-id="2327"></path></svg>',
          icon: require('@/views/photos/Assistant1.png'),
          fullDescription: '智能写作 AI 助手，依托先进的自然语言处理技术，整合海量优质文本数据与写作模型。通过 AI 多维度扫描市场，实现智能选题、文献检索、实时订正、精准挖掘超预期的，预测营动风险、查找投资团队人工检验，融合 AI 效率与专家经验，让专业投资决策更准平可及，助散户轻松应对市场波动。',
          features: [
            {
              id: 1,
              title: '智能文案生成',
              description: '基于大模型技术，快速生成高质量文案内容',
              icon: '✍️'
            },
            {
              id: 2,
              title: '多场景适配',
              description: '支持工作汇报、学术论文、营销文案等多种场景',
              icon: '🎯'
            },
            {
              id: 3,
              title: '风格定制',
              description: '可根据用户需求调整写作风格和语调',
              icon: '🎨'
            }
          ],
          reviews: [
            {
              id: 1,
              username: '张文轩',
              rating: 5,
              date: '2025-09-28 14:30',
              content: '智能写作助手真的太棒了！帮我完成了一篇重要的商业计划书，文笔流畅，逻辑清晰，大大节省了我的时间。',
              avatar: require('@/views/photos/Assistant1.png')
            },
            {
              id: 2,
              username: '李小雨',
              rating: 5,
              date: '2025-09-27 16:45',
              content: '作为一名市场营销人员，这个工具帮我生成了很多创意文案，质量很高，而且可以根据不同场景调整风格。',
              avatar: require('@/views/photos/Assistant2.png')
            },
            {
              id: 3,
              username: '王大海',
              rating: 4,
              date: '2025-09-26 10:20',
              content: '用来写工作汇报很方便，能够快速整理思路并生成专业的文档。唯一的建议是希望能增加更多行业模板。',
              avatar: require('@/views/photos/Assistant 3.png')
            },
            {
              id: 4,
              username: '陈美丽',
              rating: 5,
              date: '2025-09-25 09:15',
              content: '学术论文写作的好帮手！帮我梳理了文献综述的逻辑结构，引用格式也很规范，推荐给所有研究生同学。',
              avatar: require('@/views/photos/Assistant 4.png')
            },
            {
              id: 5,
              username: '刘志强',
              rating: 5,
              date: '2025-09-24 20:30',
              content: '创业路上的得力助手，帮我写了投资计划书、产品介绍等各种文档，专业度很高，投资人看了都很满意。',
              avatar: require('@/views/photos/Assistant7.png')
            },
            {
              id: 6,
              username: '周小慧',
              rating: 4,
              date: '2025-09-23 15:40',
              content: '新媒体运营必备工具！能够快速生成各种平台的内容，包括微信公众号、抖音文案等，创意十足。',
              avatar: require('@/views/photos/Assistant8.png')
            },
            {
              id: 7,
              username: '赵建国',
              rating: 5,
              date: '2025-09-22 11:25',
              content: '作为一名培训师，这个工具帮我制作了很多课程大纲和教学材料，内容丰富，结构清晰，学员反馈很好。',
              avatar: require('@/views/photos/Assistant10.png')
            },
            {
              id: 8,
              username: '孙梅花',
              rating: 5,
              date: '2025-09-21 13:50',
              content: '写小说的时候经常卡文，这个AI帮我提供了很多灵感和情节发展思路，现在创作效率提高了很多！',
              avatar: require('@/views/photos/Assistant13.png')
            }
          ]
        },
        2: {
          id: 2,
          title: '智能代码',
          category: '代码开发',
          buttonText: '上传需求',
          buttonIcon: '<svg t="1756281258023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4002" width="20" height="20"><path d="M826.656 661.856H662.4v165.056c0 54.912 26.56 103.392 67.648 133.376 27.328 19.968 60.032-10.208 96.64-10.208 90.976 0 101.312-55.424 121.856-123.168 9.6-31.68 33.792-64.8 17.088-90.432a164.96 164.96 0 0 0-138.976-74.624z" fill="#AFD7FB" p-id="4003"></path></svg>',
          icon: require('@/views/photos/Assistant2.png'),
          fullDescription: '智能代码 AI 助手，基于先进的代码生成模型，为开发者提供全方位的编程支持。支持多种编程语言，能够理解开发需求，自动生成高质量代码，进行代码审查和优化建议，大大提升开发效率和代码质量。',
          features: [
            {
              id: 1,
              title: '代码自动生成',
              description: '根据需求描述自动生成相应的代码实现',
              icon: '⚡'
            },
            {
              id: 2,
              title: '代码审查优化',
              description: '智能分析代码质量，提供优化建议',
              icon: '🔍'
            },
            {
              id: 3,
              title: '多语言支持',
              description: '支持Java、Python、JavaScript等主流编程语言',
              icon: '🌐'
            }
          ],
          reviews: [
            {
              id: 1,
              username: '开发小王',
              rating: 5,
              date: '2025-06-13 14:00',
              content: '代码生成速度很快，而且质量很高，大大提升了我的开发效率！',
              avatar: require('@/views/photos/Assistant2.png')
            },
            {
              id: 2,
              username: '程序媛小李',
              rating: 4,
              date: '2025-06-12 16:30',
              content: '很好用的代码助手，特别是在处理复杂逻辑时很有帮助。',
              avatar: require('@/views/photos/Assistant2.png')
            }
          ]
        },
        3: {
          id: 3,
          title: 'PPT创作',
          category: '演示文稿',
          buttonText: '开始创作',
          buttonIcon: '<svg t="1756281346639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6361" width="20" height="20"><path d="M856.533333 451.349333L572.117333 177.813333a49.706667 49.706667 0 0 0-35.541333-13.674666l-294.272 8.938666c-21.888 0.597333-40.490667 15.637333-44.842667 36.288l-154.24 698.026667c-2.197333 15.786667 2.176 32.085333 12.032 41.045333 9.536 7.189333 21.248 11.242667 33.365334 11.562667h9.301333l725.802667-148.330667c21.376-4.352 36.928-22.144 37.76-43.136l9.28-283.008c0.426667-12.8-4.736-25.173333-14.229334-34.176z" fill="#AB78F6" p-id="6362"></path></svg>',
          icon: require('@/views/photos/Assistant 3.png'),
          fullDescription: 'PPT创作 AI 助手，专为演示文稿制作而设计，能够快速生成美观的幻灯片内容，支持多种模板和风格，自动优化版面布局，让您的演示更加专业和吸引人。',
          features: [
            {
              id: 1,
              title: '模板丰富',
              description: '提供多种专业模板，适配不同场景需求',
              icon: '📊'
            },
            {
              id: 2,
              title: '智能排版',
              description: '自动优化页面布局和视觉效果',
              icon: '🎨'
            },
            {
              id: 3,
              title: '快速生成',
              description: '根据内容大纲快速生成完整演示文稿',
              icon: '⚡'
            }
          ],
          reviews: [
            {
              id: 1,
              username: '产品经理小张',
              rating: 5,
              date: '2025-06-13 10:00',
              content: '模板很漂亮，生成的PPT质量很高，节省了大量制作时间！',
              avatar: require('@/views/photos/Assistant 3.png')
            }
          ]
        },
        'finance': {
          id: 'finance',
          title: '智股明晰',
          category: '金融理财',
          buttonText: '股票分析',
          buttonIcon: '<svg t="1756281527767" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9221" width="20" height="20"><path d="M426.573 236.76a47.75 47.75 0 0 1 4.468 14.78l12.485 186.106 6.197 93.54a96.404 96.404 0 0 0 4.468 28.364c7.485 17.825 25.491 29.154 45.082 28.364l298.515-19.575c12.927-0.213 25.41 4.633 34.702 13.474 7.744 7.368 12.744 17.006 14.319 27.372l0.529 6.294c-12.353 171.486-137.983 314.518-308.682 351.44-170.698 36.922-345.742-41.074-430.093-191.642-24.318-43.744-39.507-91.825-44.676-141.42a271.206 271.206 0 0 1-2.843-44.345C60.777 405.66 191.372 246.714 374.18 208.396c22.003-3.435 43.572 8.242 52.393 28.364z" fill="#8CADF4" p-id="9222"></path></svg>',
          icon: require('@/views/photos/Assistant 4.png'),
          fullDescription: '慧股智投 AI 助手，依托机构级一致预测数据库与量化模型，整合 20 万+ 研报及 99% 分析师观点。通过 AI 多维度扫描市场，实现智能选股、风险预警、实时订正、精准挖掘超预期的，预警营动风险、查找投资团队人工检验，融合 AI 效率与专家经验，让专业投资决策更准平可及，助散户轻松应对市场波动。',
          features: [
            {
              id: 1,
              title: '智能选股',
              description: '基于AI算法分析市场数据，智能推荐优质股票',
              icon: '📈'
            },
            {
              id: 2,
              title: '风险预警',
              description: '实时监控投资风险，及时提供预警信息',
              icon: '⚠️'
            },
            {
              id: 3,
              title: '专业分析',
              description: '整合专业研报和分析师观点，提供深度分析',
              icon: '🎯'
            }
          ],
          reviews: [
            {
              id: 1,
              username: '江小明',
              rating: 5,
              date: '2025-06-13 13:00',
              content: '之前选股总是感觉，我待无关。用过智能后，它能自我修改该股调，投进前期标准，上线通守约只小情一流，新手真心惊奇！',
              avatar: require('@/views/photos/Assistant 4.png')
            },
            {
              id: 2,
              username: '江小明',
              rating: 5,
              date: '2025-06-13 13:00',
              content: '最信赖的是决对行运风绩策奖！前几天我们的原凶次勒策略，又升上终改后，不坎已己做几天+ 分析师，太布心了！',
              avatar: require('@/views/photos/Assistant 4.png')
            },
            {
              id: 3,
              username: '江小明',
              rating: 5,
              date: '2025-06-13 13:00',
              content: '对比过好几款 AI 软件，这算分分准市台点意经，还菱者们的一步为例，关维有包团队人工论改，不早 AI 而么实，用着能强！',
              avatar: require('@/views/photos/Assistant 4.png')
            }
          ]
        }
      },
      recommendations: [
        {
          id: 1,
          title: '智能写作',
          description: '基于大模型技术，快速生成高质量文案内容，支持多种写作场景',
          icon: require('@/views/photos/Assistant1.png')
        },
        {
          id: 2,
          title: '智能代码',
          description: '自动生成代码，智能分析优化，支持多种编程语言',
          icon: require('@/views/photos/Assistant2.png')
        },
        {
          id: 3,
          title: 'PPT创作',
          description: '快速生成美观演示文稿，丰富模板智能排版',
          icon: require('@/views/photos/Assistant 3.png')
        },
        {
          id: 4,
          title: '智股明晰',
          description: '专业股票分析，智能选股推荐，助力投资决策',
          icon: require('@/views/photos/Assistant 4.png')
        },
        {
          id: 5,
          title: '数据分析',
          description: '智能数据处理，可视化图表生成，深度洞察分析',
          icon: require('@/views/photos/Assistant7.png')
        },
        {
          id: 6,
          title: '翻译助手',
          description: '多语言实时翻译，专业术语准确转换，支持文档翻译',
          icon: require('@/views/photos/Assistant8.png')
        },
        {
          id: 7,
          title: '学习辅导',
          description: '个性化学习方案，知识点梳理，智能答疑解惑',
          icon: require('@/views/photos/Assistant10.png')
        },
        {
          id: 8,
          title: '创意设计',
          description: 'AI设计灵感，配色方案推荐，创意素材生成',
          icon: require('@/views/photos/Assistant13.png')
        },
        {
          id: 9,
          title: '法律咨询',
          description: '法律条文解读，合同审查建议，法律风险评估',
          icon: require('@/views/photos/Assistant14.png')
        },
        {
          id: 10,
          title: '健康管理',
          description: '健康数据分析，运动计划制定，营养搭配建议',
          icon: require('@/views/photos/Assistant15.png')
        }
      ]
    }
  },
  computed: {
    currentAssistant() {
      return this.assistantData[this.assistantId] || this.assistantData['1']
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    switchAssistant(id) {
      this.$emit('switch-assistant', id)
    }
  }
}
</script>

<style scoped>
/* 模态框覆盖层 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 模态框容器 */
.modal-container {
  background: #F4F5FA;
  border-radius: 20px;
  width: 98vw;
  height: 98vh;
  max-width: none;
  max-height: none;
  position: relative;
  overflow: hidden;
  animation: slideUp 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 模态框头部 */
.modal-header {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

.close-button {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}

.close-button:hover {
  background: rgba(255, 255, 255, 1);
  color: #374151;
  transform: scale(1.1);
}

/* 模态框内容 */
.modal-content {
  height: 100%;
  overflow-y: auto;
  padding: 3rem;
  padding-top: 4rem;
}

/* 主要内容布局 */
.main-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  height: 100%;
}

.main-column {
  flex: 1;
  min-width: 0;
  max-width: calc(100% - 760px);
}

.recommendation-column {
  width: 760px;
  flex-shrink: 0;
  overflow-y: auto;
  height: 90vh;
}

/* 助手头部 */
.assistant-header {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.assistant-info {
  display: flex;
  width: 100%;
  align-items: center;
}

.assistant-icon {
  margin-right: 2rem;
  flex-shrink: 0;
}

.assistant-icon img {
  width: 120px;
  height: 120px;
  border-radius: 1.2rem;
  background: white;
  padding: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.assistant-details {
  flex: 1;
  min-width: 0;
}

.assistant-title {
  font-size: 50px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.assistant-rating {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}

.stars {
  margin-right: 0.5rem;
}

.star {
  color: #fbbf24;
  font-size: 2.2rem;
  margin-right: 1px;
}

.rating-text {
  color: #6b7280;
  font-size: 1.8rem;
}

.category-tag {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 1.7rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
}

.start-button {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.6rem;
  padding: 1rem 2rem;
  font-size: 2.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  width: fit-content;
}

.start-button:hover {
  transform: translateY(-1px);
}

/* 内联描述样式 */
.assistant-description-inline {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f3f4f6;
}

.assistant-description-inline h2 {
  font-size: 2.8rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 600;
}

.assistant-description-inline .description-text {
  font-size: 2rem;
  color: #6b7280;
  line-height: 1.6;
}

.button-icon {
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
}

/* 推荐区域 */
.recommendation-section {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  height: 100%;
  overflow-y: auto;
  min-height: 90vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.recommendation-section h3 {
  font-size: 55px;
  color: #1f2937;
  margin-bottom: 2rem;
  font-weight: 600;
}

.recommendation-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.rec-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f4f6;
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #e5e7eb;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.rec-card:hover {
  background: #f9fafb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.rec-card img {
  width: 80px;
  height: 80px;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background: white;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.rec-card h4 {
  font-size: 2rem;
  color: #1f2937;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.rec-card p {
  font-size: 1.4rem;
  color: #6b7280;
  line-height: 1.4;
}

/* 原描述区域样式已合并到内联样式 */

/* 功能特色 */
.features-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.features-section h2 {
  font-size: 2.8rem;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-card {
  background: #f9fafb;
  border-radius: 0.8rem;
  padding: 1.2rem;
  text-align: center;
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 0.8rem;
}

.feature-card h3 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.feature-card p {
  color: #6b7280;
  font-size: 1.7rem;
  line-height: 1.5;
}

/* 评论区域 */
.reviews-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 550px;
}

.reviews-section h2 {
  font-size: 2.8rem;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.review-count {
  font-size: 1.8rem;
  color: #6b7280;
  font-weight: normal;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-height: 510px;
  max-height: 510px ;
  overflow-y: auto ;
}

.review-item {
  display: flex;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.review-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.reviewer-avatar {
  margin-right: 0.8rem;
  flex-shrink: 0;
}

.reviewer-avatar img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.review-content {
  flex: 1;
  min-width: 0;
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.reviewer-name {
  font-weight: 500;
  color: #1f2937;
  font-size: 1.7rem;
}

.review-stars {
  display: flex;
}

.review-stars .star {
  font-size: 1.6rem;
}

.review-stars .star.filled {
  color: #fbbf24;
}

.review-stars .star:not(.filled) {
  color: #d1d5db;
}

.review-date {
  color: #6b7280;
  font-size: 1.5rem;
  margin-left: auto;
}

.review-text {
  color: #374151;
  line-height: 1.5;
  font-size: 1.7rem;
}

/* 滚动条样式 */
.modal-content::-webkit-scrollbar,
.reviews-list::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track,
.reviews-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb,
.reviews-list::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover,
.reviews-list::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 隐藏推荐区域滚动条 */
.recommendation-column::-webkit-scrollbar,
.recommendation-section::-webkit-scrollbar {
  display: none;
}

.recommendation-column,
.recommendation-section {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
