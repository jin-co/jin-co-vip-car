import { Injectable } from '@angular/core';
import { Modal } from '../models/modal';

@Injectable({ providedIn: 'root' })
export class ModalService {
  // private visible: boolean = false;
  private modals: Modal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unRegister(id: string) {
    this.modals.filter((m) => m.id !== id);
  }

  toggleModal(id: string) {
    const modal = this.modals.find((m) => m.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  getVisible(id: string): boolean {
    return Boolean(this.modals.find((m) => m.id === id)?.visible);
  }
}
