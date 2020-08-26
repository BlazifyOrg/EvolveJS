import { EvolveClient } from '../Client/EvolveClient';
import { Payload } from '../Interfaces/Interfaces';
import { EVENTS } from '../Constants/Events';

export default class {
	constructor(client: EvolveClient, payload: Payload, shard: Array<number>) {
		client.emit(EVENTS.TYPING_START, (payload.d, shard));
	}
}
