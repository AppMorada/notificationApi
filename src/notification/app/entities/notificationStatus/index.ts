import { TReplace } from '@utils/replace';
import { Entity } from '../entity';
import { UUID } from '../vo/generals/uuid';

interface IProps {
	notificationId: UUID;
	subscriberId: UUID;
	accessed: boolean;
}

export type TNotificationStatusInput = TReplace<
	IProps,
	{
		notificationId?: string;
		subscriberId?: string;
	}
>;

export class NotificationStatus implements Entity<NotificationStatus> {
	private _props: IProps;

	constructor(input: TNotificationStatusInput) {
		this._props = {
			notificationId: input.notificationId
				? new UUID(input.notificationId)
				: UUID.genV4(),
			subscriberId: input.subscriberId
				? new UUID(input.subscriberId)
				: UUID.genV4(),
			accessed: input.accessed,
		};
	}

	dereference(): NotificationStatus {
		return new NotificationStatus({
			notificationId: this.notificationId.value,
			subscriberId: this.subscriberId.value,
			accessed: this.accessed,
		});
	}

	equalsTo(input: NotificationStatus): boolean {
		if (input === this) return true;

		return (
			input instanceof NotificationStatus &&
			input.accessed === this.accessed &&
			input.notificationId.equalTo(this.notificationId) &&
			input.subscriberId.equalTo(this.subscriberId)
		);
	}

	get accessed() {
		return this._props.accessed;
	}

	set accessed(input: boolean) {
		this._props.accessed = input;
	}

	get subscriberId() {
		return this._props.subscriberId;
	}

	set subscriberId(input: UUID) {
		this._props.subscriberId = input;
	}

	get notificationId() {
		return this._props.notificationId;
	}

	set notificationId(input: UUID) {
		this._props.notificationId = input;
	}
}
