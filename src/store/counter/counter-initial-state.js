export const counterInitialState = {
  counter: 0,
};

///reducer 4 bölümden oluşur

//1-initial state--başlangıc hali
//state te saklanacak alanlar ve ilk değerler belirlenir.

//2-reducer
//state i güncelleyen fonksiyonlar.
//setter lar burada..initial state ile belirlenen değerlerigünceller

//3-action
//reduser lar state i güncellemek için action a ihtiyac duyarlar.
//güncelleme işlemlerinde hangi reducer ın çağıralacağını
// ve varsa state e gönderilecek datayı belirleyen nesnedir.
//talimatname gibi.
//2 bilgi olur içinde..
//reducer a neyi güncelliyeceğini ve hangi bilgi ile güncelliyeceğini söyler
//hareketi yapan değil

//4-types
//actions ve reducer bölümlerinde kullanılacak olan action types la tanımlanır.
//aynı dili kullanırlar.
