import { create } from 'zustand';

export const useNotificationStore = create((set, get) => ({
  notifications: [],

  setNotifications: (newNotification) => {
    const n = {...newNotification, timestamp: Date.now()}
    console.log(n.timestamp)
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
