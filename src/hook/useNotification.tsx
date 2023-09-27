import Button from "antd/es/button"
import notification from "antd/es/notification"
import Space from "antd/es/space"

export enum NotificationType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}
export const useNotification = (type: NotificationType) => {
  const [api, contextHolder] = notification.useNotification()

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    })
  }
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon(type)}>Success</Button>
        <Button onClick={() => openNotificationWithIcon(type)}>Info</Button>
        <Button onClick={() => openNotificationWithIcon(type)}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon(type)}>Error</Button>
      </Space>
    </>
  )
}
