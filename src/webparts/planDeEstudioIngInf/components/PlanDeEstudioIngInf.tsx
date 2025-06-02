import * as React from 'react'
import { useEffect, useState } from 'react'
import { Stack, Text, DetailsList, IColumn } from '@fluentui/react'
import { SPFI } from '@pnp/sp'
import { getSP } from '../../../pnpjsConfig'
import { IPlanDeEstudioIngInfProps } from './IPlanDeEstudioIngInfProps'
import { IPlanDeEstudioIngInf } from '../../../interfaces'

const PlanDeEstudioIngInf = (props: IPlanDeEstudioIngInfProps): JSX.Element => {
    const LIST_NAME = 'Plan_De_Estudio_IngInf'
    const sp: SPFI = getSP(props.context)

    const [items, setItems] = useState<IPlanDeEstudioIngInf[]>([])

    useEffect(() => {
        const fetchItems = async (): Promise<void> => {
            try {
                const listItems = await sp.web.lists
                    .getByTitle(LIST_NAME)
                    .items.select('Id', 'Title', 'field_1', 'field_2')()
                setItems(listItems)
            } catch (error) {
                console.error('❌ Error al obtener ítems:', error)
            }
        }

        fetchItems().catch(console.error)
    }, [])

    const columns: IColumn[] = [
        { key: 'col1', name: 'Código', fieldName: 'Title', minWidth: 50 },
        {
            key: 'col2',
            name: 'Descripción',
            fieldName: 'field_1',
            minWidth: 150,
        },
        {
            key: 'col3',
            name: 'Correlativas',
            fieldName: 'field_2',
            minWidth: 150,
        },
    ]

    return (
        <Stack
            tokens={{ padding: 24 }}
            styles={{ root: { overflowX: 'auto' } }}
        >
            <Text variant='xLarge' block style={{ marginBottom: 16 }}>
                Plan de Estudio - Ingeniería en Informática
            </Text>
            <DetailsList items={items} columns={columns} selectionMode={0} />
        </Stack>
    )
}

export default PlanDeEstudioIngInf
