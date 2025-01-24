# Portfolio Website

This is a responsive portfolio website built using **React** and **Vite**, designed to showcase personal projects, skills, and contact information. The project adheres to clean, production-level code following the SOLID principles.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Fully responsive design for all screen sizes.
- Modular, reusable React components.
- Clean file structure for easy scalability.
- Optimized for fast loading with Vite.
- Integrated with Tailwind CSS for styling.
- SOLID principles for maintainable and scalable code.

---

## Technologies Used

- **Frontend Framework**: React (with Vite for development and build optimization)
- **Styling**: Tailwind CSS and CSS Modules
- **Linting**: ESLint for code quality

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14+ recommended): [Download Here](https://nodejs.org/)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   Or, if using Yarn:
   ```bash
   yarn install
   ```

### Running the Project

To start the development server:

```bash
npm run dev
```

Or, if using Yarn:

```bash
yarn dev
```

The project will run at [http://localhost:5173](http://localhost:5173).

To build the project for production:

```bash
npm run build
```

---

## Project Structure

```
portfolio-website/
├── node_modules/          # Installed dependencies
├── public/                # Static assets like favicon
├── src/                   # Source code
│   ├── assets/            # Images, fonts, icons, etc.
│   │   ├── fonts/         # Fonts folder
│   │   ├── icons/         # Icons folder
│   │   └── images/        # Images folder
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx     # Header component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── About.jsx      # About section component
│   │   ├── Projects.jsx   # Projects section component
│   │   └── Contact.jsx    # Contact section component
│   ├── data/              # Data files for modularity
│   │   ├── details.json   # Personal Details for portfolio
│   │   └── projects.json  # Project descriptions
│   ├── pages/             # Page-level components
│   │   ├── Home.jsx       # Main landing page
│   │   └── NotFound.jsx   # 404 error page
│   ├── styles/            # Global and component-specific styles
│   │   ├── global.css     # Global CSS styles
│   │   ├── utilities.css  # Utilities CSS styles
│   │   └── variables.css  # CSS variables for themes or constants
│   ├── utils/             # Utility functions or helpers
│   │   └── firebase.js    # Firebase config file
│   ├── App.jsx            # Main App component
│   ├── index.css          # Default styles
│   └── main.jsx           # Entry point
├── .env                   # Environment Variables
├── .env.temp              # Dummy Environment Variables
├── .gitignore             # Git ignored files
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package-lock.json      # Project dependencies plus detailed meta deta
├── package.json           # Project dependencies
├── README.md              # Readme File
└── vite.config.js         # Vite configuration
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
