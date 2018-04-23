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
import UtilitiesReview from '@/components/Utilities/UtilitiesReview'
import UtilitiesSplash from '@/components/Utilities/UtilitiesSplash'

import Insurance from '@/components/Insurance'
import InsuranceReview from '@/components/Insurance/InsuranceReview'
import InsuranceSplash from '@/components/Insurance/InsuranceSplash'

import LivingExpenses from '@/components/LivingExpenses'
import LivingExpensesReview from '@/components/LivingExpenses/LivingExpensesReview'
import LivingExpensesSplash from '@/components/LivingExpenses/LivingExpensesSplash'

import ConsumerDebt from '@/components/ConsumerDebt'
import ConsumerDebtReview from '@/components/ConsumerDebt/ConsumerDebtReview'
import ConsumerDebtSplash from '@/components/ConsumerDebt/ConsumerDebtSplash'

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
          name: 'Personal1',
          path: 'personal-1',
          component: Personal1
        },
        {
          name: 'Personal2',
          path: 'personal-2',
          component: Personal2
        },
        {
          name: 'Personal3',
          path: 'personal-3',
          component: Personal3
        },
        {
          name: 'Financial',
          path: 'financial',
          component: Financial
        },
        {
          name: 'Housing1',
          path: 'housing-1',
          component: Housing1
        },
        {
          name: 'Housing2',
          path: 'housing-2',
          component: Housing2
        },
        {
          name: 'Housing3',
          path: 'housing-3',
          component: Housing3
        },
        {
          name: 'Housing4',
          path: 'housing-4',
          component: Housing4
        },
        {
          name: 'Utilities',
          path: 'utilities',
          component: Utilities,
          children: [
            {
              name: 'UtilitiesSplash',
              path: 'splash',
              component: UtilitiesSplash
            },
            {
              name: 'UtilitiesReview',
              path: 'review',
              component: UtilitiesReview
            }
          ]
        },
        {
          name: 'insurance',
          path: 'insurance',
          component: Insurance,
          children: [
            {
              name: 'InsuranceSplash',
              path: 'splash',
              component: InsuranceSplash
            },
            {
              name: 'InsuranceReview',
              path: 'review',
              component: InsuranceReview
            }
          ]
        },
        {
          name: 'LivingExpenses',
          path: 'living-expenses',
          component: LivingExpenses,
          children: [
            {
              name: 'LivingExpensesSplash',
              path: 'splash',
              component: LivingExpensesSplash
            },
            {
              name: 'LivingExpensesReview',
              path: 'review',
              component: LivingExpensesReview
            }
          ]
        },
        {
          name: 'ConsumerDebt',
          path: 'consumer-debt',
          component: ConsumerDebt,
          children: [
            {
              name: 'ConsumerDebtSplash',
              path: 'splash',
              component: ConsumerDebtSplash
            },
            {
              name: 'ConsumerDebtReview',
              path: 'review',
              component: ConsumerDebtReview
            }
          ]
        },
        {
          name: 'Savings1',
          path: 'savings-1',
          component: Savings1
        },
        {
          name: 'Savings2',
          path: 'savings-2',
          component: Savings2
        }
      ]
    }
  ]
})
