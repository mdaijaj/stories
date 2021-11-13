import React, {useState} from 'react';

const FileUploadPage=()=>{
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = async() => {
		const formData =await new FormData();
		console.log("formData", formData)
		formData.append('File', selectedFile);
		const config={
			method: 'POST',
			body: formData,
			"context-type": "appllication/json"
		}
		fetch('/api/uploadStory?', config)
		.then((response) => response.json())
		.then((result) => {
			console.log('Success:', result);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	};
	

	return(
   <div>
		<input type="file" name="imageVideo_url" onChange={changeHandler} />
		{isFilePicked ? (
			<div>
				<p>Filename: {selectedFile.name}</p>
				<p>Filetype: {selectedFile.type}</p>
				<p>Size in bytes: {selectedFile.size}</p>
				<p>
					lastModifiedDate:{' '}
					{selectedFile.lastModifiedDate.toLocaleDateString()}
				</p>
			</div>
		) : (
			<p>Select a file to show details</p>
		)}
		<div>
			<button onClick={handleSubmission}>Submit</button>
		</div>
	</div>
	)
};

export default FileUploadPage;
