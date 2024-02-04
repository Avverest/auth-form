import { ReactElement } from 'react'

import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'

const router = createRouter({ routeTree })
router.navigate({ from: '/', to: '/login' })

declare module '@tanstack/react-router' {
  interface Rigister {
    router: typeof router
  }
}

export function App(): ReactElement {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
