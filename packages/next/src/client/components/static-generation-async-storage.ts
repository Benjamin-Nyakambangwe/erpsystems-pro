import type { AsyncLocalStorage } from 'async_hooks'
import { createAsyncLocalStorage } from './async-local-storage'

export interface StaticGenerationStore {
  readonly isStaticGeneration: boolean
  readonly pathname: string
  readonly incrementalCache?: import('../../server/lib/incremental-cache').IncrementalCache
  readonly isRevalidate?: boolean
  readonly isPrerendering?: boolean

  forceDynamic?: boolean
  fetchCache?:
    | 'only-cache'
    | 'force-cache'
    | 'force-no-store'
    | 'default-no-store'
    | 'only-no-store'
  revalidate?: false | number
  forceStatic?: boolean
  dynamicShouldError?: boolean
  pendingRevalidates?: Promise<any>[]

  dynamicUsageDescription?: string
  dynamicUsageStack?: string
}

export type StaticGenerationAsyncStorage =
  AsyncLocalStorage<StaticGenerationStore>

export const staticGenerationAsyncStorage: StaticGenerationAsyncStorage =
  createAsyncLocalStorage()
