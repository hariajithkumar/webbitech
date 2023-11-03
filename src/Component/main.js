import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../Image/profile.png'

function main() {

  return (
    <div>
      <header className='w-25 mx-auto heading'>
        <div className='row m-0'> 
            <div className='col-2'>
                <img src={profile} />
            </div>
            <div className='col-8'>

            </div>
            <div className='col-2'>

            </div>
        </div>
      </header>
    </div>
  )
}

export default main
