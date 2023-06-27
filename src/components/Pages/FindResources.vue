<template>
  <div>
    <main>
      <div
        v-for="resource in resources"
        :key="resource.id"
        class="resource-card"
      >
        <h2>{{ resource.title }}</h2>
        <p>{{ resource.description }}</p>
        <a :href="resource.link">前往資源</a>
      </div>
    </main>
  </div>
</template>

<script setup>
const resources = [
  {
    id: 1,
    title: "資源標題",
    description: "這裡是關於資源的描述或簡介。",
    link: "#",
  },
  {
    id: 2,
    title: "另一個資源標題",
    description: "這裡是另一個資源的描述或簡介。",
    link: "#",
  },
];
</script>
<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

h1 {
  color: #333;
}

p {
  line-height: 1.5;
}

.resource-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.resource-card h2 {
  color: #333;
  margin-top: 0;
}

.resource-card p {
  color: #666;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
