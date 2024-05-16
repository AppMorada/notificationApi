import { Subscriber, TSubscriberPropsInput } from '@app/entities/subscriber';

type TOverride = Partial<TSubscriberPropsInput>;

export function subscriberFactory(input: TOverride = {}) {
	return new Subscriber({
		token: 'token',
		isEnabled: true,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
		...input,
	});
}
