import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      title: 'Patient Management',
      description: 'Manage and view patient records efficiently',
      icon: '👥',
      link: '/patients'
    },
    {
      title: 'Health Records',
      description: 'Access comprehensive health history and documents',
      icon: '📋',
      link: '#'
    },
    {
      title: 'Appointments',
      description: 'Schedule and manage medical appointments',
      icon: '📅',
      link: '#'
    },
    {
      title: 'Reports',
      description: 'Generate detailed medical reports and analytics',
      icon: '📊',
      link: '#'
    }
  ];
}