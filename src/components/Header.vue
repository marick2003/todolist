<template>
    <div class="headerview">

        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    export default{

        name: "header",
        data(){
            return{

                title: "hrader"
            }
        },
        props:{

            msg:{

                type:String,
                default: "nioe"

            }
        }


    }
</script>
<style lang="">
    
</style>