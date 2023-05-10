import { MenuItem } from "./menu-item";

export interface OrderItem {
    id?: number;
    items: MenuItem[];
    totalPrice: number;
    status: string;
  }