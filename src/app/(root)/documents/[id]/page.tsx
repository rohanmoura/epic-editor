import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center gap -2'>
          <p className='document-title'>
            This is a fake document title
          </p>
        </div>
      </Header>
    </div>
  )
}

export default page
