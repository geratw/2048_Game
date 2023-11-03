import React, { useContext, useEffect, useState } from "react";
import { Context } from ".";
import LoginForm from "./components/LoginForm";
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
      <div>
        <h1>{store.isAuth ? `Пользователь авторизован ` : "hyi"}</h1>
        <LoginForm />
        <button onClick={getUsers}>получить пользователей</button>
      {users?.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>{store.isAuth ? `Пользователь авторизован ` : "hyi"}</h1>
      <button onClick={() => store.logout()}>Выйти</button>
      <button onClick={getUsers}>получить пользователей</button>
      {users?.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
}

export default observer(App);
