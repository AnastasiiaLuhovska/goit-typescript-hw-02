
import './App.css'
import SearchBar from "./components/SearchBar";
import getData from "./api/api";
import {useEffect, useState, FormEvent} from "react";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ModalImage from "./components/ModalImage";
import Loader from "./components/Loader";
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from "./components/ImageGallery";
import ErrorMessage from "./components/ErrorMessage";
import {Photo} from './types'

function App() {
  const [query, setQuery] = useState<string>('')
  const [photos, setPhotos] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)
  const [error, setError] = useState<boolean>(false)
  const [totalPages, setTotalPages] = useState<number|null>(null)
  const [modalImage, setModalImage] = useState<Photo|null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const searchInput = e.currentTarget.query as HTMLInputElement
      if(!searchInput.value.trim()) {
          toast('This field should not be empty')
          return
      }
      setQuery(searchInput.value.trim())
      setPhotos([])
      setPage(1)
      e.currentTarget.reset()
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

    const openModal = (photo:Photo|null) =>{
        setModalImage(photo)
    }

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
        <Toaster />
      {error ? <ErrorMessage/>:<ImageGallery photos={photos} openModal={openModal}/>}
      <Loader isLoading={isLoading}/>
        {modalImage &&
            <ModalImage modalImage={modalImage} modalIsOpen={Boolean(modalImage)} closeModal={() => openModal(null)}/>
        }      {photos.length > 0 && totalPages !== page && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  )
}

export default App
