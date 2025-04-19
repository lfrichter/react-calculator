# 🧮 React Calculator Project

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![npm](https://img.shields.io/badge/npm-8.x-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 📝 Overview

This project is a fully functional calculator built with React. It demonstrates fundamental React concepts including component composition, state management, and event handling.

![Calculator](https://i.imgur.com/8QXhHw4.png)


## ✨ Features

- ➕ Basic arithmetic operations (addition, subtraction, multiplication, division)
- 🔄 Clear and reset functionality
- 🧠 Memory of previous calculations
- 📱 Responsive design for all device sizes
- 🎨 Modern and intuitive user interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/calculator-react.git
```

2. Navigate to the project directory:

```bash
cd calculator-react
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
calculator-react/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Calculator.js
│   │   ├── Button.js
│   │   └── Display.js
│   ├── utils/
│   │   └── randomNumbers.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 🧩 Components

### Calculator

The main component that manages the calculator's state and logic. It renders the display and buttons, and handles all calculations.

### Display

Renders the current input and calculation results with proper formatting.

### Button

Reusable button component with different styles for numbers, operations, and special functions.

## 🛠️ Technical Implementation

- **State Management**: Uses React's useState hook to manage calculator state
- **Event Handling**: Implements click handlers for all calculator operations
- **Calculation Logic**: Performs calculations in real-time as users input values
- **Unique Random Numbers**: Includes utility function for generating unique random numbers when needed

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

Tests cover:
- Component rendering
- Calculator operations
- Edge cases and error handling

## 📱 Responsive Design

The calculator is fully responsive and works on:
- 💻 Desktop computers
- 📱 Mobile phones
- 📟 Tablets

## 🔮 Future Enhancements

- [ ] Scientific calculator mode
- [ ] History of calculations
- [ ] Themes and customization
- [ ] Keyboard support

## 📚 Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To learn more about React, check out the [React documentation](https://reactjs.org/).

For more advanced topics:
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Luis Fernando Richter - [GitHub Profile](https://github.com/lfrichter)

---

⭐️ If you found this project helpful, please consider giving it a star! ⭐️
