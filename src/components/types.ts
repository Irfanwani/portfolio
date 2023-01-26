import { ReactElement } from "react";

export type ExpSingleProps = {
  title: string;
  date: string;
  children: ReactElement;
  href: string;
};

export type cardProps = {
  children: ReactElement;
  className?: string;
};
