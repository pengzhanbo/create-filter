export type CreateFilterPattern =
  | ReadonlyArray<string | RegExp>
  | string
  | RegExp
  | null

export interface CreateFilterOptions {
  resolve?: string | false | null
}
