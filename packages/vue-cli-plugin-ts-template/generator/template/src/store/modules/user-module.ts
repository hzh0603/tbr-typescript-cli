import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import store from "@/store";
@Module
class UserModule extends VuexModule {
  // state
  firstName = "胡";
  lastName = "仔豪";
  // getters
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  @Mutation
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  @Mutation
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  @Action
  async loadUser() {
    const user = await fetchUser();
    this.setFirstName(user.firstName);
    this.setLastName(user.lastName);
  }
}

/**
 * 获取用户信息
 * @returns 
 */
function fetchUser(): Promise<{firstName: string,lastName:string}> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                firstName: 'hu',
                lastName: 'zaihao'
            })
        }, 1500)
    })
}

export default new UserModule({ store, name: "user" });