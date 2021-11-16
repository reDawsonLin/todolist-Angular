export class Todo {
  
  //Todo內容
  title = '';
  
  //完成與否
  completed = false;

  //避免輸入錯誤值
  constructor(title: string) {
    this.title = title || '';
  }

  //是否已經完成
  get done(): boolean {
    return this.completed;
  }

  // 取得事項名稱  
  getTitle(): string {
    return this.title;
  }

  // 來回切換完成狀態
  toggleCompletion(): void {
    this.completed = !this.completed;
  }

  //設定事項名稱
  setTitle(title: string): void {
    this.title = title;
  }
  // 設定是否完成
  setCompleted(completed: boolean): void {
    this.completed = completed;
  }
}
