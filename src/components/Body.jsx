import React, { useState } from 'react'
import Image from './Image'
import Input from './Input'

const Body = () => {
  const [Password,setPassword] = useState({
    length : 5,
    uppercase : false,
    lowercase : false,
    numbers : false,
    symbols : false
  })


  return (
    <div className='flex flex-row  bg-faint-orange gap-5'>
      <div className='w-5/12'>
        <Image />
      </div>
      <div className='w-7/12'>
        <Input Password={Password} setPassword={setPassword} />
      </div>
    </div>
  )
}

export default Body
