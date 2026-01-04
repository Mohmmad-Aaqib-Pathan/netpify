const artists = [
            {
                id: 1,
                name: "Neffex",
                image: "resources/img/neffex.jpeg",
                gradient: "linear-gradient(135deg, #1DB954, #1ed760)",
                songs: [
                    { title: "Rumours", duration: "", url: "resources/music/neffex/rumours.mp3" },
                    { title: "Starboy", duration: "3:50", url: "" },
                    { title: "Save Your Tears", duration: "3:35", url: "" },
                    { title: "Can't Feel My Face", duration: "3:33", url: "" }
                ]
            },
            {
                id: 2,
                name: "Dua Lipa",
                icon: "💫",
                gradient: "linear-gradient(135deg, #E50914, #ff1744)",
                songs: [
                    { title: "Levitating", duration: "3:23", url: "" },
                    { title: "Don't Start Now", duration: "3:03", url: "" },
                    { title: "Physical", duration: "3:13", url: "" },
                    { title: "New Rules", duration: "3:29", url: "" }
                ]
            },
            {
                id: 3,
                name: "Drake",
                icon: "🦉",
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
                name: "Billie Eilish",
                icon: "🌙",
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
                icon: "🎸",
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
                name: "Ariana Grande",
                icon: "✨",
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
                        ${artist.icon}
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
            
            document.getElementById('currentSongTitle').textContent = song.title;
            document.getElementById('currentArtistName').textContent = currentArtist.name;
            document.getElementById('player').classList.add('active');
            
            document.querySelectorAll('.song-item').forEach((item, i) => {
                item.classList.toggle('playing', i === index);
            });
            
            isPlaying = true;
            document.getElementById('playPauseBtn').textContent = '⏸';
            
            updateProgress();
        }

        function togglePlay() {
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
            const percentage = (clickX / width) * 100;
            document.getElementById('progressFill').style.width = percentage + '%';
        }

        function changeVolume(event) {
            const volumeBar = event.currentTarget;
            const clickX = event.offsetX;
            const width = volumeBar.offsetWidth;
            const percentage = (clickX / width) * 100;
            document.getElementById('volumeFill').style.width = percentage + '%';
        }

        function updateProgress() {
            if (!isPlaying) return;
            
            let progress = 0;
            const interval = setInterval(() => {
                if (!isPlaying) {
                    clearInterval(interval);
                    return;
                }
                progress += 0.5;
                if (progress >= 100) {
                    clearInterval(interval);
                    nextSong();
                    return;
                }
                document.getElementById('progressFill').style.width = progress + '%';
                
                const song = currentArtist.songs[currentSongIndex];
                const duration = parseDuration(song.duration);
                const current = (progress / 100) * duration;
                document.getElementById('currentTime').textContent = formatTime(current);
                document.getElementById('totalTime').textContent = song.duration;
            }, 100);
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

        
    