import React from 'react'

const page = ({params}: {params: {id: string}}) => {
    const {id} = params;

  return (
    <div className='p-8'>
        this is the user: {id}
    </div>
  )
}

export default page