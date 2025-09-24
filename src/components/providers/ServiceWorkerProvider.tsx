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
        onSuccess: (reg) => {
          console.log('SW registered: ', reg);
          setRegistration(reg);
        },
        onUpdate: (reg) => {
          console.log('SW updated: ', reg);
          setRegistration(reg);
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