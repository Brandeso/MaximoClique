import {NodeModel, EdgeModel} from '../models/data.models';
import {max} from "rxjs/operators";

export class ResultsService {
  _max = 0;
  _nodes = 0;
  vert: Array<number> = [];
  graph: Array<Array<number>> = [];

  convertToEdges(edges: string[]) {
    let _newEdges: EdgeModel[] = [];
    for (let _i = 0; _i < edges.length; _i++) {
      _newEdges.push({from: parseInt(edges[_i][0]), to: parseInt(edges[_i][1])})
    }
    return _newEdges;
  }

  setData(edgesData: EdgeModel[]) {
    this._nodes = Math.max.apply(Math, edgesData.map((o) => {
      return o.from
    }));
    this._nodes = Math.max(this._nodes, Math.max.apply(Math, edgesData.map((o) => {
      return o.to
    })));
    return [this._nodes, edgesData.length];
  };

  getResults(edgesData: EdgeModel[], numNodes: number,) {
    this._max = numNodes + 2;
    this._nodes = numNodes;
    // Declaramos un arreglo en 0's para obtener los vértices
    this.vert = new Array<number>(this._max).fill(0);

    // Generamos una mátriz cuadrada para almacenar la información del grafo
    for (let i: number = 0; i < this._max; i++) {
      this.graph[i] = [];
      for(let j = 0; j < this._max; j++) {
        this.graph[i][j] = 0;
      }
    }

    this.defineGraph(edgesData.length, edgesData);

    return this.maxCliques(0, 1);
  };

  /* Función que nos permite revisar si, dado un arreglo de
    vertices estos son clique o no */
  esClique(b: number) {
    for(let i = 1; i < b+1; i++) {
      for(let j = 2; j < b+1; j++) {
        if(this.graph[this.vert[i]][this.vert[j]]) {
          return false;
        }
      }
    }
    return true;
  }

  //Funcion para encontrar el número máximo de los cliques
  maxCliques(i: number, l: number) {
    let numMaximo = 0;
    for(let j = i+1; j < this._nodes +1; j++) {
      this.vert[l] = j;
      if(this.esClique(l+1)) {
        numMaximo = Math.max(numMaximo, l);

        numMaximo = Math.max(numMaximo, this.maxCliques(j, l + 1));
      }
    }
    return numMaximo;
  }

  //Organizamos el grafo a partir de los datos obtenidos en el txt
  defineGraph(size: number, edges: EdgeModel[]) {
    for (let i = 0; i < size; i++) {
      this.graph[edges[i].to][edges[i].from] = 1
      this.graph[edges[i].from][edges[i].to] = 1
    }
    console.log(this.graph);
  };

}
