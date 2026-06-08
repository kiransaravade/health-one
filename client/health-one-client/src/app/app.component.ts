import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Patient } from './models/patient';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(data => {
        this.patients = data;
      });
  }
}
