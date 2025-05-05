
import './App.css'
import SearchBar from "./components/SearchBar.jsx";
import getData from "./api/api.js";
import {useEffect, useState} from "react";
import ImageGallery from "./components/ImageGallery.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import ModalImage from "./components/ModalImage.jsx";
import Loader from "./components/Loader.jsx";
import toast, { Toaster } from 'react-hot-toast';



function App() {
  const [query, setQuery] = useState('')
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [totalPages, setTotalPages] = useState(null)
  const [modalImage, setModalImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = (e)=>{
      e.preventDefault()

      if(!e.target[0].value.trim()) {
          toast('This field should not be empty')
          return
      }
      setQuery(e.target[0].value)
      setPhotos([])
      setPage(1)
      e.target.reset()
  }

   useEffect(()=>{
     if(!query) return
     const fetchData = async () =>{
       try{
           setIsLoading(true)
           const {results, total_pages} = await getData(query, page)
           setPhotos(prev => [...prev, ...results])
           setTotalPages(total_pages)

       }catch{
            setError(true)
       }finally{
           setIsLoading(false)
       }
     }
       fetchData()
   }, [query, page])

    const handleLoadMore = ()=>{
        setPage(page+1)
    }

    const openModal = photo =>{
        setModalImage(photo)
    }

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
        <Toaster />
      {error ? <ErrorMessage/>:<ImageGallery photos={photos} openModal={openModal}/>}
      <Loader isLoading={isLoading}/>
      <ModalImage modalImage={modalImage} modalIsOpen={Boolean(modalImage)} closeModal={()=>openModal(null)}/>
      {photos.length > 0 && totalPages !== page && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  )
}

export default App
