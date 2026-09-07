<template>
  <div class="article-list-page min-h-screen bg-gray-50 font-sans">
    <main class="container mx-auto px-4 py-8 max-w-4xl">
      <div class="space-y-10">
        <!-- 网盘资源卡片 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg" style="margin-top:60px">
          <div class="p-6 md:p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span class="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h2 class="text-xl md:text-2xl font-bold text-gray-800">视频资源</h2>
            </div>

            <a href="https://pan.baidu.com/s/1-woVztzhokYjHBGPZQfCzA?pwd=MQIs" target="_blank" rel="noopener noreferrer" class="block w-full bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 transition-all duration-300 hover:bg-blue-100 group">
              <div class="flex items-center justify-between">
                <span class="text-blue-700 font-medium truncate group-hover:underline">百度网盘链接</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <p class="text-sm text-blue-600 mt-1 truncate">https://pan.baidu.com/s/1-woVztzhokYjHBGPZQfCzA?pwd=MQIs</p>
            </a>
            
            <!-- 视频说明 -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>每个视频都为3分钟左右，持续更新中</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>第1分钟/盲听，第2分钟/英文字幕，第3分钟/中英字幕</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>前20集由于刚学剪辑，不太擅长，所有稍微有点不同</span>
                </li>
              </ul>
            </div>

            <!-- 图片展示 -->
            <div class="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img src="/img1.png" alt="夸克网盘示例" class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>

         <!-- 网盘资源卡片 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg" style="margin-top:60px">
          <div class="p-6 md:p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span class="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h2 class="text-xl md:text-2xl font-bold text-gray-800">视频配套文档</h2>
            </div>

            <a href="https://pan.baidu.com/s/1-woVztzhokYjHBGPZQfCzA?pwd=MQIs" target="_blank" rel="noopener noreferrer" class="block w-full bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 transition-all duration-300 hover:bg-blue-100 group">
              <div class="flex items-center justify-between">
                <span class="text-blue-700 font-medium truncate group-hover:underline">百度网盘链接</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <p class="text-sm text-blue-600 mt-1 truncate">https://pan.baidu.com/s/1-woVztzhokYjHBGPZQfCzA?pwd=MQIs</p>
            </a>
            
            <!-- 视频说明 -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>文档和云盘视频顺序完全配套</span>
                </li>
              </ul>
            </div>

            <!-- 图片展示 -->
            <div class="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img src="/doc.png" alt="夸克网盘示例" class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>

        <!-- 小红书资源卡片 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
          <div class="p-6 md:p-8">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                <span class="text-pink-600 font-bold text-lg">3</span>
              </div>
              <h2 class="text-xl md:text-2xl font-bold text-gray-800">小红书资源</h2>
            </div>

            <!-- 小红书链接 -->
            <a href="https://www.xiaohongshu.com/user/profile/5ee5f62b000000000101d2f8" target="_blank" rel="noopener noreferrer" class="block w-full bg-pink-50 border border-pink-100 rounded-lg p-4 mb-6 transition-all duration-300 hover:bg-pink-100 group">
              <div class="flex items-center justify-between">
                <span class="text-pink-700 font-medium truncate group-hover:underline">小红书个人主页</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <p class="text-sm text-pink-600 mt-1 truncate">https://www.xiaohongshu.com/user/profile/5ee5f62b000000000101d2f8</p>
            </a>

            <!-- 小红书二维码 -->
            <div class="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img src="/img4.png" alt="小红书二维码" class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'VedioPage',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
/* 基础样式增强 */
.article-list-page {
  color: #333;
}

/* 动画效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

main > div {
  animation: fadeIn 0.5s ease-out forwards;
}

main > div:nth-child(1) {
  animation-delay: 0.1s;
}

main > div:nth-child(2) > div:nth-child(1) {
  animation-delay: 0.2s;
}

main > div:nth-child(2) > div:nth-child(2) {
  animation-delay: 0.3s;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>