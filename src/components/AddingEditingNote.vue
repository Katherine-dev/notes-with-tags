<template>
  <div class="add-note">
    <form @submit.prevent="onSubmit()">
       <div class="container">
         <span>Title: </span>
         <input class="title" type="text" v-model="title" placeholder="Название...">
      </div>
      <div class="container">
       <span>Tags: </span>
       <input class="tags" type="text" v-model="tags" placeholder="Теги...">
      </div>
      <div class="container content-input">
         <span>Content: </span>
         <textarea class="content" type="text" v-model="content" placeholder="Содержимое..."/>
      </div>
      <div class="button-wrapper-bottom">
      <button type="submit">Submit &#10004;</button>
      </div>
    </form>
    </div>
</template>

<style scoped>

 .add-note {
   padding-right: 350px;
 }
 .container {
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 100px;
 }
  .content-input {
   margin-top: 25px;
 }
 .tags {
  margin-left: 35px;
 }
 title, .tags {
  width: 100%;
 }
 .title {
   height:30px;
   margin-left: 40px;
   width: 100%;
 }
 .content {
  margin-left: 13px;
  resize: vertical;
  width: 100%;
  height: 200px;
 }
 .button-wrapper-bottom {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  }
  .button-wrapper-bottom button {
  padding: 5px;
  }
</style>
