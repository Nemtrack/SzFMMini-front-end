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

  username = 'Kiss Pista';
  trees: Tree[] = [
    new Tree(
      new Date(2023, 10, 12),
      'Lomb',
      'Szép lombkorona',
      new Date(2023, 10, 14, 12, 0, 0),
      'https://media.istockphoto.com/id/470604022/photo/apple-tree-without-flowers-or-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=hIQ0YlXwNsaRW4empl_lK2roR2tKX7Rq7pjFqPJR3QA='
    ),
  ];
}
