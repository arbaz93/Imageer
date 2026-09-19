import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  notifications: [],

  // Notifications template...
  // timestamp is added automatically
  // setNotifications({ message: `some message`, type: 'error || success' });
  setNotifications: (newNotification) => {
    const n = {...newNotification, timestamp: Date.now()}
    set((state) => ({
      notifications: [...state.notifications, n]
    }));

    // Schedule removal of this notification after 5 seconds
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter(
          (notif) => notif.timestamp !== n.timestamp
        )
      }));
    }, 5000); // 5 seconds
  },
}));

const getPreferredColorScheme = () => {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem('imageerColorScheme');
  if (stored === 'light' || stored === 'dark') return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useColorSchemeStore = create((set) => ({
  colorScheme: getPreferredColorScheme(),

  setColorScheme: (newColor) => {
    if(newColor) {
      set({colorScheme: newColor})
      return;
    }
    set(state => ({ colorScheme: (state.colorScheme === 'dark' ? 'light' : 'dark') }))
  }
}))


export const useFilesStatusStore = create((set) => ({
  filesStatus: {},

  setFilesStatus: (newStatus) => {
    set(state => {
      const status = typeof newStatus === 'function'
        ? newStatus(state.filesStatus)
        : newStatus;

      return {
        filesStatus: { ...state.filesStatus, ...status }
      };
    });
  }
}));
