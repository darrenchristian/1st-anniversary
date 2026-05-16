document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration & Data ---
    // --- Game Memories (For the Matching Grid) ---
    const gameMemories = [
        { id: 1, title: "A Humble Beginning", desc: "The start of us. I still remember the nerves and the joy of being invited to your home for the first time during our courting stage.", img: "assets/memory1.jpeg" },
        { id: 2, title: "Welcome, Mochi!", desc: "The moment our family grew by one tiny paw. Surprising you with little Mochi was a dream come true.", img: "assets/memory2.jpg" },
        { id: 3, title: "Ilocos Adventures", desc: "Exploring the historic charm of Ilocos Norte together—the best view was always you.", img: "assets/memory3.jpeg" },
        { id: 4, title: "Partnered in Zambales", desc: "It was a team-building trip, but the only team I wanted to be on was ours.", img: "assets/memory4.jpg" },
        { id: 5, title: "A Farmhouse Birthday", desc: "Celebrating your special day at the Farmhouse, where I gave you the infinity necklace as a promise of forever.", img: "assets/memory5.jpeg" },
        { id: 6, title: "Chilly Baguio Mornings", desc: "Shivering in the cold Baguio breeze, but finding all the warmth I needed right beside you.", img: "assets/memory6.jpeg" },
        { id: 7, title: "Office Chikahan", desc: "Chilling at the office and catching up on the latest gossip.", img: "assets/memory7.jpeg" },
        { id: 8, title: "Sun, Sand, and Us", desc: "Golden hours and salty hair. Just us enjoying the rhythm of the waves under the summer sun.", img: "assets/memory8.jpg" },
        { id: 9, title: "Under the Starlight", desc: "Quiet late-night walks where the world felt so small and perfect under the night sky.", img: "assets/memory9.jpeg" },
        { id: 10, title: "Sailing Into the Blue", desc: "Drifting through the ocean waves, feeling the sea breeze and the freedom of being with you.", img: "assets/memory10.jpeg" },
        { id: 11, title: "Poolside Laughter", desc: "Summer days spent splashing around and sharing laughs that echoed in the sun.", img: "assets/memory11.jpeg" },
        { id: 12, title: "Level Up Together", desc: "From high scores to deep bonds. Our first gaming session was the start of a whole new adventure.", img: "assets/memory12.jpeg" },
        { id: 13, title: "Ramen & Romance", desc: "Our very first date at Cafe Fifty. Sharing ramen and realizing this was the start of something truly special.", img: "assets/memory13.jpg" },
        { id: 14, title: "Garden Whispers", desc: "A quiet, beautiful moment lost in the flowers, where everything felt in full color.", img: "assets/memory14.jpg" },
        { id: 15, title: "Perya Magic", desc: "Riding the Ferris wheel and enjoying the neon lights. The best part of the carnival was holding your hand.", img: "assets/memory15.jpeg" }
    ];

    // --- Journey Memories (For the Scrapbook Scroller) ---
    const journeyMemories = [
        { id: 1, title: "Where it all started", desc: "It all started here at MPDO-Tourism Year-End Party where we play basketball.", img: "assets/journey/1.jpg" },
        { id: 2, title: "My Birthday", desc: "We celebrated my Birthday in the office where instead of you having a surprise, I am the one who had surprise.", img: "assets/journey/2.jpeg" },
        { id: 3, title: "Surprise Gift", desc: "Mochi(cat)! is the suprise gift you wouldn't expect", img: "assets/journey/3.mp4" },
        { id: 4, title: "Partnered in Zambales", desc: "It was a team-building trip, but the only team I wanted to be on was ours.", img: "assets/memory4.jpg" },
        { id: 5, title: "A Farmhouse Birthday", desc: "Celebrating your special day at the Farmhouse, where I gave you the infinity necklace as a promise of forever.", img: "assets/memory5.jpeg" },
        { id: 6, title: "Chilly Baguio Mornings", desc: "Shivering in the cold Baguio breeze, but finding all the warmth I needed right beside you.", img: "assets/memory6.jpeg" },
        { id: 7, title: "Office Chikahan", desc: "Chilling at the office and catching up on the latest gossip.", img: "assets/memory7.jpeg" },
        { id: 8, title: "Sun, Sand, and Us", desc: "Golden hours and salty hair. Just us enjoying the rhythm of the waves under the summer sun.", img: "assets/memory8.jpg" },
        { id: 9, title: "Under the Starlight", desc: "Quiet late-night walks where the world felt so small and perfect under the night sky.", img: "assets/memory9.jpeg" },
        { id: 10, title: "Sailing Into the Blue", desc: "Drifting through the ocean waves, feeling the sea breeze and the freedom of being with you.", img: "assets/memory10.jpeg" },
        { id: 11, title: "Poolside Laughter", desc: "Summer days spent splashing around and sharing laughs that echoed in the sun.", img: "assets/memory11.jpeg" },
        { id: 12, title: "Level Up Together", desc: "From high scores to deep bonds. Our first gaming session was the start of a whole new adventure.", img: "assets/memory12.jpeg" },
        { id: 13, title: "Ramen & Romance", desc: "Our very first date at Cafe Fifty. Sharing ramen and realizing this was the start of something truly special.", img: "assets/memory13.jpg" },
        { id: 14, title: "Garden Whispers", desc: "A quiet, beautiful moment lost in the flowers, where everything felt in full color.", img: "assets/memory14.jpg" },
        { id: 15, title: "Perya Magic", desc: "Riding the Ferris wheel and enjoying the neon lights. The best part of the carnival was holding your hand.", img: "assets/memory15.jpeg" }
    ];

    // --- Extra Images (For the Side-Scrolling Carousel) ---
    const extraImages = [
        "assets/journey/cute1.jpg", "assets/journey/cute2.JPEG", "assets/journey/cute3.JPEG",
        "assets/journey/cute4.JPEG", "assets/journey/cute5.JPEG", "assets/journey/cute6.JPEG",
        "assets/journey/cute7.JPEG", "assets/journey/cute8.JPG", "assets/journey/cute9.JPEG",
        "assets/journey/cute10.JPEG", "assets/journey/cute11.JPEG", "assets/journey/cute12.JPEG",
        "assets/journey/cute13.JPEG", "assets/journey/cute14.JPEG", "assets/journey/cute15.JPEG"
    ];

    // --- State Variables ---
    let cards = [];
    let flippedCards = [];
    let matches = 0;
    let moves = 0;
    let lockBoard = false;

    // --- DOM Elements ---
    const grid = document.getElementById('card-grid');
    const matchesEl = document.getElementById('matches-count');
    const movesEl = document.getElementById('moves-count');
    const splashScreen = document.getElementById('splash-screen');
    const victoryScreen = document.getElementById('victory-screen');
    const journeyScroller = document.getElementById('journey-scroller');
    const journeyList = document.getElementById('journey-list');
    const modal = document.getElementById('memory-modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');

    // --- Initialization ---
    function init() {
        createBackgroundHearts();
        setupEventListeners();
    }

    function setupEventListeners() {
        document.getElementById('start-game').addEventListener('click', startGame);
        document.getElementById('reset-game').addEventListener('click', resetGame);
        document.getElementById('play-again').addEventListener('click', resetGame);
        document.getElementById('view-journey').addEventListener('click', showJourney);
        document.getElementById('back-to-menu').addEventListener('click', () => {
            showSection('splash-screen');
        });
        document.getElementById('back-to-menu-footer').addEventListener('click', () => {
            showSection('splash-screen');
        });
        document.querySelector('.close-modal').addEventListener('click', closeModal);
        document.querySelector('.btn-close-modal').addEventListener('click', closeModal);
        window.onclick = (event) => { if (event.target == modal) closeModal(); };
    }

    function showSection(id) {
        const sections = ['splash-screen', 'game-container', 'victory-screen', 'journey-scroller'];
        sections.forEach(s => {
            const el = document.getElementById(s);
            if (el) el.classList.remove('active');
        });
        const activeSection = document.getElementById(id);
        if (activeSection) activeSection.classList.add('active');
    }

    function startGame() {
        showSection('game-container');
        playMusic();
        resetGame();
    }

    function playMusic() {
        const music = document.getElementById('bg-music');
        music.play().catch(e => console.log("Audio play failed: ", e));
    }

    function resetGame() {
        grid.innerHTML = '';
        flippedCards = [];
        matches = 0;
        moves = 0;
        lockBoard = false;
        matchesEl.textContent = `Matches: 0 / 15`;
        movesEl.textContent = `Moves: 0`;
        // No need to manually remove classes here as showSection handles it

        // Double the game memories for pairs
        cards = [...gameMemories, ...gameMemories];
        shuffle(cards);

        cards.forEach((memory, index) => {
            const card = createCardElement(memory, index);
            grid.appendChild(card);
        });
    }

    function createCardElement(memory, index) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = memory.id;

        card.innerHTML = `
            <div class="card-face card-front"></div>
            <div class="card-face card-back">
                ${memory.img ? `<img src="${memory.img}" onerror="this.parentElement.innerHTML='<div class=\\'card-placeholder\\'><h3 class=\\'title\\'>${memory.title}</h3></div>'">` : `<div class="card-placeholder"><h3 class="title">${memory.title}</h3></div>`}
            </div>
        `;

        card.addEventListener('click', flipCard);
        return card;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // --- Game Logic Functions ---
    function flipCard() {
        if (lockBoard) return;
        if (this === flippedCards[0]) return;
        if (this.classList.contains('matched')) return;

        this.classList.add('flipped');

        if (flippedCards.length === 0) {
            flippedCards.push(this);
            return;
        }

        flippedCards.push(this);
        moves++;
        movesEl.textContent = `Moves: ${moves}`;

        checkMatch();
    }

    function checkMatch() {
        const isMatch = flippedCards[0].dataset.id === flippedCards[1].dataset.id;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        flippedCards[0].classList.add('matched');
        flippedCards[1].classList.add('matched');

        const memoryId = flippedCards[0].dataset.id;
        const memory = gameMemories.find(m => m.id == memoryId);

        matches++;
        matchesEl.textContent = `Matches: ${matches} / 15`;

        setTimeout(() => {
            showMemoryModal(memory);
        }, 600);

        resetBoard();

        if (matches === 15) {
            setTimeout(showVictoryScreen, 1500);
        }
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            flippedCards[0].classList.remove('flipped');
            flippedCards[1].classList.remove('flipped');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        flippedCards = [];
        lockBoard = false;
    }

    // --- UI Helpers ---
    function showMemoryModal(memory) {
        const isVideo = memory.img.toLowerCase().endsWith('.mp4');
        const mediaContainer = document.querySelector('.image-container');

        if (isVideo) {
            mediaContainer.innerHTML = `<video src="${memory.img}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover;"></video>`;
        } else {
            mediaContainer.innerHTML = `<img id="modal-image" src="${memory.img}" alt="Memory Image" style="width:100%; height:100%; object-fit:cover;">`;
            const modalImg = document.getElementById('modal-image');
            modalImg.onerror = function () {
                this.style.display = 'none';
            };
        }

        modalTitle.textContent = memory.title;
        modalDesc.textContent = memory.desc;
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    function showVictoryScreen() {
        showSection('victory-screen');
        createConfetti();
    }

    function populateCarousel() {
        const track = document.getElementById('slider-track');
        track.innerHTML = '';
        // Duplicate images for infinite scroll effect
        const displayImages = [...extraImages, ...extraImages];
        displayImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'slider-img';
            img.onerror = () => {
                console.error("Failed to load slider image:", src);
            };
            track.appendChild(img);
        });
    }

    let isShowingJourney = false;
    function showJourney() {
        if (isShowingJourney) return;
        isShowingJourney = true;
        setTimeout(() => { isShowingJourney = false; }, 1000); // Debounce for 1s

        try {
            populateCarousel();
        } catch(e) {
            console.error(e);
        }

        try {
            populateJourney();
        } catch(e) {
            console.error(e);
        }

        showSection('journey-scroller');
    }

    function populateJourney() {
        journeyList.innerHTML = '';
        journeyMemories.forEach((memory, index) => {
            const item = document.createElement('div');
            item.className = 'journey-item';
            item.style.animationDelay = `${index * 0.1}s`;

            const isVideo = (memory.img || '').toLowerCase().endsWith('.mp4');
            const mediaHtml = isVideo
                ? `<video src="${memory.img}" autoplay loop muted playsinline class="journey-media"></video>`
                : `<img src="${memory.img}" alt="${memory.title}" class="journey-media">`;

            item.innerHTML = `
                <div class="journey-card">
                    <div class="journey-image">
                        ${mediaHtml}
                    </div>
                    <div class="journey-text">
                        <h3>${memory.title}</h3>
                        <p>${memory.desc}</p>
                    </div>
                </div>
            `;
            journeyList.appendChild(item);
        });
    }

    function createBackgroundHearts() {
        const container = document.querySelector('.background-animation');
        const colors = ['#FFB7B2', '#FFDAC1', '#B2CEFF', '#E1B2FF', '#FFFFB2'];
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 10 + 15) + 's';
            heart.style.animationDelay = Math.random() * 10 + 's';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.opacity = Math.random() * 0.2 + 0.05;
            heart.style.position = 'absolute';
            heart.style.top = '100%';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.animationName = 'float';
            heart.style.animationTimingFunction = 'linear';
            heart.style.animationIterationCount = 'infinite';
            heart.style.filter = 'blur(' + (Math.random() * 2) + 'px)';
            container.appendChild(heart);
        }
    }

    function createConfetti() {
        const container = document.querySelector('.confetti-container');
        for (let i = 0; i < 100; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.top = '-10px';
            piece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            piece.style.width = Math.random() * 10 + 5 + 'px';
            piece.style.height = Math.random() * 10 + 5 + 'px';
            piece.style.position = 'absolute';
            piece.style.zIndex = '1001';

            const anim = piece.animate([
                { transform: 'translateY(0) rotate(0)', opacity: 1 },
                { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0, .9, .6, 1)'
            });

            container.appendChild(piece);
            anim.onfinish = () => piece.remove();
        }
    }

    window.showVictoryScreen = showVictoryScreen;
    window.createConfetti = createConfetti;
    window.playMusic = playMusic;
    window.showJourney = showJourney;
    window.resetGame = resetGame;
    window.showSection = showSection;
    window.startGame = startGame;

    init();
});
