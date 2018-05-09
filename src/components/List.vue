<template>
    <div class="view">
        <h1 class="title">{{title}}</h1>
        <input type="text" v-model="newTodo" @keyup.enter="addTodo" >

        <ul>
            <li v-for="item in items" v-bind:class="{finesh:item.isFineshed}" @click="toggleFinish(item)">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "List",
    newTodo: "",
    data: function() {

        return {
           

            title: "TodoList",
            items: [
                {
                text: "今晚18:00跑步",
                isFineshed: false

                },
                 {
                text: "今天早餐",
                isFineshed: true

                }
            ]


        }
    },
    methods: {

        addTodo: function(){

                var value = this.newTodo && this.newTodo.trim();
                console.log(this.items.length);
                this.items.push({
                    isFineshed: false,
                    text: value

                });
                this.newTodo="";

        },
        toggleFinish: function(item){
         
          item.isFineshed=!item.isFineshed;
        }


    }

}
    
</script>

<style lang="">
    .view{
        width: 400px;
        border: 1px solid gray;
        margin: 20px auto;

    }
    .view .title{
        width: 400px;
        border-bottom: 1px solid gray;

    }
    .view ul li{

        margin: 10px 0;
        list-style: none;
        cursor: pointer;

    }
    
    .view .finesh{
        color: gray;
        text-decoration: line-through;

    }
</style>