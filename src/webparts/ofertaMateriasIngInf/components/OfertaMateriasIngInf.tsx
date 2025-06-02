import * as React from 'react'
import { useEffect, useState } from 'react'
import { DetailsList, IColumn, Stack, Text } from '@fluentui/react'
import { SPFI } from '@pnp/sp'
import { getSP } from '../../../pnpjsConfig'
import { IOfertaMateriasIngInf } from '../../../interfaces'
import type { IOfertaMateriasIngInfProps } from './IOfertaMateriasIngInfProps'

const OfertaMateriasIngInf = (
    props: IOfertaMateriasIngInfProps
): JSX.Element => {
    const LIST_NAME = 'Oferta_materias_IngInf'
    const _sp: SPFI = getSP(props.context)
    const [items, setItems] = useState<IOfertaMateriasIngInf[]>([])

    const fetchItems = async (): Promise<void> => {
        try {
            const listItems = await _sp.web.lists
                .getByTitle(LIST_NAME)
                .items.select(
                    'Id',
                    'Title',
                    'field_1',
                    'field_2',
                    'field_3',
                    'field_4',
                    'field_5'
                )()
            setItems(listItems)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error al obtener ítems:', error)
                alert(
                    'Error al obtener ítems: ' +
                        (error.message || JSON.stringify(error))
                )
            } else {
                console.error('Error desconocido:', error)
                alert('Error desconocido: ' + JSON.stringify(error))
            }
        }
    }

    useEffect(() => {
        // eslint-disable-next-line no-void
        void fetchItems()
    }, [])

    const columns: IColumn[] = [
        { key: 'Title', name: 'Código', fieldName: 'Title', minWidth: 70 },
        {
            key: 'field_1',
            name: 'Descripción',
            fieldName: 'field_1',
            minWidth: 120,
        },
        {
            key: 'field_2',
            name: 'Comisión',
            fieldName: 'field_2',
            minWidth: 80,
        },
        { key: 'field_3', name: 'Turno', fieldName: 'field_3', minWidth: 100 },
        { key: 'field_4', name: 'Días', fieldName: 'field_4', minWidth: 100 },
        {
            key: 'field_5',
            name: 'Modalidad',
            fieldName: 'field_5',
            minWidth: 100,
        },
    ]

    return (
        <Stack
            tokens={{ childrenGap: 20, padding: 20 }}
            styles={{ root: { overflowX: 'auto' } }}
        >
            <Text variant='xLarge'>
                Oferta de Materias Ingeniería en Informática
            </Text>
            <DetailsList items={items} columns={columns} />
        </Stack>
    )
}

export default OfertaMateriasIngInf
