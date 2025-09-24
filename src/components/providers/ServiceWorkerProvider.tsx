'use client';

import { useEffect, useState } from 'react';
import { registerSW } from '@/lib/sw-registration';
import UpdateNotification from '@/components/ui/UpdateNotification';

export default function ServiceWorkerProvider({ children }: { children: React.ReactNode }) {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | undefined>();
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);

  useEffect(() => {
    // Only register service worker in production
    if (process.env.NODE_ENV === 'production') {
      registerSW({
        onSuccess: () => {
          console.log('SW registered: ', registration);
          setRegistration(() => registration);
        },
        onUpdate: (registration) => {
          console.log('SW updated: ', registration);
          setRegistration(registration);
          setShowUpdateNotification(true);
        },
        onError: (error) => {
          console.error('SW registration failed: ', error);
        },
      });
    }
  }, []);

  return (
    <>
      {children}
      {showUpdateNotification && registration && (
        <UpdateNotification registration={registration} />
      )}
    </>
  );
}