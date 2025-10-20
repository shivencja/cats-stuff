"use client";

import { useI18n } from "@/hooks/i18n";
import { useUsers } from "@/queries/offers/hooks";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material";
import { UserDTO } from "@/types/users";
import { Loader } from "@/components/Loader/Loader";

export default function UsersManagementView() {
  const { t } = useI18n();

  const { data: users, isLoading, error } = useUsers();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      {users && users.length > 0 ? (
        <List>
          {users.map((user: UserDTO) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.email} secondary={user.role} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">{t("empty")}</Typography>
      )}
    </Box>
  );
}
