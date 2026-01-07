import { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import './App.css';

function App() {
  const [ currentIndex, setCurrentIndex] = useState(14);
  const [likedCats, setLikedCats] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const currentIndexRef = useRef(currentIndex);

  // get image from cataas link 
  // put image url into array 
  const cats = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({ 
        id: i,
        url: `https://cataas.com/cat?${i}`,
      })),
    []
  );

//create array of object equal to length
 const childRefs = useMemo(
    () =>
      Array(cats.length)
        .fill(0)
        .map(() => ({ current: null })), 
    [cats.length]
  );

  //update the current index for counter and used in outOfFrame method to check if process is done
  //executed when swiped or click restart
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  //executed when swipe gesture is initiated
  const swiped = (direction, catToSave, index) => {
    console.log('Swiped:', direction, 'Cat ID:', catToSave.id, 'Index:', index);
    
    //store to likedCats when swipe
    if (direction === 'right') {
      setLikedCats((currentLikedCatArray) => [...currentLikedCatArray, catToSave]);
      console.log('Added to liked cats! ');
    } else {
      console.log('Swiped left - not saving');
    }

    updateCurrentIndex(index - 1);
  };

  // Ececuted when card is swiped
  const outOfFrame = (id) => {
    console.log(`Card ${id} left screen`);
    
    // Check if all cards are gone to show results
    if (currentIndexRef.current < 0) {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  // Programmatically trigger swipe with buttons
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < cats.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

 
  const restart = () => {
    setLikedCats([]);
    setShowResults(false);
    updateCurrentIndex(cats.length - 1);
  };

  // Results screen after all cards are swiped
  if (showResults) {
    return (
      
      <div className="App">
        <div className="results">
          <h1> Your Results!😸</h1>
          <p className="results-text">
            You liked <strong>{likedCats.length}</strong> out of{' '}
            <strong>{cats.length}</strong> cats
          </p>

          {/* loop array of like cats to show liked cat pictures */}
          {likedCats.length > 0 ?  (
            <div className="liked-grid">
              {likedCats.map((cat) => (
                <img key={cat.id} src={cat.url} alt="liked cat" />
              ))}
            </div>
          ) : (
            <p className="no-likes">You didn't like any cats!  😿</p>
          )}

          <button onClick={restart} className="restart-btn">
            🔄 Restart
          </button>
        </div>
      </div>
    );
  }

  
  return (
    <div className="App">
      <div className="header">
        <h1>🐱 Cat Mixer 😸</h1>
        <div className="subtitle">💡Swipe right to like, left to pass💡</div>
        <p className="counter">
          {currentIndex + 1} / {cats.length}
        </p>
      </div>

         {/*loop cat pictures from array to display for swiping cards  */}
      <div className="cardContainer">
        {cats.map((cat, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={cat.id}
            onSwipe={(dir) => swiped(dir, cat, index)}
            onCardLeftScreen={() => outOfFrame(cat.id, index)}
            preventSwipe={['up', 'down']}
            swipeRequirementType="position"  
            swipeThreshold={100}              
            flickOnSwipe={true}               
           >

            {/* load cat image to the card */}
            <div className="card">
             <img 
               src={cat.url} 
               alt={`Cat ${cat.id + 1}`}
              className="cardImage"
               onError={(e) => {
                console.log('Image failed to load:', cat.url);
                 e.target.src = 'https://cataas.com/cat';  // Fallback
               }}
             />
            <h3 className="cardTitle">Cat #{cat.id + 1}</h3>
          </div>
          </TinderCard>
        ))}
      </div>

  
      <div className="buttons">
        <button
          onClick={() => swipe('left')}
          className="dislike-btn"
          disabled={!canSwipe}
        >
          Nope❌
        </button>
        <button
          onClick={() => swipe('right')}
          className="like-btn"
          disabled={!canSwipe}
        >
          Like⭐
        </button>
      </div>

      <p className="hint">👆 Swipe the card or use the buttons! </p>
    </div>
  );
}

export default App;