import { IPatient } from "./Patient";

export interface IAppointment {
    id: number,
    date: Date,
    patient: IPatient
}