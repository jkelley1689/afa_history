import React, { useRef, useState } from 'react'

import createNewPlayer from './apiFunctions/createNewPlayer'

const FileUploader = () => {

    const handleOnChange = e => {
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0],'UTF-8')
        fileReader.onload = e => {
            let data = JSON.parse(e.target.result)
            newPlayer(data)
        }
    }

    const newPlayer = (data) => {
        //let pd = data[0]
        //createNewPlayer(pd)
        data.forEach((player) => {
            setTimeout(() => {
                createNewPlayer(player)
            },500)
        })

    }
    

  return (
    <div>
        <input onChange={ (e) => {handleOnChange(e)} } type='file' />
    </div>
  )
}

export default FileUploader