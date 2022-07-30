interface CustomTodoStyle {
  background?: string;
  border?: string;
  hoverColor?: string;
  borderWidth?: number;
}

interface ITodo {
  id: number;
  name: string;
  isDone: boolean;
  addedAt: Date;
  customStyle?: CustomTodoStyle;
}
