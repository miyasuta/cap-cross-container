// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';

export function _OrderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Order extends Base {
    declare ID?: __.Key<number>
    declare amount?: number | null
    declare customer?: __.Association.to<Customer> | null
    declare customer_ID?: number | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Order>;
    declare static readonly elements: __.ElementsOf<Order>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Order extends _OrderAspect(__.Entity) {}
Object.defineProperty(Order, 'name', { value: 'sales.Orders' })
Object.defineProperty(Order, 'is_singular', { value: true })
export class Orders extends Array<Order> {$count?: number}
Object.defineProperty(Orders, 'name', { value: 'sales.Orders' })

export function _CustomerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Customer extends Base {
    declare ID?: __.Key<number>
    declare name?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Customer>;
    declare static readonly elements: __.ElementsOf<Customer>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Customer extends _CustomerAspect(__.Entity) {}
Object.defineProperty(Customer, 'name', { value: 'sales.Customers' })
Object.defineProperty(Customer, 'is_singular', { value: true })
export class Customers extends Array<Customer> {$count?: number}
Object.defineProperty(Customers, 'name', { value: 'sales.Customers' })
