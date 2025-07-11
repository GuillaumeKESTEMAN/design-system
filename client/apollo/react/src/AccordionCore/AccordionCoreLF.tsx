import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreLF.scss";
import {
  AccordionCoreCommon,
  type AccordionCoreProps,
} from "./AccordionCoreCommon";
import { Icon } from "../Icon/IconLF";

export const AccordionCore = (props: AccordionCoreProps) => (
  <AccordionCoreCommon IconComponent={Icon} {...props} />
);
