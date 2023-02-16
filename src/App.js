import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles/styles.css";

const musicList = [
  {
    title: "Darker Than Black Track 13 - Kuro",
    src: "/songs/01-Darker Than Black Track 13 - Kuro.mp3",
  },
  {
    title: "Darker Than Black Blu Ray OST- 23",
    src: "/songs/02-Darker Than Black Blu Ray OST- 23.mp3",
  },
  {
    title: "Bleach OST 1 #19 Never Meant To Belong",
    src: "/songs/03-Bleach OST 1 number 19 Never Meant To Belong.mp3",
  },
  {
    title: "Fly Me To The Moon - Claire",
    src: "/songs/04-Fly Me To The Moon - Claire.mp3",
  },
  {
    title: "Cowboy Bebop OST 1 - Rush",
    src: "/songs/05Cowboy Bebop OST 1 - Rush.mp3",
  },
  {
    title: "Darker Than Black Track 1 - Go Dark",
    src: "/songs/06Darker Than Black Track 1 - Go Dark.mp3",
  },
  {
    title: "Darker Than Black Track 11 - Keiyakusha",
    src: "/songs/07Darker Than Black Track 11 - Keiyakusha.mp3",
  },
  {
    title: "Darker Than Black Track 6 - Was",
    src: "/songs/08Darker Than Black Track 6 - Was.mp3",
  },
  {
    title: "Darker Than Black Track 4 - Tenderly",
    src: "/songs/09Darker Than Black Track 4 - Tenderly.mp3",
  },
  {
    title: "The Sixth Station (Spirited Away)",
    src: "/songs/10The Sixth Station (Spirited Away).mp3",
  },
  {
    title: "Bleach OST 2 #11 Here To Stay",
    src: "/songs/11Bleach OST 2 - 11 Here To Stay.mp3",
  },
  {
    title: "Boruto Naruto the Movie OST - Spin and Burst",
    src: "/songs/12Boruto Naruto the Movie OST - Spin and Burst.mp3",
  },
  {
    title: "Bleach OST 3-Batalla,Batalla.",
    src: "/songs/13Bleach OST 3-Batalla,Batalla..mp3",
  },
  {
    title: "Most Emotional OST - Moonlit Night - Death Parade - OST",
    src: "/songs/14Most Emotional OST - Moonlit Night -  Death Parade  - OST.mp3",
  },
  {
    title: "Tokyo Ghoul-Unravel Acoustic",
    src: "/songs/15Tokyo Ghoul-Unravel Acoustic.mp3",
  },
  {
    title: "Naruto - Opening 2 Far Away",
    src: "/songs/16Naruto - Opening 2   Far Away.mp3",
  },
  {
    title: "Death Note Original Soundtrack 2 - 17. Ikari",
    src: "/songs/17Death Note Original Soundtrack 2 - 17. Ikari.mp3",
  },
  {
    title: "Death Note Original Soundtrack 2 - 22. Intro",
    src: "/songs/18Death Note Original Soundtrack 2 - 22. Intro.mp3",
  },
  {
    title: "Death Note OST 1 - 01 Death Note",
    src: "/songs/19Death Note OST 1 - 01 Death Note.mp3",
  },
  {
    title: "Death Note OST 1 - 14 L no Nakama",
    src: "/songs/20Death Note OST 1 - 14 L no Nakama.mp3",
  },
  {
    title: "Death Note OST- 07- Solitude (Kodoku)",
    src: "/songs/21Death Note OST- 07- Solitude (Kodoku).mp3",
  },
  {
    title: "Death Note Original Soundtrack 3 - 09. Mello no Theme",
    src: "/songs/22Death Note Original Soundtrack 3 - 09. Mello no Theme.mp3",
  },
  {
    title: "Death Note Original Soundtrack 3 - 28. Coda ~ Death Note",
    src: "/songs/23Death Note Original Soundtrack 3 - 28. Coda ~ Death Note.mp3",
  },
  {
    title: "Galileo Galilei - Drop a Star",
    src: "/songs/24Galileo Galilei - Drop a Star.mp3",
  },
  {
    title: "Legends of Azeroth Music (Log-in Screen) - World of Warcraft Music",
    src: "/songs/25Legends of Azeroth Music (Log-in Screen) - World of Warcraft Music.mp3",
  },
  {
    title: "Secunda",
    src: "/songs/26Secunda.mp3",
  },
  {
    title: "Distant Horizons",
    src: "/songs/27Distant Horizons.mp3",
  },
  {
    title: "Far Horizons",
    src: "/songs/28Far Horizons.mp3",
  },
  {
    title: "The Streets of Whiterun",
    src: "/songs/29The Streets of Whiterun.mp3",
  },
  {
    title: "King and Country",
    src: "/songs/30King and Country.mp3",
  },
  {
    title: "Harvest Dawn",
    src: "/songs/31Harvest Dawn.mp3",
  },
  {
    title: "Finish the Fight",
    src: "/songs/32Finish the Fight.mp3",
  },
  {
    title: "Never Forget",
    src: "/songs/33Never Forget.mp3",
  },
  {
    title: "Tokyo Ghoul - Licht und Schatten",
    src: "/songs/34Tokyo Ghoul - Licht und Schatten.mp3",
  },
  {
    title: "Cowboy Bebop OST 1 - Space Lion",
    src: "/songs/35Cowboy Bebop OST 1 - Space Lion.mp3",
  },
  {
    title: "Tundra",
    src: "/songs/36Tundra.mp3",
  },
  {
    title: "From Past to Present",
    src: "/songs/37From Past to Present.mp3",
  },
  {
    title: "Berserk soundtrack - 4 Gatsu",
    src: "/songs/38Berserk soundtrack - 4 Gatsu.mp3",
  },
  {
    title: "Oldschool Runescape Music - Forever",
    src: "/songs/39Oldschool Runescape Music - Forever.mp3",
  },
  {
    title: "Oldschool Runescape Music - Autumn Voyage",
    src: "/songs/40Oldschool Runescape Music - Autumn Voyage.mp3",
  },
  {
    title: "Shippuden",
    src: "/songs/41Shippuden.mp3",
  },
  {
    title: "Experienced Many Battles",
    src: "/songs/42Experienced Many Battles.mp3",
  },
  {
    title: "Lightning Speed",
    src: "/songs/43Lightning Speed.mp3",
  },
  {
    title: "Man of the World",
    src: "/songs/44Man of the World.mp3",
  },
  {
    title: "Despair",
    src: "/songs/45Despair.mp3",
  },
  {
    title: "Tragic",
    src: "/songs/46Tragic.mp3",
  },
  {
    title: "Hurricane Suite",
    src: "/songs/47Hurricane Suite.mp3",
  },
  {
    title: "Route 4 [Pokemon Red Blue Yellow OST]",
    src: "/songs/48Route 4 [Pokemon Red Blue Yellow OST].mp3",
  },
  {
    title: "Route 11 [Pokemon Red Blue Yellow OST]",
    src: "/songs/49Route 11 [Pokemon Red Blue Yellow OST].mp3",
  },
  {
    title: "Linkin Park - Breaking The Habit",
    src: "/songs/50Linkin Park - Breaking The Habit.mp3",
  },
  {
    title: "Berserk soundtrack - 1 Behelit",
    src: "/songs/51Berserk soundtrack - 1 Behelit.mp3",
  },
  {
    title: "Sadness and Sorrow",
    src: "/songs/52Sadness and Sorrow.mp3",
  },
  {
    title: "Need to Be Strong",
    src: "/songs/53Need to Be Strong.mp3",
  },
  {
    title: "Oh! Student and Teacher Affection",
    src: "/songs/54Oh! Student and Teacher Affection.mp3",
  },
  {
    title: "Grief and Sorrow",
    src: "/songs/55Grief and Sorrow.mp3",
  },
  {
    title: "Swaying Necklace",
    src: "/songs/56Swaying Necklace.mp3",
  },
  {
    title: "Bright Sound (Dry Lagoon) - Sonic Adventure 2 [OST]",
    src: "/songs/57Bright Sound (Dry Lagoon) - Sonic Adventure 2 [OST].mp3",
  },
  {
    title: "Lovely Gate 3 (Egg Quarters) - Sonic Adventure 2 [OST]",
    src: "/songs/58Lovely Gate 3 (Egg Quarters) - Sonic Adventure 2 [OST].mp3",
  },
  {
    title: "Dive Into the Mellow (Aquatic Mine) - Sonic Adventure 2 [OST]",
    src: "/songs/59Dive Into the Mellow (Aquatic Mine) - Sonic Adventure 2 [OST].mp3",
  },
  {
    title: "Deeper (Death Chamber) - Sonic Adventure 2 [OST]",
    src: "/songs/60Deeper (Death Chamber) - Sonic Adventure 2 [OST].mp3",
  },
  {
    title: "Space Trip Steps (Meteor Herd) - Sonic Adventure 2 [OST]",
    src: "/songs/61Space Trip Steps (Meteor Herd) - Sonic Adventure 2 [OST].mp3",
  },
  {
    title: "Colorful Mist",
    src: "/songs/62Colorful Mist.mp3",
  },
  {
    title: "Wandering",
    src: "/songs/63Wandering.mp3",
  },
  {
    title: "Deference for Darkness",
    src: "/songs/64Deference for Darkness.mp3",
  },
  {
    title: "Black Spot",
    src: "/songs/65Black Spot.mp3",
  },
  {
    title: "The Scarlet Letter",
    src: "/songs/66The Scarlet Letter.mp3",
  },
  {
    title: "Courtesy",
    src: "/songs/67Courtesy.mp3",
  },
  {
    title: "Reflection",
    src: "/songs/68Reflection.mp3",
  },
  {
    title: "Menu 2 - Super Smash Bros. Melee",
    src: "/songs/69Menu 2 - Super Smash Bros. Melee.mp3",
  },
  {
    title: "Multi-Man Melee 2 - Super Smash Bros. Melee",
    src: "/songs/70Multi-Man Melee 2 - Super Smash Bros. Melee.mp3",
  },
  {
    title: "The End of Evangelion - Jesus Bleibet Meine Freude",
    src: "/songs/71The End of Evangelion - Jesus Bleibet Meine Freude.mp3",
  },
  {
    title: "Thanatos - Evangelion OST - Shiro Sagisu",
    src: "/songs/72Thanatos - Evangelion OST - Shiro Sagisu.mp3",
  },
  {
    title: "World Of Warcraft - Seasons Of War",
    src: "/songs/73World Of Warcraft - Seasons Of War.mp3",
  },
];

function App() {

    let [currentSong, setCurrentSong] = useState(0)

    //handle click next
    const handleClickNext = () => {
        if (currentSong === musicList.length - 1) {
            setCurrentSong(0)
            return
        }
        setCurrentSong(currentSong + 1)
    }
    const handleClickPrevious = () => {
        if (currentSong === 0) {
            setCurrentSong(musicList.length - 1)
            return
        }
        setCurrentSong(currentSong - 1)
    }

  return (
    <div className="App bg-gray-600">
      <div className="container mx-auto py-8 px-1">
        <div className="flex justify-center">
            <div className="w-1/2">
                <h2 className="text-2xl text-center mb-6 text-gray-200">{musicList[currentSong].title}</h2>
            </div>
        </div>
        <AudioPlayer
          autoPlay
          src={musicList[currentSong].src}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={true}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrevious}
          onEnded={(e) => handleClickNext()}
        />
        <div>
            <ul className="mt-4">
                {musicList.map((music, index) => (
                    <li key={index} className="text-center">
                        <button className="text-gray-300 bg-slate-900 w-full py-3 border-b border-b-gray-500 hover:bg-gray-800" onClick={() => setCurrentSong(index)}>
                            {music.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
