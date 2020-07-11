import { Component } from '@angular/core';
import { ResultsService } from 'src/services/result.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  constructor(private rsltSrv: ResultsService) {}
  fileContent: string = '';
  noEdges;
  noNodes;
  edges;
  _hideData = true;
  _showGraph = true;
  _fileLoaded = true;

  onChange(fileList: FileList): void {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result as string;
    }
    fileReader.readAsText(file);
    this._fileLoaded = !this._fileLoaded;
  }

  logData() {
    this.edges = this.fileContent.split('\n').map((item) => {
      return item.split(',');
    });
    this.edges = this.rsltSrv.convertToEdges(this.edges);
    console.log(this.edges);
    [this.noNodes, this.noEdges] = this.rsltSrv.setData(this.edges);
    this._hideData = !this._hideData;
  }

  showGraph() {
    this._showGraph = !this._showGraph;
  }
}
