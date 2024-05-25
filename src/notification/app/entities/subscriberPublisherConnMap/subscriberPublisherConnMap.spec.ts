import { subscriberPublisherConnMapFactory } from '@tests/factory/subscriberPublisherConnMapFactory';
import { UUID } from '../vo/generals/uuid';

describe('SubscriberPublisherConnMap test', () => {
	it('should be able to create a SubscriberPublisherConnMap class', () => {
		const sut = subscriberPublisherConnMapFactory();
		const sutWithRef = sut;
		const sutWithNoRef = sut.dereference();

		expect(sut.equalsTo(sutWithNoRef)).toBe(true);
		expect(sut.equalsTo(sutWithRef)).toBe(true);

		sutWithNoRef.subscriberId = UUID.genV4();
		expect(sut.equalsTo(sutWithNoRef)).toBe(false);

		sutWithRef.subscriberId = UUID.genV4();
		expect(sutWithRef.equalsTo(sut)).toBe(true);
	});
});
