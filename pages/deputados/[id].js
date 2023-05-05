import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ deputados }) => {
    return (
        <Pagina titulo={deputados.name}>

            
        </Pagina>
    )
}    
export default Detalhes


export async function getServerSideProps(context) {

    const id = context.params.id

    const res = await apiDeputados.get('/deputados/' + id  )
    const deputados = res.data

    return {
        props: { deputados },
    }
}