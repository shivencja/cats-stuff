import { Box, Button, Container } from "@mui/material";
import { Category } from "./Categories";
import { useI18n } from "@/hooks/i18n";
import theme from "@/styles/theme";
import { layout } from "@/styles/mixins";
export { Category } from "@/types/categories";

const styles = {
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    pl: { xs: 0, md: 2 },
    pr: { xs: 0, md: 2 },
  },
  buttons: {
    ...layout,
    overflowX: "auto",
    gap: 2,
    ml: { xs: 0, md: 2 },
  },
  button: { flexShrink: 0 },
};

export default function Categories() {
  const { t } = useI18n();
  const categories = Object.values(Category).map((category) => {
    return { key: category, label: t(`enums.category.${category}`) };
  });
  return (
    <Box sx={styles.root}>
      <Container>
        <Box sx={styles.buttons}>
          {categories.map((category) => (
            <Button key={category.key} sx={styles.button}>
              {category.label}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
