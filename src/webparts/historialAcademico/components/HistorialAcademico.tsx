import * as React from 'react'
import { useEffect, useState } from 'react'
import { DetailsList, IColumn, Stack, Text } from '@fluentui/react'
import { SPFI } from '@pnp/sp'
import { getSP } from '../../../pnpjsConfig'
import { IHistorialAcademico } from '../../../interfaces'
import { IHistorialAcademicoProps } from './IHistorialAcademicoProps'

const HistorialAcademico = (props: IHistorialAcademicoProps): JSX.Element => {
    const LIST_NAME = 'HistorialAcademico'
    const sp: SPFI = getSP(props.context)
    const [items, setItems] = useState<IHistorialAcademico[]>([])

    useEffect(() => {
        const fetchItems = async (): Promise<void> => {
            try {
                const listItems = await sp.web.lists
                    .getByTitle(LIST_NAME)
                    .items.select(
                        'Id',
                        'Title',
                        'field_1',
                        'field_2',
                        'field_3',
                        'field_4'
                    )
                    ()
                setItems(listItems)
            } catch (error) {
                console.error('Error al obtener ítems:', error)
            }
        }

        fetchItems().catch(console.error)
    }, [])

    const columns: IColumn[] = [
        { key: 'Title', name: 'Título', fieldName: 'Title', minWidth: 70 },
        {
            key: 'field_1',
            name: 'Materia',
            fieldName: 'field_1',
            minWidth: 150,
        },
        { key: 'field_2', name: 'Fecha', fieldName: 'field_2', minWidth: 100 },
        { key: 'field_3', name: 'Nota', fieldName: 'field_3', minWidth: 50 },
        { key: 'field_4', name: 'Acta', fieldName: 'field_4', minWidth: 100 },
    ]

    return (
        <Stack tokens={{ childrenGap: 20, padding: 20 }}>
            <Text variant='xLarge'>Historial Académico</Text>
            <DetailsList items={items} columns={columns} />
        </Stack>
    )
}

export default HistorialAcademico
