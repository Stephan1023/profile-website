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
  @ViewChild('yesButton', { static: true }) yesButton!: ElementRef<HTMLButtonElement>;

  proposalAccepted = false;
  noOffset = { x: 0, y: 0 };

  ngAfterViewInit(): void {
    this.placeNoButtonNearYes();
  }

  onYes(): void {
    this.proposalAccepted = true;
  }

  reset(): void {
    this.proposalAccepted = false;
    this.placeNoButtonNearYes();
  }

  onNoAttempt(): void {
    if (!this.noButton || !this.yesButton || !this.arena) {
      return;
    }
    this.randomizeNoButton();
  }

  private placeNoButtonNearYes(): void {
    if (!this.noButton || !this.yesButton || !this.arena) {
      return;
    }
    const { arenaRect, buttonRect, anchor } = this.getLayout();
    const padding = 12;
    const maxX = Math.max(0, arenaRect.width - buttonRect.width - padding * 2);
    const maxY = Math.max(0, arenaRect.height - buttonRect.height - padding * 2);

    const initialX = anchor.x + anchor.width + 12;
    const initialY = anchor.y + 6;

    this.noOffset = {
      x: Math.min(maxX, Math.max(0, initialX)),
      y: Math.min(maxY, Math.max(0, initialY))
    };
  }

  private randomizeNoButton(): void {
    if (!this.noButton || !this.yesButton || !this.arena) {
      return;
    }
    const { arenaRect, buttonRect, anchor } = this.getLayout();
    const padding = 10;
    const maxX = Math.max(0, arenaRect.width - buttonRect.width - padding * 2);
    const maxY = Math.max(0, arenaRect.height - buttonRect.height - padding * 2);

    const roamX = 150;
    const roamY = 90;

    const minX = Math.max(0, anchor.x - roamX);
    const maxAllowedX = Math.min(maxX, anchor.x + roamX);
    const minY = Math.max(0, anchor.y - roamY);
    const maxAllowedY = Math.min(maxY, anchor.y + roamY);

    const nextX = minX + Math.random() * Math.max(0, maxAllowedX - minX);
    const nextY = minY + Math.random() * Math.max(0, maxAllowedY - minY);

    this.noOffset = {
      x: nextX,
      y: nextY
    };
  }

  private getLayout(): {
    arenaRect: DOMRect;
    buttonRect: DOMRect;
    anchor: { x: number; y: number; width: number; height: number };
  } {
    if (!this.noButton || !this.yesButton || !this.arena) {
      throw new Error('Layout elements are not available.');
    }
    const arenaRect = this.arena.nativeElement.getBoundingClientRect();
    const buttonRect = this.noButton.nativeElement.getBoundingClientRect();
    const yesRect = this.yesButton.nativeElement.getBoundingClientRect();

    return {
      arenaRect,
      buttonRect,
      anchor: {
        x: yesRect.left - arenaRect.left,
        y: yesRect.top - arenaRect.top,
        width: yesRect.width,
        height: yesRect.height
      }
    };
  }
}
