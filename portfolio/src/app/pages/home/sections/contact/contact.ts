import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  protected readonly portfolio = inject(PortfolioService);
  private readonly fb = inject(FormBuilder);
  private readonly snack = inject(MatSnackBar);

  protected readonly loading = signal(false);
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    budget: ['not-sure'],
  });

  protected readonly budgetOptions = [
    { value: 'not-sure', label: 'Not sure yet' },
    { value: '<1k', label: '< $1,000' },
    { value: '1k-5k', label: '$1k — $5k' },
    { value: '5k-15k', label: '$5k — $15k' },
    { value: '15k+', label: '$15k+' },
  ];

  protected readonly contactInfo = [
    {
      icon: 'bi-envelope-at',
      label: 'Email',
      value: 'ahmed.hassan.dev@example.com',
      href: 'mailto:ahmed.hassan.dev@example.com',
    },
    {
      icon: 'bi-telephone',
      label: 'Phone',
      value: '+20 100 123 4567',
      href: 'tel:+201001234567',
    },
    {
      icon: 'bi-geo-alt',
      label: 'Location',
      value: 'Cairo, Egypt · Remote OK',
      href: '#',
    },
    {
      icon: 'bi-clock',
      label: 'Working hours',
      value: 'Sun — Thu · 9 AM — 6 PM (GMT+2)',
      href: '#',
    },
  ];

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open('Please fill in all required fields correctly.', 'Got it', { duration: 3500 });
      return;
    }

    this.loading.set(true);
    // Simulate sending
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.snack.open('🎉 Message sent! I will get back to you within 24 hours.', 'OK', {
        duration: 5000,
      });
      this.form.reset({ name: '', email: '', subject: '', message: '', budget: 'not-sure' });
      setTimeout(() => this.submitted.set(false), 6000);
    }, 1500);
  }
}
