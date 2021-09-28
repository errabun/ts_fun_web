export class Attributes<T> {

  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {    //sets up a generic constraint 
    return this.data[key]                 // K can only ever be a key of T (UserProps in this instance)
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }
}