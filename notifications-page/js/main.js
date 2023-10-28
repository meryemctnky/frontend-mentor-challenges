document.addEventListener('DOMContentLoaded', () => {
  const notificationItems = document.querySelectorAll('.notification-item');
  const allReadBtn = document.getElementById('allReadBtn');
  const countBtn = document.getElementById('countBtn');

  notificationItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('unread')) {
        item.classList.remove('unread');
        updateUnreadCount();
      }
    });
  });

  allReadBtn.addEventListener('click', () => {
    notificationItems.forEach((item) => {
      if (item.classList.contains('unread')) {
        item.classList.remove('unread');
      }
    });
    updateUnreadCount(true);
  });

  const updateUnreadCount = (allRead = false) => {
    let unreadCount = 0;
    const notificationItems = document.querySelectorAll('.notification-item');
    const countBtn = document.getElementById('countBtn');

    notificationItems.forEach((item) => {
      if (item.classList.contains('unread')) {
        unreadCount++;
        if (allRead) {
          item.classList.remove('unread');
        }
      }
    });

    countBtn.textContent = allRead ? '0' : unreadCount.toString();
  };
});
