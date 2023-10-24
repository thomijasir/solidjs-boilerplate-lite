export type Nullable<T> = T | null;
export type Validation<T> = Record<keyof T, boolean | undefined>;
export interface ProxyConstructor {
  new <TSource extends object, TTarget extends object>(
    target: TSource,
    handler: ProxyHandler<TSource>
  ): TTarget;
}
