import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from './watch.jpg'
import watchImg300 from './watch2.jpg'
function App() {
  return (
    <>
   <div style={{width:"342px",height:"513px"}}>
   <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: watchImg300
    },
    largeImage: {
        src: watchImg1200,
        width: 1200,
        height: 1800
    }
}} />
   </div>
    
    </>
  );
}

export default App;
