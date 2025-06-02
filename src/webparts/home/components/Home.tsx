import * as React from 'react'
import { IHomeProps } from './IHomeProps'

import {
    Stack,
    Text,
    DetailsList,
    IColumn,
    Persona,
    PersonaSize,
    PrimaryButton,
} from '@fluentui/react'

const Home = (props: IHomeProps): JSX.Element => {
    // Simulamos materias por horario
    const horarios = [
        {
            key: '1',
            hora: '08:00 a 12 hs',
            Lunes: '',
            Martes: '',
            Miércoles: '',
            Jueves: '',
            Viernes: '',
            Sábado: 'Tecnología de Redes',
        },
        {
            key: '2',
            hora: '14:00 a 18 hs',
            Lunes: '',
            Martes: '',
            Miércoles: '',
            Jueves: 'Base de Datos II',
            Viernes: '',
            Sábado: '',
        },
        {
            key: '3',
            hora: '19:00 a 23 hs',
            Lunes: '',
            Martes: '',
            Miércoles: '',
            Jueves: '',
            Viernes: '',
            Sábado: '',
        },
    ]

    const columns: IColumn[] = [
        { key: 'hora', name: 'Horario', fieldName: 'hora', minWidth: 100 },
        { key: 'Lunes', name: 'Lunes', fieldName: 'Lunes', minWidth: 100 },
        { key: 'Martes', name: 'Martes', fieldName: 'Martes', minWidth: 100 },
        {
            key: 'Miércoles',
            name: 'Miércoles',
            fieldName: 'Miércoles',
            minWidth: 100,
        },
        { key: 'Jueves', name: 'Jueves', fieldName: 'Jueves', minWidth: 100 },
        {
            key: 'Viernes',
            name: 'Viernes',
            fieldName: 'Viernes',
            minWidth: 100,
        },
        { key: 'Sábado', name: 'Sábado', fieldName: 'Sábado', minWidth: 100 },
    ]

    const coincidencias = [
        { name: 'Maria Maria' },
        { name: 'Antonio Lopez' },
        { name: 'Sol Vallejos' },
    ]

    return (
        <Stack tokens={{ childrenGap: 30, padding: 20 }}>
            <Text variant='xLargePlus'>
                Bienvenido <strong>{props.userDisplayName}</strong>, actualmente
                estás cursando
            </Text>

            <DetailsList items={horarios} columns={columns} />

            <Stack>
                <Text variant='xLarge' styles={{ root: { marginTop: 40 } }}>
                    Algunas coincidencias
                </Text>
                {coincidencias.map((colega, index) => (
                    <Persona
                        key={index}
                        text={colega.name}
                        size={PersonaSize.size40}
                        presence={undefined}
                        styles={{ root: { marginBottom: 10, marginTop: 10 } }}
                    />
                ))}
                <PrimaryButton text='Ver coincidencias' />
            </Stack>
        </Stack>
    )
}

export default Home
