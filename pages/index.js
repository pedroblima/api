import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import apiDeputados from '../services/apiDeputados'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = () => {
    const [deputados, setDeputados] = useState([])

    useEffect(() => {

        apiDeputados.get('/deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })
    }, [])

    return (
        <Pagina titulo='Deputados'>
            <h2>Deputados</h2>
            <Row>
                {deputados.map(item => (
                    <Col className='mb-3' md={2} title={item.foto}>
                        <Link href={'/deputados/' + item.id}>
                            <img key={item.id} src={item.urlFoto} width="100px" />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index