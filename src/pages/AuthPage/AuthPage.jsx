// import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignUpFormFunc from '../../components/SignUpFormFunc/SignUpFormFunc'
import LogInForm from '../../components/LogInForm/LogInForm'

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpFormFunc setUser={setUser} />
      <LogInForm setUser={setUser} />
    </main>
  )
}