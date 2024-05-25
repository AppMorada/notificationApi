import { notificationFactory } from '@tests/factory/notificationFactory';

describe('Notification test', () => {
	it('should be able to create a Notification class', () => {
		const sut = notificationFactory();
		const sutWithRef = sut;
		const sutWithNoRef = sut.dereference();

		expect(sut.equalsTo(sutWithNoRef)).toBe(true);
		expect(sut.equalsTo(sutWithRef)).toBe(true);

		sutWithNoRef.message = 'New message';
		expect(sut.equalsTo(sutWithNoRef)).toBe(false);

		sutWithRef.message = 'New message';
		expect(sut.equalsTo(sutWithRef)).toBe(true);
	});
});
