# Assessment Practice Platform

An interactive web platform for practicing various types of assessment tests commonly used in recruitment processes. Currently featuring a deductive reasoning challenge with more test types coming soon. 

This are tests based on AON Assessments https://assessment.aon.com/en-us/prepare-your-assessment

## Available Tests

### Active Tests
- **Deductive Reasoning (switchChallenge)** - Practice identifying patterns and drawing logical conclusions from given information.

### Coming Soon
- **Numerical Reasoning** - Practice analyzing and interpreting numerical data in business contexts.
- **Verbal Reasoning** - Practice evaluating written statements and arguments.
- **Understanding of Basic Instructions (verbal instruct)** - Practice following and interpreting written instructions accurately.
- **Inductive Reasoning (ix)** - Practice identifying patterns and making predictions based on given information.
- **Deductive Reasoning (gapChallenge)** - Practice identifying missing elements in logical sequences.
- **Numeracy (digitChallenge)** - Practice basic numerical operations and digit-based problem solving.

## Deductive Reasoning Game Instructions

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
3. Start practicing!

## Files

- `index.html` - Main landing page with test selection
- `deductive.html` - Deductive reasoning game
- `styles.css` - Styling for all pages
- `game.js` - Game logic for deductive reasoning test
- `shapes.js` - Shape configurations

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

Feel free to submit issues and enhancement requests!

## License

[MIT License](LICENSE)
