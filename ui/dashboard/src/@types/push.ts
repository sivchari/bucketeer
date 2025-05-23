export type Push = {
  id: string;
  tags: string[];
  deleted: boolean;
  disabled: boolean;
  name: string;
  createdAt: string;
  updatedAt: string;
  fcmServiceAccount: string;
  environmentName: string;
  environmentId: string;
};

export interface PushCollection {
  pushes: Array<Push>;
  cursor: string;
  totalCount: string;
}
