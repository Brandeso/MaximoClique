import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  fileContent: string = '';

  onChange(fileList: FileList): void {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result as string;
    }
    fileReader.readAsText(file);
  }
}
