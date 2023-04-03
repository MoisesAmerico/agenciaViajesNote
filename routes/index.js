import express from 'express';

import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';

import { guardarTestimonial } from '../controllers/testimonialesController.js';

const router = express.Router();
/*
router.get('/', (req, res) =>{    
    res.send('Wakanda for ever');
})

router.get('/Inicio', (req, res) =>{
    res.send('Inicio');
})

router.get('/Nosotros', (req, res) =>{
    const pelicula = 'Avengers: End Game'
    res.render('nosotros', {
        pelicula
    });
    
})
*/

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);


// Cuando Lleno el form
router.post('/testimoniales', guardarTestimonial);


export default router;