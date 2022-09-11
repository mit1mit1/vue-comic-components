<script setup lang="ts">
import ManFigure from "./svgs/ManFigure.vue";
import ComicBox from "./components/ComicBox.vue";
import Panel from "./components/PanelBox.vue";
import BibleFigure from "./svgs/BibleFigure.vue";
import BeanieMan from "./svgs/BeanieMan.vue";
import NavigationBar from "./components/NavigationBar.vue";
import AfterComicBox from "./components/AfterComicBox.vue";
const comicList = ["test_comic_1", "test_comic_2"]
</script>

<template>
  <h1>SOME COMICS</h1>
  <NavigationBar :comicList="comicList" />
  <ComicBox>
    <Panel>
      <ManFigure />
      <BibleFigure />
      <BeanieMan />

    </Panel>
  </ComicBox>
  <NavigationBar :comicList="comicList" />
  <AfterComicBox>Some text, some text, some text.</AfterComicBox>
</template>

<style>
  h1 {
      text-align: center;
      font-family: monospace;
      font-weight: normal;
  }
  
  html {
      background-color: #eee;
  }
  </style>
