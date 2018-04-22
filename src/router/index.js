import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'

import Splash from '@/components/Splash'
import Onboard1 from '@/components/Onboard1'
import Onboard2 from '@/components/Onboard2'
import Onboard3 from '@/components/Onboard3'
import Onboard4 from '@/components/Onboard4'

import Flow from '@/components/Flow'
import Start from '@/components/Start'

import Personal1 from '@/components/Personal1'
import Personal2 from '@/components/Personal2'
import Personal3 from '@/components/Personal3'

import Financial from '@/components/Financial'

import Housing1 from '@/components/Housing1'
import Housing2 from '@/components/Housing2'
import Housing3 from '@/components/Housing3'
import Housing4 from '@/components/Housing4'

import Utilities from '@/components/Utilities'
import Utilities1 from '@/components/Utilities1'
import Utilities2 from '@/components/Utilities2'
import UtilitiesReview from '@/components/UtilitiesReview'
import UtilitiesSpash from '@/components/UtilitiesSpash'

import Savings1 from '@/components/Savings1'
import Savings2 from '@/components/Savings2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Splash
    },
    {
      path: '/onboard-1',
      component: Onboard1
    },
    {
      path: '/onboard-2',
      component: Onboard2
    },
    {
      path: '/onboard-3',
      component: Onboard3
    },
    {
      path: '/onboard-4',
      component: Onboard4
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/start',
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
          path: 'personal-3',
          component: Personal3
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
        },
        {
          path: 'housing-4',
          component: Housing4
        },
        {
          path: 'utilities',
          component: Utilities,
          children: [
            {
              path: 'splash',
              component: UtilitiesSpash
            },
            {
              path: 'add',
              name: 'add-utilities',
              component: Utilities1
            },
            {
              path: 'review',
              component: UtilitiesReview
            },
            {
              path: 'edit',
              component: Utilities2
            }
          ]
        },
        {
          path: 'savings-1',
          component: Savings1
        },
        {
          path: 'savings-2',
          component: Savings2
        }
      ]
    }
  ]
})
