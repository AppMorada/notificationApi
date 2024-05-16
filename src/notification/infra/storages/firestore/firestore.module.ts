import { Global, Module } from '@nestjs/common';
import { FirestoreService } from './firestore.service';

@Global()
@Module({
	imports: [FirestoreService],
})
export class FirestoreModule {}
