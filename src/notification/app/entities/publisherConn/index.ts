import { TReplace } from '@utils/replace';
import { UUID } from '../vo/generals/uuid';
import { Entity } from '../entity';

interface IProps {
	id: UUID;
	userId: UUID;
	publisherId: UUID;
	segment: string;
}

export type TPublisherConnInputProps = TReplace<
	IProps,
	{
		id?: string;
		userId: string;
		publisherId: string;
	}
>;

export class PublisherConn implements Entity<PublisherConn> {
	private _props: IProps;

	constructor(input: TPublisherConnInputProps) {
		this._props = {
			id: input.id ? new UUID(input.id) : UUID.genV4(),
			publisherId: new UUID(input.publisherId),
			userId: new UUID(input.userId),
			segment: input.segment,
		};
	}

	dereference(): PublisherConn {
		return new PublisherConn({
			id: this.id.value,
			publisherId: this.publisherId.value,
			userId: this.userId.value,
			segment: this.segment,
		});
	}

	equalsTo(input: PublisherConn): boolean {
		if (input === this) return true;

		return (
			input instanceof PublisherConn &&
			input.id.equalTo(this.id) &&
			input.publisherId.equalTo(this.publisherId) &&
			input.userId.equalTo(this.userId) &&
			input.segment === this.segment
		);
	}

	get id() {
		return this._props.id;
	}

	get publisherId() {
		return this._props.publisherId;
	}
	set publisherId(input: UUID) {
		this._props.publisherId = input;
	}

	get userId() {
		return this._props.userId;
	}
	set userId(input: UUID) {
		this._props.userId = input;
	}

	get segment() {
		return this._props.segment;
	}
	set segment(input: string) {
		this._props.segment = input;
	}
}
