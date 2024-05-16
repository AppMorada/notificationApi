import { TReplace } from 'src/notification/utils/replace';
import { randomUUID } from 'node:crypto';
import { Entity } from '../entity';

interface IProps {
	id: string;
	isEnabled: boolean;
	token: string;
	expiresAt: Date;
}

export type TSubscriberPropsInput = TReplace<IProps, { id?: string }>;

export class Subscriber implements Entity<Subscriber> {
	private _props: IProps;

	constructor(input: TSubscriberPropsInput) {
		this._props = {
			id: input.id ?? randomUUID(),
			token: input.token,
			expiresAt: input.expiresAt,
			isEnabled: input.isEnabled,
		};
	}

	dereference(): Subscriber {
		return new Subscriber({
			id: this.id,
			token: this.token,
			isEnabled: this.isEnabled,
			expiresAt: this.expiresAt,
		});
	}

	equalsTo(input: Subscriber): boolean {
		if (input === this) return true;

		return (
			input instanceof Subscriber &&
			input.expiresAt === this.expiresAt &&
			input.token === this.token &&
			input.isEnabled === this.isEnabled &&
			input.id === this.id
		);
	}

	get id() {
		return this._props.id;
	}

	get token() {
		return this._props.token;
	}
	set token(input: string) {
		this._props.token = input;
	}

	get expiresAt() {
		return this._props.expiresAt;
	}
	set expiresAt(input: Date) {
		this._props.expiresAt = input;
	}

	get isEnabled() {
		return this._props.isEnabled;
	}
	set isEnabled(input: boolean) {
		this._props.isEnabled = input;
	}
}
