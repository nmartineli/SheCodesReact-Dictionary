import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="cat" />
      </main>
      <footer className="footer">
        This project was coded by{' '}
        <a
          href="https://lucid-williams-3971e9.netlify.app/"
          className="footer--link"
          target="_blank"
          rel="noreferrer"
        >
          Natalia Martineli
        </a>{' '}
        and is{' '}
        <a
          href="https://github.com/nmartineli/SheCodesReact-Dictionary"
          className="footer--link"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}
