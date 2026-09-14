export type GoldKarat = '24K' | '22K' | '18K' | '14K' | '999' | '925';

export type ProductCategory = 
  | 'bilezik'
  | 'kolye'
  | 'yuzuk'
  | 'kupe'
  | 'ziynet'
  | 'zincir'
  | 'kulce'
  | 'set';

export interface GoldRate {
  id: string;
  code: string;
  name: string;
  karat: GoldKarat;
  purity: number; // Milyem (örn: 0.995, 0.916, 0.585)
  buying: number; // Alış TL
  selling: number; // Satış TL
  changePercent: number; // % Değişim
  unit: string; // 'gr', 'adet'
  updatedAt: string;
}

export interface InventoryItem {
  id: string;
  code: string; // Stok / Barkod Kodu
  name: string;
  category: ProductCategory;
  karat: GoldKarat;
  purity: number; // Milyem
  weightGram: number; // Gramaj (gr)
  quantity: number; // Adet
  laborCostPerGram: number; // Gram başı işçilik (TL)
  fixedLaborCost: number; // Sabit işçilik (TL)
  costPrice: number; // Maliyet TL
  sellingPrice: number; // Satış Fiyatı TL (veya 0 ise kurdan hesaplanır)
  useDynamicPricing: boolean; // Güncel kurdan otomatik hesapla
  minStockAlert: number; // Kritik stok uyarısı eşiği
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerTransaction {
  id: string;
  date: string;
  type: 'sale' | 'purchase' | 'payment_cash' | 'payment_gold' | 'emanet_deposit' | 'emanet_withdraw';
  description: string;
  amountTL: number;
  amountGoldGram: number;
  goldKarat?: GoldKarat;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address?: string;
  debtTL: number; // Müşterinin TL Borcu (+ borç, - alacak)
  debtGoldGram: number; // Müşterinin Altın Borcu (Gram 24K Has bazında)
  entrustedGoldGram: number; // Müşterinin kuyumcuda emanet kalan altını (Has gr)
  entrustedNotes?: string;
  transactions: CustomerTransaction[];
  createdAt: string;
}

export interface SaleReceipt {
  id: string;
  date: string;
  receiptNumber: string;
  customerName: string;
  items: {
    productName: string;
    karat: GoldKarat;
    weightGram: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
  totalWeightGram: number;
  subtotalTL: number;
  discountTL: number;
  grandTotalTL: number;
  paymentMethod: 'cash' | 'card' | 'gold_exchange' | 'credit';
  notes?: string;
}

export interface StoreSettings {
  storeName: string;
  ownerName: string;
  phone: string;
  address: string;
  taxNumber?: string;
  currencySymbol: string;
  defaultSpreadPercent: number; // Alış-satış marjı %
  showDynamicIsland: boolean;
  theme: 'dark' | 'light' | 'luxury_gold';
}
