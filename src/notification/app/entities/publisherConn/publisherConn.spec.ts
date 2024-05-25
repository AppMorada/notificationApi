import { UUID } from '../vo/generals/uuid';
import { publisherConnFactory } from '@tests/factory/publisherConnFactory';

describe('PublisherConn test', () => {
	it('should be able to create a PublisherConn class', () => {
		const sut = publisherConnFactory();
		const sutWithRef = sut;
		const sutWithNoRef = sut.dereference();

		expect(sut.equalsTo(sutWithNoRef)).toBe(true);
		expect(sut.equalsTo(sutWithRef)).toBe(true);

		sutWithNoRef.userId = UUID.genV4();
		expect(sut.equalsTo(sutWithNoRef)).toBe(false);

		sutWithRef.userId = UUID.genV4();
		expect(sutWithRef.equalsTo(sut)).toBe(true);
	});
});
