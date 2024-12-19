"use client"
import { useRouter } from "next/navigation"

export default function Home(){

  const router = useRouter();

  const iniciarSesion = ()=>{
    if(false){
      router.push('/perfil')
    }else{
      alert("Hubo un error")
    }
  }

  return(
    <>
      <button onClick={()=>iniciarSesion()}>Iniciar sesion</button>
    </>
  )
}