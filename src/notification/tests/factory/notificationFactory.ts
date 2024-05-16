import {
	Notification,
	TNotificationPropsInput,
} from '@app/entities/notification';
import { randomUUID } from 'crypto';

type TOverride = Partial<TNotificationPropsInput>;

export function notificationFactory(input: TOverride = {}) {
	return new Notification({
		publisherId: randomUUID(),
		title: 'Notification Title',
		message: 'Message blablabla',
		...input,
	});
}
