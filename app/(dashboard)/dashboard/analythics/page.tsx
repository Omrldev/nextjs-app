import React from 'react'

const page = async () => {
    const response = await fetch('http://localhost:3000/api/books');

    if (!response.ok) throw new Error('could not fetch');

    const books = await response.json();

  return (
    <div>
        This analythics folder
        <p>
            {JSON.stringify(books, null, 2)}
        </p>
    </div>
  )
}

export default page