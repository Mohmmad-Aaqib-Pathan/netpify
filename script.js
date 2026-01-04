const artists = [
            {
                id: 1,
                name: "Neffex",
                image: "resources/img/neffex.jpeg",
                gradient: "linear-gradient(135deg, #1DB954, #1ed760)",
                songs: [
                    { title: "Rumours",url: "resources/music/neffex/01-Rumours.mp3" },
                    { title: "Addict",url: "resources/music/neffex/02-Addict.mp3" },
                    { title: "Badass",url: "resources/music/neffex/03-Badass.mp3" },
                    { title: "No Flitter",url: "resources/music/neffex/04-No_Fliter.mp3" },
                    { title: "Numb",url: "resources/music/neffex/05-Numb.mp3" },
                    { title: "Pro",url: "resources/music/neffex/06-Pro.mp3" },
                    { title: "Savage",url: "resources/music/neffex/07-Savage.mp3" },
                    { title: "Backstage", url: "resources/music/neffex/08-Backstage.mp3" },    
                    { title: "First Time", url: "resources/music/neffex/09-First_Time.mp3" },
                    { title: "Gossip", url: "resources/music/neffex/10-Gossip.mp3" },
                    { title: "No Sleep", url: "resources/music/neffex/11-No_Sleep.mp3" },
                    { title: "Damn Gurl", url: "resources/music/neffex/12-Damn_Gurl.mp3" },
                    { title: "Born A Rockstar", url: "resources/music/neffex/13-Born_A_Rockstar.mp3" },
                    { title: "Lit", url: "resources/music/neffex/14-Lit.mp3" },
                    { title: "Mystify", url: "resources/music/neffex/15-Mystify.mp3" },
                    { title: "SOMETHNIG YOU COULD NEVER OWN", url: "resources/music/neffex/16-SOMETHING_YOU_COULD_NEVER_OWN.mp3" },
                    { title: "Ready to go", url: "resources/music/neffex/17-Ready_to_Go.mp3" },
                    { title: "Deep in the Game", url: "resources/music/neffex/18-Deep_in_the_Game.mp3" },
                    { title: "Tonight", url: "resources/music/neffex/19-Tonight.mp3" },
                    { title: "Self Made", url: "resources/music/neffex/20-Self_Made.mp3" },
                    { title: "Blessed", url: "resources/music/neffex/21-Blessed.mp3" },
                    { title: "Price Tag", url: "resources/music/neffex/22-Price_Tag.mp3" }
                ]
            },
            {
                id: 2,
                name: "Justin Bieber",
                image:"resources/img/jb.jpeg",
                gradient: "linear-gradient(135deg, #E50914, #ff1744)",
                songs: [
                    { title: "Mark My Words", url: "resources/music/justin_bieber/01-Mark\ My\ Words.mp3" },
                    { title: "I'll show you", url: "resources/music/justin_bieber/02-i'll\ Show\ You\ Mean.mp3" },
                    { title: "What Do You Mean?", url: "resources/music/justin_bieber/03-What\ Do\ You\ Mean\ ?.mp3" },
                    { title: "Sorry", url: "resources/music/justin_bieber/04-Sorry.mp3" },
                ]
            },
            {
                id: 3,
                name: "Imagine Dragons",
                image: "resources/img/imagine_dragon.jpeg",
                gradient: "linear-gradient(135deg, #f59e0b, #eab308)",
                songs: [
                    { title: "God's Plan", duration: "3:18", url: "" },
                    { title: "One Dance", duration: "2:54", url: "" },
                    { title: "Hotline Bling", duration: "4:27", url: "" },
                    { title: "In My Feelings", duration: "3:38", url: "" }
                ]
            },
            {
                id: 4,
                name: "The Score",
                image:"resources/img/score.jpeg",
                gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                songs: [
                    { title: "bad guy", duration: "3:14", url: "" },
                    { title: "everything i wanted", duration: "4:05", url: "" },
                    { title: "Happier Than Ever", duration: "4:58", url: "" },
                    { title: "ocean eyes", duration: "3:20", url: "" }
                ]
            },
            {
                id: 5,
                name: "Ed Sheeran",
                image: "resources/img/ed.png",
                gradient: "linear-gradient(135deg, #ef4444, #f97316)",
                songs: [
                    { title: "Shape of You", duration: "3:53", url: "" },
                    { title: "Perfect", duration: "4:23", url: "" },
                    { title: "Thinking Out Loud", duration: "4:41", url: "" },
                    { title: "Photograph", duration: "4:18", url: "" }
                ]
            },
            {
                id: 6,
                name: "Beach Weather",
                image:"resources/img/beach_weather.jpeg",
                gradient: "linear-gradient(135deg, #ec4899, #a855f7)",
                songs: [
                    { title: "7 rings", duration: "2:58", url: "" },
                    { title: "thank u, next", duration: "3:27", url: "" },
                    { title: "positions", duration: "2:52", url: "" },
                    { title: "no tears left to cry", duration: "3:25", url: "" }
                ]
            }
        ];

        let currentArtist = null;
        let currentSongIndex = 0;
        let isPlaying = false;
        const audio = document.getElementById('audioPlayer');

        function displayArtists() {
            const grid = document.getElementById('artistsGrid');
            grid.innerHTML = artists.map(artist => `
                <div class="artist-card" onclick="showSongs(${artist.id})">
                    <div class="artist-image" style="background: ${artist.gradient}">
                         ${artist.image ? 
                    `<img src="${artist.image}" alt="${artist.name}"`
                    : artist.icon || '🎵'}
            </div>
                    </div>
                    <div class="artist-name">${artist.name}</div>
                    <div class="artist-songs-count">${artist.songs.length} songs</div>
                </div>
            `).join('');
        }

        function showSongs(artistId) {
            currentArtist = artists.find(a => a.id === artistId);
            document.getElementById('artistsView').style.display = 'none';
            document.getElementById('songsView').classList.add('active');
            document.getElementById('artistTitle').textContent = currentArtist.name;
            
            const songsList = document.getElementById('songsList');
            songsList.innerHTML = currentArtist.songs.map((song, index) => `
                <div class="song-item" onclick="playSong(${index})">
                    <div class="song-number">${index + 1}</div>
                    <div class="song-info">
                        <div class="song-title">${song.title}</div>
                        <div class="song-artist">${currentArtist.name}</div>
                    </div>
                    <div class="song-duration">${song.duration}</div>
                </div>
            `).join('');
        }

        function showArtists() {
            document.getElementById('songsView').classList.remove('active');
            document.getElementById('artistsView').style.display = 'block';
        }

        function playSong(index) {
             currentSongIndex = index;
            const song = currentArtist.songs[index];

            audio.src = song.url;
            audio.play();
            
            document.getElementById('currentSongTitle').textContent = song.title;
            document.getElementById('currentArtistName').textContent = currentArtist.name;
            document.getElementById('player').classList.add('active');
            
            document.querySelectorAll('.song-item').forEach((item, i) => {
                item.classList.toggle('playing', i === index);
            });
            
            isPlaying = true;
            document.getElementById('playPauseBtn').textContent = '⏸';
            
            // When audio metadata loads, get the real duration
            audio.onloadedmetadata = function() {
                document.getElementById('totalTime').textContent = formatTime(audio.duration);
            };
            
            // When song ends, play next
            audio.onended = function() {
                nextSong();
            };
        }
        // This listens to the actual audio progress
            audio.addEventListener('timeupdate', function() {
                if (audio.duration) {
                    const percentage = (audio.currentTime / audio.duration) * 100;
                    document.getElementById('progressFill').style.width = percentage + '%';
                    document.getElementById('currentTime').textContent = formatTime(audio.currentTime);
                }
            });

        function togglePlay() {
            if(isPlaying){
                audio.pause();
            }
            else{
                audio.play();
            }
            isPlaying = !isPlaying;
            document.getElementById('playPauseBtn').textContent = isPlaying ? '⏸' : '▶';
        }

        function previousSong() {
            if (currentArtist && currentSongIndex > 0) {
                playSong(currentSongIndex - 1);
            }
        }

        function nextSong() {
            if (currentArtist && currentSongIndex < currentArtist.songs.length - 1) {
                playSong(currentSongIndex + 1);
            }
        }

        function seek(event) {
            const progressBar = event.currentTarget;
            const clickX = event.offsetX;
            const width = progressBar.offsetWidth;
            const percentage = clickX / width;
            
            if (audio.duration) {
                audio.currentTime = audio.duration * percentage;
            }
        }

        function changeVolume(event) {
            const volumeBar = event.currentTarget;
            const clickX = event.offsetX;
            const width = volumeBar.offsetWidth;
            const percentage = (clickX / width) * 100;
            document.getElementById('volumeFill').style.width = percentage + '%';
        }
        function parseDuration(duration) {
            const parts = duration.split(':');
            return parseInt(parts[0]) * 60 + parseInt(parts[1]);
        }

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return mins + ':' + (secs < 10 ? '0' : '') + secs;
        }
        displayArtists();
        
    