import React from 'react';

/**
 * Компонент внешней (фоновой) части базового окна страницы.
 *
 * Props:
 * - className (string): Имя класса для стилей.
 * - header (component): Компонент с заголовком окна.
 * - buttonLayer (component): Компонент с управляющими кнопками внутри окна.
 * - innerWindow (component): Компонент внутренней части окна.
 */
export const OuterWindow = ({className, header, buttonLayer, innerWindow}) => {
    return (
        <div className={className}>
            {header && <div className="header-part">{header}</div>}
            {buttonLayer && <div className="button-layer-part">{buttonLayer}</div>}
            {innerWindow && <div className="inner-window-part">{innerWindow}</div>}
        </div>
    )
}
