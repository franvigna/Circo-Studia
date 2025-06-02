// src/webparts/appCircoStudia/components/AppCircoStudia.tsx
import * as React from 'react'
import { IAppCircoStudiaProps } from './IAppCircoStudiaProps'
import { Stack, Text } from '@fluentui/react'
import { Nav } from '@fluentui/react/lib/Nav'
import OfertaMaterias from '../../ofertaMateriasIngInf/components/OfertaMateriasIngInf'
import PlanDeEstudio from '../../planDeEstudioIngInf/components/PlanDeEstudioIngInf'
import HistorialAcademico from '../../historialAcademico/components/HistorialAcademico'

const AppCircoStudia = (props: IAppCircoStudiaProps): JSX.Element => {
    const [page, setPage] = React.useState('oferta')

    const renderPage = (): JSX.Element => {
        const sharedProps = {
            context: props.context,
            description: props.description,
            isDarkTheme: props.isDarkTheme,
            environmentMessage: props.environmentMessage,
            hasTeamsContext: props.hasTeamsContext,
            userDisplayName: props.userDisplayName,
        }

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
        <Stack horizontal styles={{ root: { height: '100vh' } }}>
            <Nav
                selectedKey={page}
                onLinkClick={(ev, item) => item && setPage(item.key!)}
                groups={[
                    {
                        links: [
                            {
                                name: 'Oferta',
                                key: 'oferta',
                                icon: 'Education',
                                url: '#',
                            },
                            {
                                name: 'Plan de estudio',
                                key: 'plan',
                                icon: 'BulletedList',
                                url: '#',
                            },
                            {
                                name: 'Historial',
                                key: 'historial',
                                icon: 'ReportDocument',
                                url: '#',
                            },
                        ],
                    },
                ]}
                styles={{ root: { width: 250, borderRight: '1px solid #ddd' } }}
            />
            <Stack
                grow
                styles={{
                    root: {
                        padding: 20,
                        overflowY: 'auto',
                        maxHeight: '100vh',
                    },
                }}
            >
                {renderPage()}
            </Stack>
        </Stack>
    )
}

export default AppCircoStudia