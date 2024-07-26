import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { Patient } from "../../../types/patientsType";

interface PatientDialogProps {
  patient: Patient | null;
  open: boolean;
  onClose: () => void;
  onSave: (patient: Patient) => void;
}

const PatientDialogView = ({
  patient,
  open,
  onClose,
  onSave,
}: PatientDialogProps) => {
  const [editablePatient, setEditablePatient] = useState<Patient | null>(
    patient
  );

  useEffect(() => {
    setEditablePatient(patient);
  }, [patient]);

  const handleSave = () => {
    if (editablePatient) {
      onSave(editablePatient);
    }
  };

  if (!editablePatient) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Patient</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Family Name"
          fullWidth
          value={editablePatient.familyName}
          onChange={(e) =>
            setEditablePatient({
              ...editablePatient,
              familyName: e.target.value,
            })
          }
        />
        <TextField
          margin="dense"
          label="Given Name"
          fullWidth
          value={editablePatient.givenName}
          onChange={(e) =>
            setEditablePatient({
              ...editablePatient,
              givenName: e.target.value,
            })
          }
        />
        <TextField
          margin="dense"
          label="Sex"
          fullWidth
          value={editablePatient.sex}
          onChange={(e) =>
            setEditablePatient({ ...editablePatient, sex: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PatientDialogView;
