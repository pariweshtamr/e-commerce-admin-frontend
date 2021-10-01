import { useSelector } from 'react-redux'
import PasswordResetForm from '../../components/Password-reset-form/PasswordResetForm'

const ResetPassword = () => {
  const { showResetPasswordForm } = useSelector((state) => state.user)

  return (
    <div className="register-page">
      {showResetPasswordForm ? (
        'Show password reset form'
      ) : (
        <PasswordResetForm />
      )}
    </div>
  )
}

export default ResetPassword
