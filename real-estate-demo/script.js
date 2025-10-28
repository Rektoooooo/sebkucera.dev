// Wrap all code in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');

    // Mortgage Calculator
    const homePrice = document.getElementById('homePrice');
    const downPayment = document.getElementById('downPayment');
    const downPaymentValue = document.getElementById('downPaymentValue');
    const loanTerm = document.getElementById('loanTerm');
    const interestRate = document.getElementById('interestRate');
    const monthlyPayment = document.getElementById('monthlyPayment');
    const principalInterest = document.getElementById('principalInterest');
    const taxInsurance = document.getElementById('taxInsurance');

    function calculateMortgage() {
        const price = parseFloat(homePrice.value);
        const downPercent = parseFloat(downPayment.value);
        const downAmount = (price * downPercent) / 100;
        const loanAmount = price - downAmount;
        const years = parseInt(loanTerm.value);
        const rate = parseFloat(interestRate.value) / 100 / 12;
        const numPayments = years * 12;

        // Update down payment display
        downPaymentValue.textContent = `${downPercent}% ($${downAmount.toLocaleString(undefined, {maximumFractionDigits: 0})})`;

        // Calculate monthly payment (principal + interest)
        const monthlyPI = (loanAmount * rate * Math.pow(1 + rate, numPayments)) / (Math.pow(1 + rate, numPayments) - 1);

        // Estimate property tax and insurance (roughly 1.2% annually)
        const monthlyTaxIns = (price * 0.012) / 12;

        // Total monthly payment
        const total = monthlyPI + monthlyTaxIns;

        // Update display
        monthlyPayment.textContent = '$' + Math.round(total).toLocaleString();
        principalInterest.textContent = '$' + Math.round(monthlyPI).toLocaleString();
        taxInsurance.textContent = '$' + Math.round(monthlyTaxIns).toLocaleString();
    }

    // Add event listeners
    homePrice.addEventListener('input', calculateMortgage);
    downPayment.addEventListener('input', calculateMortgage);
    loanTerm.addEventListener('change', calculateMortgage);
    interestRate.addEventListener('input', calculateMortgage);

    // Initial calculation
    calculateMortgage();

    // Property Modal
    const propertyModal = document.getElementById('propertyModal');
    const closeModal = document.getElementById('closeModal');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    // Property data
    const propertyData = {
        '1': {
            name: 'Modern Luxury Villa',
            location: 'Beverly Hills, Los Angeles',
            price: '$1,250,000',
            beds: 4,
            baths: 3,
            sqft: '3,200',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000',
            images: [
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400',
                'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400',
                'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400',
                'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=400'
            ]
        },
        '2': {
            name: 'Downtown Penthouse',
            location: 'Manhattan, New York',
            price: '$2,100,000',
            beds: 3,
            baths: 2.5,
            sqft: '2,800',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000',
            images: [
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400',
                'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=400',
                'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400',
                'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=400'
            ]
        },
        '3': {
            name: 'Beachfront Estate',
            location: 'Malibu, California',
            price: '$3,500,000',
            beds: 5,
            baths: 4,
            sqft: '4,500',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000',
            images: [
                'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400',
                'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400',
                'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400',
                'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400'
            ]
        },
        '4': {
            name: 'Urban Condo',
            location: 'Los Angeles, California',
            price: '$850,000',
            beds: 3,
            baths: 2,
            sqft: '1,900',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000',
            images: [
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400',
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400',
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400',
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400'
            ]
        },
        '5': {
            name: 'Victorian House',
            location: 'San Francisco, California',
            price: '$1,650,000',
            beds: 4,
            baths: 3.5,
            sqft: '2,900',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000',
            images: [
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400',
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400',
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400',
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400'
            ]
        },
        '6': {
            name: 'Waterfront Apartment',
            location: 'Miami, Florida',
            price: '$975,000',
            beds: 2,
            baths: 2,
            sqft: '1,600',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000',
            images: [
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400',
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400',
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400',
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400'
            ]
        }
    };

    // Function to populate modal with property data
    function openPropertyModal(propertyId) {
        const property = propertyData[propertyId];
        if (!property) {
            console.error('Property not found:', propertyId);
            return;
        }

        console.log('Opening property:', property.name);

        // Update main image
        document.getElementById('modalMainImage').src = property.image;

        // Update thumbnails
        const thumbnails = document.querySelectorAll('#propertyModal .grid.grid-cols-4 img');
        property.images.forEach((img, index) => {
            if (thumbnails[index]) {
                thumbnails[index].src = img;
            }
        });

        // Update property details
        document.getElementById('modalPrice').textContent = property.price;
        document.getElementById('modalTitle').textContent = property.name;
        document.getElementById('modalLocation').textContent = property.location;
        document.getElementById('modalBeds').textContent = property.beds;
        document.getElementById('modalBaths').textContent = property.baths;
        document.getElementById('modalSqft').textContent = property.sqft;

        // Show modal
        propertyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Open modal when clicking "View Details" buttons
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Get property ID from the card
            const propertyCard = button.closest('.property-card');
            const propertyId = propertyCard.querySelector('.compare-input').dataset.propertyId;

            openPropertyModal(propertyId);
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        propertyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    propertyModal.addEventListener('click', (e) => {
        if (e.target === propertyModal) {
            propertyModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.borderColor = 'transparent';
                btn.classList.add('text-gray-600');
                btn.classList.remove('text-blue-900');
            });

            // Add active class to clicked button
            button.classList.add('active');
            button.style.borderColor = 'var(--primary)';
            button.style.color = 'var(--primary)';
            button.classList.remove('text-gray-600');

            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });

            // Show selected tab content
            document.getElementById(`${tabName}-content`).classList.remove('hidden');
        });
    });

    // Change modal main image
    function changeModalImage(src) {
        const modalMainImage = document.getElementById('modalMainImage');
        // Replace 400 width with 2000 for higher resolution
        const highResSrc = src.replace('w=400', 'w=2000');
        modalMainImage.src = highResSrc;
    }

    // Make changeModalImage available globally
    window.changeModalImage = changeModalImage;

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuButton.querySelector('i');

        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('bi-x-lg');
            icon.classList.add('bi-list');
        } else {
            icon.classList.remove('bi-list');
            icon.classList.add('bi-x-lg');
        }
    });

    // Close mobile menu when clicking on links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('bi-x-lg');
            icon.classList.add('bi-list');
        });
    });

    // Property Comparison System
    const compareBar = document.getElementById('compareBar');
    const compareCount = document.getElementById('compareCount');
    const compareModal = document.getElementById('compareModal');
    const closeCompareModal = document.getElementById('closeCompareModal');
    const openCompareModal = document.getElementById('openCompareModal');
    const clearCompare = document.getElementById('clearCompare');
    const compareInputs = document.querySelectorAll('.compare-input');
    const comparisonTableBody = document.getElementById('comparisonTableBody');

    let selectedProperties = [];

    // Handle compare checkbox changes
    compareInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const propertyData = {
                id: e.target.dataset.propertyId,
                name: e.target.dataset.propertyName,
                price: e.target.dataset.propertyPrice,
                beds: e.target.dataset.propertyBeds,
                baths: e.target.dataset.propertyBaths,
                sqft: e.target.dataset.propertySqft,
                location: e.target.dataset.propertyLocation,
                image: e.target.dataset.propertyImage
            };

            if (e.target.checked) {
                if (selectedProperties.length < 3) {
                    selectedProperties.push(propertyData);
                    e.target.parentElement.querySelector('i').style.color = 'var(--accent)';
                } else {
                    e.target.checked = false;
                    alert('You can only compare up to 3 properties');
                }
            } else {
                selectedProperties = selectedProperties.filter(p => p.id !== propertyData.id);
                e.target.parentElement.querySelector('i').style.color = '#374151';
            }

            updateCompareBar();
        });
    });

    function updateCompareBar() {
        compareCount.textContent = selectedProperties.length;

        if (selectedProperties.length > 0) {
            compareBar.classList.remove('hidden');
        } else {
            compareBar.classList.add('hidden');
        }
    }

    // Clear all comparisons
    clearCompare.addEventListener('click', () => {
        selectedProperties = [];
        compareInputs.forEach(input => {
            input.checked = false;
            input.parentElement.querySelector('i').style.color = '#374151';
        });
        updateCompareBar();
    });

    // Open comparison modal
    openCompareModal.addEventListener('click', () => {
        if (selectedProperties.length < 2) {
            alert('Please select at least 2 properties to compare');
            return;
        }

        buildComparisonTable();
        compareModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Close comparison modal
    closeCompareModal.addEventListener('click', () => {
        compareModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    compareModal.addEventListener('click', (e) => {
        if (e.target === compareModal) {
            compareModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    function buildComparisonTable() {
        // Build header row with property images and names
        const headerRow = document.querySelector('#comparisonContent thead tr');
        headerRow.innerHTML = '<th class="text-left p-4 bg-gray-50 font-bold text-gray-900 sticky left-0 z-10 border-r border-gray-200">Feature</th>';

        selectedProperties.forEach(property => {
            headerRow.innerHTML += `
                    <th class="p-4 bg-gray-50 border-r border-gray-200">
                        <img src="${property.image}" alt="${property.name}" class="w-full h-32 object-cover rounded-lg mb-3">
                        <p class="font-bold text-gray-900">${property.name}</p>
                        <p class="text-sm text-gray-600">${property.location}</p>
                    </th>
                `;
        });

        // Build comparison rows
        const features = [
            { label: 'Price', key: 'price', formatter: (val) => '$' + parseInt(val).toLocaleString() },
            { label: 'Bedrooms', key: 'beds', formatter: (val) => val },
            { label: 'Bathrooms', key: 'baths', formatter: (val) => val },
            { label: 'Square Feet', key: 'sqft', formatter: (val) => parseInt(val).toLocaleString() + ' sq ft' },
            { label: 'Location', key: 'location', formatter: (val) => val },
            { label: 'Price per Sq Ft', key: null, formatter: (val, property) => '$' + Math.round(property.price / property.sqft).toLocaleString() }
        ];

        comparisonTableBody.innerHTML = '';

        features.forEach((feature, index) => {
            let row = `<tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">`;
            row += `<td class="p-4 font-semibold text-gray-900 sticky left-0 z-10 border-r border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">${feature.label}</td>`;

            selectedProperties.forEach(property => {
                const value = feature.key ? property[feature.key] : null;
                const displayValue = feature.formatter(value, property);
                row += `<td class="p-4 text-center text-gray-700 border-r border-gray-200">${displayValue}</td>`;
            });

            row += '</tr>';
            comparisonTableBody.innerHTML += row;
        });
    }

    // Favorites System with localStorage
    const favoritesModal = document.getElementById('favoritesModal');
    const closeFavoritesModal = document.getElementById('closeFavoritesModal');
    const viewFavorites = document.getElementById('viewFavorites');
    const favCount = document.getElementById('favCount');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const emptyFavorites = document.getElementById('emptyFavorites');
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Initialize favorites on page load
    function initializeFavorites() {
        updateFavoriteButtons();
        updateFavoriteCount();
    }

    // Handle favorite button clicks
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const propertyId = button.dataset.propertyId;
            const propertyCard = button.closest('.property-card');

            const propertyData = {
                id: propertyId,
                name: propertyCard.querySelector('h3').textContent,
                price: propertyCard.querySelector('.text-3xl').textContent,
                location: propertyCard.querySelector('.bi-geo-alt').parentElement.textContent.trim(),
                beds: propertyCard.querySelector('.bi-door-open').parentElement.textContent.trim(),
                baths: propertyCard.querySelectorAll('.text-center')[1].querySelector('.font-semibold').textContent.trim(),
                sqft: propertyCard.querySelectorAll('.text-center')[2].querySelector('.font-semibold').textContent.trim(),
                image: propertyCard.querySelector('img').src
            };

            const existingIndex = favorites.findIndex(f => f.id === propertyId);

            if (existingIndex === -1) {
                // Add to favorites
                favorites.push(propertyData);
                button.querySelector('i').classList.remove('bi-heart');
                button.querySelector('i').classList.add('bi-heart-fill');
                button.querySelector('i').style.color = '#ef4444'; // red-500
            } else {
                // Remove from favorites
                favorites.splice(existingIndex, 1);
                button.querySelector('i').classList.remove('bi-heart-fill');
                button.querySelector('i').classList.add('bi-heart');
                button.querySelector('i').style.color = '#374151'; // gray-700
            }

            // Save to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavoriteCount();
        });
    });

    function updateFavoriteButtons() {
        favoriteButtons.forEach(button => {
            const propertyId = button.dataset.propertyId;
            const isFavorite = favorites.some(f => f.id === propertyId);

            if (isFavorite) {
                button.querySelector('i').classList.remove('bi-heart');
                button.querySelector('i').classList.add('bi-heart-fill');
                button.querySelector('i').style.color = '#ef4444';
            } else {
                button.querySelector('i').classList.remove('bi-heart-fill');
                button.querySelector('i').classList.add('bi-heart');
                button.querySelector('i').style.color = '#374151';
            }
        });
    }

    function updateFavoriteCount() {
        const count = favorites.length;
        favCount.textContent = count;

        if (count > 0) {
            favCount.classList.remove('hidden');
        } else {
            favCount.classList.add('hidden');
        }
    }

    // Open favorites modal
    viewFavorites.addEventListener('click', () => {
        buildFavoritesGrid();
        favoritesModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Close favorites modal
    closeFavoritesModal.addEventListener('click', () => {
        favoritesModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    favoritesModal.addEventListener('click', (e) => {
        if (e.target === favoritesModal) {
            favoritesModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    function buildFavoritesGrid() {
        if (favorites.length === 0) {
            favoritesGrid.classList.add('hidden');
            emptyFavorites.classList.remove('hidden');
            return;
        }

        favoritesGrid.classList.remove('hidden');
        emptyFavorites.classList.add('hidden');
        favoritesGrid.innerHTML = '';

        favorites.forEach(property => {
            const card = `
                    <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                        <div class="relative">
                            <img src="${property.image}" alt="${property.name}" class="w-full h-48 object-cover">
                            <button class="remove-favorite absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" data-property-id="${property.id}">
                                <i class="bi bi-x-lg text-gray-700"></i>
                            </button>
                        </div>
                        <div class="p-6">
                            <div class="text-2xl font-bold mb-2" style="color: var(--primary);">${property.price}</div>
                            <h3 class="text-xl font-bold mb-2 text-gray-900">${property.name}</h3>
                            <p class="text-gray-600 mb-4 flex items-center text-sm">
                                <i class="bi bi-geo-alt mr-2"></i>${property.location}
                            </p>
                            <div class="grid grid-cols-3 gap-2 text-sm">
                                <div class="text-center">
                                    <div class="font-semibold text-gray-900">${property.beds}</div>
                                    <div class="text-xs text-gray-600">Beds</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-semibold text-gray-900">${property.baths}</div>
                                    <div class="text-xs text-gray-600">Baths</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-semibold text-gray-900">${property.sqft}</div>
                                    <div class="text-xs text-gray-600">Sq Ft</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            favoritesGrid.innerHTML += card;
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const propertyId = btn.dataset.propertyId;
                favorites = favorites.filter(f => f.id !== propertyId);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                buildFavoritesGrid();
                updateFavoriteButtons();
                updateFavoriteCount();
            });
        });
    }

    // Initialize favorites on page load
    initializeFavorites();

    // Live Property Search and Filtering
    const filterLocation = document.getElementById('filterLocation');
    const filterType = document.getElementById('filterType');
    const filterBeds = document.getElementById('filterBeds');
    const filterBaths = document.getElementById('filterBaths');
    const filterPrice = document.getElementById('filterPrice');
    const filterPriceValue = document.getElementById('priceValue');
    const resetFilters = document.getElementById('resetFilters');
    const propertyGrid = document.getElementById('propertyGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    const filterResultsText = document.getElementById('filterResultsText');
    const amenityFilters = document.querySelectorAll('.amenity-filter');

    // Get property cards
    function getPropertyCards() {
        return document.querySelectorAll('.property-card');
    }

    // Update price value display
    filterPrice.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        if (value >= 5000000) {
            filterPriceValue.textContent = '$5,000,000+';
        } else {
            filterPriceValue.textContent = '$' + value.toLocaleString();
        }
    });

    // Apply filters on change - with scroll
    filterLocation.addEventListener('change', () => {
        applyFilters();
        scrollToResults();
    });
    filterType.addEventListener('change', () => {
        applyFilters();
        scrollToResults();
    });
    filterBeds.addEventListener('change', () => {
        applyFilters();
        scrollToResults();
    });
    filterBaths.addEventListener('change', () => {
        applyFilters();
        scrollToResults();
    });
    filterPrice.addEventListener('change', () => {
        applyFilters();
        scrollToResults();
    });

    // Add amenity filter listeners
    amenityFilters.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            applyFilters();
            scrollToResults();
        });
    });

    // Scroll to results
    function scrollToResults() {
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function applyFilters() {
        const filters = {
            location: filterLocation.value,
            type: filterType.value,
            beds: parseInt(filterBeds.value),
            baths: parseInt(filterBaths.value),
            maxPrice: parseInt(filterPrice.value),
            amenities: Array.from(amenityFilters).filter(cb => cb.checked).map(cb => cb.dataset.amenity)
        };

        let visibleCount = 0;
        const propertyCards = getPropertyCards();

        propertyCards.forEach(card => {
            const cardData = {
                location: card.dataset.location,
                type: card.dataset.type,
                beds: parseInt(card.dataset.beds),
                baths: parseFloat(card.dataset.baths),
                price: parseInt(card.dataset.price),
                amenities: card.dataset.amenities ? card.dataset.amenities.split(',') : []
            };

            let matches = true;

            // Check location (exact match on data-location attribute)
            if (filters.location && cardData.location !== filters.location) {
                matches = false;
            }

            // Check type
            if (filters.type && cardData.type !== filters.type) {
                matches = false;
            }

            // Check bedrooms (minimum)
            if (filters.beds > 0 && cardData.beds < filters.beds) {
                matches = false;
            }

            // Check bathrooms (minimum)
            if (filters.baths > 0 && cardData.baths < filters.baths) {
                matches = false;
            }

            // Check price (maximum)
            if (filters.maxPrice < 5000000 && cardData.price > filters.maxPrice) {
                matches = false;
            }

            // Check amenities (must have ALL selected amenities)
            if (filters.amenities.length > 0) {
                const hasAllAmenities = filters.amenities.every(amenity =>
                    cardData.amenities.includes(amenity)
                );
                if (!hasAllAmenities) {
                    matches = false;
                }
            }

            // Show/hide card with animation
            if (matches) {
                card.style.display = 'block';
                card.style.animation = 'slideIn 0.3s ease';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide property grid and no results
        if (visibleCount > 0) {
            propertyGrid.style.display = 'grid';
            noResults.classList.add('hidden');
            resultsCount.querySelector('span').textContent = visibleCount;

            // Update filter results text
            if (filterResultsText) {
                const hasActiveFilters = filters.location || filters.type || filters.beds > 0 || filters.baths > 0 || filters.maxPrice < 5000000;
                if (hasActiveFilters) {
                    filterResultsText.innerHTML = `<span class="font-bold">${visibleCount} ${visibleCount === 1 ? 'property' : 'properties'}</span> found matching your criteria`;
                } else {
                    filterResultsText.textContent = 'Use filters above to search properties';
                }
            }
        } else {
            propertyGrid.style.display = 'none';
            noResults.classList.remove('hidden');

            // Update filter results text
            if (filterResultsText) {
                filterResultsText.innerHTML = '<span class="font-bold text-red-500">No properties found</span> - Try adjusting your filters';
            }
        }
    }

    // Reset filters
    resetFilters.addEventListener('click', () => {
        filterLocation.value = '';
        filterType.value = '';
        filterBeds.value = '0';
        filterBaths.value = '0';
        filterPrice.value = '5000000';
        filterPriceValue.textContent = '$5,000,000+';

        // Uncheck all amenity filters
        amenityFilters.forEach(checkbox => {
            checkbox.checked = false;
        });

        applyFilters();
        scrollToResults();
    });

    // Initialize: show all properties
    filterPriceValue.textContent = '$5,000,000+';
    applyFilters();

    // Hero Search Bar Integration
    const heroSearchButton = document.getElementById('heroSearchButton');
    const heroSearchLocation = document.getElementById('heroSearchLocation');
    const heroSearchType = document.getElementById('heroSearchType');
    const heroSearchPrice = document.getElementById('heroSearchPrice');

    heroSearchButton.addEventListener('click', () => {
        // Get hero search values
        const locationInput = heroSearchLocation.value.trim();
        const typeValue = heroSearchType.value;
        const priceValue = heroSearchPrice.value;

        // Map location input to filter options
        if (locationInput) {
            // Check if the input matches any of our locations
            const locations = ['Los Angeles', 'New York', 'Miami', 'San Francisco'];
            const matchedLocation = locations.find(loc =>
                locationInput.toLowerCase().includes(loc.toLowerCase())
            );

            if (matchedLocation) {
                filterLocation.value = matchedLocation;
            } else {
                // If no match, reset location filter
                filterLocation.value = '';
            }
        } else {
            filterLocation.value = '';
        }

        // Set property type
        filterType.value = typeValue;

        // Set price
        filterPrice.value = priceValue;
        if (parseInt(priceValue) >= 5000000) {
            filterPriceValue.textContent = '$5,000,000+';
        } else {
            filterPriceValue.textContent = '$' + parseInt(priceValue).toLocaleString();
        }

        // Apply filters and scroll to results
        applyFilters();
        scrollToResults();
    });

    // Allow Enter key in location input
    heroSearchLocation.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            heroSearchButton.click();
        }
    });

    // Debug: Check if elements exist
    console.log('Property Modal:', propertyModal);
    console.log('View Details Buttons:', viewDetailsButtons.length);
    console.log('Favorites Modal:', favoritesModal);
    console.log('View Favorites Button:', viewFavorites);

    // Virtual Tour Interactive Elements
    const start360Button = document.getElementById('start360Tour');
    const tourHotspots = document.getElementById('tour-hotspots');
    const tourInstructions = document.getElementById('tour-instructions');
    const panoramaImage = document.getElementById('panoramaImage');

    // Room data
    const roomImages = [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000', // Living Room
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2000', // Kitchen
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000'  // Bedroom
    ];
    const roomNames = ['Living Room', 'Kitchen', 'Master Bedroom'];

    // Function to change room
    function changeRoom(roomIndex) {
        console.log('Changing to room:', roomNames[roomIndex]);

        if (!panoramaImage || !roomImages[roomIndex]) {
            console.error('Missing panorama image or room data');
            return;
        }

        // Fade out
        panoramaImage.style.transition = 'opacity 0.3s ease';
        panoramaImage.style.opacity = '0';

        setTimeout(() => {
            // Change image
            panoramaImage.src = roomImages[roomIndex];

            // Fade in
            setTimeout(() => {
                panoramaImage.style.opacity = '1';
            }, 50);

            // Update room label
            const roomLabel = document.querySelector('#tour-viewer .absolute.top-4 p');
            if (roomLabel) {
                roomLabel.innerHTML = `<i class="bi bi-geo-alt-fill mr-2" style="color: var(--secondary);"></i>${roomNames[roomIndex]}`;
            }
        }, 300);
    }

    // Setup virtual tour
    if (start360Button) {
        console.log('Virtual tour button found');

        start360Button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Starting virtual tour');

            // Hide the start button
            start360Button.parentElement.classList.add('hidden');

            // Show hotspots and instructions
            if (tourHotspots) {
                tourHotspots.classList.remove('hidden');
                console.log('Hotspots shown');
            }
            if (tourInstructions) {
                tourInstructions.classList.remove('hidden');
            }

            // Setup hotspot click handlers NOW (after they're visible)
            setTimeout(() => {
                const hotspotButtons = document.querySelectorAll('#tour-hotspots button');
                console.log('Found hotspot buttons:', hotspotButtons.length);

                hotspotButtons.forEach((button, index) => {
                    // Remove any existing listeners
                    const newButton = button.cloneNode(true);
                    button.parentNode.replaceChild(newButton, button);

                    // Add new listener
                    newButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Hotspot clicked:', index);
                        changeRoom(index);
                    });
                });
            }, 100);
        });
    } else {
        console.error('Virtual tour button not found');
    }

    // Schedule Tour Modal
    const scheduleTourModal = document.getElementById('scheduleTourModal');
    const scheduleTourBtn = document.getElementById('scheduleTourBtn');
    const closeScheduleTour = document.getElementById('closeScheduleTour');
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const timeSlots = document.getElementById('timeSlots');
    const confirmTourBtn = document.getElementById('confirmTourBtn');
    const tourSummary = document.getElementById('tourSummary');

    let currentDate = new Date();
    let selectedDate = null;
    let selectedTime = null;

    // Generate time slots (9 AM to 6 PM, hourly)
    const availableTimeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ];

    // Open schedule tour modal
    if (scheduleTourBtn) {
        scheduleTourBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            scheduleTourModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            renderCalendar();
            generateTimeSlots();
        });
    }

    // Close schedule tour modal
    if (closeScheduleTour) {
        closeScheduleTour.addEventListener('click', function() {
            scheduleTourModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }

    // Close on backdrop click
    scheduleTourModal?.addEventListener('click', function(e) {
        if (e.target === scheduleTourModal) {
            scheduleTourModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Calendar navigation
    prevMonthBtn?.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn?.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Render calendar
    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Update month display
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        currentMonthElement.textContent = `${monthNames[month]} ${year}`;

        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Clear calendar
        calendarDays.innerHTML = '';

        // Add empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'aspect-square';
            calendarDays.appendChild(emptyCell);
        }

        // Add day cells
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDate = new Date(year, month, day);
            dayDate.setHours(0, 0, 0, 0);
            const isPast = dayDate < today;
            const isSelected = selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            const dayCell = document.createElement('button');
            dayCell.textContent = day;
            dayCell.className = `aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                isPast
                    ? 'text-gray-300 cursor-not-allowed'
                    : isSelected
                        ? 'bg-blue-900 text-white scale-105'
                        : 'text-gray-900 hover:bg-blue-100 hover:scale-105'
            }`;

            if (!isPast) {
                dayCell.addEventListener('click', function() {
                    selectedDate = new Date(year, month, day);
                    renderCalendar();
                    updateSummary();
                    checkFormComplete();
                });
            } else {
                dayCell.disabled = true;
            }

            calendarDays.appendChild(dayCell);
        }
    }

    // Generate time slots
    function generateTimeSlots() {
        timeSlots.innerHTML = '';

        availableTimeSlots.forEach(time => {
            const slot = document.createElement('button');
            slot.textContent = time;
            slot.className = `w-full py-3 px-4 rounded-lg text-sm font-medium transition-all border-2 ${
                selectedTime === time
                    ? 'bg-blue-900 text-white border-blue-900'
                    : 'bg-white text-gray-900 border-gray-300 hover:border-blue-900 hover:bg-blue-50'
            }`;

            slot.addEventListener('click', function() {
                selectedTime = time;
                generateTimeSlots();
                updateSummary();
                checkFormComplete();
            });

            timeSlots.appendChild(slot);
        });
    }

    // Update tour summary
    function updateSummary() {
        if (selectedDate || selectedTime) {
            tourSummary.classList.remove('hidden');

            if (selectedDate) {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                document.getElementById('summaryDate').textContent = selectedDate.toLocaleDateString('en-US', options);
            } else {
                document.getElementById('summaryDate').textContent = 'No date selected';
            }

            if (selectedTime) {
                document.getElementById('summaryTime').textContent = selectedTime;
            } else {
                document.getElementById('summaryTime').textContent = 'No time selected';
            }
        }
    }

    // Update tour type in summary
    document.querySelectorAll('input[name="tourType"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const tourType = this.value === 'in-person' ? 'In-Person Tour' : 'Virtual Video Tour';
            document.getElementById('summaryType').textContent = tourType;
        });
    });

    // Check if form is complete
    function checkFormComplete() {
        const name = document.getElementById('tourName').value.trim();
        const email = document.getElementById('tourEmail').value.trim();
        const phone = document.getElementById('tourPhone').value.trim();

        if (selectedDate && selectedTime && name && email && phone) {
            confirmTourBtn.disabled = false;
        } else {
            confirmTourBtn.disabled = true;
        }
    }

    // Add input listeners for form validation
    ['tourName', 'tourEmail', 'tourPhone'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', checkFormComplete);
        }
    });

    // Confirm tour button
    if (confirmTourBtn) {
        confirmTourBtn.addEventListener('click', function() {
            const name = document.getElementById('tourName').value.trim();
            const email = document.getElementById('tourEmail').value.trim();
            const phone = document.getElementById('tourPhone').value.trim();
            const guests = document.getElementById('tourGuests').value;
            const notes = document.getElementById('tourNotes').value.trim();
            const tourType = document.querySelector('input[name="tourType"]:checked').value;

            // Show success message
            alert(`Tour scheduled successfully!\n\nDate: ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\nTime: ${selectedTime}\nType: ${tourType === 'in-person' ? 'In-Person' : 'Virtual'}\nGuests: ${guests}\n\nA confirmation email will be sent to ${email}`);

            // Reset form and close modal
            scheduleTourModal.classList.add('hidden');
            document.body.style.overflow = 'auto';

            // Reset selections
            selectedDate = null;
            selectedTime = null;
            document.getElementById('tourName').value = '';
            document.getElementById('tourEmail').value = '';
            document.getElementById('tourPhone').value = '';
            document.getElementById('tourNotes').value = '';
            tourSummary.classList.add('hidden');
        });
    }

    // Market Statistics Charts
    if (typeof Chart !== 'undefined') {
        // Price Trend Chart
        const priceChartCanvas = document.getElementById('priceChart');
        if (priceChartCanvas) {
            const priceCtx = priceChartCanvas.getContext('2d');
            const priceChart = new Chart(priceCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    datasets: [{
                        label: 'Average Price',
                        data: [723000, 735000, 748000, 762000, 775000, 789000, 802000, 816000, 831000, 847000],
                        borderColor: '#1e3a8a',
                        backgroundColor: 'rgba(30, 58, 138, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 4,
                        pointBackgroundColor: '#1e3a8a',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            titleFont: { size: 14, weight: 'bold' },
                            bodyFont: { size: 13 },
                            callbacks: {
                                label: function(context) {
                                    return '$' + context.parsed.y.toLocaleString();
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: {
                                callback: function(value) {
                                    return '$' + (value / 1000) + 'K';
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            // Update chart when period changes
            const priceChartPeriod = document.getElementById('priceChartPeriod');
            if (priceChartPeriod) {
                priceChartPeriod.addEventListener('change', function() {
                    const period = this.value;
                    let newLabels, newData;

                    if (period === '6m') {
                        newLabels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
                        newData = [775000, 789000, 802000, 816000, 831000, 847000];
                    } else if (period === '1y') {
                        newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
                        newData = [723000, 735000, 748000, 762000, 775000, 789000, 802000, 816000, 831000, 847000];
                    } else { // 2y
                        newLabels = ['Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24', 'Q4 24', 'Q1 25', 'Q2 25', 'Q3 25'];
                        newData = [650000, 665000, 680000, 695000, 710000, 725000, 740000, 755000, 770000, 810000, 847000];
                    }

                    priceChart.data.labels = newLabels;
                    priceChart.data.datasets[0].data = newData;
                    priceChart.update();
                });
            }
        }

        // Volume Chart
        const volumeChartCanvas = document.getElementById('volumeChart');
        if (volumeChartCanvas) {
            const volumeCtx = volumeChartCanvas.getContext('2d');
            const volumeChart = new Chart(volumeCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    datasets: [{
                        label: 'Sales',
                        data: [720, 695, 740, 710, 785, 810, 795, 825, 850, 834],
                        backgroundColor: '#1e3a8a',
                        borderRadius: 6,
                        borderSkipped: false
                    }, {
                        label: 'Listings',
                        data: [1180, 1150, 1210, 1175, 1240, 1280, 1220, 1265, 1295, 1247],
                        backgroundColor: '#f59e0b',
                        borderRadius: 6,
                        borderSkipped: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            titleFont: { size: 14, weight: 'bold' },
                            bodyFont: { size: 13 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }

        // Property Types Pie Chart
        const propertyTypesCanvas = document.getElementById('propertyTypesChart');
        if (propertyTypesCanvas) {
            const propertyTypesCtx = propertyTypesCanvas.getContext('2d');
            const propertyTypesChart = new Chart(propertyTypesCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Single Family', 'Condos', 'Townhouses', 'Villas'],
                    datasets: [{
                        data: [42, 28, 18, 12],
                        backgroundColor: [
                            '#1e3a8a',
                            '#f59e0b',
                            '#10b981',
                            '#8b5cf6'
                        ],
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                font: {
                                    size: 12
                                },
                                generateLabels: function(chart) {
                                    const data = chart.data;
                                    return data.labels.map((label, i) => {
                                        const value = data.datasets[0].data[i];
                                        return {
                                            text: `${label} (${value}%)`,
                                            fillStyle: data.datasets[0].backgroundColor[i],
                                            hidden: false,
                                            index: i
                                        };
                                    });
                                }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            titleFont: { size: 14, weight: 'bold' },
                            bodyFont: { size: 13 },
                            callbacks: {
                                label: function(context) {
                                    return context.label + ': ' + context.parsed + '%';
                                }
                            }
                        }
                    }
                }
            });
        }
    }

}); // End DOMContentLoaded
