
import { WebPartContext } from "@microsoft/sp-webpart-base"

export interface IAppCircoStudiaProps {
  description: string
  isDarkTheme: boolean
  environmentMessage: string
  hasTeamsContext: boolean
  userDisplayName: string
  context: WebPartContext
}