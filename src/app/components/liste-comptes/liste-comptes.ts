import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../services/compte.service';
import { Compte } from '../../models/compte.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-comptes',
  imports: [CommonModule],
  templateUrl: './liste-comptes.html',
  styleUrl: './liste-comptes.css',
})
export class ListeComptes implements OnInit {

  comptes: Compte[] = [];

  constructor(private compteService: CompteService) {}

  ngOnInit(): void {
    this.compteService.listerComptes().subscribe(data => {
      this.comptes = data;
    });
  }
}