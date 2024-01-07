
import getNotification from '@/libs/http/cookies/notification';
import Notification from './_components/Notification/Notification';

export default function ServerNotification() {
    const notification = getNotification()
    return (
        <Notification notification={notification} />
    );
}
