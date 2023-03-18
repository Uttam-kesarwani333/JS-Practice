      const music = document.querySelector("audio");
      const img = document.querySelector("img");
      const play = document.getElementById("play");
      const artist = document.getElementById("artist");
      const title = document.getElementById("title");
      const prev = document.getElementById("prev");
      const next = document.getElementById("next");

      const songs = [
        {
          name: "audio/Audio1",
          title: "Lotus lane",
          artist: "Loylist",
          img: "image/img1",
        },
        {
          name: "audio/Audio1",
          title: "Sappherious",
          artist: "Aurora",
          img: "image/img2",
        },
        {
          name: "audio/Audio1",
          title: "Lotus ",
          artist: "Loy",
          img: "image/img3",
        },
      ];


      let isPlaying = false;
      const playMusic = () => {
        isPlaying = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        img.classList.add("anime");
      };
      const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        img.classList.remove("anime");
      };
      play.addEventListener("click", () => {
        if (isPlaying) {
          pauseMusic();
        } else {
          playMusic();
        }
      });


      const loadSong = (songs) => {
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src = songs.name + ".mp3";
        img.src = songs.img + ".jpeg";
      };
      //loadSong(songs[2]);
      songIndex = 0;
      const nextSong = () => {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
      };
      const prevSong = () => {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
      };

      next.addEventListener("click", nextSong);
      prev.addEventListener("click", prevSong);
