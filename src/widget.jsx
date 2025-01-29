import { useState } from 'react'

function Widget({ name, price }) {
  const [inStock, setInStock] = useState(true)

  return (
    <>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p className={`test-sm ${inStock ? "stock-available" : "stock-unavailable"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button onClick={() => setInStock(!inStock)}>
        Toggle Stock
      </button>
    </>
  )
}

export default Widget
// I JUST REALIZED THIS PROJECT DOESN'T HAVE TAILWIND INSTALLED...OOPS
// OK THINK I HAVE IT FIGURED OUT....