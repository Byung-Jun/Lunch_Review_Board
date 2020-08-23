import Vue from 'vue'
import Router from 'vue-router'
import List from "../components/List"
import Write from "../components/Write"
import View from "../components/View"
import Edit from "../components/Edit"

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [
    {
      path: '/',
      name : "List",
      component : List
    },
    {
      path: '/view/:no',
      name : "View",
      component : View
    },{
      path: '/write',
      name : "Write",
      component : Write
    },{
      path: '/edit/:no',
      name : "Edit",
      component : Edit
    }
  ]
})
