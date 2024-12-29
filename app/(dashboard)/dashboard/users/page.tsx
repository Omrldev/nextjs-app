import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-6'>this is the user page
        <div className='p-4 flex flex-col'>
            <Link href={'/dashboard/users/1'}>user 1</Link>
            <Link href={'/dashboard/users/2'}>user 2</Link>
            <Link href={'/dashboard/users/3'}>user 3</Link>
        </div>
    </div>
  )
}

export default page