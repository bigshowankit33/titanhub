// Sample cartoon data - Replace with your actual data
const cartoons = [
    {
        title: "Tom and Jerry",
        description: "The classic cat and mouse chase that never gets old.",
        thumbnail: "https://via.placeholder.com/300x450/1f1f1f/ffffff?text=Tom+and+Jerry",
        downloadLink: "#" // Replace with actual download link
    },
    {
        title: "Looney Tunes",
        description: "Bugs Bunny and friends in their hilarious adventures.",
        thumbnail: "https://via.placeholder.com/300x450/1f1f1f/ffffff?text=Looney+Tunes",
        downloadLink: "#"
    },
    {
        title: "Scooby-Doo",
        description: "Mystery-solving adventures with the famous talking dog.",
        thumbnail: "https://via.placeholder.com/300x450/1f1f1f/ffffff?text=Scooby-Doo",
        downloadLink: "#"
    },
    {
        title: "The Flintstones",
        description: "Modern Stone Age family living in Bedrock.",
        thumbnail: "https://via.placeholder.com/300x450/1f1f1f/ffffff?text=The+Flintstones",
        downloadLink: "#"
    },
    {
        title: "Popeye",
        description: "The spinach-loving sailor with superhuman strength.",
        thumbnail: "https://via.placeholder.com/300x450/1f1f1f/ffffff?text=Popeye",
        downloadLink: "#"
    },
    {
        title: "The Jetsons",
        description: "A futuristic family living in the space age.",
        thumbnail: "https://via.placeholder.com/300x450/1f1f1f/ffffff?text=The+Jetsons",
        downloadLink: "#"
    }
];

// Function to create cartoon cards
function createCartoonCard(cartoon) {
    const card = document.createElement('div');
    card.className = 'cartoon-card';

    card.innerHTML = `
        <img src="${cartoon.thumbnail}" alt="${cartoon.title}" class="thumbnail">
        <div class="card-content">
            <h3 class="card-title">${cartoon.title}</h3>
            <p class="card-description">${cartoon.description}</p>
            <a href="${cartoon.downloadLink}" class="download-btn" target="_blank">Download</a>
        </div>
    `;

    return card;
}

// Function to render all cartoons
function renderCartoons() {
    const gridContainer = document.getElementById('cartoonGrid');
    
    cartoons.forEach(cartoon => {
        const card = createCartoonCard(cartoon);
        gridContainer.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderCartoons();
}); 