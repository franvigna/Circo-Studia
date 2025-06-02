import * as React from 'react'
import styles from './HistorialAcademico.module.scss'
import { SPFI } from '@pnp/sp'
import { getSP } from '../../../pnpjsConfig'
import { useState, useEffect } from 'react'
import { IHistorialAcademico } from '../../../interfaces'
import { IHistorialAcademicoProps } from './IHistorialAcademicoProps'

const HistorialAcademico = (props: IHistorialAcademicoProps): JSX.Element => {
    const LIST_NAME = 'HistorialAcademico'
    const _sp: SPFI = getSP(props.context)

    const [items, setItems] = useState<IHistorialAcademico[]>([])

    const fetchItems = async (): Promise<void> => {
        try {
            console.log('Conectando a la lista:', LIST_NAME)

            const listItems = await _sp.web.lists
                .getByTitle(LIST_NAME)
                .items.select(
                    'Id',
                    'Title',
                    'field_1',
                    'field_2',
                    'field_3',
                    'field_4'
                )()

            console.log('Items:', listItems)
            setItems(listItems)
        } catch (error) {
            console.error('Error al obtener ítems:', error)
        }
    }

    useEffect(() => {
        fetchItems().catch(console.error)
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Historial Académico</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Materia</th>
                        <th>Fecha</th>
                        <th>Nota</th>
                        <th>Acta</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.Id}>
                            <td>{item.Title}</td>
                            <td>{item.field_1}</td>
                            <td>{item.field_2}</td>
                            <td>{item.field_3}</td>
                            <td>{item.field_4}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistorialAcademico
