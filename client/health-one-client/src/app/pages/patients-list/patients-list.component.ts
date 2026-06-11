import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss'
})
export class PatientsListComponent implements OnInit {
  patients: Patient[] = [];
  loading = true;
  error: string | null = null;
  searchTerm = '';

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.loading = true;
    this.error = null;
    this.patientService.getPatients().subscribe({
      next: (data) => {
        this.patients = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load patients. Please try again.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  get filteredPatients(): Patient[] {
    if (!this.searchTerm.trim()) {
      return this.patients;
    }
    const term = this.searchTerm.toLowerCase();
    return this.patients.filter(patient =>
      patient.name.toLowerCase().includes(term) ||
      patient.id.toString().includes(term)
    );
  }
}