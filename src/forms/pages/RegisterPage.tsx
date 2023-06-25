import { useState } from 'react';
import '../styles/styles.css';

interface RegisterData {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export const RegisterPage = () => {

  const [registerData, setRegisterData] = useState<RegisterData>({
    name: 'Alex',
    email: 'alex@gmail.com',
    password1: '123456',
    password2: '123456'
  })

  return (
    <div>
      <h1>Register Page</h1>

      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={registerData.name}
        />
        <input type="email" name="email" placeholder="email" value={registerData.email} />
        <input type="password" name="pass1" placeholder="password" value={registerData.password1} />
        <input type="password" name="pass2" placeholder="Repite Password" value={registerData.password2} />

        <button type="submit">Create</button>
      </form>
    </div>
  )
}
