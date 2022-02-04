import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

titulo = 'Professores';

public professores = [
  {id: 1, nome: "Vagner", disciplina: 'Matematica'},
  {id: 2, nome: "Tiago", disciplina: 'Fisica'},
  {id: 3, nome: "Fernando", disciplina: 'Português'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
