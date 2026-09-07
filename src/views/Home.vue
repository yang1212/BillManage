<template>
  <div class="home" tabindex="0" @click="onPageClick">
    <div class="click-fish-layer" aria-hidden="true">
      <span
        v-for="fish in clickFishes"
        :key="fish.id"
        class="click-fish"
        :style="{
          left: fish.x + 'px',
          top: fish.y + 'px',
          transform: 'translate(-50%, -50%) rotate(' + fish.rotate + 'deg) scale(' + fish.scale + ') scaleX(' + fish.flip + ')',
          opacity: fish.opacity
        }"
      >{{ fish.emoji }}</span>
    </div>
    <main class="main-content">
      <!-- Hero -->
      <section
        class="welcome"
        @mousemove="onHeroMouseMove"
        @mouseleave="onHeroMouseLeave"
      >
        <header class="welcome-header">
          <div class="page-container welcome-header-inner">
            <a href="/" class="welcome-nav-link welcome-nav-home">
              <img src="@/assets/logo.png" alt="Logo" class="welcome-logo" />
              <span class="welcome-site-name">不和乔治玩的佩奇</span>
            </a>
            <a
              href="https://yangfu.asia/"
              class="welcome-nav-link welcome-nav-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              主站<i class="welcome-nav-external" aria-hidden="true"></i>
            </a>
          </div>
        </header>
        <div class="welcome-bg" aria-hidden="true">
          <div class="welcome-aurora welcome-aurora--1"></div>
          <div class="welcome-aurora welcome-aurora--2"></div>
          <div class="welcome-aurora welcome-aurora--3"></div>
          <div class="welcome-grid"></div>
          <div class="welcome-noise"></div>
          <div
            class="welcome-spotlight"
            :style="spotlightStyle"
          ></div>
          <span
            v-for="(p, i) in particles"
            :key="'p' + i"
            class="welcome-particle"
            :style="{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              animationDelay: p.animationDelay,
              opacity: p.opacity
            }"
          ></span>
          <span class="welcome-orb welcome-orb--1"></span>
          <span class="welcome-orb welcome-orb--2"></span>
          <span class="welcome-ring welcome-ring--1"></span>
          <span class="welcome-ring welcome-ring--2"></span>
          <span class="welcome-fish-float welcome-fish-float--1">𓆝</span>
          <span class="welcome-fish-float welcome-fish-float--2">𓆟</span>
          <span class="welcome-fish-float welcome-fish-float--3">𓆞</span>
          <span class="welcome-spark welcome-spark--1">✦</span>
          <span class="welcome-spark welcome-spark--2">✦</span>
          <span class="welcome-spark welcome-spark--3">✦</span>
          <span class="welcome-spark welcome-spark--4">◈</span>
        </div>
        <div class="page-container welcome-inner">
          <div class="welcome-title-wrap">
            <div class="welcome-title-glow" aria-hidden="true"></div>
            <h1 class="welcome-title">
              <span class="welcome-emoji">🌴</span>
              <span class="welcome-title-text">
                <span class="welcome-title-shimmer">错着错着就对了~</span>
              </span>
            </h1>
          </div>
          <p class="welcome-desc">
            <span class="welcome-desc-line">在错误里慢慢游</span>
            <span class="welcome-desc-dot">·</span>
            <span class="welcome-desc-line">游着游着就会了</span>
          </p>
          <div class="welcome-fish-stream" aria-hidden="true">
            <span class="fish-trail"></span>
            <span class="fish-item fish-item--glow">𓆝</span>
            <span class="fish-item">𓆟</span>
            <span class="fish-item fish-item--glow">𓆞</span>
            <span class="fish-item">𓆝</span>
            <span class="fish-trail fish-trail--end"></span>
          </div>
          <a href="#categories" class="welcome-btn">
            <span class="welcome-btn-bg" aria-hidden="true"></span>
            <span class="welcome-btn-inner">
              <span class="welcome-btn-fish">𓆝</span>
              <span class="welcome-btn-text">开始探索</span>
              <span class="welcome-btn-arrow"><i class="fas fa-chevron-right"></i></span>
            </span>
          </a>
        </div>
        <div class="welcome-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="var(--home-bg)"/>
          </svg>
        </div>
      </section>

      <div class="page-container content-body">

        <!-- 精选专区 -->
        <section id="premium-content" class="section-block">
          <div class="premium-card">
            <div class="premium-glow" aria-hidden="true"></div>
            <div class="premium-header">
              <div class="premium-header-left">
                <span class="section-label">
                  <i class="fas fa-star"></i> Featured
                </span>
                <h2 class="section-title">
                  <router-link to="/vedio" class="title-link">整理大合集</router-link>
                </h2>
              </div>
            </div>

            <ul class="feature-list">
              <li v-for="item in premiumSection.includes" :key="item">
                <span class="feature-check"><i class="fas fa-check"></i></span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="drive-box">
              <div class="drive-box-icon">
                <i class="fas fa-cloud-download-alt"></i>
              </div>
              <div class="drive-box-body">
                <p class="drive-box-label">百度网盘</p>
                <a
                  :href="premiumSection.driveLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="drive-box-link"
                >
                  {{ premiumSection.driveLink }}
                </a>
                <p class="drive-box-tip">请复制保存链接，避免失效后找不到资源</p>
              </div>
            </div>

            <router-link to="/vedio" class="section-more">
              查看大合集详细描述
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </section>

        <!-- 分类导航 -->
        <section id="categories" class="section-block">
          <div class="section-intro">
            <span class="section-label section-label--center">
              <i class="fas fa-compass"></i> Explore
            </span>
            <h2 class="section-heading">学习资源</h2>
            <p class="section-sub">按兴趣选一条鱼线，游向你想去的地方</p>
          </div>

          <div
            v-for="(group, gi) in categoryGroups"
            :key="group.id"
            class="category-group"
            :class="'category-group--' + group.id"
          >
            <div class="group-header">
              <h3 class="group-title">
                <span class="group-icon-wrap">
                  <i v-if="group.icon" :class="group.icon" aria-hidden="true"></i>
                </span>
                {{ group.name }}
              </h3>
              <span class="group-line" aria-hidden="true"></span>
            </div>

            <div class="category-grid">
              <router-link
                v-for="(card, ci) in getCardsForGroup(group)"
                :key="card.category.id"
                :to="card.to"
                class="category-card"
                :style="{ '--card-delay': (gi * 3 + ci) * 0.08 + 's' }"
              >
                <article class="category-card-inner">
                  <div class="card-top">
                    <span class="card-icon" aria-hidden="true">
                      <i :class="card.category.icon"></i>
                    </span>
                    <span class="card-arrow"><i class="fas fa-arrow-right"></i></span>
                  </div>
                  <h4 class="card-title">{{ card.category.name }}</h4>
                  <p class="card-desc">{{ card.category.description }}</p>
                </article>
              </router-link>
            </div>
          </div>
        </section>

        <!-- 扫码访问 -->
        <section class="section-block">
          <div class="qr-card">
            <div class="qr-card-glow" aria-hidden="true"></div>
            <div class="qr-card-body">
              <span class="section-label">
                <i class="fas fa-qrcode"></i> 快捷操作
              </span>
              <h2 class="qr-card-title">手机扫码访问</h2>
              <p class="qr-card-desc">保存二维码，扫码直接打开网站，免输入网址</p>
            </div>
            <div class="qr-card-code">
              <div class="qr-card-frame">
                <img
                  src="/code.png"
                  alt="扫码访问 English Hub"
                  class="qr-card-img"
                  width="120"
                  height="120"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="site-footer">
      <div class="footer-glow" aria-hidden="true"></div>
      <div class="page-container footer-inner">
        <div class="footer-brand">
          <span class="footer-logo"><i class="fas fa-book-open"></i></span>
          <span>English Hub</span>
        </div>
        <p class="footer-quote">少年驰骋的风，比黄金还贵。</p>
        <nav class="footer-links">
          <a href="/">首页</a>
          <a href="#categories">学习资源</a>
          <a href="#premium-content">精选专区</a>
        </nav>
        <p class="footer-copy">&copy; {{ new Date().getFullYear() }} English Hub</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      premiumSection: {
        description: '首页新增内容栏目，包含视频资源、文档资源等合集',
        includes: [
          '400+ 节视频，持续更新中',
          '视频配套的文档资料，持续更新中',
          '高频口语表达与例句合集'
        ],
        driveLink: 'https://pan.baidu.com/s/1-woVztzhokYjHBGPZQfCzA?pwd=MQIs'
      },
      visitStartTime: null,
      timer: null,
      spotlightX: 50,
      spotlightY: 50,
      clickFishes: [],
      fishIdCounter: 0,
      fishEmojis: ['🐠', '🐟', '🐋', '🐳', '🐬', '🐙', '🐡', '🪼'],
      particles: [
        { left: '8%', top: '20%', width: '3px', height: '3px', animationDelay: '0s', opacity: 0.6 },
        { left: '15%', top: '65%', width: '2px', height: '2px', animationDelay: '1.2s', opacity: 0.4 },
        { left: '25%', top: '35%', width: '4px', height: '4px', animationDelay: '0.5s', opacity: 0.5 },
        { left: '72%', top: '25%', width: '2px', height: '2px', animationDelay: '2s', opacity: 0.7 },
        { left: '85%', top: '55%', width: '3px', height: '3px', animationDelay: '0.8s', opacity: 0.45 },
        { left: '92%', top: '18%', width: '2px', height: '2px', animationDelay: '1.5s', opacity: 0.55 },
        { left: '45%', top: '12%', width: '2px', height: '2px', animationDelay: '2.5s', opacity: 0.35 },
        { left: '58%', top: '72%', width: '3px', height: '3px', animationDelay: '1.8s', opacity: 0.5 },
        { left: '35%', top: '78%', width: '2px', height: '2px', animationDelay: '0.3s', opacity: 0.4 },
        { left: '68%', top: '42%', width: '4px', height: '4px', animationDelay: '3s', opacity: 0.6 }
      ]
    }
  },
  computed: {
    spotlightStyle() {
      return {
        left: this.spotlightX + '%',
        top: this.spotlightY + '%'
      }
    },
    categoryGroups() {
      return this.$root.$data.categoryGroups || []
    }
  },
  methods: {
    onHeroMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect()
      this.spotlightX = ((e.clientX - rect.left) / rect.width) * 100
      this.spotlightY = ((e.clientY - rect.top) / rect.height) * 100
    },
    onHeroMouseLeave() {
      this.spotlightX = 50
      this.spotlightY = 50
    },
    onPageClick(e) {
      this.spawnClickFish(e.clientX, e.clientY)
    },
    spawnClickFish(x, y) {
      const id = ++this.fishIdCounter
      const angle = Math.random() * Math.PI * 2
      const dist = 150 + Math.random() * 140
      const endX = x + Math.cos(angle) * dist
      const endY = y + Math.sin(angle) * dist * 0.62
      const curve = (Math.random() - 0.5) * 90
      const perpX = -Math.sin(angle) * curve
      const perpY = Math.cos(angle) * curve

      const fish = {
        id,
        x,
        y,
        emoji: this.fishEmojis[Math.floor(Math.random() * this.fishEmojis.length)],
        rotate: 0,
        scale: 0,
        flip: Math.cos(angle) >= 0 ? 1 : -1,
        opacity: 0,
        baseScale: 0.85 + Math.random() * 0.4,
        path: {
          x0: x,
          y0: y,
          x1: x + Math.cos(angle) * dist * 0.3 + perpX,
          y1: y + Math.sin(angle) * dist * 0.3 + perpY,
          x2: x + Math.cos(angle) * dist * 0.68 - perpX * 0.55,
          y2: y + Math.sin(angle) * dist * 0.68 - perpY * 0.55,
          x3: endX,
          y3: endY
        },
        wiggleFreq: 2.8 + Math.random() * 1.8,
        wiggleAmp: 5 + Math.random() * 9,
        duration: 2300 + Math.random() * 500,
        rafId: null
      }

      this.clickFishes.push(fish)
      this.runFishAnimation(fish)
    },
    bezier(p0, p1, p2, p3, t) {
      const u = 1 - t
      return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3
    },
    swimEase(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    },
    runFishAnimation(fish) {
      const startTime = performance.now()
      const { x0, y0, x1, y1, x2, y2, x3, y3 } = fish.path

      const tick = (now) => {
        if (!this.clickFishes.some(f => f.id === fish.id)) return

        const rawT = Math.min((now - startTime) / fish.duration, 1)
        const t = this.swimEase(rawT)

        let px = this.bezier(x0, x1, x2, x3, t)
        let py = this.bezier(y0, y1, y2, y3, t)

        const tNext = Math.min(t + 0.012, 1)
        const nx = this.bezier(x0, x1, x2, x3, tNext)
        const ny = this.bezier(y0, y1, y2, y3, tNext)
        const vx = nx - px
        const vy = ny - py
        const speed = Math.hypot(vx, vy) || 1
        const perpX = -vy / speed
        const perpY = vx / speed
        const wiggle = Math.sin(rawT * Math.PI * fish.wiggleFreq) * fish.wiggleAmp * (1 - rawT * 0.55)

        px += perpX * wiggle
        py += perpY * wiggle

        if (vx < -0.08) fish.flip = -1
        else if (vx > 0.08) fish.flip = 1

        fish.rotate = Math.sin(rawT * Math.PI * fish.wiggleFreq * 2.4) * 8 * (1 - rawT * 0.45)

        let scale = fish.baseScale
        if (rawT < 0.14) {
          scale *= (rawT / 0.14) * 1.06
        } else if (rawT > 0.75) {
          scale *= 1 - ((rawT - 0.75) / 0.25) * 0.35
        }
        fish.scale = scale

        if (rawT < 0.08) fish.opacity = rawT / 0.08
        else if (rawT > 0.7) fish.opacity = 1 - (rawT - 0.7) / 0.3
        else fish.opacity = 1

        fish.x = px
        fish.y = py

        if (rawT < 1) {
          fish.rafId = requestAnimationFrame(tick)
        } else {
          this.clickFishes = this.clickFishes.filter(f => f.id !== fish.id)
        }
      }

      fish.rafId = requestAnimationFrame(tick)
    },
    getCardsForGroup(group) {
      if (group.id === 'learning') {
        const routes = ['/Sheldon', '/imgPrint', '/category/myVedio2']
        return [1, 2, 3].map((index, i) => ({
          category: group.categories[index],
          to: routes[i]
        }))
      }
      if (group.id === 'pronunciation') {
        return group.categories.map(category => ({
          category,
          to: '/show/' + category.id
        }))
      }
      if (group.id === 'sentence') {
        return group.categories.map(category => ({
          category,
          to: '/sentencesList/'
        }))
      }
      return []
    },
    updateStats() {
      const stats = JSON.parse(localStorage.getItem('siteStats') || '{}')
      const today = new Date().toLocaleDateString()

      if (!stats.firstVisit) {
        stats.firstVisit = Date.now()
        stats.totalVisits = 0
        stats.dailyVisits = {}
        stats.totalTime = 0
      }

      stats.totalVisits++
      stats.dailyVisits[today] = (stats.dailyVisits[today] || 0) + 1

      if (this.visitStartTime) {
        const visitDuration = (Date.now() - this.visitStartTime) / 1000 / 60
        stats.totalTime += visitDuration
      }

      localStorage.setItem('siteStats', JSON.stringify(stats))
    }
  },
  created() {
    this.visitStartTime = Date.now()
    this.updateStats()
    window.addEventListener('beforeunload', this.updateStats)
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer)
    this.clickFishes.forEach(fish => {
      if (fish.rafId) cancelAnimationFrame(fish.rafId)
    })
    this.clickFishes = []
    this.updateStats()
    window.removeEventListener('beforeunload', this.updateStats)
  }
}
</script>

<style scoped>
.home {
  --home-bg: #f0f2f8;
  --purple: #9154cf;
  --purple-light: #a366d6;
  --purple-dark: #6b3fa0;
  --accent-pink: #f472b6;
  --accent-cyan: #22d3ee;
  --accent-amber: #fbbf24;
  --text-primary: #1e1b4b;
  --text-secondary: #64748b;
  --card-bg: rgba(255, 255, 255, 0.85);
  --glass-border: rgba(255, 255, 255, 0.6);

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--home-bg);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(145, 84, 207, 0.08), transparent),
    radial-gradient(ellipse 60% 40% at 100% 50%, rgba(244, 114, 182, 0.05), transparent),
    radial-gradient(ellipse 50% 30% at 0% 80%, rgba(34, 211, 238, 0.05), transparent);
}

.main-content {
  flex: 1;
}

.click-fish-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.click-fish {
  position: fixed;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  line-height: 1;
  pointer-events: none;
  will-change: transform, left, top, opacity;
}

/* ── Hero ── */
.welcome {
  position: relative;
  overflow: hidden;
  color: #fff;
  padding: 0 0 5.5rem;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.welcome-header {
  position: relative;
  z-index: 3;
  padding: 0.85rem 0;
}

.welcome-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.welcome-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  transition: background 0.25s, border-color 0.25s, transform 0.25s;
}

.welcome-nav-link:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.welcome-logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.3);
}

.welcome-site-name {
  letter-spacing: 0.02em;
}

.welcome-nav-external::before {
  content: '↗';
  margin-left: 0.15rem;
}

.welcome-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 0;
}

.welcome-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f0520 0%, #2d1054 30%, #5e2d8c 55%, #3d1a6e 80%, #1a0a30 100%);
  background-size: 300% 300%;
  animation: bgShift 15s ease infinite;
  pointer-events: none;
}

.welcome-aurora {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  mix-blend-mode: screen;
  opacity: 0.55;
}

.welcome-aurora--1 {
  width: 55%;
  height: 45%;
  top: -15%;
  left: -10%;
  background: radial-gradient(ellipse, #a855f7 0%, transparent 70%);
  animation: auroraDrift 8s ease-in-out infinite;
}

.welcome-aurora--2 {
  width: 50%;
  height: 40%;
  top: 10%;
  right: -15%;
  background: radial-gradient(ellipse, #ec4899 0%, transparent 70%);
  animation: auroraDrift 10s ease-in-out infinite reverse;
}

.welcome-aurora--3 {
  width: 40%;
  height: 35%;
  bottom: 5%;
  left: 25%;
  background: radial-gradient(ellipse, #06b6d4 0%, transparent 70%);
  animation: auroraDrift 12s ease-in-out infinite 2s;
}

.welcome-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%);
}

.welcome-noise {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.welcome-spotlight {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(236, 72, 153, 0.06) 40%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: left 0.15s ease-out, top 0.15s ease-out;
  pointer-events: none;
}

.welcome-particle {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(168, 85, 247, 0.4);
  animation: particleFloat 4s ease-in-out infinite;
}

.welcome-orb {
  position: absolute;
  border-radius: 50%;
}

.welcome-orb--1 {
  width: 380px;
  height: 380px;
  top: -140px;
  right: 2%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 65%);
  filter: blur(2px);
  animation: orbFloat 8s ease-in-out infinite;
}

.welcome-orb--2 {
  width: 240px;
  height: 240px;
  bottom: -80px;
  left: 0;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 65%);
  filter: blur(2px);
  animation: orbFloat 10s ease-in-out infinite reverse;
}

.welcome-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: ringPulse 6s ease-in-out infinite;
}

.welcome-ring--1 {
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 0s;
}

.welcome-ring--2 {
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 2s;
  border-color: rgba(168, 85, 247, 0.12);
}

.welcome-fish-float {
  position: absolute;
  font-size: 2.4rem;
  opacity: 0.22;
  filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.5));
  animation: fishFloat 5s ease-in-out infinite;
}

.welcome-fish-float--1 { top: 12%; left: 4%; animation-delay: 0s; }
.welcome-fish-float--2 { top: 48%; right: 5%; font-size: 2rem; animation-delay: 1.2s; }
.welcome-fish-float--3 { bottom: 15%; left: 8%; font-size: 1.6rem; animation-delay: 2.4s; }

.welcome-spark {
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  animation: sparkTwinkle 3s ease-in-out infinite;
}

.welcome-spark--1 { top: 20%; right: 16%; font-size: 1rem; animation-delay: 0s; }
.welcome-spark--2 { top: 62%; left: 20%; font-size: 0.75rem; animation-delay: 1s; }
.welcome-spark--3 { top: 32%; right: 32%; font-size: 1.2rem; animation-delay: 2s; }
.welcome-spark--4 { bottom: 28%; right: 12%; font-size: 0.85rem; animation-delay: 1.5s; color: rgba(6, 182, 212, 0.7); }

.welcome-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  line-height: 0;
  z-index: 2;
}

.welcome-wave svg {
  display: block;
  width: 100%;
  height: 70px;
}

.welcome-title-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 0.85rem;
  animation: welcomeFadeUp 0.7s ease-out 0.08s both;
}

.welcome-title-glow {
  position: absolute;
  inset: -30% -15%;
  background: radial-gradient(ellipse, rgba(168, 85, 247, 0.35) 0%, transparent 70%);
  filter: blur(30px);
  animation: titleGlowPulse 4s ease-in-out infinite;
  pointer-events: none;
}

.welcome-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.55rem;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  line-height: 1.15;
  margin: 0;
  letter-spacing: -0.02em;
}

.welcome-title-shimmer {
  background: linear-gradient(
    90deg,
    #fff 0%,
    #e9d5ff 20%,
    #fff 40%,
    #fbcfe8 60%,
    #fff 80%,
    #a5f3fc 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textShimmer 4s linear infinite;
  filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.4));
}

.welcome-emoji {
  font-size: 1.05em;
  line-height: 1;
  filter: drop-shadow(0 0 16px rgba(251, 191, 36, 0.5));
  animation: emojiWiggle 4s ease-in-out infinite;
}

.welcome-desc {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 1.08rem;
  font-weight: 400;
  margin: 0 0 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.04em;
  animation: welcomeFadeUp 0.7s ease-out 0.14s both;
}

.welcome-desc-line {
  animation: descFade 6s ease-in-out infinite;
}

.welcome-desc-line:last-child {
  animation-delay: 3s;
}

.welcome-desc-dot {
  color: rgba(168, 85, 247, 0.8);
  font-size: 1.4rem;
  line-height: 1;
  animation: dotPulse 2s ease-in-out infinite;
}

.welcome-fish-stream {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  margin: 0 0 1.5rem;
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  line-height: 1;
  animation: welcomeFadeUp 0.7s ease-out 0.18s both;
}

.fish-trail {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.6));
  border-radius: 2px;
  animation: trailPulse 2s ease-in-out infinite;
}

.fish-trail--end {
  background: linear-gradient(90deg, rgba(6, 182, 212, 0.6), transparent);
}

.fish-item {
  display: inline-block;
  color: rgba(255, 255, 255, 0.75);
  animation: fishSwim 2.8s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
}

.fish-item--glow {
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.7));
}

.fish-item:nth-child(2) { animation-delay: 0s; }
.fish-item:nth-child(3) { animation-delay: 0.35s; }
.fish-item:nth-child(4) { animation-delay: 0.7s; }
.fish-item:nth-child(5) { animation-delay: 1.05s; }

.welcome-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 999px;
  text-decoration: none;
  background: linear-gradient(135deg, #a855f7, #ec4899, #06b6d4, #a855f7);
  background-size: 300% 300%;
  animation: welcomeFadeUp 0.7s ease-out 0.28s both, btnGradient 4s ease infinite;
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(236, 72, 153, 0.15);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s;
}

.welcome-btn-bg {
  position: absolute;
  inset: 3px;
  border-radius: 999px;
  background: rgba(15, 5, 32, 0.85);
  backdrop-filter: blur(8px);
  transition: background 0.3s;
}

.welcome-btn-inner {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 2.2rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.06em;
}

.welcome-btn-fish {
  font-size: 1.2rem;
  line-height: 1;
  opacity: 0.85;
  transition: transform 0.35s;
}

.welcome-btn-arrow {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.55rem;
  transition: transform 0.35s;
}

.welcome-btn:hover {
  transform: translateY(-5px) scale(1.04);
  box-shadow: 0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(236, 72, 153, 0.25), 0 16px 40px rgba(0, 0, 0, 0.3);
}

.welcome-btn:hover .welcome-btn-bg {
  background: rgba(15, 5, 32, 0.65);
}

.welcome-btn:hover .welcome-btn-fish {
  transform: translateX(-4px);
}

.welcome-btn:hover .welcome-btn-arrow {
  transform: translateX(4px);
}

/* ── Content ── */
.content-body {
  padding: 1rem 0 3rem;
}

.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 0.8rem;
}

.section-block {
  margin-bottom: 3rem;
}

.section-block:last-child {
  margin-bottom: 0;
}

.section-intro {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--purple);
  margin-bottom: 0.5rem;
}

.section-label--center {
  display: inline-flex;
}

.section-heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.section-sub {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* ── Premium card ── */
.premium-card {
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  border-radius: 1.25rem;
  padding: 2rem 2.25rem;
  border: 1px solid var(--glass-border);
  box-shadow:
    0 4px 32px rgba(145, 84, 207, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.premium-glow {
  position: absolute;
  top: -60%;
  right: -20%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(145, 84, 207, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.premium-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  position: relative;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.02em;
}

.title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.title-link:hover {
  color: var(--purple);
}

.badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
}

.badge-hot {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #b45309;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  gap: 0.65rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.5;
}

.feature-check {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #ede9fe, #ddd6fe);
  color: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.6rem;
}

.drive-box {
  display: flex;
  gap: 1rem;
  padding: 1.15rem 1.35rem;
  background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
  border: 1px solid #bbf7d0;
  border-radius: 0.875rem;
  margin-bottom: 1.5rem;
}

.drive-box-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.65rem;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.drive-box-label {
  font-weight: 700;
  color: #166534;
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
}

.drive-box-link {
  color: var(--purple);
  font-size: 0.85rem;
  word-break: break-all;
  text-decoration: none;
  font-weight: 500;
}

.drive-box-link:hover {
  text-decoration: underline;
}

.drive-box-tip {
  font-size: 0.75rem;
  color: #94a3b8;
  margin: 0.35rem 0 0;
}

.section-more {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--purple);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: gap 0.25s, color 0.25s;
}

.section-more:hover {
  gap: 0.7rem;
  color: var(--purple-dark);
}

/* ── Category groups ── */
.category-group {
  margin-bottom: 2.75rem;
}

.category-group:last-child {
  margin-bottom: 0;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.group-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
}

.group-icon-wrap {
  width: 2rem;
  height: 2rem;
  border-radius: 0.55rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  background: linear-gradient(135deg, #ede9fe, #ddd6fe);
  color: var(--purple);
  box-shadow: 0 2px 8px rgba(145, 84, 207, 0.15);
}

.category-group--learning .group-icon-wrap {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  color: #2563eb;
}

.category-group--sentence .group-icon-wrap {
  background: linear-gradient(135deg, #fce7f3, #fbcfe8);
  color: #db2777;
}

.category-group--pronunciation .group-icon-wrap {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #d97706;
}

.group-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(145, 84, 207, 0.2), transparent);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.category-card {
  text-decoration: none;
  color: inherit;
  display: block;
  animation: cardFadeIn 0.6s ease-out both;
  animation-delay: var(--card-delay, 0s);
}

.category-card-inner {
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s, border-color 0.35s;
  overflow: hidden;
}

.category-card-inner::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, transparent 40%, rgba(145, 84, 207, 0.3) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.35s;
}

.category-card:hover .category-card-inner {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(145, 84, 207, 0.12);
  border-color: rgba(145, 84, 207, 0.2);
}

.category-card:hover .category-card-inner::before {
  opacity: 1;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.card-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.65rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  color: var(--text-primary);
  transition: transform 0.35s, background 0.35s, color 0.35s, box-shadow 0.35s;
}

.category-card:hover .card-icon {
  background: linear-gradient(135deg, var(--purple-light), var(--purple));
  color: #fff;
  transform: scale(1.08) rotate(-3deg);
  box-shadow: 0 6px 16px rgba(145, 84, 207, 0.35);
}

.card-arrow {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  color: var(--text-secondary);
  background: #f1f5f9;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.3s, transform 0.3s, background 0.3s, color 0.3s;
}

.category-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
  background: var(--purple);
  color: #fff;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--text-primary);
  margin: 0 0 0.45rem;
  transition: color 0.2s;
}

.category-card:hover .card-title {
  color: var(--purple-dark);
}

.card-desc {
  flex: 1;
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* ── QR card ── */
.qr-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  border-radius: 1.25rem;
  padding: 2rem 2.25rem;
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.qr-card-glow {
  position: absolute;
  bottom: -50%;
  left: -10%;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.qr-card-body {
  flex: 1;
  min-width: 0;
}

.qr-card-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0.35rem 0 0.5rem;
  letter-spacing: -0.02em;
}

.qr-card-desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.qr-card-code {
  flex-shrink: 0;
}

.qr-card-frame {
  padding: 0.5rem;
  border-radius: 0.875rem;
  background: linear-gradient(135deg, #ede9fe, #ddd6fe, #c4b5fd);
  box-shadow: 0 8px 24px rgba(145, 84, 207, 0.15);
}

.qr-card-img {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 0.5rem;
  background: #fff;
}

/* ── Footer ── */
.site-footer {
  position: relative;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  color: #94a3b8;
  padding: 3rem 0 2.5rem;
  margin-top: auto;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(145, 84, 207, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.footer-inner {
  position: relative;
  text-align: center;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 0.65rem;
  letter-spacing: -0.01em;
}

.footer-logo {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, var(--purple-light), var(--purple));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  box-shadow: 0 4px 12px rgba(145, 84, 207, 0.4);
}

.footer-quote {
  font-size: 0.95rem;
  margin: 0 0 1.25rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.55);
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.25s, background 0.25s, border-color 0.25s;
}

.footer-links a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

.footer-copy {
  font-size: 0.78rem;
  margin: 0;
  opacity: 0.5;
}

/* ── Animations ── */
@keyframes bgShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes auroraDrift {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.55; }
  33% { transform: translate(30px, -20px) scale(1.08); opacity: 0.7; }
  66% { transform: translate(-20px, 15px) scale(0.95); opacity: 0.45; }
}

@keyframes ringPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
  50% { transform: translate(-50%, -50%) scale(1.06); opacity: 0.6; }
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0) scale(1); opacity: var(--opacity, 0.5); }
  50% { transform: translateY(-12px) scale(1.3); opacity: 1; }
}

@keyframes textShimmer {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

@keyframes titleGlowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes btnGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes trailPulse {
  0%, 100% { opacity: 0.4; transform: scaleX(1); }
  50% { opacity: 1; transform: scaleX(1.3); }
}

@keyframes descFade {
  0%, 100% { opacity: 0.75; }
  50% { opacity: 1; }
}

@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.4); opacity: 1; }
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(12px, -10px); }
}

@keyframes fishFloat {
  0%, 100% { transform: translate(0, 0) rotate(-5deg); }
  50% { transform: translate(8px, -6px) rotate(5deg); }
}

@keyframes fishSwim {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.65; }
  50% { transform: translateY(-5px) scale(1.08); opacity: 1; }
}

@keyframes sparkTwinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.3); }
}

@keyframes welcomeFadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes cardFadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes emojiWiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .welcome {
    padding: 0 0 4.5rem;
    min-height: 460px;
  }

  .welcome-header {
    padding: 0.65rem 0;
  }

  .welcome-header-inner {
    height: 48px;
  }

  .welcome-logo {
    width: 32px;
    height: 32px;
  }

  .welcome-nav-link {
    font-size: 0.8125rem;
    padding: 0.4rem 0.75rem;
  }

  .welcome-inner {
    padding: 1.5rem 0 0;
  }

  .welcome-fish-float,
  .welcome-spark,
  .welcome-ring,
  .welcome-particle {
    display: none;
  }

  .welcome-spotlight {
    width: 300px;
    height: 300px;
  }

  .welcome-orb--1 {
    width: 200px;
    height: 200px;
    right: -40px;
  }

  .welcome-btn-inner {
    padding: 0.75rem 1.75rem;
  }

  .premium-card,
  .qr-card {
    padding: 1.5rem;
  }

  .qr-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .qr-card-code {
    align-self: center;
  }

  .drive-box {
    flex-direction: column;
    gap: 0.75rem;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .card-arrow {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 480px) {
  .welcome-site-name {
    display: none;
  }
}
</style>
