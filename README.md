![Screenshot (76)](https://github.com/user-attachments/assets/269b815c-314a-4fb4-8252-005fc543d5a8)
![Screenshot (77)](https://github.com/user-attachments/assets/70567695-fda4-4ab3-8b06-f8008e5310fa)
![Screenshot (78)](https://github.com/user-attachments/assets/18ce6bbb-dcf1-49d5-a1c1-67cd33e43c11)
![Screenshot (79)](https://github.com/user-attachments/assets/c5a180c5-d2ae-4bf3-9103-9b2473ffd538)
![Screenshot (80)](https://github.com/user-attachments/assets/9fa9a479-ab2f-499f-910b-fded38b8adf1)
![Screenshot (81)](https://github.com/user-attachments/assets/54166454-28c7-4458-b555-194410ed5967)
![Screenshot (82)](https://github.com/user-attachments/assets/40aa5186-427d-4f03-9801-81f35f6a73c9)

# React Dice Game

This project is a simple dice game built using React and Vite. In this game, players can guess a number between 1 and 6. If the guessed number matches the number rolled on the dice when clicked, the player earns a score equal to the number guessed. If the guess is incorrect, the player's score is deducted by 2 points.

## How to Play

1. **Guess a Number:** Choose a number between 1 and 6.
   
2. **Roll the Dice:** Click on the dice to roll it.

3. **Score Calculation:**
   - If the number on the dice matches your guess, you earn points equal to the guessed number.
   - If the number on the dice does not match your guess, 2 points are deducted from your score.

4. **Repeat:** Continue playing by guessing a new number and clicking on the dice to roll it.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Fast build tool that focuses on speed and performance.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-dice-game
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the game.

## Game Structure

The game is structured as follows:

- **App Component:** Main component that manages the game state and logic.
- **Dice Component:** Renders the dice and handles the dice roll event.
- **Score Component:** Displays and updates the player's score based on game outcomes.

## Folder Structure

```
react-dice-game/
├── public/                  # Static assets
├── src/                     # Source files
│   ├── components/          # React components
│   ├── App.js               # Main component
│   ├── index.js             # Entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Project README file
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Built with React and Vite.
.
