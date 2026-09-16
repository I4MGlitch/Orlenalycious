import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  closeOffcanvas(): void {

    const offcanvasElement =
      document.getElementById('navbarOffcanvasLg');

    if (!offcanvasElement) {
      return;
    }

    const bootstrapInstance =
      (window as any).bootstrap;

    if (!bootstrapInstance) {
      return;
    }

    const offcanvas =
      bootstrapInstance.Offcanvas.getInstance(
        offcanvasElement
      );

    if (offcanvas) {
      offcanvas.hide();
    }

  }

}
