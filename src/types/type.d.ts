interface CustomTodoStyle {
  background?: string;
  border?: string;
  hoverColor?: string;
}

interface ITodo {
  id: number;
  name: string;
  isDone: boolean;
  addedAt: Date;
  customStyle?: CustomTodoStyle;
}
