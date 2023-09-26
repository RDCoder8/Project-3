import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"

export default function AuthPage(props) {
const [signedUp, setSignedUp] = useState(false)
function swapToLogin () {
setSignedUp(!signedUp)
} 
  return (
    <main><h1>AuthPage</h1>
    {signedUp ? <LoginForm setUser={props.setUser} swapToLogin={swapToLogin} /> : <SignUpForm setUser={props.setUser} swapToLogin={swapToLogin} /> }
    </main>
  )
}
