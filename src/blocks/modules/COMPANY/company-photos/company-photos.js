function uploadingPhotos() {
  let dropBox = document.getElementById("dropBox");
  const getInputFile = document.getElementById("imgUpload");
  getInputFile.addEventListener("change", filesManager);
  // modify all of the event types needed for the script so that the browser
  // doesn't open the image in the browser tab (default behavior)
  ["dragenter", "dragover", "dragleave", "drop"].forEach((evt) => {
    dropBox.addEventListener(evt, prevDefault, false);
  });
  function prevDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // remove and add the hover class, depending on whether something is being
  // actively dragged over the box area
  ["dragenter", "dragover"].forEach((evt) => {
    dropBox.addEventListener(evt, hover, false);
  });
  ["dragleave", "drop"].forEach((evt) => {
    dropBox.addEventListener(evt, unhover, false);
  });
  function hover() {
    dropBox.classList.add("hover");
  }
  function unhover() {
    dropBox.classList.remove("hover");
  }

  // the DataTransfer object holds the data being dragged. it's accessible
  // from the dataTransfer property of drag events. the files property has
  // a list of all the files being dragged. put it into the filesManager function
  dropBox.addEventListener("drop", mngDrop, false);
  function mngDrop(e) {
    let dataTrans = e.dataTransfer;
    let files = dataTrans.files;
    filesManager(files);
  }

  // use FormData browser API to create a set of key/value pairs representing
  // form fields and their values, to send using XMLHttpRequest.send() method.
  // Uses the same format a form would use with multipart/form-data encoding
  function upFile(file) {
    //only allow images to be dropped
    let imageType = /image.*/;
    if (file.type.match(imageType)) {
      let url = "HTTP/HTTPS URL TO SEND THE DATA TO";
      // create a FormData object
      let formData = new FormData();
      // add a new value to an existing key inside a FormData object or add the
      // key if it doesn't exist. the filesManager function will loop through
      // each file and send it here to be added
      formData.append("file", file);

      // standard file upload fetch setup
      fetch(url, {
        method: "put",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.error("Only images are allowed!", file);
    }
  }

  // use the FileReader API to get the image data, create an img element, and add
  // it to the gallery div. The API is asynchronous so onloadend is used to get the
  // result of the API function
  function previewFile(file) {
    // only allow images to be dropped
    let imageType = /image.*/;
    if (file.type.match(imageType)) {
      let fReader = new FileReader();
      let gallery = document.getElementById("gallery");
      // reads the contents of the specified Blob. the result attribute of this
      // with hold a data: URL representing the file's data
      fReader.readAsDataURL(file);
      // handler for the loadend event, triggered when the reading operation is
      // completed (whether success or failure)
      fReader.onloadend = function() {
        let wrap = document.createElement("div");
        let img = document.createElement("img");
        // set the img src attribute to the file's contents (from read operation)
        img.src = fReader.result;
        let imgCapt = document.createElement("p");
        // the name prop of the file contains the file name, and the size prop
        // the file size. convert bytes to KB for the file size
        let fSize = file.size / 1000 + " KB";
        imgCapt.innerHTML = `<span class="fName">${file.name}</span><span class="fSize">${fSize}</span><span class="fType">${file.type}</span>`;
        gallery.appendChild(wrap).appendChild(img);
        gallery.appendChild(wrap).appendChild(imgCapt);
      };
    } else {
      console.error("Only images are allowed!", file);
    }
  }

  function filesManager(files) {
    // spread the files array from the DataTransfer.files property into a new
    // files array here
    files = [...getInputFile.files];
    // send each element in the array to both the upFile and previewFile
    // functions
    files.forEach(upFile);
    files.forEach(previewFile);
  }
}
uploadingPhotos();