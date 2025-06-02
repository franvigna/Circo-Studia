// src/webparts/appCircoStudia/components/AppCircoStudia.tsx
import * as React from 'react'
import { IAppCircoStudiaProps } from './IAppCircoStudiaProps'
import { Stack, Text, DefaultButton } from '@fluentui/react'
import OfertaMaterias from '../../ofertaMateriasIngInf/components/OfertaMateriasIngInf'
import PlanDeEstudio from '../../planDeEstudioIngInf/components/PlanDeEstudioIngInf'
import HistorialAcademico from '../../historialAcademico/components/HistorialAcademico'

const AppCircoStudia = (props: IAppCircoStudiaProps): JSX.Element => {
    const [page, setPage] = React.useState('oferta')

    const sharedProps = {
        context: props.context,
        description: props.description,
        isDarkTheme: props.isDarkTheme,
        environmentMessage: props.environmentMessage,
        hasTeamsContext: props.hasTeamsContext,
        userDisplayName: props.userDisplayName,
    }

    const renderPage = (): JSX.Element => {
        switch (page) {
            case 'oferta':
                return <OfertaMaterias {...sharedProps} />
            case 'plan':
                return <PlanDeEstudio {...sharedProps} />
            case 'historial':
                return <HistorialAcademico {...sharedProps} />
            default:
                return <Text>Seleccioná una sección</Text>
        }
    }

    return (
        <Stack styles={{ root: { height: '100vh' } }}>
            {/* Barra superior */}
            <Stack
                horizontal
                tokens={{ childrenGap: 10, padding: 20 }}
                styles={{
                    root: {
                        backgroundColor: props.isDarkTheme ? '#333' : '#f3f2f1',
                        borderBottom: '1px solid #ccc',
                    },
                }}
            >
                <DefaultButton
                    text='Oferta'
                    iconProps={{ iconName: 'Education' }}
                    onClick={() => setPage('oferta')}
                    styles={{
                        root: {
                            fontWeight: page === 'oferta' ? 'bold' : 'normal',
                        },
                    }}
                />
                <DefaultButton
                    text='Plan de estudio'
                    iconProps={{ iconName: 'BulletedList' }}
                    onClick={() => setPage('plan')}
                    styles={{
                        root: {
                            fontWeight: page === 'plan' ? 'bold' : 'normal',
                        },
                    }}
                />
                <DefaultButton
                    text='Historial'
                    iconProps={{ iconName: 'ReportDocument' }}
                    onClick={() => setPage('historial')}
                    styles={{
                        root: {
                            fontWeight:
                                page === 'historial' ? 'bold' : 'normal',
                        },
                    }}
                />
            </Stack>

            {/* Contenido */}
            <Stack
                grow
                styles={{
                    root: {
                        padding: 20,
                        overflowY: 'auto',
                    },
                }}
            >
                {renderPage()}
            </Stack>
        </Stack>
    )
}

export default AppCircoStudia
