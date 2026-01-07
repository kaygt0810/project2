# 🐱 Paws and Preferences - Cat Mixer

A fun, interactive React web application that lets you swipe through adorable cat photos in a Tinder-like experience. Swipe right to like cats you love, and left to pass. At the end, see which cats won your heart!

## 🌟 Features

- **Interactive Card Swiping**: Swipe cards left or right with smooth animations
- **Tinder-Style UI**: Familiar swipe interface that's intuitive and fun
- **Cat Gallery**: Browse 15 random cat images from the Cataas API
- **Like Tracking**: Keep track of all the cats you liked
- **Results Screen**: View all your liked cats in a gallery at the end
- **Button Controls**: Like and Pass buttons for those who prefer clicking over swiping
- **Progress Counter**: See how many cats you've reviewed
- **Fallback Images**: Graceful handling of failed image loads
- **Responsive Design**: Works great on different screen sizes with a vibrant gradient background

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd paws-and-preferences-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## 📦 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the application for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🛠️ Tech Stack

- **React 18.2** - UI library for building interactive components
- **Vite 7.2** - Lightning-fast build tool and dev server
- **React Tinder Card 1.6** - Card swiping mechanics and animations
- **React Spring 9.7** - Smooth animation library
- **CSS3** - Custom styling with gradients and flexbox
- **Cataas API** - Source for adorable random cat images

## 📋 How It Works

### Main Components

**App.jsx** - The core application component with the following features:

1. **State Management**
   - `currentIndex`: Tracks which card is currently being viewed
   - `likedCats`: Array storing all cats you've liked
   - `showResults`: Boolean to toggle between card view and results view

2. **Key Functions**
   - `swiped()`: Triggered when a card is swiped, saves liked cats
   - `outOfFrame()`: Detects when all cards are swiped, shows results
   - `swipe()`: Programmatic card swiping via button clicks
   - `restart()`: Resets the game to start over

3. **Card Display**
   - 15 cat cards generated from the Cataas API
   - Each card shows a random cat image with an ID number
   - Smooth swipe animations with TinderCard component

4. **Results Screen**
   - Displays total count of liked vs. total cats
   - Grid gallery showing all liked cat images
   - Restart button to play again


## 📱 User Experience

### Swiping
- **Swipe Right** 💫 - Like the cat (saved to your collection)
- **Swipe Left** ❌ - Pass on the cat (not saved)
- **Swipe Up/Down** - Disabled for focused swiping

### Controls
- **Like Button** (⭐) - Programmatically like the current cat
- **Nope Button** (❌) - Programmatically pass on the current cat
- **Progress Counter** - Shows current position (e.g., 5/15)
- **Restart Button** - Start over and view your collection again


## 🌐 API Integration

The app uses the **Cataas API** (Cat as a Service):
- Free, no authentication required
- Returns random cat images
- Images are generated dynamically on each request

## 📝 Project Structure

```
paws-and-preferences-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # React DOM entry point
│   └── assets/          # Static assets folder
├── public/              # Static files
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```


## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 💬 Questions or Feedback?

Enjoy swiping through adorable cats! If you encounter any issues or have suggestions, feel free to open an issue or reach out.

---

**Made with ❤️ for cat lovers everywhere** 🐾
