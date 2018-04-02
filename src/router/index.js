import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Flow from '@/components/Flow'
import Personal1 from '@/components/Personal1'
import Personal2 from '@/components/Personal2'
import Financial from '@/components/Financial'
import Housing1 from '@/components/Housing1'
import Housing2 from '@/components/Housing2'
import Housing3 from '@/components/Housing3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/flow',
      component: Flow,
      children: [
        {
          path: 'personal-1',
          component: Personal1
        },
        {
          path: 'personal-2',
          component: Personal2
        },
        {
          path: 'financial',
          component: Financial
        },
        {
          path: 'housing-1',
          component: Housing1
        },
        {
          path: 'housing-2',
          component: Housing2
        },
        {
          path: 'housing-3',
          component: Housing3
        }
      ]
    }
  ]
})
