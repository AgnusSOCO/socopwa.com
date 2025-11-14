import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Notification {
  id: number;
  message: string;
  time: string;
}

const SocialProofNotifications: React.FC = () => {
  const { t, lang } = useLanguage();
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const notifications: Notification[] = [
    {
      id: 1,
      message: t('socialProof.notification1'),
      time: t('socialProof.justNow'),
    },
    {
      id: 2,
      message: t('socialProof.notification2'),
      time: t('socialProof.fiveMinutesAgo'),
    },
    {
      id: 3,
      message: t('socialProof.notification3'),
      time: t('socialProof.tenMinutesAgo'),
    },
    {
      id: 4,
      message: t('socialProof.notification4'),
      time: t('socialProof.thirtyMinutesAgo'),
    },
    {
      id: 5,
      message: t('socialProof.notification5'),
      time: t('socialProof.oneHourAgo'),
    },
  ];

  useEffect(() => {
    let notificationIndex = 0;
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    const showNextNotification = () => {
      setCurrentNotification(notifications[notificationIndex]);
      setIsVisible(true);

      hideTimer = setTimeout(() => {
        setIsVisible(false);

        showTimer = setTimeout(() => {
          notificationIndex = (notificationIndex + 1) % notifications.length;
          showNextNotification();
        }, 2000);
      }, 5000);
    };

    const initialTimer = setTimeout(() => {
      showNextNotification();
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [lang, notifications]); // Re-run when language changes

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !currentNotification) return null;

  return (
    <div className="fixed bottom-24 left-4 z-40 animate-slide-in-left">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-lg shadow-2xl p-4 max-w-sm backdrop-blur-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle size={20} className="text-green-400" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">{currentNotification.message}</p>
            <p className="text-gray-400 text-xs mt-1">{currentNotification.time}</p>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotifications;
