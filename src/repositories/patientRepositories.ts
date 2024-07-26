import { Patient } from "../types/patientsType";

export const fetchList = async (): Promise<Patient[]> => {
  // add params for pagination
  return fetch("https://mobile.digistat.it/CandidateApi/Patient/GetList", {
    method: "GET",
    headers: {
      Authorization: "Basic dGVzdDpUZXN0TWVQbGVhc2Uh",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error?.data;
    });
};

export const updatePatient = async (data: Patient): Promise<Patient[]> => {
  return fetch("https://mobile.digistat.it/CandidateApi/Patient/Update", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: "Basic dGVzdDpUZXN0TWVQbGVhc2Uh",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error?.data;
    });
};
