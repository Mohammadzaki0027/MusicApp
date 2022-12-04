import styles from "./Styles/Music.module.css";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <div className={styles.nav}>
        <h1 className={styles.h1tag}>Music App Poster</h1>
      </div>

      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
