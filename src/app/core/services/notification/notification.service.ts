import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  length = 0; // Store the number of notifications

  constructor() { }

  createNotification(text: string) {

    // Reference to the container
    const container: HTMLElement = this.container();
    this.length++; // Increment number of notifications in the service

    // Create notification
    const notification: HTMLElement = this.notification(text);

    // Insert notification in the container
    container.insertBefore(notification, container.firstChild);
    // Function removes notification after 4s
    this.removeNotification(notification);
  }

  // Functions creates or get the container from the DOM
  private container(): HTMLElement {
    // Reference to the container
    let container: HTMLElement;
    // If there's not notification create the container
    if (this.length === 0) {
      // Create container
      container = document.createElement('div');
      // Asign id to container
      container.setAttribute('id', 'notifications-container');
      // Add to the body
      document.body.appendChild(container);
    }
    // If there's notifications get the ref from the body
    else { container = document.getElementById('notifications-container'); }
    // Return the container
    return container;
  }

  // Function removes the container from the DOM
  private removeContainer(): void {
    // If there's no notifications delete the container
    const container: HTMLElement = document.getElementById('notifications-container');
    document.body.removeChild(container);
  }

  // Function creates a new notification to be added in the container
  private notification(text: string): HTMLElement {
    // Create notification
    const notification: HTMLElement = document.createElement('div');
    // Add class to the notification
    notification.setAttribute('class', 'notification');
    // Add text to the notification
    notification.appendChild(document.createTextNode(text));
    // Add initial styling for effect
    notification.style.cssText = 'bottom:10px; opacity:0;';
    // Add final styling after 0.001s
    setTimeout(() => {
      notification.style.cssText = 'bottom:0px; opacity:1;';
    }, 1);
    // Return the notification
    return notification;
  }

  // Function removes the notification after a few segs
  private removeNotification(notification: HTMLElement): void {
    // Set timing for removie the notification with effect
    setTimeout(() => {
      // set the final style and remove notification from body
      notification.style.cssText = 'opacity:0; margin-top:-' + notification.clientHeight + 'px;';
      // Timer for animation and then remove the notification
      setTimeout(() => {
        // Remove the notification
        notification.parentElement.removeChild(notification);
        this.length--; // Reduce the lenght of the notifications
        // Validate if there's notifications
        if (this.length === 0) {
          this.removeContainer();
        }
      }, 400);
      // Time for removal will have a delay for 180 in each notification
    }, 4000 + (this.length * 180));
  }

}
