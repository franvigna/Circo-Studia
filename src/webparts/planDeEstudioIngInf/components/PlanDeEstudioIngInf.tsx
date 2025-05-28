import * as React from 'react'
import styles from './PlanDeEstudioIngInf.module.scss'
import { SPFI } from '@pnp/sp'
import { getSP } from '../../../pnpjsConfig'
import { useState, useEffect } from 'react'
import type { IPlanDeEstudioIngInfProps } from './IPlanDeEstudioIngInfProps'
import { IPlanDeEstudioIngInf } from '../../../interfaces'

const PlanDeEstudioIngInf = (props: IPlanDeEstudioIngInfProps): JSX.Element => {
    const LIST_NAME = 'Plan_De_Estudio_IngInf'
    const _sp: SPFI = getSP(props.context)

    const [items, setItems] = useState<IPlanDeEstudioIngInf[]>([])

    const fetchItems = async (): Promise<void> => {
        console.log('📡 Iniciando fetchItems()')
        try {
            console.log(`🔗 Conectando a la lista: ${LIST_NAME}`)
            const listItems = await _sp.web.lists
                .getByTitle(LIST_NAME)
                .items.select('Id', 'Title', 'field_1', 'field_2')()
            console.log('✅ Ítems obtenidos:', listItems)

            setItems(listItems)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('❌ Error al obtener ítems:', error)
                alert('Error al obtener ítems: ' + error.message)
            } else {
                console.error('❌ Error desconocido:', error)
                alert('Error desconocido: ' + JSON.stringify(error))
            }
        }
    }

    useEffect(() => {
        console.log('🚀 useEffect ejecutado')
        fetchItems().catch((e) =>
            console.error('⛔️ Error en fetchItems desde useEffect:', e)
        )
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Plan de Estudio - Ingeniería en Informática
            </h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Correlativas</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <tr key={item.Id}>
                                <td>{item.Title}</td>
                                <td>{item.field_1}</td>
                                <td>{item.field_2}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center' }}>
                                🔍 Cargando datos o no hay información
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PlanDeEstudioIngInf
