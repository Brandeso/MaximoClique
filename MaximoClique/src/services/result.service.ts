import {NodeModel, EdgeModel} from '../models/data.models';
import {max} from "rxjs/operators";

export class ResultsService {
  _max = 0;
  _nodes = 0;

  convertToEdges(edges:string[]) {
    let _newEdges: EdgeModel[] = [];
    for(let _i = 0; _i < edges.length; _i++){
      _newEdges.push({from: parseInt(edges[_i][0]), to: parseInt(edges[_i][1])})
    }
    return _newEdges;
  }
  setData(edgesData: EdgeModel[]) {
    this._nodes = Math.max.apply(Math, edgesData.map((o) => {return o.from}));
    this._nodes = Math.max(this._nodes, Math.max.apply(Math, edgesData.map((o) => {return o.to})));
    return [this._nodes, edgesData.length];
  };

  getResults() {

  };
}
