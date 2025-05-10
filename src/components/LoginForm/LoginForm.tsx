import { useState } from "react"
import { useAppDispatch } from "../../store/hook"



export const LoginForm : React.FC = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const dispatch = useAppDispatch()

// fonction connexion

/* 
const handleSubmit = (e: React.FormEvent) => {


if (condition) {
    dispatch(login)
console.log('connexion réussie');

} else {
console.log("Impossible de se connecter");
alert("Identifiants incorrects")
}
}
*/


  return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Se connecter</button>
        </form>
      )

}




