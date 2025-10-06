import { I18n } from "i18n-js";

import en from "./en.json";
import pl from "./pl.json";

const i18n = new I18n({
  en,
  pl,
});

i18n.enableFallback = true;
i18n.defaultLocale = "en";

export default i18n;
