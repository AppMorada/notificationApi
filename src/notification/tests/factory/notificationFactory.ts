import {
	Notification,
	TNotificationPropsInput,
} from '@app/entities/notification';
import { UUID } from '@app/entities/vo/generals/uuid';

type TOverride = Partial<TNotificationPropsInput>;

export function notificationFactory(input: TOverride = {}) {
	return new Notification({
		publisherId: UUID.genV4().value,
		title: 'Notification Title',
		message: 'Message blablabla',
		...input,
	});
}
