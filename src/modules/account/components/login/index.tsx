import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-sm w-full flex flex-col items-center" data-testid="login-page">
      <div className="main rounded-lg shadow-xl p-10 transition-transform w-96 text-center">
      <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        {/* <SubmitButton data-testid="sign-in-button" className="w-full mt-6">Sign in</SubmitButton> */}
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6 text-white py-2 px-6 rounded cursor-pointer transition-colors duration-300 hover:bg-cyan-500">Sign in</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        {/* Not a member?{" "} */}
        Not registered yet?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          // className="underline"
          className="text-blue-500 hover:underline"
          data-testid="register-button"
        >
          {/* Join us */}
          Sign Up.
        </button>
      </span>
      </div>
      
    </div>
  )
}

export default Login
