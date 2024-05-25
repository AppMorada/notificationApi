import {
	PublisherConn,
	TPublisherConnInputProps,
} from '@app/entities/publisherConn';
import { UUID } from '@app/entities/vo/generals/uuid';

type TOverride = Partial<TPublisherConnInputProps>;

export function publisherConnFactory(input: TOverride = {}) {
	return new PublisherConn({
		segment: '1568F',
		userId: UUID.genV4().value,
		publisherId: UUID.genV4().value,
		...input,
	});
}
