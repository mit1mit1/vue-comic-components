<script setup lang="ts">
import { getComicNumber, setComic } from "../utils/comicNumber";
import { toRefs } from "vue";
const props = defineProps<{
  comicList: Array<string>;
}>();
const { comicList } = toRefs(props);
</script>

<template>
  <div class="nav-bar">
    <button :onclick="() => setComic(comicList, 0)">&lt; &lt; First</button>
    <button :onclick="() => setComic(comicList, getComicNumber(comicList) - 1)">&lt; Prev</button>
    <button :onclick="() => setComic(comicList, Math.floor(Math.random() * comicList.length))">
      Random
    </button>
    <button :onclick="() => setComic(comicList, getComicNumber(comicList) + 1)">Next ></button>
    <button :onclick="() => setComic(comicList, comicList.length - 1)">Last > ></button>
  </div>
</template>

<style>
.nav-bar {
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

button {
  margin-right: 10px;
  margin-bottom: 5px;
  transition-duration: 0.4s;
  border: none;
  padding: 8px 12px;
  min-height: 40px;
  min-width: 100px;
  font-size: 0.95em;
  font-family: "Quicksand", sans-serif;
}

button:hover {
  background-color: #ffb7c5;
  cursor: pointer;
}
</style>
