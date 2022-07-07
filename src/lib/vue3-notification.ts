import { notify } from '@kyvg/vue3-notification';

export function sendNotification(
  title: string,
  text: string,
  type: string,
) {
  notify({
    title,
    text,
    type,
  });
}

export function sendNotificationByObject(
  obj: {
    title : string,
    text : string,
    type : string
  },
) {
  const { title, text, type } = obj;
  notify({
    title,
    text,
    type,
  });
}
