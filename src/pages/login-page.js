import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { loginFail, loginSuccess } from "../store/auth/auth-action";

///sabit bir url
const API_BASE_URL = "https://carrental-v3-backend.herokuapp.com";

const LoginPage = () => {
  ///once email ve passwordu state baglamak gerekır.ilk degerlr atanır
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  //bazen ıkı tıklama ıkı sıparıs olabılır o nedenle tek tıklama olsun ıstıyoruz ve sonrasında dısbled olsun

  const { dispatchAuth } = useStore(); ///merkezı state dispatchauth a ıhtıyac var
  ///görevı authreducr ı devreye sokmak

  const navigate = useNavigate(); ///kullanıcıyı anasayfaya vs bir yere yonlendırmek

  const handleLogin = async (e) => {
    //burada backende baglanıp email ve password yan kullanıcı biligiis backen de gıdecek
    e.preventDefault(); //default davranısı engeller. eger yazlmazsa gıder ama data da gelir gider network e bak.ayrıca formu da bosaltır
    const payload = { email, password }; //gönderılececk data hazır
    ///bacend tarafının ıstedıgı sekılde gönder
    //1-
    // email:"string",
    // password:"string"
    //2-
    // email:email,
    // password:password
    /// 3 de ustte yazılı olan kısım.(ilki key) key ve valule aynı olunca bir tanesı yazılır

    //tyr catch hata olması muhtemel yere koyulur
    try {
      setLoading(true); //backende gıtmeden hemn once

      ///--url sonuna /login eklenir
      const respAuth = await axios.post(`${API_BASE_URL}/login`, payload); //payload ismi farklı olabılır.maksat kulanıcı data göndermek
      const token = respAuth.data.token; //gelen token buraya geldi
      //suan ilk axios logın degıl token geldi user data gelmedı

      const authHeader = { Authorization: `Bearer ${token}` };
      //header onden gitmek.. akılda kalması ıcın
      //token ile önceden gönderılır user data almak ıcın
      //yoksa gelmez.. kendımızı tanıtmak ıcın

      ///logın olma dururmu user data gelır
      const respUser = await axios.get(`${API_BASE_URL}/user`, {
        ///get ile user alınır
        headers: authHeader, ///talep ederken onden gidenler
      });

      //dispatchAuth({type: "LOGIN_SUCCESS", payload: respUser.data});
      dispatchAuth(loginSuccess(respUser.data)); //olumlu duurmda mesaj data ya göndrılır
      ///görevı authreducr ı devreye sokmak

      ///kullanıcıyı anasayfaya yonlendırmek
      navigate("/");
    } catch (err) {
      alert(err.response.data.message); ///olumsuz durumda message tarafına...hatanın gosterıldıgı yer
      dispatchAuth(loginFail); ///hata olma durumund logın faıl cagrılır
    } finally {
      setLoading(false);
      //cevap geldıgınde olumlu yada olumsuz durumd false olacak
      //setlodıng tıklanma sonucu dısabled olacak
    }
  };

  return (
    <Container className="mt-5">
      <Form
        onSubmit={handleLogin}
        //buton tıklandıgında handlelogın çalışacak
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ///texboxları state bagladık value ve onchange e
            type="email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            required={true} //gereklilik ..bos gecmesın textboxları
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading && <Spinner animation="border" size="sm" />} Login
          {/* bazen ıkı tıklama ıkı sıparıs olabılır o nedenle tek tıklama olsun ıstıyoruz ve sonrasında dısbled olsun */}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
