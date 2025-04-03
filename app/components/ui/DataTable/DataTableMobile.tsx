import React from "react";
import IconButton from "../IconButtonProps";
import Button from "../Button";
import { MobileRowProps } from "./DataTableTypes";

export function renderMobileRow<T>({
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
}: MobileRowProps<T>) {
    const isExpanded = expandedRowIndex === index;

    return (
        <div
            key={keyExtractor(item)}
            className="bg-white border-b border-gray-200 p-4"
        >
            <div className="flex justify-between items-center">
                <div className="font-bold text-sm">
                    {columns.length > 0 && (
                        columns[0].render
                            ? columns[0].render(item, index)
                            : String((item as any)[columns[0].key])
                    )}
                </div>
                <button
                    onClick={() => setExpandedRowIndex(isExpanded ? null : index)}
                    className="text-blue-500 text-sm"
                >
                    {isExpanded ? 'Fechar' : 'Detalhes'}
                </button>
            </div>

            {isExpanded && (
                <div className="mt-3 flex flex-col gap-y-2">
                    {columns.slice(1).map((column) => (
                        <div key={column.key} className="flex flex-col text-sm">
                            <span className="font-medium text-gray-700">
                                {typeof column.header === 'string'
                                    ? column.header
                                    : 'Coluna'}:
                            </span>
                            <span className="text-gray-600">
                                {column.render
                                    ? column.render(item, index)
                                    : String((item as any)[column.key] ?? '')}
                            </span>
                        </div>
                    ))}

                    {showActionsColumn && (
                        <div className="mt-2">
                            <div className="flex flex-wrap gap-2">
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
                                    className={"my-2"}
                                    disabled={false}
                                />
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}