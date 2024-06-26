// import { useFormState } from "react-dom"

// import { LOGIN_VIEW } from "@modules/account/templates/login-template"
// import Input from "@modules/common/components/input"
// import { logCustomerIn } from "@modules/account/actions"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import { SubmitButton } from "@modules/checkout/components/submit-button"



// type Props = {
//   setCurrentView: (view: LOGIN_VIEW) => void
// }

// const Login = ({ setCurrentView }: Props) => {
//   const [message, formAction] = useFormState(logCustomerIn, null)

//   return (
//     <div className="max-w-sm w-full flex flex-col items-center"
//     data-testid="login-page">
//       {/* <Image src={require('../../../../../public/bgimg.jpg') } 
//       // objectFit="cover"
//       layout="fill"
//       alt="bgimg"
//       />  */}

//       <div className="w-full relative bg-neutral-400 h-96 ">
     
//       <h1 className="text-large-semi uppercase mb-6 text-center">Welcome back</h1>
//       <p className="text-center text-base-regular text-ui-fg-base mb-8">
//         Sign in to access an enhanced shopping experience.
//       </p>
//       <form className="w-full p-10" action={formAction}>
//         <div className="flex flex-col w-full gap-y-2">
//           <Input
//             label="Email"
//             name="email"
//             type="email"
//             title="Enter a valid email address."
//             autoComplete="email"
//             required
//             data-testid="email-input"
//           />
//           <Input
//             label="Password"
//             name="password"
//             type="password"
//             autoComplete="current-password"
//             required
//             data-testid="password-input"
//           />
//         </div>
//         <ErrorMessage error={message} data-testid="login-error-message" />
//         <SubmitButton data-testid="sign-in-button" className="w-full mt-6">Sign in</SubmitButton>
//       </form>
//       </div>
//       <span className="text-center text-ui-fg-base text-small-regular mt-6">
//         Not a member?{" "}
//         <button
//           onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
//           className="underline"
//           data-testid="register-button"
//         >
//           Join us
//         </button>
//         .
//       </span>
//     </div>
//   )
// }

// export default Login

import { useFormState } from "react-dom"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Image from "next/image"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-sm w-full flex  bg-[#f9f8f8] bg-opacity-50 flex-col items-center p-10" data-testid="login-page">
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
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6 transition-colors duration-300 hover:bg-rose-200">Sign in</SubmitButton>
      </form>
        {/* <SubmitButton data-testid="sign-in-button" className="w-full mt-6">Sign in</SubmitButton> */}
        {/* <SubmitButton data-testid="sign-in-button" className="w-full mt-6">Sign in</SubmitButton>
    </form> */}
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Not registered yet?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-blue-500 hover:underline"
          data-testid="register-button"
        >
          Create an account.
        </button>
        ..
      </span>
      </div>
   

  )
}

export default Login

