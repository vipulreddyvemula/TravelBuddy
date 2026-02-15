# Travel Buddy – Campus Commute App

Travel Buddy is a web app built for the IIIT Kottayam community to make daily commuting and long-distance travel easier, safer, and more organized. It lets students share rides, coordinate train journeys, post errands, and discover how to reach campus using curated local routes and locations. 


Link :- https://travel-buddy-76b26.firebaseapp.com/ 

---

## Features

### 🔐 Secure IIIT-only Login

- Sign in with **Google** using your `@iiitkottayam.ac.in` email; other domains are blocked for safety. 
- Once logged in, your **Google display name** automatically fills all name fields and is read‑only, preventing impersonation. 

---

### 🚗 Ride Sharing (Rides Tab)

- Post a ride with:
  - Verified name, phone number, **from / to** locations, departure date & time, seat count (1–5), and optional notes (vehicle type, cost split, etc.).
  - Strong validation: future‑only departure times and proper 10‑digit Indian mobile numbers (starting with 7/8/9). 
- View rides in a responsive **card-based grid** showing route, date, time, seats, and notes. 
- Delete your own rides directly from the list. 
- Contact the poster via **WhatsApp** with one click; the app cleans the number and adds `+91` if needed. 

---

### 🧭 Smart Ride Search & Filters

- Dedicated **“Find Nearby Rides”** search at the top of the Rides tab. 
- Enter:
  - From location
  - To location
  - Date
- The app:
  - Resolves locations using a curated IIIT Kottayam–centric database (IIIT, Valavoor, Pala, Ernakulam, Kottayam, etc.). 
  - Uses **Haversine distance** to find rides where pickup and drop are within 10 km of your chosen points. 
  - Hides rides whose departure time has already passed. 
- Results show:
  - Route, date, time, seats, and **pickup/drop-off distance** badges in km so you know how close the match is. 
- Additional **inline filters** let you search by place or seat count, and sort by time or seats (ascending/descending). 

---

### 🚉 Train Co‑Travel (Trains Tab)

- Post your train journey with:
  - Verified name and phone
  - Train number/name (with **autocomplete** over a large curated train list)
  - From / to station
  - Departure date & time
  - Optional coach number and notes. 
- Phone and future‑time validation similar to rides. 
- Browse upcoming train journeys in a card layout showing route, date, time, coach, and contact details. 
- Search co‑travelers:
  - Text search by train number or train name. 
  - Extra filters: station search + sort by time or name. 
- One-click **WhatsApp connect** with the traveler. 

---

### 🧺 Errand Requests (Errands Tab)

- Post an errand request with:
  - Verified name and phone
  - Item needed (e.g., groceries, stationery)
  - Optional budget
  - Detailed description and urgency. 
- Errands list shows item, budget badge, timestamp and contact details in cards. 
- Search and sort:
  - Live search by item name.
  - Sort by time or requester name (ascending/descending). 
- Connect to the requester via WhatsApp and, if you are the owner, delete your own errand. 

---

### 📍 Location Autocomplete & Campus-aware Search

- All **From / To** inputs (rides, trains, search) have smart **autocomplete** powered by a curated database of:
  - IIIT Kottayam campus
  - Hostels and apartments near campus
  - Nearby towns, panchayats, railway stations, bus stands
  - Major Kerala districts and key transit hubs. 
- Flexible matching:
  - Matches official names and multiple aliases (e.g., “IIITK”, “Valavoor”, “Pala town”). 
  - Uses a custom resolver to tolerate partial or fuzzy inputs. 

---

### 🧭 Newcomer Guide (Guide Tab)

- Static **“Welcome to IIIT Kottayam”** guide explaining:
  - How to reach campus from Kottayam railway station, bus stand, Cochin airport, etc., with typical time and cost ranges. 
  - Practical commute tips for bus, auto, night travel, and budget. 
- Embedded **Google Map** centered on IIIT Kottayam with a clean, minimal style for quick orientation. 

---

### 🙋 My Profile (Profile Tab)

- Simple profile form linked to your Google account:
  - Name (read‑only, from Google)
  - Phone (validated Indian mobile)
  - Hostel / residence info
  - Short bio about yourself and your commute habits. 
- Saved profile is shown in a card so others can quickly know who you are. 

---

### 💬 Custom App Alerts & Confirmations

- Unified **in-app alert** component for all success and error messages. 
- Custom confirm dialog used for destructive actions like deleting rides, trains, or errands. 
- Ensures a consistent, friendly UX across the app. 

---

### 🎨 UI & UX

- Clean, responsive layout using:
  - Tabbed navigation (Rides, Trains, Errands, Guide, Profile). 
  - Card-based lists with avatars, badges, and clear typography. 
- Color system and spacing defined via CSS custom properties for easy theming. 
- Mobile-friendly grid and form layouts with media queries. 

---

## Tech Stack

- **Frontend**: HTML, CSS, vanilla JavaScript (no framework).
- **Backend**: Firebase v8
  - Authentication (Google Sign‑In, domain restricted). 
  - Firestore for rides, errands, trains, and profile storage. 
- **Maps**: Google Maps JavaScript API for the campus “Buddy Map”. 

---

## Getting Started (Dev Setup)

1. Clone the repository and open `index.html` in a browser.
2. Configure your own Firebase project and replace the `firebaseConfig` object in `index.html`.
3. Add a valid Google Maps API key in the script URL for the map. 
4. Serve via a simple static server (e.g., `live-server`, VS Code Live Server) for best results.

---

## Roadmap Ideas

- Ratings/feedback for ride partners and co‑travelers.
- Notification system for new rides matching your usual route.
- Support for additional campuses and cities.

Happy commuting! 
