import AppButton from '@/Components/Button'
import { useAppDispatch } from '@/Utils/hooks/appHooks'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { verificationRequest } from '../redux/authSlice'

const EmailVerification: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { uidb, token } = useParams()

  const handleVerification = () =>{
    const values = { uidb, token}
    dispatch(verificationRequest({values, navigate}))
  }
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <AppButton label='Verify Email' onClick={handleVerification} />
    </div>
  )
}

export default EmailVerification
