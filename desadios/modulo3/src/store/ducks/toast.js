import { toast } from 'react-toastify';

/**
 * Actions Types
 */
export const Types = {
  SUCCESS: 'toastify/SUCCESS',
  WARN: 'toastify/WARN',
  ERROR: 'toastify/ERROR',
};

/**
 * Actions Creators
 */
export const Creators = {
  success: (message) => {
    toast.success(message);

    return {
      type: Types.SUCCESS,
    };
  },

  warn: (message) => {
    toast.warn(message);

    return {
      type: Types.WARN,
    };
  },

  error: (message) => {
    toast.error(message);

    return {
      type: Types.ERROR,
    };
  },
};
