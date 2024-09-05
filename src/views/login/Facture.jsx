import React from 'react';
import './css/Facture.css'
const Facture = () => {
    return (
        
        <main>
            <div className="container">
                <div className="row mt-5">
                    <div className="facture">
                        <section className="niveau1">
                            <div className="row entete">
                                <a href='/home' className="logo col-md-4">
                                    <img src="/images/LOGO1.png" className="logo" />
                                </a>
                                <div className="decret col-md-4">
                                    <p>
                                        Lorem, ipsum dolor.
                                        Lorem, ipsum dolor. <br />
                                        Lorem, ipsum dolor. 
                                    </p>
                                </div>
                                <div className="coord col-md-4">
                                    <p>
                                        Email: 237000000000 <br />
                                        Tel: 237000000000
                                    </p>
                                </div>
                            </div>
                            <div className="entete-body row">
                                <div className=" sender col-md-6">
                                    <h5 className="titre-sender">Expediteur</h5>
                                    <p className="text-bold">Nom :</p>
                                    <p className="text-bold">Ville :</p>
                                    <p className="text-bold">Tel :</p>
                                </div>
                                <div className="receive col-md-6">
                                    <h5 className="titre-receive">Destinataire</h5>
                                    <p className="text-bold">Nom :</p>
                                    <p className="text-bold">Ville :</p>
                                    <p className="text-bold">Tel :</p>
                                </div>
                            </div>
                        </section>
                        <section className='niveau2 row'>
                            <hr className="my-4" />
                            <div className="col-md-6">
                                <div>
                                    <p>Colis N:</p>
                                </div>
                                <div className="datres d-flex justify-content-between">    
                                    <p className=''>Date:</p>
                                    <p className="">N:</p>
                                    <p className="">Poids:</p>
                                    <p className="">Qte:</p>

                                </div>
                            </div>
                            <div className="col-md-6 qr">
                                <p>Code QR</p>
                            </div>
                        </section>
                    </div>
                    <span className='fst-italic'>
                        <small className='text-body-secondary'>
                            Imprimer le ... par ...
                        </small>
                    </span>
                    <div className="retour">
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Facture;