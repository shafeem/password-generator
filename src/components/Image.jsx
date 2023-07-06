import React from 'react'
import good from '../assets/images/good.jpg'
import strong from '../assets/images/strong.jpg'
import verystrong from '../assets/images/very storng.jpg'
import veryweak from '../assets/images/veryweek.jpg'
import weak from '../assets/images/week.jpg'

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
    <div className=' h-20'>
      <img src={`${images}`} alt="" />
    </div>
  )
}

export default Image
