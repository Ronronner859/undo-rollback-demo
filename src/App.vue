<script setup lang="ts">
import { ref , computed} from 'vue';
import { addRecord,getUndoStack } from './record';
const undoList = computed(() => {
  return getUndoStack().map((command) => {
    return command.name;
  })
});

const rollbackList = ref<string[]>([]);
const onClickCircle = (name: string) => {
  addRecord({
    name,
  })
};

const onUndo = () => {
};

const onUnBack = () => {
};
</script>

<template>
  <div>
    <div>
      点击填加：
      <div class="circleBox">
        <div class="red circle" @click="onClickCircle('red')"></div>
        <div class="yellow circle" @click="onClickCircle('yellow')"></div>
        <div class="blue circle" @click="onClickCircle('blue')"></div>
      </div>
      <div class="back">
        <button @click="onUndo">撤销</button>
        <button @click="onUnBack">回退</button>
      </div>
    </div>
    <div>
      <div class="listBox">
        <div>
          <p>可撤销列表</p>
          <div class="undoist listItem">
            <div v-for="(item,index) in undoList" :class="item"  :key="index" class="circle"> </div>
          </div>
        </div>
        <div>
          <p>可回退列表</p>
          <div class="rollback listItem">
            <div v-for="(item,index) in rollbackList" :class="item" :key="index" class="circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circleBox {
  display: flex;
  /* justify-content: space-between; */
  /* width: 300px; */
  margin: 10px auto;
}
.circle,.item{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px 10px;
  cursor: pointer;
}
.red{
  background-color: red;
}
.yellow{
  background-color: yellow;
}
.blue{
  background-color: blue;
}
.back{
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}
.listBox{
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;
}
.listItem{
  border: 1px solid wheat;
  height: 500px;
  border-top: none;
  /* 元素翻转 */
  display: flex;
  flex-direction: column-reverse;
}

</style>
