
import { Signin } from '@/components/pagefiller/signin'
import { Signinform } from '@/components/account/signin-form'


export default function LoginPage() {
  return (
    <main className="grid items-center gap-6">
      
      <Signin />
      <Signinform/>
    </main>
  )
}
