document.addEventListener('DOMContentLoaded', () => {
    const apiListContainer = document.getElementById('api-list');
    const searchInput = document.getElementById('search');

    const fetchAPIs = async () => {
        try {
            const response = await fetch('https://api.publicapis.org/entries');
            const data = await response.json();
            displayAPIs(data.entries);
        } catch (error) {
            console.error('Error fetching APIs:', error);
        }
    };

    const displayAPIs = (apis) => {
        apiListContainer.innerHTML = '';
        apis.forEach(api => {
            const apiElement = document.createElement('div');
            apiElement.className = 'api';
            apiElement.innerHTML = `
                <h2>${api.API}</h2>
                <p><strong>Description:</strong> ${api.Description}</p>
                <p><strong>Category:</strong> ${api.Category}</p>
                <p><a href="${api.Link}" target="_blank">Visit API</a></p>
            `;
            apiListContainer.appendChild(apiElement);
        });
    };

    const filterAPIs = (apis, searchTerm) => {
        return apis.filter(api => 
            api.API.toLowerCase().includes(searchTerm.toLowerCase()) || 
            api.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            api.Category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    searchInput.addEventListener('input', async (event) => {
        const searchTerm = event.target.value;
        const response = await fetch('https://api.publicapis.org/entries');
        const data = await response.json();
        const filteredAPIs = filterAPIs(data.entries, searchTerm);
        displayAPIs(filteredAPIs);
    });

    fetchAPIs();
});
