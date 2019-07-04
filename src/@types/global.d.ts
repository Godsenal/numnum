type Status = 'INIT' | 'FETCHING' | 'SUCCESS' | 'FAILURE';
type ApiCall<P extends any[], R> = (...params: P) => Promise<R>;
type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

type ApiParams<T> = Unpacked<Parameters<T>>;