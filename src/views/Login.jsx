import React from 'react'
import './css/Connect.css'
import Navbar from '../components/Navbar'
import { Toaster} from 'sonner'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Carroussel from '../components/Carroussel'

const loginSchema = yup.object({
    name: yup.string().required('Ce champ est obligatoire'),
    password: yup.string().required('Ce champ est obligatoire'),

  }).required()


export default function Login() {


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(loginSchema),
      })

      const onSubmit = (data) => console.log(data)


  return (
    <>  
      <Navbar/>
        <main>
          <div className="container">
            <div className="row justify-content-center align-items-center mt-5">
              <Toaster richColors position="top-center" />

              <div className='col-lg-6 nov mt-4'>
                    <h1 className="mb-3 text-center">Connexion</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-outline mb-4">
                        <input type="text" name='name' {...register("name")} className="form-control" placeholder='Votre Nom'/>
                        <span className='text-danger errors'>{errors.name?.message}</span>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" name='password' {...register("password")} className="form-control" placeholder='Votre mot de passe'/>
                        <span className='text-danger errors'>{errors.password?.message}</span>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Connexion</button>
                      <div className="text-center mt-2">
                        <p className=''>Not a member? <a href="/register">Register</a></p>
                      </div>
                    </form>                  
                  </div>

              
            <div className="col-lg-6 mt-4">
              <Carroussel/>
            </div>
            </div>
          </div>
        </main>
    </>
  )
}
