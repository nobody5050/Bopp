const reportStatus = message => {
    status.innerHTML += `${message}<br/>`;
    status.scrollTop = status.scrollHeight;
}
const selectButton = document.getElementById("submit");
const fileInput = document.getElementById("files");
const accountName = "bopp";
const sasString = "?sv=2020-02-10&ss=b&srt=sco&sp=rc&se=2099-03-15T07:03:35Z&st=2021-03-14T23:03:35Z&spr=https&sig=6pmhaF%2BNSWmIoXWcaC%2BGRd60F1EWWG%2BcktZlsAykqBY%3D";
const containerName = "images";
const containerURL = new azblob.ContainerURL(
    `https://${accountName}.blob.core.windows.net/${containerName}?${sasString}`,
    azblob.StorageURL.newPipeline(new azblob.AnonymousCredential));
const uploadFiles = async () => {
    try {
        reportStatus("Uploading files...");
        const promises = [];
        for (const file of fileInput.files) {
            const blockBlobURL = azblob.BlockBlobURL.fromContainerURL(containerURL, file.name);
            promises.push(azblob.uploadBrowserDataToBlockBlob(
                azblob.Aborter.none, file, blockBlobURL));
        }
        await Promise.all(promises);
        reportStatus("Done.");
        listFiles();
    } catch (error) {
        reportStatus(error.body.message);
    }
}

selectButton.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", uploadFiles);
