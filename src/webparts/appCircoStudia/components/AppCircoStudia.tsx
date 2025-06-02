import * as React from 'react'
import { IAppCircoStudiaProps } from './IAppCircoStudiaProps'
import { Stack, Text, DefaultButton } from '@fluentui/react'
import Home from '../../home/components/Home'
import OfertaMaterias from '../../ofertaMateriasIngInf/components/OfertaMateriasIngInf'
import PlanDeEstudio from '../../planDeEstudioIngInf/components/PlanDeEstudioIngInf'
import HistorialAcademico from '../../historialAcademico/components/HistorialAcademico'
import Perfil from '../../perfil/components/Perfil'

const AppCircoStudia = (props: IAppCircoStudiaProps): JSX.Element => {
    const [page, setPage] = React.useState('home')

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
            case 'home':
                return <Home {...sharedProps} />
            case 'oferta':
                return <OfertaMaterias {...sharedProps} />
            case 'plan':
                return <PlanDeEstudio {...sharedProps} />
            case 'historial':
                return <HistorialAcademico {...sharedProps} />
            case 'perfil':
                return <Perfil {...sharedProps} />
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
                    text='Inicio'
                    iconProps={{ iconName: 'Home' }}
                    onClick={() => setPage('home')}
                    styles={{
                        root: {
                            fontWeight: page === 'home' ? 'bold' : 'normal',
                        },
                    }}
                />
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
                <DefaultButton
                    text='Perfil'
                    iconProps={{ iconName: 'Contact' }}
                    onClick={() => setPage('perfil')}
                    styles={{
                        root: {
                            fontWeight: page === 'perfil' ? 'bold' : 'normal',
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
