// src/pnpjs-config.ts

import { SPFI, spfi } from "@pnp/sp";
import { SPFx } from "@pnp/sp/presets/all";
import { WebPartContext } from '@microsoft/sp-webpart-base';

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

let _sp: SPFI | undefined = undefined;

/**
 * Inicializa el objeto PnPjs (solo una vez)
 * @param context Contexto de SPFx
 */
export const setupSP = (context: WebPartContext): void => {
  if (_sp) return;
  _sp = spfi().using(SPFx(context));
};

/**
 * Devuelve el objeto SPFI ya configurado
 */
export const getSP = (context: WebPartContext): SPFI => {
  if (!_sp) {
    _sp = spfi().using(SPFx(context));
  }
  return _sp;
};
