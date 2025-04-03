"use client";

import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Button";
import IconButton from "../IconButtonProps";
import { DataTableProps } from "./DataTableTypes";
import { prepareActionButtons } from "./DataTableActions";
import { renderMobileRow } from "./DataTableMobile";

function DataTable<T>({
  data,
  columns,
  keyExtractor,
  actions = [],
  onRowClick,
  className,
  headerClassName,
  rowClassName,
  emptyStateMessage = "Nenhum dado encontrado",
  showActionsColumn = true,
  actionColumnLabel = "Ordem",
  actionsColumnClassName,
  actionButtonsContainerClassName,
  hideButtonClassName,
  hideButtonLabel = "Ocultar",
  isLoading = false,
  defaultActions = {
    edit: false,
    delete: false,
    moveUp: false,
    moveDown: false,
    hide: true,
  },
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
  onHide,
}: DataTableProps<T>) {
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

  const actionButtons = prepareActionButtons({
    actions,
    defaultActions,
    onEdit,
    onDelete,
    onMoveUp,
    onMoveDown
  });

  return (
    <div className={twMerge("w-full", className)}>
      {/* Tabela desktop - hidden em mobile */}
      <div className="hidden md:block">
        <table className="min-w-full divide-y divide-x divide-gray-200 rounded-lg shadow-lg border border-gray-200">
          <thead className={twMerge("bg-gray-50", headerClassName)}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={twMerge(
                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200",
                    column.headerClassName
                  )}
                >
                  <div className="flex items-center">
                    {column.header}
                    {column.filterComponent && (
                      <div className="ml-2">{column.filterComponent}</div>
                    )}
                  </div>
                </th>
              ))}

              {showActionsColumn && (
                <th
                  className={twMerge(
                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    actionsColumnClassName
                  )}
                >
                  {actionColumnLabel}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-x divide-gray-200">
            {isLoading ? (
              <tr>
                <td
                  colSpan={columns.length + (showActionsColumn ? 1 : 0)}
                  className="px-6 py-4 text-center"
                >
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (showActionsColumn ? 1 : 0)}
                  className="px-6 py-4 text-center"
                >
                  {emptyStateMessage}
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr
                  key={keyExtractor(item)}
                  className={twMerge(
                    "hover:bg-gray-50 transition-colors",
                    onRowClick && "cursor-pointer",
                    rowClassName
                  )}
                  onClick={onRowClick ? () => onRowClick(item, index) : undefined}
                >
                  {columns.map((column) => (
                    <td
                      key={`${keyExtractor(item)}-${column.key}`}
                      className={twMerge("px-6 py-4 border-r border-gray-200", column.className)}
                    >
                      {column.render
                        ? column.render(item, index)
                        : (item as any)[column.key]}
                    </td>
                  ))}

                  {showActionsColumn && (
                    <td className={twMerge("px-6 py-4", actionsColumnClassName)}>
                      <div
                        className={twMerge(
                          "flex flex-col space-y-3 items-center",
                          actionButtonsContainerClassName
                        )}
                      >
                        {/* Criamos um wrapper para os botões de ícones e o botão hide */}
                        <div className="inline-flex flex-col space-y-3">
                          {/* Contêiner de ícones com largura específica */}
                          <div className="flex space-x-2 self-center">
                            {actionButtons.map((action, actionIndex) => (
                              <IconButton
                                icon={action.icon}
                                tertiary tooltip="Menu"
                                key={actionIndex}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  action.onClick(item, index);
                                }}
                              />
                            ))}
                          </div>

                          {defaultActions.hide && onHide && (
                            <Button
                              label={hideButtonLabel || "Ocultar"}
                              tertiary
                              full
                              onClick={(e) => {
                                e.stopPropagation();
                                onHide(item, index);
                              }}
                              className={hideButtonClassName}
                              disabled={false}
                            />
                          )}
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Visualização mobile - hidden em desktop */}
      <div className="block md:hidden">
        {isLoading ? (
          <div className="text-center p-4">
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        ) : data.length === 0 ? (
          <div className="text-center p-4">
            {emptyStateMessage}
          </div>
        ) : (
          data.map((item, index) => renderMobileRow({
            item,
            index,
            keyExtractor,
            columns,
            expandedRowIndex,
            setExpandedRowIndex,
            actionButtons,
            showActionsColumn,
            onHide,
            defaultActions,
            hideButtonLabel
          }))
        )}
      </div>
    </div>
  );
}

export default DataTable;