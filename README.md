# 🚂 Where is My Train - MVP

<div align="center">
  <img src="https://img.shields.io/badge/Platform-Web-blue" alt="Platform">
  <img src="https://img.shields.io/badge/Framework-Vanilla%20JS-yellow" alt="Framework">
  <img src="https://img.shields.io/badge/UI-CSS3-blueviolet" alt="UI">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</div>

<br>

A **modern, responsive web application** for tracking Indian trains in real-time. Inspired by popular apps like RailYatri and "Where is my Train", this MVP offers a beautiful, theme-customizable interface with comprehensive train data.

## 🚀 Live Demo

**[Try the App Live!](https://shubham180405.github.io/WHERE-IS-MY-TRAIN-APP/)**

## 📱 Screenshots

| Default Theme | Dark Theme | Indian Railway Theme |
|--------------|------------|---------------------|
| ![Default](https://via.placeholder.com/300x200?text=Ocean+Blue+Theme) | ![Dark](https://via.placeholder.com/300x200?text=Dark+Mode) | ![Indian](https://via.placeholder.com/300x200?text=Indian+Railway) |

*Screenshots will be added after GitHub upload*

## ✨ Features

### 🎨 Multiple Themes
- **6 Beautiful Themes**: Ocean Blue, Dark Mode, Indian Railway, Sunset Orange, Forest Green, Royal Purple
- **Theme Memory**: Remembers your preferred theme
- **Smooth Transitions**: Seamless theme switching

### Core Functionality

### Core Functionality
- **Train Search**: Search trains by number (12002, 12301, 12951)
- **Live Status**: View current location and delay information
- **Schedule Display**: See complete journey schedule with timings
- **Real-time Updates**: Simulated live tracking updates
- **Popular Trains**: Quick access to commonly searched trains

### UI Components
- **Modern Design**: Clean, mobile-first interface
- **Indian Railway Theme**: Colors and styling similar to popular Indian train apps
- **Responsive Layout**: Works on desktop and mobile devices
- **Loading Animations**: Train-themed loading indicators
- **Interactive Elements**: Hover effects and smooth transitions

## How to Run the Application

### Method 1: Direct File Opening
1. Download or clone the repository to your local machine.
2. Double-click on `index.html` to open it in your default web browser
3. The app will load and you can start using it immediately

### Method 2: Using a Local Web Server (Recommended)
Since the app uses external CDN resources, running it through a local server provides better performance:

```powershell
# If you have Python installed
cd "WHERE-IS-MY-TRAIN-APP"
python -m http.server 8000
# Then open http://localhost:8000 in your browser

# If you have Node.js installed
npx serve .
# Follow the URL provided in the terminal

# Using PowerShell (Windows 10+)
cd "WHERE-IS-MY-TRAIN-APP"
Start-Process "index.html"
