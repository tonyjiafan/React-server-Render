import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx'

export class AppState {
  @observable count = 0
  @observable name = 'tony'
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add(s = 1) {
    this.count += s
  }
  @action changeName(val) {
    this.name = val
  }
}

const appState = new AppState()

autorun(() => {
  console.log(appState.msg) // eslint-disable-line
})

setInterval(() => {
  appState.add(1)
}, 1000)

export default appState
