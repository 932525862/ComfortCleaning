import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import './index.css';
import Home from './routes/Home';
import "react-toastify/dist/ReactToastify.css";
import loadingGif from './assets/lodingg.gif'; // Updated to match the correct path

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        // Loading screen with centered gif
        <div className="loading-screen flex justify-center items-center h-screen w-screen">
          <img
            src={loadingGif}
            alt="Loading"
            className="w-[50%] md:w-[30%] lg:w-[20%] xl:w-[15%]"
          />
        </div>
      ) : (
        // The actual app content
        <>
          <ToastContainer />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
