import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    const fetchImages = async () => {
      const data = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
      const images = await data.json()
      setImages(images.hits)
      setIsLoading(false)
    }
    const result = fetchImages().catch(console.error)
    console.log(result)
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}

export default App
