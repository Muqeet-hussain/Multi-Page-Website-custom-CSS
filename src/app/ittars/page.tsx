import React from 'react'

const ittars = () => {
  const ittarData = [
    {
      id:1, name:'White Oud', price: 1500, description:'Favorite Ittar', image:'image1.jpg'
    },
    {
      id:2, name:'Musk', price: 1300, description:'Decent Ittar', image:'image2.jpg'
    },
    {
      id:3, name:'Jasmine', price: 2000, description:'Best Ittar', image:'image6.jpg'
    },
    {
      id:4, name:'Rose', price: 1800, description:'Best Selling Ittar', image:'image7.jpg'
    },
    {
      id:6, name:'Aseel', price: 1650, description:'Excelent Ittar', image:'image9.jpg'
    },
    {
      id:7, name:'Sandal', price: 2200, description:'Best Feeling Ittar', image:'image10.jpg'
    },

  ]
  return (
    <div>
      <div className='ittars'>
        {ittarData.map((ittar) => (
          <div key={ittar.id} className='ittar-card'>
            <img src={ittar.image} alt={ittar.name} />
            <h3>{ittar.name}</h3>
            <p>{ittar.description}</p>
            <div className='price'>${ittar.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ittars