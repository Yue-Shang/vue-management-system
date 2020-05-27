<template>
    <!--左侧菜单组件-->
    <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @select="menuSelected"
            active-background-color="#F0F6F6"
            text-color="white"
            active-text-color="black"
            router>
        <nav-menu :navMenus="leftMenus"></nav-menu>
    </el-menu>

</template>

<script>
    import NavMenu from './NavMenu.vue'
    import {data1} from '../../../api/data.js'
    export default{
        data(){
            return{
                leftMenus:data1.list
            }
        },
        components:{
            NavMenu
        },
        created(){
            console.log('数据信息',this.leftMenus)
        },
        methods:{
            menuSelected(index,indexPath){
                console.log('当前绑定的index值',index)
                console.log('当前绑定的index与path值',indexPath)
            }
        }
    }
</script>

<style>
</style>