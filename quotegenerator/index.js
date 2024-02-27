const crushQuotes = [
  "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else's highlight reel.", // Steven Furtick
  "You are the sun, moon, and all my stars.", // E. E. Cummings
  "A crush is when your heart understands something your brain hasn't quite figured out yet.", // Anonymous
  "I never knew what I wanted in someone until I met you.", // Unknown
  "Sometimes the smallest things take up the most space in your heart.", // A.A. Milne
  "Butterflies aren't just for insects. They're for those little moments when something wonderful flutters inside you.", // Unknown
  "One of the best things you can do for your crush is to be yourself. The right person will love you for who you are.", // Unknown
  "I know the world is a mess, but you make it a little easier to navigate. That's why I want you by my side.", // Unknown
  "Sometimes the quiet moments tell the most. Like the way my smile grows wider when I see you, even if I don't say a word.", // Unknown
  "Crush: a feeling that makes you smile for no reason, then cry for no reason all within five minutes.", // Anonymous
];
const mySet = new Set();
const q = document.getElementById("Quote")
function quotegetter() {
  while (true) {
    const randval = Math.floor(Math.random() * crushQuotes.length);
    if (!mySet.has(randval)) {
      mySet.add(randval);
      const s = crushQuotes[randval]
      q.innerHTML = s;

    }
    else {
      q.innerHTML = " element not found"

    }
    break;
  }
}