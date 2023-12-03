import React from 'react'
import { Formulario } from './Formulario'
import { Temperatura } from './Temperatura'
import { useClima } from '../hooks/useClima'
import { Loading } from './Loading'


export const AppClima = () => {

    const {resultado, cargando, noResultado} = useClima()
  return (
    <>
    <main className='dos-columnas'>
        <Formulario/>

        { cargando ? <Loading/> :
        
        resultado?.name ? <Temperatura/> :
        noResultado ? <p>{noResultado} </p> : <p></p>
        
        }
        
    </main>
    </>
  )
}
