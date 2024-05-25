import { EntitiesEnum } from '@app/entities/enums';

interface IProps {
	entity: EntitiesEnum;
	message: string;
}

export class EntitieError extends Error {
	readonly entity: EntitiesEnum;

	constructor(input: IProps) {
		super();

		this.name =
			input.entity === EntitiesEnum.VO
				? 'Value Object error'
				: 'Entity error';
		this.message = input.message;
		this.entity = input.entity;
	}
}
