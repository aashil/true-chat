export class InMemoryDataService {
  createDb() {
    let chats = [
      {id: 11, name: 'Mr. Nice', message: 'hello there'},
	  {id: 12, name: 'Mr. Bullet', message: 'hello there'}
    ];
    return {chats};
  }
}
