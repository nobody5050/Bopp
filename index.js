const accountName = "bopp";
const sasString = "?sv=2020-02-10&ss=b&srt=sco&sp=rc&se=2099-03-15T07:03:35Z&st=2021-03-14T23:03:35Z&spr=https&sig=6pmhaF%2BNSWmIoXWcaC%2BGRd60F1EWWG%2BcktZlsAykqBY%3D";
const containerName = "images";
const containerURL = new azblob.ContainerURL(
    `https://${accountName}.blob.core.windows.net/${containerName}?${sasString}`,
    azblob.StorageURL.newPipeline(new azblob.AnonymousCredential));
