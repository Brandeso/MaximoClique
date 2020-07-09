import { Component, OnInit } from "@angular/core";
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  
  edges: Array<number> = [];
  size: number = this.edges.length;
  MAX: number = 0;
  nodos: number = 0;
  vert: Array<number>;
  graph: Array<number>;
  degree: Array<number>;
  numMax: number = 0; //numero máximo de clique

  constructor(){}
  
  ngOnInit(){}

  getNumbers(){
    for (let i: number = 0; i < this.size; i++){
      this.MAX = Math.max(this.edges[i]);
    }
    
    /*
    Actualizamos la cantidad de nodos y el máximo a partir de los datos
    obtenidos del archivo txt
    */
    this.nodos = this.MAX;
    this.MAX = this.MAX+2;

    //Declaramos un arreglo en 0's para obtener los vértices
    this.vert = new Array<number>(this.MAX).fill(0);
    
    //Declaramos un arreglo en 0's para obtener el grado de los vertices
    this.degree = new Array<number>(this.MAX).fill(0); 
    
    //Generamos una mátriz cuadrada para almacenar la información del grafo
    for (let i: number = 0; i < this.MAX; i++){
      this.graph = this.graph.concat(new Array<number>(this.MAX).fill(0))
    }
    
  }
  

  /*
    Función que nos permite revisar si, dado un arreglo de
    vertices estos son clique o no
  */ 
  esClique(b: number){
    for(let i: number = 1; i < b; i++){
      for(let j: number = i + 1; i < b; j++){
        if(this.graph[this.vert[i]][this.vert[j]] === 0){ // graph[vert[i]][vert[j]]
          return false;
        }
      }
    }
    return true;
  }
  /*
   Funcion para encontrar el número máximo de los cliques 
  */
  maxCliques(i: number, l: number){
    //Revisamos si a partir del i+1 algún vértice puede ser insertado
    for(let j: number = i + 1; j < this.nodos; j++){
      //Añádimos el vértice a la variable vert
      this.vert[l] = j
      /*
      Si el grafo no es un clique de tamaño k 
      entonces no puede ser un clique de tamaño k+1
      */
      if(this.esClique(l + 1)){
        //Actualizamos el número máximo de clique
        this.numMax = Math.max(this.numMax, l)
        //Revisamos si se puede añadir otro 'edge'
        this.numMax = Math.max(this.numMax, this.maxCliques(j, l+1))
      }
    }
    //Retornamos el número máximo de clique
    return this.numMax
  }

  //Organizamos el grafo a partir de los datos obtenidos en el txt
  organizingGraph(size: number){
    for (let i: number = 0; i < size; i++){
      this.graph[this.edges[i][0]][this.edges[i][1]] = 1
      this.graph[this.edges[i][1]][this.edges[i][0]] = 1
      this.degree[this.edges[i][0]] += 1
      this.degree[this.edges[i][1]] += 1
    }

    //Imprimimos el número máximo de clique
    console.log(this.maxCliques(0, 1));
  }
}
