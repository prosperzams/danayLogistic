import React from 'react'
import { Toaster} from 'sonner'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import NavLog from '../../components/NavLog'

const loginSchema = yup.object({
  statuts: yup.string().required('Choix du status obligatoire')
                .oneOf(['personnel','civil'], 'Faites le choix'),
    name: yup.string().required('Ce champ est obligatoire'),
    city: yup.string().required('Ce champ est obligatoire'),
    contact: yup.string().required('Ce champ est obligatoire')
                .matches(/^237\d{9}$/,'Le format exigée est le numéro camerounais'),
    type: yup.string().required('Ce champ est obligatoire'),
    poids: yup.string().required('Ce champ est obligatoire'),
    nameDest: yup.string().required('Ce champ est obligatoire'),
    numMark: yup.string().required('Ce champ est obligatoire'),
    contenu: yup.string().required('Ce champ est obligatoire'),
    quantite: yup.string().required('Ce champ est obligatoire'),
    villeDest: yup.string().required('Ce champ est obligatoire'),
    telDest: yup.string().required('Ce champ est obligatoire')
    .matches(/^237\d{9}$/,'Le format exigée est le numéro camerounais'),
}).required()


export default function Home() {


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
      <NavLog/>
        <main>
          <div className="container">
            <div className="row justify-content-center align-items-center mt-5">
              <Toaster richColors position="top-center" />

              <div className='col-md-9 mt-5'>
                <div className='card shadow rounded-5'>
                  <div className="card-body p-5">
                    <h1 className="mb-3 text-center">Enregistrement d'un colis</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="expediteur row g-3 mb-2">
                          <h5 className='text-center mb-2'>Expediteur</h5>

                          <div className="form-group mb-2">
                              <select name="statuts" {...register("statuts")} className="form-control" id="statuts" aria-describedby='status'>
                                <option value=''>Entrez le status de l'expediteur</option>
                                <option value="personnel">Personnel</option>
                                <option value="civil">Civil</option>
                              </select>
                              <span className='text-danger errors'>{errors.statuts?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-4">
                              <input type="text" name='name' {...register("name")} className="form-control" placeholder="Nom de l'expediteur"/>
                              <span className='text-danger errors'>{errors.name?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-4">
                              <input type="text" name='city' {...register("city")} className="form-control" placeholder="Ville de l'expediteur"/>
                              <span className='text-danger errors'>{errors.city?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-4">
                              <input type="tel" name='contact' {...register("contact")} className="form-control" placeholder="Contact de l'expediteur"/>
                              <span className='text-danger errors'>{errors.contact?.message}</span>
                          </div>
                        </div>

                        <div className="colis row g-3 mb-2">                        
                          <h5 className="text-center mb-2">Colis</h5>
                          <div className="form-group mb-2">
                              <input type="text" name='type' {...register("type")} className="form-control" placeholder='Type de colis'/>
                              <span className='text-danger errors'>{errors.type?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-6">
                              <input type="number" name='poids' {...register("poids")} className="form-control" placeholder='Poids du colis'/>
                              <span className='text-danger errors'>{errors.poids?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-6">
                              <input type="text" name='contenu' {...register("contenu")} className="form-control" placeholder='Contenance du colis'/>
                              <span className='text-danger errors'>{errors.contenu?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-6">
                              <input type="text" name='numMark' {...register("numMark")} className="form-control" placeholder='Nombre marque sur le colis'/>
                              <span className='text-danger errors'>{errors.numMark?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-6">
                              <input type="number" name='quantite' {...register("quantite")} className="form-control" placeholder='Quantité du colis'/>
                              <span className='text-danger errors'>{errors.quantite?.message}</span>
                          </div>
                        </div>
                      
                        <div className="destinataire row g-3 mb-2">
                          <h5 className="text-center mb-2">Destinataire</h5>
                          <div className="form-group mb-2">
                              <input type="text" name='nameDest' {...register("nameDest")} className="form-control" placeholder='Nom du Destinataire'/>
                              <span className='text-danger errors'>{errors.nameDest?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-6">
                              <input type="text" name='villeDest' {...register("villeDest")} className="form-control" placeholder='Ville du Destinataire'/>
                              <span className='text-danger errors'>{errors.villeDest?.message}</span>
                          </div>
                          <div className="form-group mb-2 col-md-6">
                              <input type="tel" name='telDest' {...register("telDest")} className="form-control" placeholder='Telephone du Destinataire'/>
                              <span className='text-danger errors'>{errors.telDest?.message}</span>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mt-3">Enregistrer</button>
                        <a href="/facture">
                          <button type="button" className="btn btn-primary w-100 mt-3">Enregistrer</button>
                        </a>
                    </form>                  
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
    </>
  )
}
