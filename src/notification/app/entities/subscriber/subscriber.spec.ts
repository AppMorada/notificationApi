import { subscriberFactory } from '@tests/factory/subscriberFactory';

describe('Subscriber test', () => {
	it('should be able to create a subscriber class', () => {
		const sut = subscriberFactory();
		const sutWithRef = sut;
		const sutWithNoRef = sut.dereference();

		expect(sut.equalsTo(sutWithNoRef)).toBe(true);
		expect(sut.equalsTo(sutWithRef)).toBe(true);

		sutWithNoRef.token = 'new token name';
		expect(sut.equalsTo(sutWithNoRef)).toBe(false);

		sutWithRef.token = 'new token name';
		expect(sutWithRef.equalsTo(sut)).toBe(true);
	});
});
