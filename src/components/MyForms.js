import { useState } from 'react'
/*CSS */
import './MyForms.css'


function MyForms({ user }) {
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [desc, setDesc] = useState(user ? user.desc : "")
  const [rol, setRol] = useState(user ? user.rol : "")


  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("enviando form");
    console.log(name);
    console.log(email);
    console.log(desc);
    console.log(rol);


    setName("")
    setEmail("")
    setDesc("")
    setRol("--none--")


  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
        </div>
        <label>
          <span>E-email:</span>
          <input type="email" name="email" placeholder="Digite seu e-mail" onChange={handleEmail} value={email} />
        </label>

        <label>
          <span>Descrição</span>
          <textarea name="bio" placeholder='Descrição aqui' onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
        </label>
        {/*select input */}
        <label>
          <span>Função</span>
          <select name="role" onChange={(e)=> setRol(e.target.value)} value={rol}>
            <option value="user">Users</option>
            <option value="read">Read</option>
            <option value="edt">Editor</option>

          </select>
        </label>



        <input type="submit" value="Enviar" />

      </form>

    </div>
  )
}

export default MyForms