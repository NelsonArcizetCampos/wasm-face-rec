/* tslint:disable */
/* eslint-disable */
export function detect_faces(_image_data: Uint8Array, _width: number, _height: number): FaceBoundingBox[];
export class FaceBoundingBox {
  private constructor();
  free(): void;
  x: number;
  y: number;
  width: number;
  height: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_faceboundingbox_free: (a: number, b: number) => void;
  readonly __wbg_get_faceboundingbox_x: (a: number) => number;
  readonly __wbg_set_faceboundingbox_x: (a: number, b: number) => void;
  readonly __wbg_get_faceboundingbox_y: (a: number) => number;
  readonly __wbg_set_faceboundingbox_y: (a: number, b: number) => void;
  readonly __wbg_get_faceboundingbox_width: (a: number) => number;
  readonly __wbg_set_faceboundingbox_width: (a: number, b: number) => void;
  readonly __wbg_get_faceboundingbox_height: (a: number) => number;
  readonly __wbg_set_faceboundingbox_height: (a: number, b: number) => void;
  readonly detect_faces: (a: number, b: number, c: number, d: number) => [number, number];
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
