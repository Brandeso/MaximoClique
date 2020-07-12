import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/services/result.service';
import { VisNetworkService, Data, Options } from 'ngx-vis';
import { DataSet } from 'vis-data/peer/umd/vis-data';
import { Node, Edge } from 'vis-network/peer/umd/vis-network';
import { EdgeModel, NodeModel } from "../../models/data.models";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  /******************* variables ngx-vis *******************/
  public visNetwork: string = 'networkId1';
  public visNetworkData: Data;
  public nodes: DataSet<Node>;
  public edges: DataSet<Edge>;
  public visNetworkOptions: Options;

  /*********************************************************/

  constructor(
    private rsltSrv: ResultsService,
    private visNetworkService: VisNetworkService) {}

  fileContent: string = '';
  noEdges;
  noNodes;
  _edges;
  _nodes;
  firstEdges;
  _hideData = true;
  _showGraph = true;
  _fileLoaded = true;
  maxClique = 0;

  ngOnInit() {
    this.nodes = new DataSet<Node>([
    ]);
    this.edges = new DataSet<Edge>([
    ]);
    this.visNetworkData = { nodes: this.nodes, edges: this.edges };
    this.visNetworkOptions = {};
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
    this._edges = this.fileContent.split('\n').map((item) => {return item.split(',')});
    this._edges = this.rsltSrv.convertToEdges(this._edges);
    [this.noNodes, this.noEdges] = this.rsltSrv.setData(this._edges);
    this.firstEdges = this._edges.slice(0,5);
    this._hideData = !this._hideData;
  }

  // Generamos el grafo
  showGraph() {
    this.maxClique = this.rsltSrv.getResults(this._edges, this.noNodes);
    this._nodes = this.rsltSrv.convertToNodes(this.noNodes);
    this.updateNetwork(this._edges, this._nodes);
    this._showGraph = !this._showGraph;
  }

  refresh() {
    window.location.reload()
  }
/******************* ngx-vis *******************/
  public addNode(): void {
    const lastId = this.nodes.length;
    const newId = this.nodes.length + 1;
    this.nodes.add({ id: newId, label: 'New Node' });
    this.edges.add({ from: lastId, to: newId });
    this.visNetworkService.fit(this.visNetwork);
  }

  public networkInitialized(): void {
    // now we can use the service to register on events
    this.visNetworkService.on(this.visNetwork, 'click');

    // open your console/dev tools to see the click params
    this.visNetworkService.click.subscribe((eventData: any[]) => {
      if (eventData[0] === this.visNetwork) {
        console.log(eventData[1]);
      }
    });
  }

  public updateNetwork(edgesData: EdgeModel[], nodesData: NodeModel[]) {
    for(let _i of nodesData) {
      this.nodes.add({id: _i.id, label: _i.label});
    }
    for(let _i of edgesData) {
      this.edges.add({to: _i.to, from: _i.from});
    }
    this.visNetworkService.fit(this.visNetwork);
  }

  openGithub() {
    window.open("https://github.com/Brandeso/MaximoClique/tree/master/MaximoClique/src/assets/ejemplos", "_blank");
  }
}
