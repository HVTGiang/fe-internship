import { useTranslation } from "react-i18next";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import i18n from "../../i18n";

const LanguageBox = () => {
  const { t } = useTranslation();
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">
        {/* {t("header.language.title")} */}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={i18n.language}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
        // label={t("header.language.title")}
      >
        <MenuItem value={"vi"}>{t("header.language.vi")}</MenuItem>
        <MenuItem value={"en"}>{t("header.language.en")}</MenuItem>
      </Select>
    </FormControl>
  );
};
export default LanguageBox;
