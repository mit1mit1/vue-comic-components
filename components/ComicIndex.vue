<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
import MarkdownBox from './MarkdownBox.vue';
import { toRefs } from "vue";
const props = defineProps<{
    comicList: Array<string>;
}>();
const { comicList } = toRefs(props);
</script>

<template>
    <NavigationBar :comicList="comicList" />
    <MarkdownBox>
        {{ comicList }}
    </MarkdownBox>
</template>

<style></style>
