import React, { Suspense } from 'react'

const Loadable = (Component, FallbackComponent) => {
  return props => (
    <Suspense fallback={<FallbackComponent {...props} />}>
      <Component {...props} />
    </Suspense>
  )
}

export default Loadable