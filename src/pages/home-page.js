import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { logout } from "../store/auth/auth-action";
import { counterDown, counterUp } from "../store/counter/counter-actions";
const HomePage = () => {
  const { counterState, dispatchCounter, authState, dispatchAuth } = useStore();
  const { counter } = counterState;
  const { isUserLogin, user } = authState; ///authstate ııcnde ıkı sey var

  const handleLogout = () => {
    const result = window.confirm("Are you sure to logout?");
    ///burada window ıstedı
    if (!result) return; ///cevap hayır ıse return gerı don devam etme
    dispatchAuth(logout()); ///cevap evet ıse,,merkezı state ı bosaltmalıyız
    ////merkezı state ı bosaltmka ıcınde dispatch e ihtıyacım var
    ///dispatchauth da reduceru cagırır reducr da bir action bekler
  };
  return (
    <div>
      <h1>
        Hello {user.firstName} {user.lastName}
      </h1>

      <h2>
        {isUserLogin ? (
          //logout dıye bır sayfa yok onun ıcın bır onclıck tanımlanır
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="primary" as={Link} to="/login">
            Login
          </Button>
        )}
      </h2>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="warning"
          onClick={() => dispatchCounter(counterDown())}
        >
          -
        </Button>
        <Button variant="secondary" disabled>
          {counter}
        </Button>
        <Button variant="info" onClick={() => dispatchCounter(counterUp())}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default HomePage;
