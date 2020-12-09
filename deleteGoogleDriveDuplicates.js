function deleteGoogleDriveDuplicates() {
  // Script for å slette duplikater i Google Drive
  
  // ID kan finnes ved å se på slutten av URLen når du navigerer til mappen
  let folders = DriveApp.getFolderById("XXX");
  
  while (folders) {
    let currentFolder = folders;
        
    if (currentFolder.getName().localeCompare("Bilder")) {    
      console.log("In folder: " + currentFolder.getName());
      
      let files = currentFolder.getFiles();
      let filenameArray = [];
      
      while (files.hasNext()) {
        let file = files.next();
        // console.log("current file: " + file.getName());
        
        if (filenameArray.includes(file.getName()) && !file.getName().startsWith("DSC")) {
          // Ikke DSC fordi bilder fra ulike mobiler bruker denne prefixen, ergo like navn - men ulike bilder
          console.log("Found duplicate: " + file.getName());
          file.setTrashed(true);
        }
        filenameArray.push(file.getName());
      }
      break;
    }
  }
}