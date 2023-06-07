
const Phrases = {
  0: 'O Caos não é um abismo. O Caos é uma escada',
  1: 'A vida trará coisas boas se tiver paciência.',
  2: 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  3: 'Não compense na ira o que lhe falta na razão.',
  4: 'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  5: 'A maior de todas as torres começa no solo.',
  6: 'O bom-senso vale mais do que muito conhecimento.',
  7: 'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  8: 'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  9: 'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  10: 'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
}

const Cookies = {
  openCookie: document.querySelector('.cookie-open'),
  openAnotherCookie: document.querySelector('.btnReset'),
  fortuneCookie: document.querySelector('.screen-1'),
  brokenCookie: document.querySelector('.screen-2'),
  luckyPhrase: document.querySelector('.paragraph-2')
};

const toggleScreen = () => {
  Cookies.fortuneCookie.classList.toggle('hide');
  Cookies.brokenCookie.classList.toggle('hide');
};

Cookies.openCookie.onclick = () => {
  toggleScreen();
};

Cookies.openAnotherCookie.onclick = () => {
  let randomNumber = Math.round(Math.random() * 10);
  Cookies.luckyPhrase.innerText = Phrases[randomNumber];
  toggleScreen();
};
