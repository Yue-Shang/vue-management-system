<template>
        <div>长列表
                <el-table
                        :data="longlist"
                        stripe
                        style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="日期"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址">
                        </el-table-column>
                </el-table>
        </div>
</template>

<script>
    import {data} from "../../api/list";
    export default {
        name: "list",
        data(){
            return{
               // longlist:[]
                    longlist:data.tableData
            }
        },
        async created(){
            // const longlist = await data.tableData
            // console.log('数据信息',longlist)
            // this.longlist = Object.freeze(longlist)
        },
        methods:{}
    }
</script>

<style scoped>

</style>