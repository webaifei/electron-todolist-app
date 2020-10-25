import low, { lowdb } from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';


const adapter = new FileSync('db.json')
export const db = low(adapter)

db.defaults({ posts: [], user: {}, count: 0 })
  .write()

db.get('posts')
  // @ts-ignore
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()
