import { TReplace } from '@utils/replace';
import { Entity } from '../entity';
import { UUID } from '../vo/generals/uuid';

interface IProps {
	publisherConnId: UUID;
	subscriberId: UUID;
}

export type TSubscriberPublisherConnMapInputProps = TReplace<
	IProps,
	{
		publisherConnId: string;
		subscriberId: string;
	}
>;

export class SubscriberPublisherConnMap
implements Entity<SubscriberPublisherConnMap>
{
	private _props: IProps;

	constructor(input: TSubscriberPublisherConnMapInputProps) {
		this._props = {
			subscriberId: new UUID(input.subscriberId),
			publisherConnId: new UUID(input.publisherConnId),
		};
	}

	dereference(): SubscriberPublisherConnMap {
		return new SubscriberPublisherConnMap({
			subscriberId: this.subscriberId.value,
			publisherConnId: this.publisherConnId.value,
		});
	}

	equalsTo(input: SubscriberPublisherConnMap): boolean {
		if (input === this) return true;

		return (
			input instanceof SubscriberPublisherConnMap &&
			input.subscriberId.equalTo(this.subscriberId) &&
			input.publisherConnId.equalTo(this.publisherConnId)
		);
	}

	get subscriberId() {
		return this._props.subscriberId;
	}
	set subscriberId(input: UUID) {
		this._props.subscriberId = input;
	}

	get publisherConnId() {
		return this._props.publisherConnId;
	}
	set publisherConnId(input: UUID) {
		this._props.publisherConnId = input;
	}
}
