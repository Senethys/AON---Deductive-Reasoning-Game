# Deductive Reasoning Game

A browser-based puzzle game where players decode shape transformation patterns using deductive reasoning skills.

## How to Play

1. Look at the input shapes (top row)
2. Look at the output shapes (bottom row)
3. Choose the code that transforms the input shapes into the output shapes
4. Click Submit or press Enter to check your answer

### Understanding Codes

Each code is a 4-digit number (like "2143") that shows how shapes are rearranged:
- First digit tells which input shape becomes the first output shape
- Second digit tells which input shape becomes the second output shape
- And so on...

Example: Code "2143" means:
- First output = shape from position 2
- Second output = shape from position 1
- Third output = shape from position 4
- Fourth output = shape from position 3

## Setup

1. Clone this repository
2. Open `index.html` in your browser
3. Start playing!

## Files

- `index.html` - Game structure
- `styles.css` - Game styling
- `game.js` - Game logic
- `shapes.js` - Shape configurations

## Features

- Dynamic shape sequences
- Multiple-choice codes
- Keyboard support (Enter key)
- Immediate feedback
- Responsive design

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

[MIT License](LICENSE)
