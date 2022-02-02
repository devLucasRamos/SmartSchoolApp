import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

titulo = 'Alunos';

public alunos = [
  {nome: "Vitoria"},
  {nome: "Evellyn"},
  {nome: "Luiz"},
  {nome: "Guilherme"},
  {nome: "Paulo"},
  {nome: "Fernando"},
  {nome: "Paula"},
  {nome: "Renato"},
  {nome: "Marta"},
  {nome: "Marthin"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
