import { FC, useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

import "../scss/error.scss";

const ErrorMassage: FC = () => {
  const { store } = useContext(Context);


  const closeError = () => {
    store.setError(null);
  };


  return (
    <div>
      {store.error && (
        <div id="notification" className={store.error ? "" : "hidden"}>
          <p id="notification-text">{store.error}</p>
          <i onClick={closeError} className="bx bx-x"></i>
        </div>
      )}
    </div>
  );
};

export default observer(ErrorMassage);
