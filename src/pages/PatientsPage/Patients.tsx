import { useEffect, useState } from "react";
import * as S from "./Patients.styles";
import { MainLayout } from "../../layout/MainLayout";
import {
  fetchList,
  updatePatient,
} from "../../repositories/patientRepositories";
import { Patient } from "../../types/patientsType";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import PatientDialogView from "./components/ParientDialogView";

const columns: GridColDef[] = [
  { field: "familyName", headerName: "Family Name", width: 150 },
  { field: "givenName", headerName: "Given Name", width: 150 },
  { field: "sex", headerName: "Sex", width: 110 },
  {
    field: "alarmCount",
    headerName: "Number of Alarms",
    width: 250,
    valueGetter: (value, row) => {
      console.log(value, row);
      const patient = row as Patient;
      const alarmCount = patient.parameters.filter(
        (param) => param.alarm
      ).length;
      return alarmCount + " alarms";
    },
  },
];

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchList()
      .then((data) => {
        setPatients(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e); //manage the error
        setLoading(false);
      });
  }, []);

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    setSelectedPatient(params.row as Patient);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedPatient(null);
  };

  const handleSave = (patient: Patient) => {
    updatePatient(patient)
      .then(() => {
        setPatients((prevPatients) =>
          prevPatients.map((p) => (p.id === patient.id ? patient : p))
        );
        setIsDialogOpen(false);
      })
      .catch((e) => {
        console.log(e); //manage the error
        setIsDialogOpen(false);
      });
  };

  return (
    <MainLayout>
      <S.ListContainer>
        {loading ? (
          "LOADING"
        ) : (
          <>
            <DataGrid
              rows={patients}
              columns={columns}
              pageSizeOptions={[5, 10, 20]}
              onRowClick={handleRowClick}
              disableRowSelectionOnClick
            />

            <PatientDialogView
              patient={selectedPatient}
              open={isDialogOpen}
              onClose={handleDialogClose}
              onSave={handleSave}
            />
          </>
        )}
      </S.ListContainer>
    </MainLayout>
  );
};

export default Patients;
