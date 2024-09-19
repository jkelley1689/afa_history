import React from 'react'
import Navbar from '../../Components/Nav/Navbar'

import './UploadStatSheet.css'
import FileUploader from '../../Components/FileUploader'

const UploadStatSheet = () => {
  return (
    <div>
      <Navbar />
      <div className='upload'>
        <p>Upload Stats</p>
        <FileUploader />
      </div>
    </div>
  )
}

export default UploadStatSheet