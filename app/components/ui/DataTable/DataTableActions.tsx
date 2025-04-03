import { ActionButton, ActionButtonsConfig } from "./DataTableTypes";
import { edit } from "@/app/constants/icons";
import { trash } from "@/app/constants/icons";
import { arrowDown } from "@/app/constants/icons";
import { arrowUp } from "@/app/constants/icons";

export function prepareActionButtons<T>({
  actions,
  defaultActions,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown
}: ActionButtonsConfig<T>): ActionButton[] {
  const actionButtons = [...actions];

  if (defaultActions.moveDown && onMoveDown) {
    actionButtons.push({
      icon: arrowDown,
      onClick: onMoveDown,
      tooltip: "Mover para baixo",
      className: "w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg"
    });
  }

  if (defaultActions.moveUp && onMoveUp) {
    actionButtons.push({
      icon: arrowUp,
      onClick: onMoveUp,
      tooltip: "Mover para cima",
      className: "w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg"
    });
  }

  if (defaultActions.edit && onEdit) {
    actionButtons.push({
      icon: edit,
      onClick: onEdit,
      tooltip: "Editar",
      className: "w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg"
    });
  }

  if (defaultActions.delete && onDelete) {
    actionButtons.push({
      icon: trash,
      onClick: onDelete,
      tooltip: "Excluir",
      className: "w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg"
    });
  }

  return actionButtons;
}