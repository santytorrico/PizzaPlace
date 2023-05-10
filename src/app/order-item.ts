import { MenuItem } from "./menu-item";

export interface OrderItem {
    id?: string;
    items: MenuItem[];
    totalPrice: number;
    status: string;
  }