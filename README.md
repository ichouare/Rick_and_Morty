# React + Vite

Rick & Morty Character Explorer
This project is a web application that allows users to explore characters from the Rick & Morty series. Built with Vite, React, React Router, ShadCN UI, and Tailwind CSS, it provides a responsive UI with filtering, searching, and pagination features.
Features
Home Page:

Displays all characters with options to search by name and filter by status, species, and gender.
Includes pagination to navigate through the character list.
Character Details Page:

Shows detailed information about each character when clicked.
Error Page:

Handles any invalid routes or errors gracefully with a custom error page.
Responsive Design:

Optimized for mobile screens (320px), tablet screens (768px), and desktop screens.
Tech Stack
Vite: Fast build tool and development server.
React: For building the user interface.
React Router: To handle navigation between different pages.
ShadCN UI: For reusable UI components.
Tailwind CSS: For utility-first responsive styling.
Pages

1. Home Page
Displays all Rick & Morty characters. Users can:

Search by Name: A search bar allows users to filter characters by their names.
Filter:
Status: (Alive, Dead, Unknown)
Species: (Human, Alien,)
Gender: (Male, Female, Unknown)
Pagination: Users can navigate through pages to explore more characters.

2. Character Details Page
Displays detailed information about a selected character, including:

Name
Status
Species
Gender

3. Error Page
Displays a custom error message for any undefined routes or issues with API requests.

Installation
Clone the repository:

git clone https://github.com/ichouare/Rick_and_Morty.git
Navigate into the project directory:


cd Rick_and_Morty 

Install dependencies:
npm install

Start the development server:
npm run dev

Open the application in your browser:
http://localhost:5173

Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run serve: Serves the production build.
Responsive Design
320px: Mobile layout.
768px: Tablet layout.
Desktop: Optimized for larger screens.
API
This app fetches character data from the Rick and Morty  "https://rickandmortyapi.com/api/character/".

Folder Structure
bash
Copy code
src/
│
├── components/       # Reusable UI components
|   ├── components    # cotumized components
|   ├── pages/        # Page components (Home, Character Details, Error)
|   ├── ui/           # shadcn ui components
└── App.jsx           # Main app component
