import { useRouter as useNextRouter } from "next/navigation";
import NProgress from "nprogress";
import { useEffect, useRef } from "react";

// useRouter 훅
export function useRouter() {
  const router = useNextRouter();
  const originalPushRef = useRef(router.push);

  useEffect(() => {
    const originalPush = originalPushRef.current;

    router.push = (href, options) => {
      NProgress.start();
      originalPush(href, options);
    };

    // 클린업 함수로 원래의 push를 복원
    return () => {
      router.push = originalPush;
    };
  }, [router]);

  return router;
}
