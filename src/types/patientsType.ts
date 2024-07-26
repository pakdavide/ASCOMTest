export type Parameter = {
  id: number;
  name: string;
  value: string;
  alarm: boolean;
};

export type Patient = {
  id: number;
  familyName: string;
  givenName: string;
  birthDate: Date;
  sex: string;
  parameters: Parameter[];
};
