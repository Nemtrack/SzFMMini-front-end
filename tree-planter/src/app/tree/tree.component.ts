import { Component, OnInit } from '@angular/core';
import { Tree } from './tree.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  trees: Tree[] = [];
}
