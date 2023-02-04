import { SendNotification } from '@app/useCases/send-notification';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { Notification } from '@app/entities/notification';
import { NotificationProvider } from '@app/ports/notification-provider';

const mockNotificationProvider: NotificationProvider = {
  sendNotification: jest.fn(),
};
describe('SendNotification', () => {
  it('should ble able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    const sendNotification = new SendNotification(
      notificationRepository,
      mockNotificationProvider,
    );

    const { notification } = await sendNotification.execute({
      content: 'Novo cap lançado',
      recipient_id: 'some_id',
    });

    expect(notification).toBeInstanceOf(Notification);
    expect(notification).toHaveProperty('id');
    expect(notification).toHaveProperty('recipient_id');
    expect(notification.content).toBe('Novo cap lançado');

    expect(notification.read_at).toBeUndefined();
  });
});
