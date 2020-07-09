import { Component, OnInit } from "@angular/core";
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {


  ngOnInit(){}
  
  edges: Array<number> = [];
  size: number = this.edges.length;
  MAX: number = 0;
  nodos: number = 0;
  vert: Array<number> = [];
  graph: Array<number> = [][];
  degree: Array<number>;
  numMax: number = 0; //numero máximo de clique
  getNumbers(){
    for (let i: number = 0; i < this.size; i++){
      this.MAX = Math.max(this.edges[i]);
    }
    
    this.nodos = this.MAX;
    this.MAX = this.MAX+2;
    this.vert = new Array<number>(this.MAX).fill(0);
    this.degree = new Array<number>(this.MAX).fill(0); 
    
    for (let i: number = 0; i < this.MAX; i++){
      this.graph = this.graph.concat(new Array<number>(this.MAX).fill(0))
    }
    
  }
  
  esClique(b: number){
    for(let i: number = 1; i < b; i++){
      for(let j: number = i + 1; i < b; j++){
        if(this.graph[i][j] === 0){    // graph[vert[i]][vert[j]]
          return false;
        }
      }
    }
    return true;
  }

  maxCliques(i: number, l: number){
    for(let j: number = i + 1; j < this.nodos; j++){
      this.vert[l] = j
      if(this.esClique(l + 1)){
        this.numMax = Math.max(this.numMax, l)
        this.numMax = Math.max(this.numMax, this.maxCliques(j, l+1))
      }
    }
    return this.numMax
  }

  organizingGraph(size: number){
    for (let i: number = 0; i < size; i++){
      this.graph[this.edges[i][0]][this.edges[i][1]] = 1
      this.graph[this.edges[i][1]][this.edges[i][0]] = 1
      this.degree[this.edges[i][0]] += 1
      this.degree[this.edges[i][1]] += 1
    }

    console.log(this.maxCliques(0, 1));
  }
}
