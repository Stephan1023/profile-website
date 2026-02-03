import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-love-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './love-button.component.html',
  styleUrl: './love-button.component.css'
})
export class LoveButtonComponent implements AfterViewInit {
  @ViewChild('arena', { static: true }) arena!: ElementRef<HTMLDivElement>;
  @ViewChild('noButton', { static: true }) noButton!: ElementRef<HTMLButtonElement>;

  proposalAccepted = false;
  noOffset = { x: 0, y: 0 };

  ngAfterViewInit(): void {
    this.randomizeNoButton();
  }

  onYes(): void {
    this.proposalAccepted = true;
  }

  onNoAttempt(): void {
    this.randomizeNoButton();
  }

  private randomizeNoButton(): void {
    const arenaRect = this.arena.nativeElement.getBoundingClientRect();
    const buttonRect = this.noButton.nativeElement.getBoundingClientRect();

    const maxX = Math.max(0, arenaRect.width - buttonRect.width);
    const maxY = Math.max(0, arenaRect.height - buttonRect.height);

    const nextX = Math.random() * maxX;
    const nextY = Math.random() * maxY;

    this.noOffset = {
      x: nextX,
      y: nextY
    };
  }
}
