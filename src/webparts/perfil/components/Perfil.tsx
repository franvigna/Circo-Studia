import * as React from 'react'
import { IPerfilProps } from './IPerfilProps'
import { Stack, Text, Persona, PersonaSize } from '@fluentui/react'

const Perfil = (props: IPerfilProps): JSX.Element => {
    const { userDisplayName, context } = props

    const email = context.pageContext.user.email
    //  const loginName = context.pageContext.user.loginName

    return (
        <Stack tokens={{ childrenGap: 20, padding: 20 }}>
            <Text variant='xLarge'>Perfil del usuario</Text>
            <Persona
                text={userDisplayName}
                secondaryText={email}
                //tertiaryText={loginName}
                size={PersonaSize.size72}
                hidePersonaDetails={false}
            />
        </Stack>
    )
}

export default Perfil
