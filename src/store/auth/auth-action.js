import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../types";

//3.kısım type ksımı--actıon createrler va bunlardan obje olusturup bizze geri verecekler ve bizde reducer a gönderecegız
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
//payload, backenden gelen user datası olacak
export const loginFail = () => ({ type: LOGIN_FAIL }); //logın faıl olursa zaten user gelmez o nedenle paload olmaz
export const logout = () => ({ type: LOGOUT }); //logaout da aynı fail gıbı

//kullanıcı login olmak ııcn butona basıgında hangı durumlar olur?
//1 hatalı giriş
//2 basarıılı giriş
///basarılı gırıste token yanı data da gelır

///logın oldugunda backend hem token hem user data sı gönderır
//ama daha mantıklıssı şu: önce auth. yapılır yanı kualladınıc adı ve sıfre gönderılır
///sonra token gelir ve bu token ıle tekrardan bana kullanıcı datasını gönder demek
//kullanıc datası geldıkten snra bızım ıcın logın olur
