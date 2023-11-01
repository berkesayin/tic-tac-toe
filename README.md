### Tic Tac Toe Game Developed Using React

#### NPM Package

- https://www.npmjs.com/package/tic-tac-toe-brk

#### Usage

- Create a React application.
- Install package:

```bash
npm i tic-tac-toe-brk
```

- Check the version at your package.json file.
- Import CSS at src/main.js:

```js
import "tic-tac-toe-brk/dist/css/styles.css";
```

- Import Components:

```js
import { Board, Square } from "tic-tac-toe-brk";
```

- Use Components:

```js
function App() {
  return (
    <>
      <Board name="Berke vs Other User" game="Tic Tac Toe Game" />
    </>
  );
}
export default App;
```
