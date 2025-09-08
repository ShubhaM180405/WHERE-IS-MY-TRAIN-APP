// Comprehensive Indian Railway train database - simulating real IRCTC data
const trainData = {
    // Rajdhani Express Trains (Premium trains)
    '12301': {
        name: 'Howrah Rajdhani Express',
        route: 'Howrah → New Delhi',
        status: 'Running',
        currentStation: 'Kanpur Central',
        delay: 'On time',
        schedule: [
            { station: 'Howrah Jn', arrival: '', departure: '16:55', platform: 'Platform 9', status: 'Departed' },
            { station: 'Dhanbad Jn', arrival: '19:35', departure: '19:40', platform: 'Platform 1', status: 'Departed' },
            { station: 'Kanpur Central', arrival: '01:35', departure: '01:40', platform: 'Platform 3', status: 'Current' },
            { station: 'New Delhi', arrival: '09:55', departure: '', platform: 'Platform 14', status: 'Expected' }
        ]
    },
    '12302': {
        name: 'New Delhi Howrah Rajdhani',
        route: 'New Delhi → Howrah',
        status: 'Running',
        currentStation: 'Dhanbad Junction',
        delay: '5 min late',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '16:55', platform: 'Platform 14', status: 'Departed' },
            { station: 'Kanpur Central', arrival: '00:25', departure: '00:30', platform: 'Platform 1', status: 'Departed' },
            { station: 'Dhanbad Jn', arrival: '06:35', departure: '06:40', platform: 'Platform 2', status: 'Current' },
            { station: 'Howrah Jn', arrival: '09:55', departure: '', platform: 'Platform 9', status: 'Expected' }
        ]
    },
    '12951': {
        name: 'Mumbai Rajdhani Express',
        route: 'Mumbai Central → New Delhi',
        status: 'Running',
        currentStation: 'Kota Junction',
        delay: '15 min late',
        schedule: [
            { station: 'Mumbai Central', arrival: '', departure: '16:00', platform: 'Platform 1', status: 'Departed' },
            { station: 'Vadodara Jn', arrival: '19:42', departure: '19:47', platform: 'Platform 4', status: 'Departed' },
            { station: 'Kota Jn', arrival: '01:30', departure: '01:35', platform: 'Platform 2', status: 'Current' },
            { station: 'New Delhi', arrival: '09:35', departure: '', platform: 'Platform 12', status: 'Expected' }
        ]
    },
    '12952': {
        name: 'New Delhi Mumbai Rajdhani',
        route: 'New Delhi → Mumbai Central',
        status: 'Running',
        currentStation: 'Ratlam Junction',
        delay: 'On time',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '16:30', platform: 'Platform 12', status: 'Departed' },
            { station: 'Kota Jn', arrival: '00:05', departure: '00:10', platform: 'Platform 1', status: 'Departed' },
            { station: 'Ratlam Jn', arrival: '03:25', departure: '03:30', platform: 'Platform 3', status: 'Current' },
            { station: 'Mumbai Central', arrival: '08:35', departure: '', platform: 'Platform 1', status: 'Expected' }
        ]
    },
    '12309': {
        name: 'Patna Rajdhani Express',
        route: 'New Delhi → Patna',
        status: 'Running',
        currentStation: 'Mughalsarai Junction',
        delay: '20 min late',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '17:05', platform: 'Platform 16', status: 'Departed' },
            { station: 'Kanpur Central', arrival: '22:10', departure: '22:15', platform: 'Platform 2', status: 'Departed' },
            { station: 'Mughalsarai Jn', arrival: '02:35', departure: '02:45', platform: 'Platform 1', status: 'Current' },
            { station: 'Patna Jn', arrival: '06:30', departure: '', platform: 'Platform 8', status: 'Expected' }
        ]
    },
    
    // Shatabdi Express Trains (Day trains)
    '12001': {
        name: 'Bhopal Shatabdi Express',
        route: 'Bhopal → New Delhi',
        status: 'Running',
        currentStation: 'Agra Cantonment',
        delay: 'On time',
        schedule: [
            { station: 'Bhopal Jn', arrival: '', departure: '06:00', platform: 'Platform 1', status: 'Departed' },
            { station: 'Jhansi Jn', arrival: '08:53', departure: '08:55', platform: 'Platform 2', status: 'Departed' },
            { station: 'Agra Cantt', arrival: '10:55', departure: '10:57', platform: 'Platform 3', status: 'Current' },
            { station: 'New Delhi', arrival: '13:40', departure: '', platform: 'Platform 16', status: 'Expected' }
        ]
    },
    '12002': {
        name: 'New Delhi Shatabdi Express',
        route: 'New Delhi → Bhopal',
        status: 'Running',
        currentStation: 'Gwalior Junction',
        delay: '10 min late',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '06:00', platform: 'Platform 16', status: 'Departed' },
            { station: 'Agra Cantt', arrival: '08:28', departure: '08:30', platform: 'Platform 3', status: 'Departed' },
            { station: 'Gwalior Jn', arrival: '09:43', departure: '09:45', platform: 'Platform 1', status: 'Current' },
            { station: 'Jhansi Jn', arrival: '11:03', departure: '11:08', platform: 'Platform 2', status: 'Expected' },
            { station: 'Bhopal Jn', arrival: '14:55', departure: '', platform: 'Platform 1', status: 'Expected' }
        ]
    },
    '12005': {
        name: 'Kalka Shatabdi Express',
        route: 'New Delhi → Kalka',
        status: 'Running',
        currentStation: 'Ambala Cantonment',
        delay: 'On time',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '07:40', platform: 'Platform 9', status: 'Departed' },
            { station: 'Panipat Jn', arrival: '08:28', departure: '08:30', platform: 'Platform 2', status: 'Departed' },
            { station: 'Ambala Cantt', arrival: '10:05', departure: '10:10', platform: 'Platform 1', status: 'Current' },
            { station: 'Kalka', arrival: '11:30', departure: '', platform: 'Platform 1', status: 'Expected' }
        ]
    },
    
    // Duronto Express Trains (Non-stop premium)
    '12259': {
        name: 'Sealdah Duronto Express',
        route: 'New Delhi → Sealdah',
        status: 'Running',
        currentStation: 'Asansol Junction',
        delay: '25 min late',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '16:55', platform: 'Platform 11', status: 'Departed' },
            { station: 'Kanpur Central', arrival: '22:50', departure: '22:55', platform: 'Platform 4', status: 'Departed' },
            { station: 'Asansol Jn', arrival: '06:15', departure: '06:20', platform: 'Platform 2', status: 'Current' },
            { station: 'Sealdah', arrival: '09:10', departure: '', platform: 'Platform 9B', status: 'Expected' }
        ]
    },
    '12260': {
        name: 'New Delhi Duronto Express',
        route: 'Sealdah → New Delhi',
        status: 'Running',
        currentStation: 'Dhanbad Junction',
        delay: 'On time',
        schedule: [
            { station: 'Sealdah', arrival: '', departure: '16:50', platform: 'Platform 9B', status: 'Departed' },
            { station: 'Asansol Jn', arrival: '19:35', departure: '19:40', platform: 'Platform 1', status: 'Departed' },
            { station: 'Dhanbad Jn', arrival: '21:20', departure: '21:25', platform: 'Platform 3', status: 'Current' },
            { station: 'New Delhi', arrival: '08:30', departure: '', platform: 'Platform 11', status: 'Expected' }
        ]
    },
    
    // Popular Express Trains
    '12626': {
        name: 'Kerala Express',
        route: 'New Delhi → Thiruvananthapuram',
        status: 'Running',
        currentStation: 'Nagpur Junction',
        delay: '30 min late',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '11:55', platform: 'Platform 4', status: 'Departed' },
            { station: 'Bhopal Jn', arrival: '21:10', departure: '21:15', platform: 'Platform 3', status: 'Departed' },
            { station: 'Nagpur Jn', arrival: '05:15', departure: '05:25', platform: 'Platform 2', status: 'Current' },
            { station: 'Chennai Central', arrival: '19:30', departure: '20:00', platform: 'Platform 7', status: 'Expected' },
            { station: 'Thiruvananthapuram', arrival: '04:15', departure: '', platform: 'Platform 2', status: 'Expected' }
        ]
    },
    '12621': {
        name: 'Tamil Nadu Express',
        route: 'New Delhi → Chennai Central',
        status: 'Running',
        currentStation: 'Vijayawada Junction',
        delay: '10 min late',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '22:30', platform: 'Platform 15', status: 'Departed' },
            { station: 'Jhansi Jn', arrival: '02:00', departure: '02:10', platform: 'Platform 4', status: 'Departed' },
            { station: 'Nagpur Jn', arrival: '11:15', departure: '11:25', platform: 'Platform 1', status: 'Departed' },
            { station: 'Vijayawada Jn', arrival: '22:40', departure: '22:45', platform: 'Platform 3', status: 'Current' },
            { station: 'Chennai Central', arrival: '05:40', departure: '', platform: 'Platform 7', status: 'Expected' }
        ]
    },
    '12622': {
        name: 'Tamil Nadu Express',
        route: 'Chennai Central → New Delhi',
        status: 'Running',
        currentStation: 'Nagpur Junction',
        delay: 'On time',
        schedule: [
            { station: 'Chennai Central', arrival: '', departure: '22:00', platform: 'Platform 7', status: 'Departed' },
            { station: 'Vijayawada Jn', arrival: '04:50', departure: '05:00', platform: 'Platform 2', status: 'Departed' },
            { station: 'Nagpur Jn', arrival: '16:25', departure: '16:35', platform: 'Platform 4', status: 'Current' },
            { station: 'Jhansi Jn', arrival: '01:58', departure: '02:08', platform: 'Platform 3', status: 'Expected' },
            { station: 'New Delhi', arrival: '06:15', departure: '', platform: 'Platform 15', status: 'Expected' }
        ]
    },
    '12216': {
        name: 'Garibrath Express',
        route: 'New Delhi → Chennai Central',
        status: 'Running',
        currentStation: 'Bhopal Junction',
        delay: '5 min late',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '15:50', platform: 'Platform 3', status: 'Departed' },
            { station: 'Bhopal Jn', arrival: '23:40', departure: '23:45', platform: 'Platform 2', status: 'Current' },
            { station: 'Nagpur Jn', arrival: '07:15', departure: '07:25', platform: 'Platform 3', status: 'Expected' },
            { station: 'Chennai Central', arrival: '20:15', departure: '', platform: 'Platform 8', status: 'Expected' }
        ]
    },
    
    // Mumbai Routes
    '12137': {
        name: 'Punjab Mail',
        route: 'Mumbai CST → Ferozpur',
        status: 'Running',
        currentStation: 'Ajmer Junction',
        delay: '45 min late',
        schedule: [
            { station: 'Mumbai CST', arrival: '', departure: '19:05', platform: 'Platform 14', status: 'Departed' },
            { station: 'Surat', arrival: '23:28', departure: '23:33', platform: 'Platform 2', status: 'Departed' },
            { station: 'Ajmer Jn', arrival: '09:50', departure: '10:00', platform: 'Platform 1', status: 'Current' },
            { station: 'New Delhi', arrival: '16:20', departure: '16:40', platform: 'Platform 13', status: 'Expected' },
            { station: 'Ferozpur Cantt', arrival: '22:35', departure: '', platform: 'Platform 1', status: 'Expected' }
        ]
    },
    '12138': {
        name: 'Punjab Mail',
        route: 'Ferozpur → Mumbai CST',
        status: 'Running',
        currentStation: 'New Delhi',
        delay: 'On time',
        schedule: [
            { station: 'Ferozpur Cantt', arrival: '', departure: '04:45', platform: 'Platform 1', status: 'Departed' },
            { station: 'New Delhi', arrival: '10:50', departure: '11:10', platform: 'Platform 13', status: 'Current' },
            { station: 'Ajmer Jn', arrival: '17:25', departure: '17:35', platform: 'Platform 2', status: 'Expected' },
            { station: 'Surat', arrival: '07:12', departure: '07:17', platform: 'Platform 1', status: 'Expected' },
            { station: 'Mumbai CST', arrival: '11:40', departure: '', platform: 'Platform 14', status: 'Expected' }
        ]
    },
    
    // Kolkata Routes
    '12841': {
        name: 'Coromandel Express',
        route: 'Howrah → Chennai Central',
        status: 'Running',
        currentStation: 'Visakhapatnam Junction',
        delay: '15 min late',
        schedule: [
            { station: 'Howrah Jn', arrival: '', departure: '14:05', platform: 'Platform 14', status: 'Departed' },
            { station: 'Bhubaneswar', arrival: '20:00', departure: '20:05', platform: 'Platform 4', status: 'Departed' },
            { station: 'Visakhapatnam Jn', arrival: '02:15', departure: '02:30', platform: 'Platform 2', status: 'Current' },
            { station: 'Chennai Central', arrival: '11:45', departure: '', platform: 'Platform 9', status: 'Expected' }
        ]
    },
    '12842': {
        name: 'Coromandel Express',
        route: 'Chennai Central → Howrah',
        status: 'Running',
        currentStation: 'Bhubaneswar',
        delay: '20 min late',
        schedule: [
            { station: 'Chennai Central', arrival: '', departure: '08:30', platform: 'Platform 9', status: 'Departed' },
            { station: 'Visakhapatnam Jn', arrival: '17:40', departure: '17:55', platform: 'Platform 1', status: 'Departed' },
            { station: 'Bhubaneswar', arrival: '01:15', departure: '01:20', platform: 'Platform 3', status: 'Current' },
            { station: 'Howrah Jn', arrival: '07:20', departure: '', platform: 'Platform 14', status: 'Expected' }
        ]
    },
    
    // Additional Popular Trains
    '12015': {
        name: 'Ajmer Shatabdi Express',
        route: 'New Delhi → Ajmer',
        status: 'Running',
        currentStation: 'Jaipur Junction',
        delay: 'On time',
        schedule: [
            { station: 'New Delhi', arrival: '', departure: '06:05', platform: 'Platform 2', status: 'Departed' },
            { station: 'Jaipur Jn', arrival: '10:45', departure: '10:50', platform: 'Platform 3', status: 'Current' },
            { station: 'Ajmer Jn', arrival: '12:30', departure: '', platform: 'Platform 1', status: 'Expected' }
        ]
    },
    '12016': {
        name: 'Ajmer Shatabdi Express',
        route: 'Ajmer → New Delhi',
        status: 'Running',
        currentStation: 'Rewari Junction',
        delay: '8 min late',
        schedule: [
            { station: 'Ajmer Jn', arrival: '', departure: '15:45', platform: 'Platform 1', status: 'Departed' },
            { station: 'Jaipur Jn', arrival: '17:25', departure: '17:30', platform: 'Platform 2', status: 'Departed' },
            { station: 'Rewari Jn', arrival: '20:03', departure: '20:05', platform: 'Platform 1', status: 'Current' },
            { station: 'New Delhi', arrival: '21:45', departure: '', platform: 'Platform 2', status: 'Expected' }
        ]
    }
};

// Search suggestions data
const trainSuggestions = {
    // Auto-complete data based on train numbers and names
    '12002': 'New Delhi Shatabdi Express',
    '12001': 'Bhopal Shatabdi Express',
    '12301': 'Howrah Rajdhani Express',
    '12302': 'New Delhi Howrah Rajdhani',
    '12951': 'Mumbai Rajdhani Express',
    '12952': 'New Delhi Mumbai Rajdhani',
    '12309': 'Patna Rajdhani Express',
    '12005': 'Kalka Shatabdi Express',
    '12015': 'Ajmer Shatabdi Express',
    '12016': 'Ajmer Shatabdi Express',
    '12259': 'Sealdah Duronto Express',
    '12260': 'New Delhi Duronto Express',
    '12621': 'Tamil Nadu Express',
    '12622': 'Tamil Nadu Express',
    '12626': 'Kerala Express',
    '12216': 'Garibrath Express',
    '12137': 'Punjab Mail',
    '12138': 'Punjab Mail',
    '12841': 'Coromandel Express',
    '12842': 'Coromandel Express'
};

// App initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚂 Where is My Train - Enhanced Version Loaded');
    
    // Load saved theme
    loadSavedTheme();
    
    // Add enter key support for search
    document.getElementById('trainSearch').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchTrain();
        }
    });
    
    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            hideSuggestions();
        }
    });
    
    // Add floating animation to train cards
    const trainCards = document.querySelectorAll('.train-card');
    trainCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `cardFloat 3s ease-in-out infinite ${index * 0.2}s`;
        }, index * 100);
    });
});

// Search train function
function searchTrain() {
    const trainNumber = document.getElementById('trainSearch').value.trim();
    
    if (!trainNumber) {
        alert('Please enter a train number');
        return;
    }
    
    showLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
        if (trainData[trainNumber]) {
            displayTrainStatus(trainNumber);
        } else {
            showError('Train not found. Please check the train number and try again.');
        }
        showLoading(false);
    }, 1500);
}

// Select train from popular trains
function selectTrain(trainNumber) {
    document.getElementById('trainSearch').value = trainNumber;
    showLoading(true);
    
    setTimeout(() => {
        displayTrainStatus(trainNumber);
        showLoading(false);
    }, 1000);
}

// Display train status
function displayTrainStatus(trainNumber) {
    const train = trainData[trainNumber];
    const statusSection = document.getElementById('trainStatus');
    
    // Update train name and status
    document.getElementById('selectedTrainName').textContent = `${trainNumber} - ${train.name}`;
    document.getElementById('statusBadge').textContent = train.status;
    
    // Update current location
    const currentStation = document.getElementById('currentStation');
    currentStation.innerHTML = `
        <div class="station-name">${train.currentStation}</div>
        <div class="distance">${train.delay}</div>
    `;
    
    // Update schedule
    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';
    
    train.schedule.forEach(stop => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        
        let statusColor = '#4CAF50'; // Green for normal
        if (stop.status === 'Current') statusColor = '#ff6b35'; // Orange for current
        if (stop.status === 'Departed') statusColor = '#666'; // Gray for departed
        
        scheduleItem.innerHTML = `
            <div class="station-info">
                <div class="station-name">${stop.station}</div>
                <div class="platform">${stop.platform}</div>
            </div>
            <div class="timing">
                <div class="time">${stop.arrival || stop.departure}</div>
                <div class="status" style="color: ${statusColor}">${stop.status}</div>
            </div>
        `;
        
        scheduleList.appendChild(scheduleItem);
    });
    
    // Show the status section
    statusSection.style.display = 'block';
    
    // Scroll to status section
    statusSection.scrollIntoView({ behavior: 'smooth' });
}

// Show/hide loading
function showLoading(show) {
    const loading = document.getElementById('loading');
    const statusSection = document.getElementById('trainStatus');
    
    if (show) {
        loading.style.display = 'flex';
        statusSection.style.display = 'none';
    } else {
        loading.style.display = 'none';
    }
}

// Show error message
function showError(message) {
    alert(message); // Simple alert for MVP, can be enhanced with better UI
}

// Refresh data
function refreshData() {
    const trainNumber = document.getElementById('trainSearch').value.trim();
    
    if (trainNumber && trainData[trainNumber]) {
        showLoading(true);
        
        setTimeout(() => {
            displayTrainStatus(trainNumber);
            showLoading(false);
            
            // Show refresh animation
            const refreshBtn = document.querySelector('.refresh-btn');
            refreshBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                refreshBtn.style.transform = 'rotate(0deg)';
            }, 500);
        }, 1000);
    } else {
        alert('Please search for a train first');
    }
}

// Simulate real-time updates
function startRealTimeUpdates() {
    setInterval(() => {
        const trainNumber = document.getElementById('trainSearch').value.trim();
        
        if (trainNumber && trainData[trainNumber] && document.getElementById('trainStatus').style.display !== 'none') {
            // Simulate minor updates (in a real app, this would fetch from API)
            console.log('Real-time update for train:', trainNumber);
        }
    }, 30000); // Update every 30 seconds
}

// Enhanced search with suggestions
function showSuggestions() {
    const input = document.getElementById('trainSearch').value.toLowerCase().trim();
    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    if (!input) {
        hideSuggestions();
        return;
    }
    
    const matches = [];
    
    // Search by train number
    Object.keys(trainData).forEach(trainNumber => {
        if (trainNumber.includes(input)) {
            matches.push({
                number: trainNumber,
                name: trainData[trainNumber].name,
                route: trainData[trainNumber].route
            });
        }
    });
    
    // Search by train name
    Object.keys(trainData).forEach(trainNumber => {
        const trainName = trainData[trainNumber].name.toLowerCase();
        if (trainName.includes(input) && !matches.find(m => m.number === trainNumber)) {
            matches.push({
                number: trainNumber,
                name: trainData[trainNumber].name,
                route: trainData[trainNumber].route
            });
        }
    });
    
    if (matches.length > 0) {
        let suggestionsHTML = '';
        matches.slice(0, 5).forEach(match => {
            suggestionsHTML += `
                <div class="suggestion-item" onclick="selectSuggestion('${match.number}')">
                    <div>
                        <div class="suggestion-train">${match.number} - ${match.name}</div>
                        <div class="suggestion-route">${match.route}</div>
                    </div>
                </div>
            `;
        });
        suggestionsDiv.innerHTML = suggestionsHTML;
        suggestionsDiv.style.display = 'block';
    } else {
        hideSuggestions();
    }
}

function hideSuggestions() {
    document.getElementById('searchSuggestions').style.display = 'none';
}

function selectSuggestion(trainNumber) {
    document.getElementById('trainSearch').value = trainNumber;
    hideSuggestions();
    searchTrain();
}

// Theme Management System
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('trainAppTheme') || 'default';
    setTheme(savedTheme);
}

function toggleThemeSelector() {
    const themeSelector = document.getElementById('themeSelector');
    const isVisible = themeSelector.style.display === 'flex';
    
    if (isVisible) {
        themeSelector.style.display = 'none';
    } else {
        themeSelector.style.display = 'flex';
        // Add entrance animation
        themeSelector.querySelector('.theme-modal').style.animation = 'modalSlideIn 0.3s ease-out';
    }
}

function setTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('trainAppTheme', themeName);
    
    // Close theme selector
    document.getElementById('themeSelector').style.display = 'none';
    
    // Show theme change notification
    showNotification(`Theme changed to ${getThemeDisplayName(themeName)}! 🎨`);
    
    // Update theme card selection
    document.querySelectorAll('.theme-card').forEach(card => {
        card.style.borderColor = card.dataset.theme === themeName ? 'var(--primary-color)' : 'transparent';
    });
}

function getThemeDisplayName(theme) {
    const themeNames = {
        'default': 'Ocean Blue',
        'dark': 'Dark Mode',
        'indian': 'Indian Railway',
        'sunset': 'Sunset Orange',
        'forest': 'Forest Green',
        'royal': 'Royal Purple'
    };
    return themeNames[theme] || 'Ocean Blue';
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        z-index: 1001;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced train status display with animations
function displayTrainStatusEnhanced(trainNumber) {
    const train = trainData[trainNumber];
    const statusSection = document.getElementById('trainStatus');
    
    // Add loading animation first
    statusSection.style.opacity = '0';
    statusSection.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        displayTrainStatus(trainNumber);
        
        // Animate in
        statusSection.style.transition = 'all 0.5s ease-out';
        statusSection.style.opacity = '1';
        statusSection.style.transform = 'translateY(0)';
        
        // Add status badge animation
        const statusBadge = document.getElementById('statusBadge');
        statusBadge.style.animation = 'statusPulse 2s ease-in-out infinite';
        
    }, 300);
}

// Start real-time updates when app loads
startRealTimeUpdates();

// Add CSS for notification animations
const notificationStyles = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
