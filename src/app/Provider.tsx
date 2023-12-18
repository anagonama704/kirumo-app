"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RecoilRoot } from "recoil";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <MantineProvider>
        <Notifications />
        {children}
      </MantineProvider>
    </RecoilRoot>
  );
};
export default Provider;
