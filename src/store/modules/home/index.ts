import store from '@/store'
import {
  Module,
  Mutation,
  Action,
  getModule,
  VuexModule
} from 'vuex-module-decorators'

@Module({ name: 'home', namespaced: true, dynamic: true, store: store })
export default class Home extends VuexModule {
  public username = ''

  @Mutation
  SET_USERNAME(name: string) {
    this.username = name
  }

  @Action
  GET_USERNAME() {
    // ...
    const name = 'wahaha'
    this.SET_USERNAME(name)
  }
}

export const HomeStore = getModule(Home)
