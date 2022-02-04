import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

public titulo = 'Alunos';

public alunos = [
  {id: 1, nome: "Vitoria", sobrenome: 'Evellyn', telefone: 96332255},
  {id: 2, nome: "Renato", sobrenome: 'Garcia', telefone: 96778555},
  {id: 3,nome: "Luiz", sobrenome: 'Sebastiao', telefone: 96456735},
  {id: 4,nome: "Guilherme", sobrenome: 'Osasco', telefone: 96332255},
  {id: 5,nome: "Paulo", sobrenome: 'Fernandes', telefone: 96423455},
  {id: 6, nome: "Fernando", sobrenome: 'Sorocaba', telefone: 96662555},
  {id: 7, nome: "Paula", sobrenome: 'Chan', telefone: 97657855},
  {id: 8, nome: "Renato", sobrenome: 'Gonçalves', telefone: 98947555},
  {id: 9, nome: "Marta", sobrenome: 'Adriano', telefone: 99234655},
  {id: 10, nome: "Marthin", sobrenome: 'Nogueira', telefone: 97775655}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
