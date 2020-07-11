import {NodeModel, EdgeModel} from '../models/data.models';
import {max} from "rxjs/operators";

export class ResultsService {
  _max = 0;
  _nodes = 0;
  vert: Array<number>;
  graph: Array<number>;
  degree: Array<number>;
  numMax: number = 0; // Número máximo de clique

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

    // Declaramos un arreglo en 0's para obtener el grado de los vertices
    this.degree = new Array<number>(this._max).fill(0);

    // Generamos una mátriz cuadrada para almacenar la información del grafo
    for (let i: number = 0; i < this._max; i++) {
      this.graph = this.graph.concat(new Array<number>(this._max).fill(0))
    }

  };

  /* Función que nos permite revisar si, dado un arreglo de
    vertices estos son clique o no */
  esClique(b: number) {
    for (let i: number = 1; i < b; i++) {
      for (let j: number = i + 1; i < b; j++) {
        if (this.graph[this.vert[i]][this.vert[j]] === 0) { // graph[vert[i]][vert[j]]
          return false;
        }
      }
    }
    return true;
  }

  //Funcion para encontrar el número máximo de los cliques
  maxCliques(i: number, l: number) {
    //Revisamos si a partir del i+1 algún vértice puede ser insertado
    for (let j: number = i + 1; j < this._nodes; j++) {
      //Añádimos el vértice a la variable vert
      this.vert[l] = j
      /*
      Si el grafo no es un clique de tamaño k
      entonces no puede ser un clique de tamaño k+1
      */
      if (this.esClique(l + 1)) {
        //Actualizamos el número máximo de clique
        this.numMax = Math.max(this.numMax, l)
        //Revisamos si se puede añadir otro 'edge'
        this.numMax = Math.max(this.numMax, this.maxCliques(j, l + 1))
      }
    }
    //Retornamos el número máximo de clique
    return this.numMax
  }

  //Organizamos el grafo a partir de los datos obtenidos en el txt
  defineGraph(size: number, edges: EdgeModel[]) {
    for (let i = 0; i < size; i++) {
      this.graph[edges[i].to][edges[i].from] = 1
      this.graph[edges[i].from][edges[i].to] = 1
      this.degree[edges[i].to] += 1
      this.degree[edges[i].from] += 1
    }
  };

}
