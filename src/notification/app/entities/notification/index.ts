import { TReplace } from '@utils/replace';
import { Entity } from '../entity';
import { UUID } from '../vo/generals/uuid';

interface IProps {
	id: UUID;
	publisherId: UUID;
	title: string;
	message: string;
	createdAt: Date;
}

export type TNotificationPropsInput = TReplace<
	IProps,
	{
		id?: string;
		publisherId: string;
		createdAt?: Date;
	}
>;

export class Notification implements Entity<Notification> {
	private _props: IProps;

	constructor(input: TNotificationPropsInput) {
		this._props = {
			id: input.id ? new UUID(input.id) : UUID.genV4(),
			publisherId: input.publisherId
				? new UUID(input.publisherId)
				: UUID.genV4(),
			title: input.title,
			message: input.message,
			createdAt: input.createdAt ?? new Date(),
		};
	}

	dereference(): Notification {
		return new Notification({
			id: this.id.value,
			publisherId: this.publisherId.value,
			title: this.title,
			message: this.message,
			createdAt: this.createdAt,
		});
	}

	equalsTo(input: Notification): boolean {
		if (input === this) return true;

		return (
			input instanceof Notification &&
			input.id.equalTo(this.id) &&
			input.publisherId.equalTo(this.publisherId) &&
			input.title === this.title &&
			input.message === this.message &&
			input.createdAt === this.createdAt
		);
	}

	get id(): UUID {
		return this._props.id;
	}

	get publisherId() {
		return this._props.publisherId;
	}
	set publisherId(input: UUID) {
		this._props.publisherId = input;
	}

	get title() {
		return this._props.title;
	}

	set title(input: string) {
		this._props.title = input;
	}

	get message() {
		return this._props.message;
	}
	set message(input: string) {
		this._props.message = input;
	}

	get createdAt() {
		return this._props.createdAt;
	}
	set createdAt(input: Date) {
		this._props.createdAt = input;
	}
}
