import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export class NotificationApiBootstrap {
	async exec() {
		const app = await NestFactory.create(AppModule, {
			bufferLogs: true,
		});

		const PORT = process.env.PORT || 3000;
		app.listen(PORT);
	}
}
