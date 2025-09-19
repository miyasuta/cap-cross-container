// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';

export default class {
}

export function _CustomerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Customer extends Base {
    declare ID?: __.Key<number>
    declare name?: string | null
    declare additionalProperty?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Customer>;
    declare static readonly elements: __.ElementsOf<Customer>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Customer extends _CustomerAspect(__.Entity) {}
Object.defineProperty(Customer, 'name', { value: 'MasterPartnerService.Customers' })
Object.defineProperty(Customer, 'is_singular', { value: true })
export class Customers extends Array<Customer> {$count?: number}
Object.defineProperty(Customers, 'name', { value: 'MasterPartnerService.Customers' })
