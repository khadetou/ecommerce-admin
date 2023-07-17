import { FC, PropsWithChildren, ReactNode } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
