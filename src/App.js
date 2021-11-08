import './App.css';
import Navbar from './components/navbar';
import TextStory from './components/text_story';
import ImageVideoStory from './components/image_video_story';
import FileUpload from './components/file_upload';

const App=()=> {
  return (
    <>
      <Navbar/>
        <div className="main">
          <TextStory/> <br/><br/>
          <FileUpload/>
        </div>
     
  
      {/* <div><img src="https://static-cse.canva.com/blob/562124/RightBackground4.jpg" width="100%"/></div> */}
</>
  );
}

export default App;
