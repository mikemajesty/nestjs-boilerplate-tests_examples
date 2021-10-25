export abstract class ICustomerService<Entity> {
  abstract delete(id: number): unknown;
  abstract update(id: number, customer: Entity): Promise<unknown>;
  abstract getAll(): Promise<Entity[]>;
  abstract save(customer: Entity): Promise<Entity>;
}
