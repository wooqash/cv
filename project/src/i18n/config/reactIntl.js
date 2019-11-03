import { addLocaleData } from "react-intl";
import plData from "react-intl/locale-data/pl";
import enData from "react-intl/locale-data/en";

addLocaleData([...plData, ...enData]);
