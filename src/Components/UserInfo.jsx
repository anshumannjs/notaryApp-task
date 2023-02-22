import React from 'react'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function UserInfo(props) {
    console.log(props.userData)
  return (
    <div className='w-[20%] h-screen bg-purple-600'>
        <img src={props.userData.photoURL} alt="" className='mt-20 mx-auto border border-black w-20 h-20 rounded-[50%]'/>

        <div className='text-white font-bold text-lg text-center'>
            {props.userData.firstName+" "+props.userData.lastName}
        </div>

        <div className='text-white mt-5 ml-3'>
            <MailIcon></MailIcon>
            {props.userData.email}
        </div>

        <div className='text-white mt-3 ml-3'>
            <PhoneIcon></PhoneIcon>
            {props.userData.phoneNumber}
        </div>

        <div className='text-white mt-3 ml-3'>
            <LocationOnIcon></LocationOnIcon>
            {props.userData.businessDetails.businessAddress}
        </div>
    </div>
  )
}
