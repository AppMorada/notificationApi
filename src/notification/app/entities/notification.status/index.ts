import { TReplace } from '@utils/replace';
import { Entity } from '../entity';
import { randomUUID } from 'crypto';

interface IProps {
	notificationId: string;
	subscriberId: string;
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
			notificationId: input.notificationId ?? randomUUID(),
			subscriberId: input.subscriberId ?? randomUUID(),
			accessed: input.accessed,
		};
	}

	dereference(): NotificationStatus {
		return new NotificationStatus({
			notificationId: this.notificationId,
			subscriberId: this.subscriberId,
			accessed: this.accessed,
		});
	}

	equalsTo(input: NotificationStatus): boolean {
		if (input === this) return true;

		return (
			input instanceof NotificationStatus &&
			input.accessed === this.accessed &&
			input.notificationId === this.notificationId &&
			input.subscriberId === this.subscriberId
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

	set subscriberId(input: string) {
		this._props.subscriberId = input;
	}

	get notificationId() {
		return this._props.notificationId;
	}

	set notificationId(input: string) {
		this._props.notificationId = input;
	}
}
