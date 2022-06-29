import React from 'react'
import { useSelector } from 'react-redux'
import { ForgotPasswordResetForm } from '../../components/ForgotPassword/ForgotPasswordResetForm'
import PasswordResetForm from '../../components/Password-reset-form/PasswordResetForm'

const ResetPassword = () => {
  const { showResetPasswordForm } = useSelector((state) => state.user)

  return (
    <div className="register-page">
      {showResetPasswordForm ? (
        <ForgotPasswordResetForm />
      ) : (
        <PasswordResetForm />
      )}
    </div>
  )
}

export default ResetPassword
