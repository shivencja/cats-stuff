"use client";

import React from "react";
import { useSnackbar, VariantType } from "notistack";
import { ApiError, ApiErrorKey } from "@/types/errors";
import { useI18n } from "./i18n";

/**
 * Hook for global notification handling using notistack
 */
function useNotification() {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useI18n();

  const showNotification = React.useCallback(
    (message: string, variant: VariantType) => {
      enqueueSnackbar(message, {
        variant,
        preventDuplicate: true,
      });
    },
    [enqueueSnackbar]
  );

  const showSuccess = React.useCallback(
    (message = "") => {
      showNotification(message, "success");
    },
    [showNotification]
  );

  const showInfo = React.useCallback(
    (message = "") => {
      showNotification(message, "info");
    },
    [showNotification]
  );

  const showWarning = React.useCallback(
    (message = "") => {
      showNotification(message, "warning");
    },
    [showNotification]
  );

  const showError = React.useCallback(
    (message = "") => {
      showNotification(message, "error");
    },
    [showNotification]
  );

  /**
   * Error handler for API errors in the standard format
   * @param error Error from the API
   */
  const showApiError = React.useCallback(
    (error: ApiError) => {
      if (error.errors && error.errors.length > 0) {
        error.errors.forEach((err) => {
          showError(
            err.key
              ? t(`errors.apiErrors.${err.key}`)
              : err.message ||
                  t(`errors.apiErrors.${ApiErrorKey.UNKNOWN_API_ERROR}`)
          );
        });
      } else {
        showError(t(`errors.apiErrors.${ApiErrorKey.INTERNAL_SERVER_ERROR}`));
      }
    },
    [showError, t]
  );

  return {
    showSuccess,
    showInfo,
    showWarning,
    showError,
    showApiError,
  };
}

export default useNotification;
