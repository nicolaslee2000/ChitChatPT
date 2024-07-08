import './App.css';
import styles from './Layout.module.css';
import Header from './layout/header/Header';
import MainChat from './pages/main-chat/MainChat';

function App() {
  return (
    <div id={styles.layout}>
      <div id={styles.layoutHeader}>
        <Header></Header>
      </div>
      <div id={styles.layoutMain}>
        <MainChat></MainChat>
      </div>
    </div>
  );
}

export default App;
