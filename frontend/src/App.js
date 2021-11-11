import './App.css';
import {
  Routes,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from './components/navbar';
import TextModel from './components/text_model';
import FileModel from './components/file_upload';
import VideoStory from './components/video_story';
import ImageStory from './components/image_story';
import TextStory from './components/text_story';
import Errorpage from './components/error';
import ViewStory from './components/view_story';

const Routing =()=>{

  return (
    <>
      <Routes>
        <Route path="/" element={<TextModel/>} />  {/* add FileModel */}
        <Route path="/video_story" element={<VideoStory/>} />
        <Route path="/image_story" element={<ImageStory/>} />
        <Route path="/text_story" element={<TextStory/>} />
        <Route path="/view_story" element={<ViewStory/>} />
      </Routes>
    </>
  )
}

const App=()=>{
    return (
      <>
      <div className='main'>
        <Navbar/>
        <Routing />
      </div>
      </>
    )
}

export default App;

