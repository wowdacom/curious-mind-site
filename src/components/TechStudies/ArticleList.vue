<template>
  <div class="container">
    <div class="article-list">
      <div
        class="article-item"
        v-for="(article, index) in filteredArticles"
        :key="index"
      >
        <h3>{{ article.title }}</h3>
        <p class="description">{{ article.description }}</p>
        <div class="read-more-container">
          <a :href="article.link" class="read-more">繼續閱讀</a>
        </div>
        <div class="category-tag">{{ article.category }}</div>
        <div class="divider"></div>
      </div>
    </div>

    <div class="fixbar-container" ref="fixbarContainer">
      <div
        class="fixbar"
        :style="{ left: isFixbarFixed ? fixedLeft + 'px' : 0 }"
        :class="{ 'fixbar-fixed': isFixbarFixed }"
      >
        <ul class="category-list">
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="category-item"
          >
            <button class="category-button" @click="filterArticles(category)">
              {{ category }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const articles = [
  {
    title: "文章1標題",
    description: "文章1內容簡介",
    link: "文章1連結",
    category: "JavaScript",
  },
  {
    title: "文章2標題",
    description: "文章2內容簡介",
    link: "文章2連結",
    category: "Vue",
  },
  {
    title: "文章1標題",
    description: "文章1內容簡介",
    link: "文章1連結",
    category: "JavaScript",
  },
  {
    title: "文章2標題",
    description: "文章2內容簡介",
    link: "文章2連結",
    category: "Vue",
  },
  {
    title: "文章1標題",
    description: "文章1內容簡介",
    link: "文章1連結",
    category: "JavaScript",
  },
  {
    title: "文章2標題",
    description: "文章2內容簡介",
    link: "文章2連結",
    category: "Vue",
  },
  {
    title: "文章1標題",
    description: "文章1內容簡介",
    link: "文章1連結",
    category: "JavaScript",
  },
  {
    title: "文章2標題",
    description: "文章2內容簡介",
    link: "文章2連結",
    category: "Vue",
  },
  {
    title: "文章1標題",
    description: "文章1內容簡介",
    link: "文章1連結",
    category: "JavaScript",
  },
  {
    title: "文章2標題",
    description: "文章2內容簡介",
    link: "文章2連結",
    category: "Vue",
  },
  {
    title: "文章1標題",
    description: "文章1內容簡介",
    link: "文章1連結",
    category: "JavaScript",
  },
  {
    title: "文章2標題",
    description: "文章2內容簡介",
    link: "文章2連結",
    category: "Vue",
  },

  // 其他文章列表資料
];

const categories = [
  "顯示全部",
  "JavaScript",
  "Vue",
  "TypeScript",
  "Test",
  "CI/CD",
  "Clean Code",
  "其他",
];

const filteredArticles = ref(articles);
const fixedLeft = ref(0);
const isFixbarFixed = ref(false);

const filterArticles = (category) => {
  if (category === "顯示全部") {
    filteredArticles.value = articles;
  } else {
    filteredArticles.value = articles.filter(
      (article) => article.category === category
    );
  }
};

const handleScroll = () => {
  const fixbarElement = document.querySelector(".fixbar-container");
  if (fixbarElement) {
    const fixbarOffsetTop = fixbarElement.offsetTop;
    isFixbarFixed.value = window.pageYOffset >= fixbarOffsetTop - 20;
  }
};

onMounted(() => {
  const fixbarElement = document.querySelector(".fixbar-container");
  const rect = fixbarElement.getBoundingClientRect();

  fixedLeft.value = rect.left;
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.article-list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.article-item {
  flex: 0 0 calc(50% - 10px);
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;
}

.article-item::after {
  content: "";
  display: block;
  padding-bottom: 50%;
}

.article-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.description {
  margin-bottom: 10px;
}

.read-more-container {
  display: flex;
  justify-content: flex-end;
}

.read-more {
  font-size: 14px;
  color: blue;
  text-decoration: underline;
}

.category-tag {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  color: yellow;
  background-color: #ffc107;
  border-radius: 4px;
}

.divider {
  width: 100%;
  height: 1px;
  border-top: 1px dashed #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
}

.fixbar-container {
  width: 250px;
  margin-left: 20px;
}

.fixbar {
  background-color: #ffe066;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.fixbar-fixed {
  position: fixed;
  top: 20px;
  left: calc(100% - 250px);
  width: 250px;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  margin-bottom: 10px;
}

.category-button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #ffc107;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
}

.category-button:hover {
  background-color: #ffab00;
}

.category-button:active {
  background-color: #e69500;
}
</style>
