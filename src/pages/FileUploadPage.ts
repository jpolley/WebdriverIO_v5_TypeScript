import BasePage from 'src/pages/BasePage';

class FileUploadPage extends BasePage {
    get open() {
        return browser.url('/upload');
    }

    get chooseFileElement() {
        return $('#file-upload');
    }

    get upload() {
        return $('#file-submit').click();
    }

    get uploadedFiles() {
        return $('#uploaded-files').getText();
    }

    chooseFile(filePath) {
        this.chooseFileElement.setValue(filePath);
    }
}

export default new FileUploadPage();
