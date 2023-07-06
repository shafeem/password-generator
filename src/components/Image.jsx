import React from 'react'
import good from '../assets/images/good.svg'
import strong from '../assets/images/strong.svg'
import verystrong from '../assets/images/very storng.svg'
import veryweak from '../assets/images/veryweek.svg'
import weak from '../assets/images/week.svg'


const Image = (props) => {
  const {Password} = props

  const ImgChecker = (length) => {
    if (length >= 4 && length <= 5) {
      return veryweak;
    } else if (length >= 6 && length <= 7) {
      return weak;
    } else if (length >= 8 && length <= 9) {
      return good;
    } else if (length >= 10 && length <= 11) {
      return strong;
    } else {
      return verystrong;
    }
  };

  const images = ImgChecker(Password.length)

  return (
    <div className='flex'>
      <img className='justify-end pl-48 h-96' src={`${images}`} alt="" />
    </div>
  )
}

export default Image
