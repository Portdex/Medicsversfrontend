import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - MedicsVerse'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home')),
    layout: 'HorizontalLayout',
    meta: {
      authRoute: true,
      menuHidden: true
    }
  },
  {
    path: '/search',
    component: lazy(() => import('../../views/JobSearchPage')),
    layout: 'HorizontalLayout',
    meta: {
      authRoute: true,
      menuHidden: true
    }
  },
  {
    path: '/forums',
    component: lazy(() => import('../../views/forum/Forums')),
    layout: 'HorizontalLayout',
    meta: {
      authRoute: true,
      menuHidden: true
    }
  },
  {
    path: '/agencies',
    component: lazy(() => import('../../views/agency/Agrencies')),
    layout: 'HorizontalLayout',
    meta: {
      authRoute: true,
      menuHidden: true
    }
  },
  {
    path: '/new-post',
    component: lazy(() => import('../../views/forum/ForumPost')),
    layout: 'HorizontalLayout',
    meta: {
      authRoute: true,
      menuHidden: true
    }
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
