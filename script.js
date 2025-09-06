// Movie Database with South Indian movies
const movies = [
    // South Indian Movies
    {
        id: 1,
        title: "Baahubali 2: The Conclusion",
        genre: "south indian",
        year: 2017,
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/xLiC0akKs8gazd3QkHBXJ8Hjd4P.jpg",
        description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom."
    },
    {
        id: 2,
        title: "RRR",
        genre: "south indian",
        year: 2022,
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/wD6jUzAcDCeZQmPUv4vdlCdCfTo.jpg",
        description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s."
    },
    {
        id: 3,
        title: "KGF Chapter 2",
        genre: "south indian",
        year: 2022,
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
        description: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order."
    },
    {
        id: 4,
        title: "Pushpa: The Rise",
        genre: "south indian",
        year: 2021,
        rating: 7.6,
        poster: "https://image.tmdb.org/t/p/w500/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
        description: "A laborer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business."
    },
    {
        id: 5,
        title: "Vikram",
        genre: "south indian",
        year: 2022,
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/RKJW1895vBKLzaeh4OujiMpFcwp.jpg",
        description: "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
        id: 6,
        title: "Master",
        genre: "south indian",
        year: 2021,
        rating: 7.3,
        poster: "https://image.tmdb.org/t/p/w500/cjdZE1S62vxOFvbK9eZOz2nRv3K.jpg",
        description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities."
    },
    {
        id: 7,
        title: "Beast",
        genre: "south indian",
        year: 2022,
        rating: 5.7,
        poster: "https://image.tmdb.org/t/p/w500/s16VsHPZz6NbONXeKkOxDdAM8P6.jpg",
        description: "A RAW agent is in search of his kidnapped colleague but the mission turns complicated when he gets involved with a terrorist group."
    },
    {
        id: 8,
        title: "Kantara",
        genre: "south indian",
        year: 2022,
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/8I37NtDffNV7AuomIyBKgw8JTo4.jpg",
        description: "It involves culture of Kambla and Bhootha Kola. A human and nature conflict where Shiva is the rebellion who works against nature."
    },
    
    // Other genres
    {
        id: 9,
        title: "The Dark Knight",
        genre: "action",
        year: 2008,
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
    {
        id: 10,
        title: "Inception",
        genre: "scifi",
        year: 2010,
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        id: 11,
        title: "The Godfather",
        genre: "drama",
        year: 1972,
        rating: 9.2,
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        id: 12,
        title: "Pulp Fiction",
        genre: "thriller",
        year: 1994,
        rating: 8.9,
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
    },
    {
        id: 13,
        title: "Avengers: Endgame",
        genre: "action",
        year: 2019,
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more."
    },
    {
        id: 14,
        title: "The Hangover",
        genre: "comedy",
        year: 2009,
        rating: 7.7,
        poster: "https://image.tmdb.org/t/p/w500/uluhlXqQpEPBeTWqfCBjxoUzjJa.jpg",
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing."
    },
    {
        id: 15,
        title: "The Conjuring",
        genre: "horror",
        year: 2013,
        rating: 7.5,
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
    }
];

// DOM Elements
const loadingScreen = document.querySelector('.loading-screen');
const moviesGrid = document.getElementById('moviesGrid');
const genreFilter = document.getElementById('genreFilter');
const trendingTrack = document.getElementById('trendingTrack');
const movieModal = document.getElementById('movieModal');
const navLinks = document.querySelectorAll('.nav-link');

// Image error handling and fallback
const FALLBACK_POSTER = './fallback-poster.svg';

// Image optimization and caching
const imageCache = new Map();

function handleImageError(img) {
    img.onerror = null;
    img.src = FALLBACK_POSTER;
    img.alt = 'Movie poster unavailable';
    img.classList.add('loaded');
}

function preloadImage(url) {
    if (imageCache.has(url)) {
        return Promise.resolve(imageCache.get(url));
    }
    
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            imageCache.set(url, img);
            resolve(img);
        };
        img.onerror = reject;
        img.src = url;
    });
}

function preloadInitialImages() {
    const initialMovies = movies.slice(0, 6);
    initialMovies.forEach(movie => {
        preloadImage(movie.poster).catch(() => {
            console.warn(`Failed to preload: ${movie.title}`);
        });
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Initialize movies
    displayMovies(movies);
    displayTrendingMovies();
    
    // Preload initial images
    setTimeout(preloadInitialImages, 1000);
    
    // Add event listeners
    genreFilter.addEventListener('change', filterMovies);
    
    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close modal functionality
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    movieModal.addEventListener('click', function(e) {
        if (e.target === movieModal) {
            closeModal();
        }
    });

    // Add floating particles
    createFloatingParticles();
});

// Display movies in grid
function displayMovies(moviesToShow) {
    moviesGrid.innerHTML = '';
    
    moviesToShow.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" 
                 alt="${movie.title} movie poster" 
                 class="movie-poster loading-shimmer"
                 onerror="handleImageError(this)"
                 onload="this.classList.remove('loading-shimmer'); this.classList.add('loaded');"
                 loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-genre">${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">
                    <span>⭐</span>
                    <span>${movie.rating}</span>
                </div>
            </div>
        `;
        
        movieCard.addEventListener('click', () => openModal(movie));
        moviesGrid.appendChild(movieCard);
    });
}

// Filter movies by genre
function filterMovies() {
    const selectedGenre = genreFilter.value;
    
    if (selectedGenre === 'all') {
        displayMovies(movies);
    } else {
        const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
        displayMovies(filteredMovies);
    }
}

// Display trending movies carousel
function displayTrendingMovies() {
    const trendingMovies = movies.slice(0, 8);
    
    // Duplicate movies for infinite scroll effect
    const allTrendingMovies = [...trendingMovies, ...trendingMovies];
    
    trendingTrack.innerHTML = '';
    
    allTrendingMovies.forEach(movie => {
        const trendingCard = document.createElement('div');
        trendingCard.className = 'trending-card';
        trendingCard.innerHTML = `
            <img src="${movie.poster}" 
                 alt="${movie.title} trending movie poster" 
                 class="trending-poster loading-shimmer"
                 onerror="handleImageError(this)"
                 onload="this.classList.remove('loading-shimmer'); this.classList.add('loaded');"
                 loading="lazy">
            <div class="trending-overlay">
                <h4>${movie.title}</h4>
                <p>⭐ ${movie.rating}</p>
            </div>
        `;
        
        trendingCard.addEventListener('click', () => openModal(movie));
        trendingTrack.appendChild(trendingCard);
    });
}

// Open movie modal
function openModal(movie) {
    const modalPoster = document.getElementById('modalPoster');
    modalPoster.src = movie.poster;
    modalPoster.alt = `${movie.title} movie poster`;
    modalPoster.className = 'modal-poster loading-shimmer';
    modalPoster.onerror = () => handleImageError(modalPoster);
    modalPoster.onload = () => {
        modalPoster.classList.remove('loading-shimmer');
        modalPoster.classList.add('loaded');
    };
    
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalGenre').textContent = `Genre: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}`;
    document.getElementById('modalYear').textContent = `Year: ${movie.year}`;
    document.getElementById('modalRating').textContent = `Rating: ⭐ ${movie.rating}`;
    document.getElementById('modalDescription').textContent = movie.description;
    
    movieModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close movie modal
function closeModal() {
    movieModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Create floating particles effect
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#ffd700';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 6 + 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.opacity = Math.random() * 0.8 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe movie cards for scroll animations
setTimeout(() => {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}, 100);