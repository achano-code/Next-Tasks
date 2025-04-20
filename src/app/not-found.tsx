import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-8xl font-bold'>404</h1>
      <p className='text-4xl font-medium'>Page Not Found</p>
      <Link href="/" className='mt-4 text-xl text-blue-600 hover:underline'>Go Back home</Link>
    </div>
  )
}

export default NotFoundPage