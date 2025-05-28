import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IPlanDeEstudioIngInfProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext; // AGREGAR ESTO
}
