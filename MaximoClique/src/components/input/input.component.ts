import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/services/result.service';
import { VisNetworkService, Data, DataSet, Node, Options, Edge } from 'ngx-vis';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  constructor(private rsltSrv: ResultsService) {}
  fileContent: string = '';
  noEdges;
  noNodes;
  edges;
  firstEdges;
  _hideData = true;
  _showGraph = true;
  _fileLoaded = true;
  maxClique = 0;

  ngOnInit() {
  }

  // Obtenemos los datos del txt
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

  // Convertimos los datos para usarlos en el algoritmo
  logData() {
    this.edges = this.fileContent.split('\n').map((item) => {return item.split(',')});
    this.edges = this.rsltSrv.convertToEdges(this.edges);
    [this.noNodes, this.noEdges] = this.rsltSrv.setData(this.edges);
    this.firstEdges = this.edges.slice(0,5);
    this._hideData = !this._hideData;
  }

  // Generamos el grafo
  showGraph() {
    this.maxClique = this.rsltSrv.getResults(this.edges, this.noNodes);
    this._showGraph = !this._showGraph;
  }
}
