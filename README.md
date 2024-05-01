# Timer for Pomodoro Technique

This module provides a timer for use in Pomodoro technique apps. The Pomodoro technique is a time management method that involves breaking work into time intervals, typically 25 minutes long, separated by short breaks.

## Installation

To install the Timer module, you can execute the following command:

```bash
npm install timer-for-pomodoro
```

## Usage

Here's a basic example of how you can use the Timer class in your code:

```javascript
const Timer = require('timer-for-pomodoro');

// Create a Timer instance with desired time values
const timer = new Timer(25, 5, 4); // 25 minutes of work, 5 minutes of break, 4 rounds

// Subscribe to timer events
timer.subscribe((currentTime) => {
  console.log(currentTime);
});

// Start the timer
timer.start();
```

This example creates a Timer instance with 25 minutes of work, 5 minutes of break, and 4 rounds. Then, it starts the timer and subscribes to events to print the current timer state to the console. Additionally, methods are provided to stop, pause, and advance to the next timer state.

## API

### `new Timer(workTime, breakTime, rounds)`

Constructor for the Timer class. Creates a new Timer instance with the specified work, break, and round times.

- `workTime`: Work time in minutes.
- `breakTime`: Break time in minutes.
- `rounds`: Number of work-break rounds.

### `start()`

Starts the timer.

### `stop()`

Stops the timer.

### `pause()`

Pauses the timer in its current state.

### `next()`

Advances to the next timer state (work or break).

### `subscribe(listener)`

Allows subscribing to timer events. The `listener` argument is a function that will be called each time the timer state changes, passing the current timer state as an argument. Returns the current timer state as an object.

## Contribution

Contributions are welcome. If you encounter any issues or have any improvements, feel free to open an issue or submit a pull request on [GitHub](https://github.com/New-Mango-Studio/timer-for-pomodoro).

## License

This module is under the MIT License. See the [LICENSE](LICENSE) file for more details.