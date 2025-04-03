import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type ColumnDefinition<T> = {
  key: string;
  header: string | ReactNode;
  render?: (item: T, index: number) => ReactNode;
  className?: string;
  headerClassName?: string;
  sortable?: boolean;
  filterComponent?: ReactNode;
};

export type ActionButton = {
  icon: string | StaticImageData;
  onClick: (item: any, index: number) => void;
  tooltip?: string;
  className?: string;
};

export type DataTableProps<T> = {
  data: T[];
  columns: ColumnDefinition<T>[];
  keyExtractor: (item: T) => string | number;
  actions?: ActionButton[];
  onRowClick?: (item: T, index: number) => void;
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  emptyStateMessage?: string | ReactNode;
  showActionsColumn?: boolean;
  actionColumnLabel?: string;
  actionsColumnClassName?: string;
  actionButtonsContainerClassName?: string;
  hideButtonClassName?: string;
  hideButtonLabel?: string;
  isLoading?: boolean;
  defaultActions?: {
    edit?: boolean;
    delete?: boolean;
    moveUp?: boolean;
    moveDown?: boolean;
    hide?: boolean;
  };
  onEdit?: (item: T, index: number) => void;
  onDelete?: (item: T, index: number) => void;
  onMoveUp?: (item: T, index: number) => void;
  onMoveDown?: (item: T, index: number) => void;
  onHide?: (item: T, index: number) => void;
};

export type MobileRowProps<T> = {
  item: T;
  index: number;
  keyExtractor: (item: T) => string | number;
  columns: ColumnDefinition<T>[];
  expandedRowIndex: number | null;
  setExpandedRowIndex: (index: number | null) => void;
  actionButtons: ActionButton[];
  showActionsColumn: boolean;
  onHide?: (item: T, index: number) => void;
  defaultActions: {
    edit?: boolean;
    delete?: boolean;
    moveUp?: boolean;
    moveDown?: boolean;
    hide?: boolean;
  };
  hideButtonLabel: string;
};

export type ActionButtonsConfig<T> = {
  actions: ActionButton[];
  defaultActions: {
    edit?: boolean;
    delete?: boolean;
    moveUp?: boolean;
    moveDown?: boolean;
    hide?: boolean;
  };
  onEdit?: (item: T, index: number) => void;
  onDelete?: (item: T, index: number) => void;
  onMoveUp?: (item: T, index: number) => void;
  onMoveDown?: (item: T, index: number) => void;
};