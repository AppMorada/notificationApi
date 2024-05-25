import {
	TSubscriberPublisherConnMapInputProps,
	SubscriberPublisherConnMap,
} from '@app/entities/subscriberPublisherConnMap';
import { UUID } from '@app/entities/vo/generals/uuid';

type TOverride = Partial<TSubscriberPublisherConnMapInputProps>;

export function subscriberPublisherConnMapFactory(input: TOverride = {}) {
	return new SubscriberPublisherConnMap({
		subscriberId: UUID.genV4().value,
		publisherConnId: UUID.genV4().value,
		...input,
	});
}
