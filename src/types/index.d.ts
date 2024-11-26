type BillType = "expense" | "income";

interface BillItem {
  id: string;
  name: string;
  date: string;
  amount: number;
  type: BillType; // 收入/支出
  category: string; // 分类
}

interface CardType {
  id?: string; // 唯一标识
  name: string; // 卡名
  amount: number; // 金额
  income: number; // 收入
  expense: number; // 支出
  cardNumber: string; // 卡号
  password: string; // 密码
  type: string; // 类型
}