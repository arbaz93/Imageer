import React from 'react'
// zustand
import { useNotificationStore } from '../zustand/store';
import Notification from './Notification';

export default function NotificationPanel({ colorScheme }) {
    const notifications = useNotificationStore(state => state.notifications);

    return (
        <div className='max-w-64 absolute bottom-4 right-4'>
            <div className='flex flex-col gap-2 '>
                {notifications.map((n, i) => <Notification  notification={n} key={i} colorScheme={colorScheme} i={i}/>)}
            </div>
        </div>
    )
}
