const test = r => require.ensure([], () => r(require('@/pages/test')), 'test')

const routes = [
  // 默认定向为动态首页
  {
    path: '',
    redirect: '/test'
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
]

export default routes
