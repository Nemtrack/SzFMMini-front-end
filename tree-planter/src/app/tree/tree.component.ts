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
      'Lomb',
      'Szép lombkorona',
      'https://media.istockphoto.com/id/470604022/photo/apple-tree-without-flowers-or-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=hIQ0YlXwNsaRW4empl_lK2roR2tKX7Rq7pjFqPJR3QA='
    ),
    new Tree(
      'Tree',
      'Szép lomb',
      'https://media.istockphoto.com/id/470604022/photo/apple-tree-without-flowers-or-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=hIQ0YlXwNsaRW4empl_lK2roR2tKX7Rq7pjFqPJR3QA='
    ),
    new Tree(
      'Eert',
      'Nice tree:)',
      'https://media.istockphoto.com/id/470604022/photo/apple-tree-without-flowers-or-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=hIQ0YlXwNsaRW4empl_lK2roR2tKX7Rq7pjFqPJR3QA='
    ),
  ];
}
