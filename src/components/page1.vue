<template>

    <div class="page1">

    <div>
       {{'title: '+title}}
    </div>
        <button>click hello world</button>

    </div>
</template>
<script>
    export default {
        name: 'page1',

        data (){
            //alert("page1"),
            return{
                
                title: "page1"
            }
        },
        computed: {

         // alert("page1");
        
         },
         methods:{

             callfun: function(){
                 

                 return;
             }


         }
    }
</script>
<style lang="">
    
</style>