import { initializeApp } from 'firebase-admin';
import {
	Injectable,
	OnApplicationShutdown,
	OnModuleDestroy,
} from '@nestjs/common';

@Injectable()
export class FirestoreService
implements OnApplicationShutdown, OnModuleDestroy
{
	private readonly _firestore: FirebaseFirestore.Firestore;

	constructor() {
		const app = initializeApp({
			projectId: process.env.FIRESTORE_PROJECT_ID as string,
		});
		this._firestore = app.firestore();
	}

	get firestore() {
		return this._firestore;
	}

	async onApplicationShutdown() {
		await this._firestore.terminate();
	}

	async onModuleDestroy() {
		await this._firestore.terminate();
	}
}
