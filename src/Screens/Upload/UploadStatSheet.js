import React from 'react'
import Navbar from '../../Components/Nav/Navbar'
import CreatePlayerForm from './CreatePlayerForm'


import './UploadStatSheet.css'
import FileUploader from '../../Components/FileUploader'

const UploadStatSheet = () => {
  
  return (
    <div className='create-player'>
      <div className='upload'>
        <p>Upload Yearly Stats</p>
        <FileUploader />
        <br></br>
        <p>Create a new player</p>
        <CreatePlayerForm />
      </div>
    </div>
  )
}

export default UploadStatSheet