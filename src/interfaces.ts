import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICircoStudia{
    Id: number;
    Title: string;
    field_1: string;
    field_2: string;
    field_3: string;
    field_4: string;
    field_5: string;
    context: WebPartContext;
}
export interface IOfertaMateriasIngInf {
    Id: number;
    Title: string;
    field_1: string;
    field_2: string;
    field_3: string;
    field_4: string;
    field_5: string;
    field_6: number;
    field_7: number;
    context: WebPartContext;
}

export interface IPlanDeEstudioIngInf {
  Id: number;
  Title: string;       // Código de la materia
  field_1: string;      // Descripción
    field_2: string;      // Correlativas
        context: WebPartContext;

}
export interface IHistorialAcademico {
  Id: number
  Title: string
  field_1: string
  field_2: string
  field_3: string
  field_4: string
}
