export abstract class Entity<T> {
	abstract dereference(): T;
	abstract equalsTo(input: T): boolean;
}
