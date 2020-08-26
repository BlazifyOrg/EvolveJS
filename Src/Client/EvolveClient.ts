import { EventEmitter } from 'events';
import { ClientUser } from './ClientUser';
import { Objex } from '@evolvejs/objex';
import { Guild } from '../Structures/Guild/Guild';
import Channel from '../Structures/Channel/Channel';
import { User } from '../Structures/User/User';
import Emoji from '../Structures/Guild/Emoji';
import { Snowflake } from '../Constants/Constants';
import API from '../API/API';
import { ClientOptions } from './ClientOptions';
import { Message } from '../Structures/Message/Message';
import { EvolveLogger } from './EvolveLogger';

export class EvolveClient extends EventEmitter {
	public token: string;
	public options: ClientOptions;
	public guilds: Objex<Snowflake, Guild> = new Objex();
	public channels: Objex<Snowflake, Channel> = new Objex();
	public users: Objex<Snowflake, User> = new Objex();
	public emojis: Objex<Snowflake, Emoji> = new Objex();
	public messages: Objex<Snowflake, Message> = new Objex()
	private _user?: ClientUser;
	public logger: EvolveLogger = EvolveLogger
	public api: API = new API(this)

	public constructor (
		token: string, 
		options: ClientOptions
	) {
		super({ captureRejections: options.capturePromiseRejection });
		this.token = token;
		this.options = options
		if (!this.token) throw Error('TOKEN_ERROR');
	}

	public get user() {
		return this._user!;
	}

	public set user(user: ClientUser) {
		this._user = user;
	}
}
