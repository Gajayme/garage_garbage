import React from 'react';

/**
 * Компонент внешней (фоновой) части базового окна страницы.
 *
 * Props:
 * - className (string): Имя класса для стилей.
 * - children (react component): Компоненты, которые будут отображены во внутренней части окна.
 */
export const OuterWindow = ({className, children}) => {
    const [header, buttonLayer, innerWindow ] = React.Children.toArray(children);
    return (
        <div className={className}>
            <div className="header-part">{header}</div>
            <div className="button-layer-part">{buttonLayer}</div>
            <div className="inner-window-part">{innerWindow}</div>
        </div>
    )
}
