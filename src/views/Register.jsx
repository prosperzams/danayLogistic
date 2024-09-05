import React from 'react';
import Navbar from '../components/Navbar';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const loginSchema = yup.object({
    name: yup.string().required('Ce champ est obligatoire'),
    email: yup.string().required('Ce champ est obligatoire')
                .email('Ecrivez un email valide'),
    contact: yup.string().required('Ce champ est obligatoire')
                .matches(/^237\d{9}$/,'Le format exigée est le numéro camerounais'),
    sexe: yup.string().required('Le choix est obligatoire'),
    password: yup.string().required('Ce champ est obligatoire')
                .min(8,'Votre mot de passe doit avoir au minimun 8 caracteres')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Vous devez faire un melanges de caracteres'),
    repeatPassword: yup.string().required('Répéter votre mot de passe')
                .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas")

  }).required()


const Register = () => {
    
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
                    <div className="col-md-8">

                        <div className="card shadow rounded-3">
                            <div className="card-body p-3">
                                <h1 className="mb-3 text-center">S'enregistrer</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-outline mb-4">
                                    <input type="text" name='name' {...register("name")} className="form-control" placeholder='Votre Nom'/>
                                    <span className='text-danger errors'>{errors.name?.message}</span>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" name='email' {...register("email")} className="form-control" placeholder='Votre email...'/>
                                    <span className='text-danger errors'>{errors.email?.message}</span>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="tel" name='contact' {...register("contact")} className="form-control" placeholder='Votre contact'/>
                                    <span className='text-danger errors'>{errors.contact?.message}</span>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" id='male' value={'male'} name='sexe' {...register("sexe")} className="form-check-input"/>
                                    <label htmlFor="male" className="form-check-label">Masculin</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" id='female' value={'female'} name='sexe' {...register("sexe")} className="form-check-input"/>
                                    <label htmlFor="female" className="form-check-label">Feminin</label>
                                </div><br />
                                <span className='text-danger errors'>{errors.sexe?.message}</span>
                                <div className="form-outline mt-4 mb-4">
                                    <input type="password" name='password' {...register("password")} className="form-control" placeholder='Votre mot de passe'/>
                                    <span className='text-danger errors'>{errors.password?.message}</span>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" name='repeatPassword' {...register("repeatPassword")} className="form-control" placeholder='Répéter votre mot de passe'/>
                                    <span className='text-danger errors'>{errors.repeatPassword?.message}</span>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Enregistrer</button>
                                <div className="text-center mt-2">
                                    <p className=''>J'ai un<a href="/
                                    "> compte</a> !</p>
                                </div>
                                </form>                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
            
        </>
    );
};

export default Register;