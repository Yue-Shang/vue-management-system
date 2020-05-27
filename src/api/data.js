export const data1={
    "list": [
        {
            "entity": {
                "id": 1,
                "parentMenuId": 0,
                "name": "home",
                "icon": "el-icon-message\r\n",
                "alias": "首页",
                "state": "ENABLE",
                "sort": 0,
                "value": "/home",
                "type": "NONE",
                "discription": "用于首页的菜单",
                "createUserId": 1
            },
            "childs": null
        },
        {
            "entity": {
                "id": 3,
                "parentMenuId": 0,
                "name": "list",
                "icon": "el-icon-news",
                "alias": "列表",
                "state": "ENABLE",
                "sort": 1,
                "value": null,
                "type": "NONE",
                "discription": "用于列表的菜单",
                "createUserId": 1
            },
            "childs": [
                {
                    "entity": {
                        "id": 4,
                        "parentMenuId": 3,
                        "name": "list",
                        "icon": "el-icon-phone-outline\r\n",
                        "alias": "长列表",
                        "state": "ENABLE",
                        "sort": 0,
                        "value": "/list",
                        "type": "NONE",
                        "discription": "用于长列表的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                     "entity": {
                         "id": 2,
                         "parentMenuId": 3,
                         "name": "user",
                         "icon": "el-icon-loading",
                         "alias": "Echarts图",
                         "state": "ENABLE",
                         "sort": 0,
                         "value": "/user",
                         "type": "LINK",
                         "discription": "Echarts图",
                         "createUserId": 1
                      },
                       "childs": null
                 },
                    ]
                },
        {
            "entity": {
                "id": 6,
                "parentMenuId": 0,
                "name": "upload",
                "icon": "el-icon-rank",
                "alias": "导入Excel",
                "state": "ENABLE",
                "sort": 2,
                "value": "/upload",
                "type": "NONE",
                "discription": "用于导入Excel的菜单",
                "createUserId": 1
            },
                 "childs": null
        }
    ]
}