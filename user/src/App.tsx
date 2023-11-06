import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import LoginForm from "./components/LoginForm";
import ErrorMassage from "./components/ErrorMassage";
import Profile from "./components/Profile";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";


function App() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (store.isLoading) {
    return <div>загрузка</div>;
  }

  if (!store.isAuth) {
    return (
      <>
        <LoginForm />
        <ErrorMassage />
      </>
    );
  }

  return (
    //   <h1>{store.isAuth ? `Пользователь авторизован ` : "hyi"}</h1>
    //   <button onClick={getUsers}>получить пользователей</button>
    //   {users?.map((user) => (
    //     <div key={user.email}>{user.email}</div>
    //   ))}
    <div className="App">
      <Profile />

    </div>
  );
}

export default observer(App);
