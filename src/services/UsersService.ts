import SigninData from "@/@types/SigninData";
import HttpClient from "@/utils/HttpClient";

class UsersService {
  async signin(user: SigninData) {
    const { email, password } = user;

    return HttpClient.post("/user/sign-in", {
      username: email,
      password,
    });
  }
}

export default new UsersService();
