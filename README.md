# CARDIFY — Digital Business Card Generator

Create your professional identity with Cardify!

Cardify is a React-based web application that allows users to create personalised digital business cards by entering their professional details. Users can preview both sides of their card and download it in PNG or PDF format.

## Features

- **Create Business Cards:** Enter personal and professional information through a simple form.
- **Live Card Generation:** Display entered information dynamically on the business card.
- **Front & Back Preview:** Preview both sides of the generated business card.
- **PNG Download:** Export the business card as a PNG image.
- **PDF Download:** Download the front and back sides in a PDF document.
- **Dark Mode:** Switch between light and dark themes.
- **Responsive Design:** Interface adapts to different screen sizes.
- **Reusable Components:** Modular React components for organised and maintainable code.

## Screenshots
<img width="1470" height="799" alt="image" src="https://github.com/user-attachments/assets/3e30c6a9-054d-4122-b43f-6e92ce22f79c" />
<img width="1470" height="802" alt="image" src="https://github.com/user-attachments/assets/3bc6b08f-4e4f-429f-813f-03d0ed4791ac" />
<img width="1470" height="803" alt="image" src="https://github.com/user-attachments/assets/86ee6d67-2766-4ab5-9795-12c2ad5169f4" />
<img width="1470" height="800" alt="image" src="https://github.com/user-attachments/assets/9bafd6b4-c3bd-410a-b780-23d9d8796923" />
<img width="1470" height="800" alt="image" src="https://github.com/user-attachments/assets/0d16c8e4-b101-4cb8-8f64-ed17765e4bca" />
<img width="1470" height="800" alt="image" src="https://github.com/user-attachments/assets/439c1031-2843-43ff-a886-d9695c752cee" />

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript | Application logic |
| Vite | Development server and build tool |
| React Router DOM | Navigation between pages |
| CSS3 | Styling and responsive design |
| Lucide React | Icons |
| html-to-image | Converting HTML elements into PNG images |
| jsPDF | Generating PDF documents |

## Project Structure

```text
Cardify/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Steps.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Hero.jsx
│   │   ├── FormField.jsx
│   │   ├── CreateCardForm.jsx
│   │   ├── BusinessCard.jsx
│   │   ├── DownloadOptions.jsx
│   │   ├── HomeHero.jsx
│   │   ├── CardShowcase.jsx
│   │   └── HomeCTA.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CreatePage.jsx
│   │   └── DownloadPage.jsx
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

Follow these steps to run Cardify locally.

### 1. Clone the repository

```bash
git clone https://github.com/tanvisharma252031/Cardify.git
```

### 2. Navigate to the project directory

```bash
cd Cardify
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint checks |

## Application Workflow

1. **Home:** Explore Cardify and start creating a business card.
2. **Create Card:** Enter your personal and professional details.
3. **Preview & Download:** Preview the front and back of your card.
4. **Export:** Download your business card in PNG or PDF format.

## Current Limitations

- Form information is maintained in React state and is not permanently stored.
- The application does not currently use a backend or database.
- Users need to enter their details again after a full page refresh.

## Future Improvements

- Multiple business card templates.
- Custom colours and typography.
- Save and manage previously created cards.
- User authentication.
- Backend and database integration.

## Author

**Tanvi Sharma**


