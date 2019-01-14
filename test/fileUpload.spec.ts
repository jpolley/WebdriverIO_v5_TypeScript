import {expect} from 'chai';
import FileUploadPage from 'src/pages/FileUploadPage';
import {imagePath} from 'src/assets';

describe('File upload', () => {
    it('works', () => {
        const imageName = 'webdriverIO.png';
        const filePath = imagePath(imageName);

        FileUploadPage.open;
        FileUploadPage.chooseFile(filePath);
        FileUploadPage.upload;

        expect(FileUploadPage.uploadedFiles).to.eq(imageName);
    });
});
