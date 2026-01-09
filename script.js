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
                    { title: "Baby", url: "resources/music/justin_bieber/baby.mp3" },
                    { title: "Let Me Love You", url: "resources/music/justin_bieber/let_me_love_you.mp3" },
                    { title: "Peaches", url: "resources/music/justin_bieber/peaches.mp3" },
                    { title: "Mark My Words", url: "resources/music/justin_bieber/01-Mark\ My\ Words.mp3" },
                    { title: "I'll show you", url: "resources/music/justin_bieber/02-ill_Show_You.mp3" },
                    { title: "What Do You Mean?", url: "resources/music/justin_bieber/03-What\ Do\ You\ Mean\ ?.mp3" },
                    { title: "Sorry", url: "resources/music/justin_bieber/04-Sorry.mp3" },
                    { title: "Love Yourself", url: "resources/music/justin_bieber/05-Love\ Yourself.mp3" },
                    { title: "Company", url: "resources/music/justin_bieber/06-Company.mp3" },
                    { title: "No Pressure ft. Big Sean", url: "resources/music/justin_bieber/07-No\ Pressure\ ft.\ Big\ Sean.mp3" },
                    { title: "No Sense", url: "resources/music/justin_bieber/08-No\ Sense.mp3" },
                    { title: "Children", url: "resources/music/justin_bieber/09-Children.mp3" },
                    { title: "Purpose", url: "resources/music/justin_bieber/10-Purpose.mp3" },
                    { title: "Life is Worth Living", url: "resources/music/justin_bieber/11-Life\ Is\ Worth \Living.mp3" },
                    { title: "The Feeling", url: "resources/music/justin_bieber/12-The\ Feeling.mp3" }
                ]
            },
            {
                id: 3,
                name: "Imagine Dragons",
                image: "resources/img/imagine_dragon.jpeg",
                gradient: "linear-gradient(135deg, #f59e0b, #eab308)",
                songs: [
                    { title: "Bad Liar", url: "resources/music/imagine_dragons/01-bad_liar.mp3" },
                    { title: "Believer", url: "resources/music/imagine_dragons/02-believer.mp3" },
                    { title: "Bones", url: "resources/music/imagine_dragons/03-bones.mp3" },
                    { title: "Demons", url: "resources/music/imagine_dragons/04-demons.mp3" },
                    { title: "Natural", url: "resources/music/imagine_dragons/05-natural.mp3" },
                    { title: "Radioactive", url: "resources/music/imagine_dragons/06-radioactive.mp3" },
                    { title: "Thunder", url: "resources/music/imagine_dragons/07-thunder.mp3" },
                    { title: "Warriors", url: "resources/music/imagine_dragons/08-warriors.mp3" },
                    { title: "Whatever It Takes", url: "resources/music/imagine_dragons/09-whatever_it_takes.mp3" },
                    { title: "Enemy", url: "resources/music/imagine_dragons/10-enemy.mp3" }
                ]
            },
            {
                id: 4,
                name: "The Score",
                image:"resources/img/score.jpeg",
                gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                songs: [
                 {title:"Born for this",url:"resources/music/score/born_for_this.mp3"},
                 {title:"Bulletproof",url:"resources/music/score/bulletproof.mp3"},
                 {title:"Dreamin",url:"resources/music/score/dreamin.mp3"},
                 {title:"Believe",url:"resources/music/score/believe.mp3"},
                 {title:"Glory",url:"resources/music/score/glory.mp3"},
                 {title:"In my Bones",url:"resources/music/score/in_my_bones.mp3"},
                 {title:"Legend",url:"resources/music/score/legend.mp3"},
                 {title:"Miracle",url:"resources/music/score/miracle.mp3"},
                 {title:"Revolution",url:"resources/music/score/revolution.mp3"},
                 {title:"Stronger",url:"resources/music/score/stronger.mp3"},
                 {title:"The Fear",url:"resources/music/score/the_fear.mp3"},
                 {title:"Unstoppable",url:"resources/music/score/unstoppable.mp3"}
                ]
            },
            {
                id: 5,
                name: "Ed Sheeran",
                image: "resources/img/ed.png",
                gradient: "linear-gradient(135deg, #ef4444, #f97316)",
                songs: [
                    { title: "Shape of You", url: "resources/music/ed/shape_of_you.mp3" },
                    { title: "Bad Habits", url: "resources/music/ed/bad_habits.mp3" },
                    { title: "Beautiful People", url: "resources/music/ed/beautiful_people.mp3" },
                    { title: "Saphire", url: "resources/music/ed/saphire.mp3" }
                ]
            },
            {
                id: 6,
                name: "Beach Weather",
                image:"resources/img/beach_weather.jpeg",
                gradient: "linear-gradient(135deg, #ec4899, #a855f7)",
                songs: [
                    { title: "High in Low Places", url: "resources/music/beach/high_in_low_places.mp3" },
                    { title: "Sex,Drug,etc", url: "resources/music/beach/sex_drug_etc.mp3" }
                ]
            },
            {
                id: 7,
                name: "Favourite songs",
                image: "resources/img/fav.jpg",
                gradient: "linear-gradient(135deg, #1DB954, #1ed760)",
                songs: [
                    {title: "F1 Lose My Mind", url: "resources/music/fav/f1_lose_my_mind.mp3"},
                    {title: "Anyone Who knows What Love Is", url: "resources/music/fav/anyone_who_know_what_love.mp3"},
                    {title: "Black Out Days", url: "resources/music/fav/blackout_days.mp3"},
                    {title: "Counting Stars", url: "resources/music/fav/counting_stars.mp3"},
                    {title: "Glimpse of Us", url: "resources/music/fav/glimpse_of_us.mp3"},
                    {title: "Die With a Smile", url: "resources/music/fav/Die_with_a_smile.mp3"},
                    {title: "Dusk Till Dawn", url: "resources/music/fav/dusk_till_dawn.mp3"},
                    {title: "Little Dark Age", url: "resources/music/fav/Little_dark_Ag.mp3"},
                    {title: "Numb-Linkin Park", url: "resources/music/fav/numb_linkin.mp3"},
                    {title: "Simpson Wave", url: "resources/music/fav/simpson_waves.mp3"},
                    {title: "Maybe My Soulmate Died", url: "resources/music/fav/soulmate_die.mp3"},
                    {title: "Starboy", url: "resources/music/fav/starboy.mp3"},
                    {title: "Stereo Hearts", url: "resources/music/fav/stero_Hearts.mp3"},
                    {title: "Blinding Lights", url: "resources/music/fav/blinding_lights.mp3"},
                    {title: "Jiya Re Alaa Wardi",url:"resources/music/fav/jiya-re.mp3" },
                    {title: "Pehla Nasha Alaa Wardi",url:"resources/music/fav/pehla_nasha.mp3" } 
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
        
    
