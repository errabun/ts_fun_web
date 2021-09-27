import { User } from "./models/User";

const user = new User({ id: 1 })

user.events.on('change', () => {
  console.log('Changed!')
})

user.events.trigger('change')

