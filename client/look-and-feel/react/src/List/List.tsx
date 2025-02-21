import React, {
  Children,
  ReactElement,
  isValidElement,
  useMemo,
  type ComponentProps,
} from "react";
import { Card } from "..";

import "@axa-fr/design-system-look-and-feel-css/dist/List/List.scss";

const defaultClassName = "af-list";

type TList = ComponentProps<typeof Card>;

export const List = ({ children, classModifier, ...cardProps }: TList) => {
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        Children.map(children, (child) => isValidElement(child) && child) ?? []
      ).filter(Boolean),
    [children],
  );

  return (
    <Card classModifier={`list ${classModifier}`} {...cardProps}>
      <ul className={defaultClassName}>
        {Children.map(validChildren, (child) => (
          <React.Fragment key={child.key}>
            <li className={`${defaultClassName}__item`}>{child}</li>
          </React.Fragment>
        ))}
      </ul>
    </Card>
  );
};
