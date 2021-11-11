import react from "react";
import FileUpload from "./file_upload";

const TextModel=()=>{
    const [story, setStory]= useState({
        name: "", 
        title: "", 
        note: "", 
        time: "",
    });

    let name, value;
    const handleInputs=(e)=>{
        name= e.target.name
        value= e.target.value
        console.log("story", story)
        setStory({...story, [name]: value})  // dynamic data for
    }

    const postStory= async(e)=>{
        e.preventDefault()
        console.log("story", story)
        const {name,title, note, time}=story
        const config={
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },   
            body: JSON.stringify({name, title, note})
        }
        let response= await fetch('/api/addTextStory', config)
        let responseOk= response && response.ok
        console.log("responseOk", responseOk)
        // .then((data)=>data.json())
        
        // if(res.status===400 || !res){
        //     window.alert("Invalid Registration");
        // }
        // else{
        //     window.alert("Story add is successfully!")
        //     // history.push('/login')
    }


    return (
        <>
            <h1>storya add key</h1>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Story</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text" cols="45" rows="8file"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send message</button>
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <FileUpload/>
        </>
    )
}


export default TextModel;